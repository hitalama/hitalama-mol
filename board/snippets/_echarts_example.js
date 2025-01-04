const echarts = $mol_import.script( 'https://fastly.jsdelivr.net/npm/echarts@5/dist/echarts.min.js' ).echarts

const dom = document.createElement( 'div' )
dom.style.width = '100%'
dom.style.pointerEvents = 'none'

const chart = echarts.init( dom, null, {
	renderer: 'canvas',
	useDirtyRect: false
} )

const option = {
	xAxis: {
		type: 'category',
		data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
	},
	yAxis: {
		type: 'value'
	},
	series: [
		{
			data: [ 150, 230, 224, 218, 135, 147, 260 ],
			type: 'line'
		}
	]
}

chart.setOption( option )

new ResizeObserver( chart.resize ).observe(dom)

return dom
