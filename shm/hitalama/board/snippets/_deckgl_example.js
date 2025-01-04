const {Deck, GeoJsonLayer, ArcLayer} = board.$.$mol_import.script('https://unpkg.com/deck.gl@9.0.38/dist.min.js').deck

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
	'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'
const AIR_PORTS =
	'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson'

const INITIAL_VIEW_STATE = {
	latitude: 51.47,
	longitude: 0.45,
	zoom: 4,
	bearing: 0,
	pitch: 30
}

const canvas = document.createElement('canvas')
new Deck( {
	canvas,
	initialViewState: INITIAL_VIEW_STATE,
	controller: true,
	layers: [
		new GeoJsonLayer( {
			id: 'base-map',
			data: COUNTRIES,
			// Styles
			stroked: true,
			filled: true,
			lineWidthMinPixels: 2,
			opacity: 0.4,
			getLineColor: [ 60, 60, 60 ],
			getFillColor: [ 200, 200, 200 ]
		} ),
		new GeoJsonLayer( {
			id: 'airports',
			data: AIR_PORTS,
			// Styles
			filled: true,
			pointRadiusMinPixels: 2,
			pointRadiusScale: 2000,
			getPointRadius: (f) => 11 - f.properties.scalerank,
			getFillColor: [ 200, 0, 80, 180 ],
			// Interactive props
			pickable: true,
			autoHighlight: true,
			onClick: (info) =>
				info.object && alert( `${ info.object.properties.name } (${ info.object.properties.abbrev })` )
		} ),
		new ArcLayer( {
			id: 'arcs',
			data: AIR_PORTS,
			dataTransform: (d) => d.features.filter( (f) => f.properties.scalerank < 4 ),
			// Styles
			getSourcePosition: (f) => [ -0.4531566, 51.4709959 ], // London
			getTargetPosition: (f) => f.geometry.coordinates,
			getSourceColor: [ 0, 128, 200 ],
			getTargetColor: [ 200, 0, 80 ],
			getWidth: 1
		} )
	]
} )


const wrapper = document.createElement('div')
wrapper.style.margin = '1.5rem'
wrapper.style.flexGrow = 1
wrapper.style.position = 'relative'
wrapper.style.boxShadow = '0 0 0 1.5rem var(--mol_theme_card)'
wrapper.appendChild( canvas )
return wrapper
