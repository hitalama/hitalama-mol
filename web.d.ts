declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        [x: symbol]: () => any[];
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        [x: symbol]: string | (() => any[]);
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
        step(): Promise<null>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "current" | "focus" | "back" | "hover" | "card" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "block" | "blur" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        [x: symbol]: () => any[];
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly ($mol_view | Node | string | number | boolean)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: null | string): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		field( ): ({ 
			'tabIndex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_layer: Record<"focus" | "float" | "hover" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_view__title_mol_book2_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): ReturnType< $mol_book2['pages'] >
		minimal_width( ): number
		Placeholder( ): $mol_view
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_pop_bubble__align_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array<ArrayBufferLike>;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        abstract drop(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
        open(...modes: readonly ('create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append')[]): number;
        toJSON(): string;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "unknown" | "success" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array<ArrayBufferLike>> | null;
        text(): string;
        json(): unknown;
        blob(): Blob;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array<ArrayBufferLike>> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array<ArrayBuffer>;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        drop(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_speck | $mol_view_content)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_13 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_15 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins_16 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_18 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($.$mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($.$mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type _mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_search__query_mol_book2_catalog_1 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__needle_mol_book2_catalog_2 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_book2_catalog_3 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_link__arg_mol_book2_catalog_4 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub_mol_book2_catalog_5 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__Empty_mol_book2_catalog_6 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_links_empty'] >
		,
		ReturnType< $mol_list['Empty'] >
	>
	type $mol_list__rows_mol_book2_catalog_7 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_links'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title_mol_book2_catalog_8 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_title'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Logo_mol_book2_catalog_9 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['Menu_logo'] >
		,
		ReturnType< $mol_page['Logo'] >
	>
	type $mol_page__tools_mol_book2_catalog_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__head_mol_book2_catalog_11 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_head'] >
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body_mol_book2_catalog_12 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__foot_mol_book2_catalog_13 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['menu_foot'] >
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_link__arg_mol_book2_catalog_14 = $mol_type_enforce<
		ReturnType< $mol_book2_catalog['spread_close_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_book2_catalog_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_book2_catalog_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_book2_catalog extends $mol_book2 {
		Menu_title( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Title'] >
		menu_title( ): string
		Menu_tools( ): ReturnType< ReturnType< $mol_book2_catalog['Menu'] >['Tools'] >
		Menu_logo( ): any
		menu_head( ): readonly(any)[]
		menu_filter( next?: string ): string
		Menu_filter( ): $mol_search
		Menu_links_empty( ): $mol_view
		arg( id: any): Record<string, any>
		menu_link_arg( id: any): ReturnType< $mol_book2_catalog['arg'] >
		spread_title( id: any): string
		Menu_link_title( id: any): $mol_dimmer
		menu_link_content( id: any): readonly(any)[]
		Menu_link( id: any): $mol_link
		menu_links( ): readonly(any)[]
		Menu_links( ): $mol_list
		menu_body( ): readonly(any)[]
		menu_foot( ): readonly(any)[]
		Menu( ): $mol_page
		spread_close_arg( ): Record<string, any>
		Spread_close_icon( ): $mol_icon_close
		param( ): string
		spread( next?: string ): string
		spreads( ): Record<string, any>
		Spread( id: any): $mol_view
		Spread_default( ): any
		spread_ids( ): readonly(string)[]
		menu_filter_enabled( ): boolean
		spread_ids_filtered( ): readonly(string)[]
		menu_tools( ): readonly(any)[]
		addon_tools( ): readonly(any)[]
		pages( ): readonly(any)[]
		Spread_close( ): $mol_link
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2_catalog extends $.$mol_book2_catalog {
        pages(): any[];
        spread_ids(): readonly string[];
        menu_body(): ($.$mol_list | $.$mol_search)[];
        menu_filter_enabled(): boolean;
        menu_links(): $.$mol_link[];
        spread_ids_filtered(): string[];
        Spread(id: string): $mol_view;
        Spread_default(): any;
        spread(next?: string): string;
        arg(spread: string): {
            [x: string]: string | null;
        };
        spread_close_arg(): {
            [x: string]: null;
        };
        spread_title(spread: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		theme( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_11 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($.$mol_search | $mol_button_minor)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_sync extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sync.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync_off extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=off.view.tree.d.ts.map
declare namespace $ {
    class $mol_wire_set<Value> extends Set<Value> {
        pub: $mol_wire_pub;
        has(value: Value): boolean;
        entries(): SetIterator<[Value, Value]>;
        keys(): SetIterator<Value>;
        values(): SetIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): SetIterator<Value>;
        get size(): number;
        add(value: Value): this;
        delete(value: Value): boolean;
        clear(): void;
        item(val: Value, next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_data_tagged_type<Value, Tag extends PropertyKey> = Value & {
        [Key in Tag]: Value;
    };
    type $mol_data_tagged_parser<Input, Output> = {
        Value: Output;
    } & ((val: $mol_data_tagged_type<Input, never>) => Output);
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_web(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_decode_web(base64Str: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array): string;
    function $mol_base64_ae_decode(str: string): Uint8Array<ArrayBufferLike>;
}

declare namespace $ {
    const $hyoo_crus_ref: {
        Value: symbol & {
            $hyoo_crus_ref: symbol;
        };
    } & ((val: (string | symbol) & {}) => symbol & {
        $hyoo_crus_ref: symbol;
    });
    type $hyoo_crus_ref = typeof $hyoo_crus_ref.Value;
    function $hyoo_crus_ref_lord(ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_land(ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_peer(ref: $hyoo_crus_ref): string;
    function $hyoo_crus_ref_area(ref: $hyoo_crus_ref): string;
    function $hyoo_crus_ref_head(ref: $hyoo_crus_ref): string;
    function $hyoo_crus_ref_encode(ref: $hyoo_crus_ref): Uint8Array<ArrayBufferLike>;
    function $hyoo_crus_ref_decode(bin: Uint8Array): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_relate(base: $hyoo_crus_ref, ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
    function $hyoo_crus_ref_resolve(base: $hyoo_crus_ref, ref: $hyoo_crus_ref): symbol & {
        $hyoo_crus_ref: symbol;
    };
}

declare namespace $ {
    enum $mol_rest_code {
        Continue = 100,
        Switching_Protocols = 101,
        Processing = 102,
        OK = 200,
        Created = 201,
        Accepted = 202,
        Non_Authoritative_Information = 203,
        No_Content = 204,
        Reset_Content = 205,
        Partial_Content = 206,
        Multi_Status = 207,
        Already_Reported = 208,
        IM_Used = 226,
        Multiple_Choices = 300,
        Moved_Permanently = 301,
        Found = 302,
        See_Other = 303,
        Not_Modified = 304,
        Use_Proxy = 305,
        Temporary_Redirect = 307,
        Bad_Request = 400,
        Unauthorized = 401,
        Payment_Required = 402,
        Forbidden = 403,
        Not_Found = 404,
        Method_Not_Allowed = 405,
        Not_Acceptable = 406,
        Proxy_Authentication_Required = 407,
        Request_Timeout = 408,
        Conflict = 409,
        Gone = 410,
        Length_Required = 411,
        Precondition_Failed = 412,
        Request_Entity_Too_Large = 413,
        Request_URI_Too_Long = 414,
        Unsupported_Media_Type = 415,
        Requested_Range_Not_Satisfiable = 416,
        Expectation_Failed = 417,
        Teapot = 418,
        Unprocessable_Entity = 422,
        Locked = 423,
        Failed_Dependency = 424,
        Upgrade_Required = 426,
        Precondition_Required = 428,
        Too_Many_Requests = 429,
        Request_Header_Fields_Too_Large = 431,
        Unavailable_For_Legal_Reasons = 451,
        Internal_Server_Error = 500,
        Not_Implemented = 501,
        Bad_Gateway = 502,
        Service_Unavailable = 503,
        Gateway_Timeout = 504,
        HTTP_Version_Not_Supported = 505,
        Insufficient_Storage = 507,
        Loop_Detected = 508,
        Not_Extended = 510,
        Network_Authentication_Required = 511,
        Network_Read_Timeout_Error = 598,
        Network_Connect_Timeout_Error = 599
    }
}

declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    type $mol_rest_port_mime_hi = 'text' | 'application' | 'font' | 'audio' | 'video' | 'image' | 'model';
    type $mol_rest_port_mime = `${$mol_rest_port_mime_hi}/${string}`;
    class $mol_rest_port extends $mol_object {
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_data(data: null | string | Uint8Array | Element | object): void;
        send_nil(): void;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
        send_json(data: object): void;
        send_dom(data: Element): void;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
}

declare namespace $ {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket: WebSocket;
        send_nil(): void;
        send_bin(data: Uint8Array): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        [x: symbol]: (() => any[]) | ((mode: "default" | "number" | "string") => string | number);
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    function $hyoo_crus_time_moment(time: number): $mol_time_moment;
    function $hyoo_crus_time_tick(time: number): number;
    function $hyoo_crus_time_dump(time: number): string;
    function $hyoo_crus_time_now(): number;
    function $hyoo_crus_time_freeze(task: () => void): void;
}

declare namespace $ {
    type $hyoo_crus_face_data = Iterable<readonly [peer: string, time: number]>;
    class $hyoo_crus_face_map extends Map<string, number> {
        [x: symbol]: () => any[];
        last_time: number;
        total: number;
        constructor(entries?: $hyoo_crus_face_data);
        sync(right: $hyoo_crus_face_data): void;
        time_max(peer: string, time: number): void;
        tick(): number;
        last_moment(): $mol_time_moment;
    }
}

declare namespace $ {
    enum $hyoo_crus_part {
        land = 3,
        face = 11,
        pass = 255,
        gift = 247,
        sand = 8,
        rock = 5,
        root = 1,
        buck = 9
    }
}

declare namespace $ {
    class $mol_buffer extends DataView {
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView): InstanceType<This>;
        static toString(): string;
        getUint48(offset: number, LE?: boolean): any;
        setUint48(offset: number, value: number, LE?: boolean): void;
        int8(offset: number, next?: number): any;
        uint8(offset: number, next?: number): any;
        int16(offset: number, next?: number): any;
        uint16(offset: number, next?: number): any;
        int32(offset: number, next?: number): any;
        uint32(offset: number, next?: number): any;
        uint48(offset: number, next?: number): any;
        int64(offset: number, next?: bigint): any;
        uint64(offset: number, next?: bigint): any;
        float32(offset: number, next?: number): any;
        float64(offset: number, next?: number): any;
        asArray(): Uint8Array<any>;
        toString(): string;
    }
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array): string;
    function $mol_base64_url_decode(str: string): Uint8Array<ArrayBufferLike>;
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    class $mol_crypto_key extends $mol_buffer {
        static from<This extends typeof $mol_crypto_key>(this: This, serial: number | string | ArrayBufferView): InstanceType<This>;
        asArray(): Uint8Array<any>;
        toString(): string;
    }
    class $mol_crypto_key_public extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        native(): Promise<CryptoKey>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_key_private extends $mol_crypto_key {
        static size_str: number;
        static size_bin: number;
        static size_sign: number;
        static generate(): Promise<$mol_crypto_key_private>;
        native(): Promise<CryptoKey>;
        public(): $mol_crypto_key_public;
        sign(data: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    class $mol_crypto_secret extends Object {
        readonly native: CryptoKey & {
            type: 'secret';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'secret';
        });
        static generate(): Promise<$mol_crypto_secret>;
        static from(serial: BufferSource): Promise<$mol_crypto_secret>;
        static pass(pass: string, salt: Uint8Array): Promise<$mol_crypto_secret>;
        static derive(private_serial: string, public_serial: string): Promise<$mol_crypto_secret>;
        serial(): Promise<Uint8Array<ArrayBuffer>>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    class $hyoo_crus_auth extends $mol_crypto_key_private {
        static current(next?: $hyoo_crus_auth | null): $hyoo_crus_auth;
        static embryos: string[];
        static grab(): $hyoo_crus_auth;
        static generate(): Promise<$hyoo_crus_auth>;
        lord(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        peer(): string;
        secret_mutual(pub: string): $mol_crypto_secret;
    }
}

declare namespace $ {
    class $mol_wire_dict<Key, Value> extends Map<Key, Value> {
        pub: $mol_wire_pub;
        has(key: Key): boolean;
        get(key: Key): Value | undefined;
        entries(): MapIterator<[Key, Value]>;
        keys(): MapIterator<Key>;
        values(): MapIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): MapIterator<[Key, Value]>;
        get size(): number;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        clear(): void;
        item(key: Key, next?: Value | null): NonNullable<Value> | null;
    }
}

declare namespace $ {
    enum $hyoo_crus_rank {
        nil = 0,
        get = 1,
        reg = 3,
        mod = 7,
        law = 15
    }
    type $hyoo_crus_rank_preset = Record<string, $hyoo_crus_rank>;
    let $hyoo_crus_rank_private: $hyoo_crus_rank_preset;
    let $hyoo_crus_rank_public: $hyoo_crus_rank_preset;
    let $hyoo_crus_rank_lobby: $hyoo_crus_rank_preset;
    let $hyoo_crus_rank_orgy: $hyoo_crus_rank_preset;
}

declare namespace $ {
    class $hyoo_crus_node extends $mol_object {
        [x: symbol]: () => any[];
        static tag: keyof typeof $hyoo_crus_sand_tag;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node extends typeof $hyoo_crus_node>(Node: Node): InstanceType<Node>;
        nodes<Node extends typeof $hyoo_crus_node>(Node: Node | null): readonly InstanceType<Node>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
    }
}

declare namespace $ {
    class $hyoo_crus_fund<Key, Node> extends $mol_object {
        readonly item_make: (head: Key) => Node;
        constructor(item_make: (head: Key) => Node);
        Item(head: Key): Node;
    }
}

declare namespace $ {
    class $mol_graph<Node, Edge> {
        nodes: Set<Node>;
        edges_out: Map<Node, Map<Node, Edge>>;
        edges_in: Map<Node, Map<Node, Edge>>;
        link(from: Node, to: Node, edge: Edge): void;
        unlink(from: Node, to: Node): void;
        link_out(from: Node, to: Node, edge: Edge): void;
        link_in(to: Node, from: Node, edge: Edge): void;
        edge(from: Node, to: Node): NonNullable<Edge> | null;
        edge_out(from: Node, to: Node): NonNullable<Edge> | null;
        edge_in(to: Node, from: Node): NonNullable<Edge> | null;
        acyclic(get_weight: (edge: Edge) => number): void;
        get sorted(): Set<Node>;
        get roots(): Node[];
        nodes_depth(select: (left: number, right: number) => number): Map<Node, number>;
        depth_nodes(select: (left: number, right: number) => number): Node[][];
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type json = null | boolean | number | string | {
        [key in string]: json;
    } | readonly json[];
    export type $hyoo_crus_vary_type = Uint8Array | bigint | $hyoo_crus_ref | BigInt64Array | Float64Array | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | json | Node;
    export let $hyoo_crus_vary_mapping: {
        nil: null;
        bin: Uint8ArrayConstructor;
        bool: BooleanConstructor;
        int: BigIntConstructor;
        real: NumberConstructor;
        ints: BigInt64ArrayConstructor;
        reals: Float64ArrayConstructor;
        ref: SymbolConstructor;
        str: StringConstructor;
        time: typeof $mol_time_moment;
        dur: typeof $mol_time_duration;
        range: typeof $mol_time_interval;
        json: ObjectConstructor;
        jsan: ArrayConstructor;
        dom: {
            new (): Element;
            prototype: Element;
        };
        tree: typeof $mol_tree2;
    };
    export type $hyoo_crus_vary_classes = typeof $hyoo_crus_vary_mapping[keyof typeof $hyoo_crus_vary_mapping];
    export type $hyoo_crus_vary_pack = {
        tip: keyof typeof $hyoo_crus_vary_tip;
        bin: Uint8Array;
    };
    export enum $hyoo_crus_vary_tip {
        nil = 1,
        bin = 2,
        bool = 3,
        int = 4,
        real = 5,
        ints = 6,
        reals = 7,
        ref = 8,
        str = 16,
        time = 17,
        dur = 18,
        range = 19,
        json = 20,
        jsan = 21,
        dom = 22,
        tree = 23
    }
    export function $hyoo_crus_vary_switch<Ways extends {
        nil: (vary: null) => any;
        bin: (vary: Uint8Array) => any;
        bool: (vary: boolean) => any;
        int: (vary: bigint) => any;
        ints: (vary: BigInt64Array) => any;
        real: (vary: number) => any;
        reals: (vary: Float64Array) => any;
        ref: (vary: $hyoo_crus_ref) => any;
        str: (vary: string) => any;
        time: (vary: $mol_time_moment) => any;
        dur: (vary: $mol_time_duration) => any;
        range: (vary: $mol_time_interval) => any;
        json: (vary: {}) => any;
        jsan: (vary: any[]) => any;
        dom: (vary: Element) => any;
        tree: (vary: $mol_tree2) => any;
    }>(vary: $hyoo_crus_vary_type, ways: Ways): $mol_type_result<Ways[keyof Ways]>;
    export function $hyoo_crus_vary_encode(vary: $hyoo_crus_vary_type): $hyoo_crus_vary_pack;
    export function $hyoo_crus_vary_decode({ tip, bin }: $hyoo_crus_vary_pack): $hyoo_crus_vary_type;
    export {};
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: null | Set<string>;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    function $mol_tree2_bin_to_bytes(tree: $mol_tree2): Uint8Array<ArrayBuffer>;
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span?: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_from_dom(dom: Node): $mol_tree2;
}

declare namespace $ {
    function $hyoo_crus_vary_cast_bin(vary: $hyoo_crus_vary_type): Uint8Array | null;
    function $hyoo_crus_vary_cast_bool(vary: $hyoo_crus_vary_type): boolean | null;
    function $hyoo_crus_vary_cast_int(vary: $hyoo_crus_vary_type): bigint | null;
    function $hyoo_crus_vary_cast_real(vary: $hyoo_crus_vary_type): number | null;
    function $hyoo_crus_vary_cast_ints(vary: $hyoo_crus_vary_type): BigInt64Array | null;
    function $hyoo_crus_vary_cast_reals(vary: $hyoo_crus_vary_type): Float64Array | null;
    function $hyoo_crus_vary_cast_ref(vary: $hyoo_crus_vary_type): $hyoo_crus_ref | null;
    function $hyoo_crus_vary_cast_str(vary: $hyoo_crus_vary_type): string | null;
    function $hyoo_crus_vary_cast_time(vary: $hyoo_crus_vary_type): $mol_time_moment | null;
    function $hyoo_crus_vary_cast_dur(vary: $hyoo_crus_vary_type): $mol_time_duration | null;
    function $hyoo_crus_vary_cast_range(vary: $hyoo_crus_vary_type): $mol_time_interval | null;
    function $hyoo_crus_vary_cast_json(vary: $hyoo_crus_vary_type): {} | null;
    function $hyoo_crus_vary_cast_jsan(vary: $hyoo_crus_vary_type): any[] | null;
    function $hyoo_crus_vary_cast_dom(vary: $hyoo_crus_vary_type): Element | null;
    function $hyoo_crus_vary_cast_tree(vary: $hyoo_crus_vary_type): $mol_tree2 | null;
    const $hyoo_crus_vary_cast_funcs: {
        readonly nil: () => null;
        readonly bin: typeof $hyoo_crus_vary_cast_bin;
        readonly bool: typeof $hyoo_crus_vary_cast_bool;
        readonly int: typeof $hyoo_crus_vary_cast_int;
        readonly real: typeof $hyoo_crus_vary_cast_real;
        readonly ints: typeof $hyoo_crus_vary_cast_ints;
        readonly reals: typeof $hyoo_crus_vary_cast_reals;
        readonly ref: typeof $hyoo_crus_vary_cast_ref;
        readonly str: typeof $hyoo_crus_vary_cast_str;
        readonly time: typeof $hyoo_crus_vary_cast_time;
        readonly dur: typeof $hyoo_crus_vary_cast_dur;
        readonly range: typeof $hyoo_crus_vary_cast_range;
        readonly json: typeof $hyoo_crus_vary_cast_json;
        readonly jsan: typeof $hyoo_crus_vary_cast_jsan;
        readonly dom: typeof $hyoo_crus_vary_cast_dom;
        readonly tree: typeof $hyoo_crus_vary_cast_tree;
    };
    function $hyoo_crus_vary_cast<Tip extends keyof typeof $hyoo_crus_vary_tip>(tip: Tip, vary: $hyoo_crus_vary_type): {} | null;
}

declare namespace $ {
    function $mol_crypto_hash(data: Uint8Array): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_bus<Data> extends $mol_object {
        readonly name: string;
        readonly handle: (data: Data) => void;
        readonly channel: BroadcastChannel;
        constructor(name: string, handle: (data: Data) => void);
        destructor(): void;
        send(data: Data): void;
    }
}

declare namespace $ {
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    enum $hyoo_crus_land_root {
        data = "",
        tine = "AQAAAAAA"
    }
    class $hyoo_crus_land extends $mol_object {
        [x: symbol]: () => any[];
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        auth(): $hyoo_crus_auth;
        faces: $hyoo_crus_face_map;
        pass: $mol_wire_dict<string, $hyoo_crus_pass>;
        gift: $mol_wire_dict<symbol & {
            $hyoo_crus_ref: symbol;
        }, $hyoo_crus_gift>;
        sand: $mol_wire_dict<string, $mol_wire_dict<string, $mol_wire_dict<string, $hyoo_crus_sand>>>;
        self_all: $mol_wire_set<string>;
        self_make(idea?: number): string;
        home(): $hyoo_crus_node;
        area_make(idea?: number): $hyoo_crus_land;
        Data<Node extends typeof $hyoo_crus_node>(Node: Node): InstanceType<Node>;
        Tine(): $hyoo_crus_list_ref;
        Node<Node extends typeof $hyoo_crus_node>(Node: Node): $hyoo_crus_fund<string, InstanceType<Node>>;
        total(): number;
        joined_list(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        key(): $hyoo_crus_auth | null;
        lord_rank(lord: $hyoo_crus_ref, next?: $hyoo_crus_rank): $hyoo_crus_rank;
        peer_rank(peer: string): $hyoo_crus_rank;
        unit_sort(units: readonly $hyoo_crus_unit[]): $hyoo_crus_unit[];
        delta_unit(face?: $hyoo_crus_face_map): $hyoo_crus_unit[];
        delta_pack(face?: $hyoo_crus_face_map): $hyoo_crus_pack | null;
        delta_parts(face?: $hyoo_crus_face_map): {
            lands: {
                [x: symbol]: {
                    faces: $hyoo_crus_face_map;
                    units: $hyoo_crus_unit[];
                };
            };
            rocks: [Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike> | null][];
        } | null;
        faces_pack(): $hyoo_crus_pack;
        apply_unit(delta: readonly $hyoo_crus_unit[], skip_check?: 'skip_check'): string[];
        units_verify(units: readonly $hyoo_crus_unit[]): Promise<string[]>;
        apply_unit_trust(delta: readonly $hyoo_crus_unit[], skip_check?: 'skip_check'): ("" | "Need reg rank to join" | "Need law rank to change rank" | "Need mod rank to post data")[];
        apply_land(land: $hyoo_crus_land): string[];
        recheck(): void;
        fork(preset?: {
            '': $hyoo_crus_rank;
        }): $hyoo_crus_land;
        sand_ordered({ head, peer }: {
            head: string;
            peer: string | null;
        }): $hyoo_crus_sand[];
        join(): $hyoo_crus_pass;
        give(dest: $hyoo_crus_auth | $hyoo_crus_ref | null, rank: $hyoo_crus_rank): $hyoo_crus_gift;
        post(lead: string, head: string, self: string, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): $hyoo_crus_sand;
        sand_move(sand: $hyoo_crus_sand, head: string, seat: number, peer?: string | null): void;
        sand_wipe(sand: $hyoo_crus_sand, peer?: string | null): void;
        broadcast(): void;
        sync(): this;
        destructor(): void;
        sync_mine(): $mol_wire_atom<unknown, [], void> | undefined;
        sync_yard(): $mol_wire_atom<unknown, [], void> | undefined;
        bus(): $mol_bus<ArrayBuffer[]>;
        loading(): void;
        saving(): void;
        unit_sign(unit: $hyoo_crus_unit): void;
        sand_encode(sand: $hyoo_crus_sand): $hyoo_crus_sand;
        sand_decode(sand: $hyoo_crus_sand): $hyoo_crus_vary_type;
        sand_decode_raw(sand: $hyoo_crus_sand): $hyoo_crus_vary_type;
        key_public(peer: string): $mol_crypto_key_public | null;
        secret_mutual(key_public: string): $mol_crypto_secret;
        encryptable(): boolean;
        encrypted(next?: boolean): boolean;
        secret(): $mol_crypto_secret | null;
        dump(): {
            land: symbol & {
                $hyoo_crus_ref: symbol;
            };
            units: $hyoo_crus_unit[];
            rocks: [Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike>][];
        };
    }
}

declare namespace $ {
    enum $hyoo_crus_unit_kind {
        pass = 255,
        gift = 247,
        sand = 8
    }
    let $hyoo_crus_unit_trusted: WeakSet<$hyoo_crus_unit>;
    class $hyoo_crus_unit extends $mol_buffer {
        static size: 128;
        constructor(buffer?: ArrayBuffer, byteOffset?: number, byteLength?: number);
        kind(): keyof typeof $hyoo_crus_unit_kind;
        choose<Res>(ways: {
            pass: (unit: $hyoo_crus_pass) => Res;
            gift: (unit: $hyoo_crus_gift) => Res;
            sand: (unit: $hyoo_crus_sand) => Res;
        }): Res;
        narrow(): $hyoo_crus_sand | $hyoo_crus_gift | $hyoo_crus_pass;
        key(): string;
        id6(offset: number, next?: string): string;
        id12(offset: number, next?: $hyoo_crus_ref): symbol & {
            $hyoo_crus_ref: symbol;
        };
        _peer: string;
        peer(next?: string): string;
        salt(): Uint8Array<any>;
        sens(next?: ArrayLike<number>): Uint8Array<any>;
        mix(mixin: Uint8Array): void;
        sign(next?: ArrayLike<number>): Uint8Array<any>;
        signed(): boolean;
        _land: null | $hyoo_crus_land;
        dump(): {};
    }
}

declare namespace $ {
    class $hyoo_crus_pass extends $hyoo_crus_unit {
        [x: symbol]: () => any[];
        work(): any;
        _lord: $hyoo_crus_ref;
        lord(next?: $hyoo_crus_ref): symbol & {
            $hyoo_crus_ref: symbol;
        };
        key(): string;
        auth(next?: ArrayLike<number>): Uint8Array<any>;
        dump(): {
            kind: "pass" | "gift" | "sand";
            lord: string;
        };
    }
}

declare namespace $ {
    class $hyoo_crus_gift extends $hyoo_crus_unit {
        [x: symbol]: () => any[];
        rank(next?: $hyoo_crus_rank): $hyoo_crus_rank | undefined;
        time(next?: number): any;
        free(): Uint8Array<any>;
        _dest: $hyoo_crus_ref;
        dest(next?: $hyoo_crus_ref): symbol & {
            $hyoo_crus_ref: symbol;
        };
        key(): string;
        bill(): Uint8Array<any>;
        static compare(left: $hyoo_crus_gift, right: $hyoo_crus_gift): number;
        dump(): {
            kind: "pass" | "gift" | "sand";
            peer: string;
            dest: string;
            rank: any;
            time: string;
        };
    }
}

declare namespace $ {
    enum $hyoo_crus_sand_tag {
        term = 0,
        solo = 1,
        vals = 2,
        keys = 3
    }
    class $hyoo_crus_sand extends $hyoo_crus_unit {
        [x: symbol]: () => any[];
        _vary: undefined | $hyoo_crus_vary_type;
        _open: null | Uint8Array;
        hint(tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        tag(): keyof typeof $hyoo_crus_sand_tag;
        tip(): keyof typeof $hyoo_crus_vary_tip;
        utf(): boolean;
        size(next?: number): any;
        time(next?: number): any;
        _head: string;
        head(next?: string): string;
        _self: string;
        self(next?: string): string;
        key(): string;
        _lead: string;
        lead(next?: string): string;
        hash(next?: Uint8Array, tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): Uint8Array<any>;
        meta(): Uint8Array<any>;
        data(next?: Uint8Array, tip?: keyof typeof $hyoo_crus_vary_tip, tag?: keyof typeof $hyoo_crus_sand_tag): Uint8Array<any>;
        idea(): any;
        static compare(left: $hyoo_crus_sand, right: $hyoo_crus_sand): number;
        dump(): {
            kind: "pass" | "gift" | "sand";
            peer: string;
            lead: string;
            head: string;
            self: string;
            tip: "ref" | "nil" | "bin" | "bool" | "int" | "real" | "ints" | "reals" | "str" | "time" | "dur" | "range" | "json" | "jsan" | "dom" | "tree";
            tag: "keys" | "term" | "solo" | "vals";
            size: any;
            time: string;
        };
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    export class $hyoo_crus_list_vary extends $hyoo_crus_node {
        [x: symbol]: () => any[];
        static tag: keyof typeof $hyoo_crus_sand_tag;
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node extends typeof $hyoo_crus_node>(Node: Node, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node>;
    }
    export function $hyoo_crus_list<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ReturnType<Parse>[]): readonly ReturnType<Parse>[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    const $hyoo_crus_list_bin_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (Uint8Array<ArrayBufferLike> | null)[] | undefined): readonly (Uint8Array<ArrayBufferLike> | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bin;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_bin extends $hyoo_crus_list_bin_base {
    }
    const $hyoo_crus_list_bool_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (boolean | null)[] | undefined): readonly (boolean | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_bool extends $hyoo_crus_list_bool_base {
    }
    const $hyoo_crus_list_int_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (bigint | null)[] | undefined): readonly (bigint | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_int;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_int extends $hyoo_crus_list_int_base {
    }
    const $hyoo_crus_list_real_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (number | null)[] | undefined): readonly (number | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_real;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_real extends $hyoo_crus_list_real_base {
    }
    const $hyoo_crus_list_ints_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (BigInt64Array<ArrayBufferLike> | null)[] | undefined): readonly (BigInt64Array<ArrayBufferLike> | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ints;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_ints extends $hyoo_crus_list_ints_base {
    }
    const $hyoo_crus_list_reals_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (Float64Array<ArrayBufferLike> | null)[] | undefined): readonly (Float64Array<ArrayBufferLike> | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_reals;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_reals extends $hyoo_crus_list_reals_base {
    }
    const $hyoo_crus_list_ref_base_1: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ((symbol & {
            $hyoo_crus_ref: symbol;
        }) | null)[] | undefined): readonly ((symbol & {
            $hyoo_crus_ref: symbol;
        }) | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ref;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_ref extends $hyoo_crus_list_ref_base_1 {
    }
    const $hyoo_crus_list_str_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (string | null)[] | undefined): readonly (string | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_str;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_str extends $hyoo_crus_list_str_base {
    }
    const $hyoo_crus_list_time_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ($mol_time_moment | null)[] | undefined): readonly ($mol_time_moment | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_time;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_time extends $hyoo_crus_list_time_base {
    }
    const $hyoo_crus_list_dur_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ($mol_time_duration | null)[] | undefined): readonly ($mol_time_duration | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dur;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_dur extends $hyoo_crus_list_dur_base {
    }
    const $hyoo_crus_list_range_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ($mol_time_interval | null)[] | undefined): readonly ($mol_time_interval | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_range;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_range extends $hyoo_crus_list_range_base {
    }
    const $hyoo_crus_list_json_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ({} | null)[] | undefined): readonly ({} | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_json;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_json extends $hyoo_crus_list_json_base {
    }
    const $hyoo_crus_list_jsan_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (any[] | null)[] | undefined): readonly (any[] | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_jsan;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_jsan extends $hyoo_crus_list_jsan_base {
    }
    const $hyoo_crus_list_dom_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly (Element | null)[] | undefined): readonly (Element | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dom;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_dom extends $hyoo_crus_list_dom_base {
    }
    const $hyoo_crus_list_tree_base: (abstract new () => {
        [x: symbol]: () => any[];
        items(next?: readonly ($mol_tree2 | null)[] | undefined): readonly ($mol_tree2 | null)[];
        items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
        splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
        has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
        add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
        cut(vary: $hyoo_crus_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_list_tree extends $hyoo_crus_list_tree_base {
    }
    export class $hyoo_crus_list_ref_base extends $hyoo_crus_list_ref {
    }
    export function $hyoo_crus_list_ref_to<const Value extends any, Vals extends readonly any[] = readonly $mol_type_result<$mol_type_result<Value>>[]>(Value: Value): {
        new (): {
            [x: symbol]: () => any[];
            remote_list(next?: Vals): Vals;
            remote_add(item: Vals[number]): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): Vals[number];
            remote_make(config: $hyoo_crus_rank_preset): Vals[number];
            local_make(idea?: number): Vals[number];
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        Value: Value;
        toString(): any;
        parse: typeof $hyoo_crus_vary_cast_ref;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export {};
}

declare namespace $ {
    class $hyoo_crus_dict extends $hyoo_crus_list_vary {
        [x: symbol]: () => any[];
        static tag: keyof typeof $hyoo_crus_sand_tag;
        keys(): readonly $hyoo_crus_vary_type[];
        dive<Node extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node, auto?: any): InstanceType<Node> | null;
        static schema: Record<string, typeof $hyoo_crus_node>;
        static with<This extends typeof $hyoo_crus_dict, const Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $hyoo_crus_node;
            } & Schema;
        };
    }
    function $hyoo_crus_dict_to<Value extends {
        tag: keyof typeof $hyoo_crus_sand_tag;
        new (): {};
    }>(Value: Value): {
        new (): {
            [x: symbol]: () => any[];
            Value: Value;
            key(key: $hyoo_crus_vary_type, auto?: any): InstanceType<Value>;
            keys(): readonly $hyoo_crus_vary_type[];
            dive<Node_1 extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node_1, auto?: any): InstanceType<Node_1> | null;
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        schema: Record<string, typeof $hyoo_crus_node>;
        with<This extends typeof $hyoo_crus_dict, const Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $hyoo_crus_node;
            } & Schema;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
}

declare namespace $ {
    export class $hyoo_crus_atom_vary extends $hyoo_crus_node {
        [x: symbol]: () => any[];
        static tag: keyof typeof $hyoo_crus_sand_tag;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
    }
    export class $hyoo_crus_atom_enum_base extends $hyoo_crus_atom_vary {
        static options: readonly $hyoo_crus_vary_type[];
    }
    export function $hyoo_crus_atom_enum<const Options extends readonly $hyoo_crus_vary_type[]>(options: Options): (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: Options[number]): Options[number] | null;
        val_of(peer: string | null, next?: Options[number]): Options[number] | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: Options;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export function $hyoo_crus_atom<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: ReturnType<Parse>): ReturnType<Parse> | null;
        val_of(peer: string | null, next?: ReturnType<Parse>): ReturnType<Parse> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    const $hyoo_crus_atom_bin_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: Uint8Array<ArrayBufferLike> | null | undefined): Uint8Array<ArrayBufferLike> | null;
        val_of(peer: string | null, next?: Uint8Array<ArrayBufferLike> | null | undefined): Uint8Array<ArrayBufferLike> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bin;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_bin extends $hyoo_crus_atom_bin_base {
    }
    const $hyoo_crus_atom_bool_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: boolean | null | undefined): boolean | null;
        val_of(peer: string | null, next?: boolean | null | undefined): boolean | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_bool extends $hyoo_crus_atom_bool_base {
    }
    const $hyoo_crus_atom_int_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: bigint | null | undefined): bigint | null;
        val_of(peer: string | null, next?: bigint | null | undefined): bigint | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_int;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_int extends $hyoo_crus_atom_int_base {
    }
    const $hyoo_crus_atom_real_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: number | null | undefined): number | null;
        val_of(peer: string | null, next?: number | null | undefined): number | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_real;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_real extends $hyoo_crus_atom_real_base {
    }
    const $hyoo_crus_atom_ints_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: BigInt64Array<ArrayBufferLike> | null | undefined): BigInt64Array<ArrayBufferLike> | null;
        val_of(peer: string | null, next?: BigInt64Array<ArrayBufferLike> | null | undefined): BigInt64Array<ArrayBufferLike> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ints;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_ints extends $hyoo_crus_atom_ints_base {
    }
    const $hyoo_crus_atom_reals_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: Float64Array<ArrayBufferLike> | null | undefined): Float64Array<ArrayBufferLike> | null;
        val_of(peer: string | null, next?: Float64Array<ArrayBufferLike> | null | undefined): Float64Array<ArrayBufferLike> | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_reals;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_reals extends $hyoo_crus_atom_reals_base {
    }
    const $hyoo_crus_atom_ref_base_1: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null | undefined): (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null;
        val_of(peer: string | null, next?: (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null | undefined): (symbol & {
            $hyoo_crus_ref: symbol;
        }) | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_ref;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_ref extends $hyoo_crus_atom_ref_base_1 {
    }
    const $hyoo_crus_atom_str_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: string | null | undefined): string | null;
        val_of(peer: string | null, next?: string | null | undefined): string | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_str;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_str extends $hyoo_crus_atom_str_base {
    }
    const $hyoo_crus_atom_time_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        val_of(peer: string | null, next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_time;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_time extends $hyoo_crus_atom_time_base {
    }
    const $hyoo_crus_atom_dur_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        val_of(peer: string | null, next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dur;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_dur extends $hyoo_crus_atom_dur_base {
    }
    const $hyoo_crus_atom_range_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        val_of(peer: string | null, next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_range;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_range extends $hyoo_crus_atom_range_base {
    }
    const $hyoo_crus_atom_json_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: {} | null | undefined): {} | null;
        val_of(peer: string | null, next?: {} | null | undefined): {} | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_json;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_json extends $hyoo_crus_atom_json_base {
    }
    const $hyoo_crus_atom_jsan_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: any[] | null | undefined): any[] | null;
        val_of(peer: string | null, next?: any[] | null | undefined): any[] | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_jsan;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_jsan extends $hyoo_crus_atom_jsan_base {
    }
    const $hyoo_crus_atom_dom_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: Element | null | undefined): Element | null;
        val_of(peer: string | null, next?: Element | null | undefined): Element | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_dom;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_dom extends $hyoo_crus_atom_dom_base {
    }
    const $hyoo_crus_atom_tree_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        val_of(peer: string | null, next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        parse: typeof $hyoo_crus_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $hyoo_crus_atom_tree extends $hyoo_crus_atom_tree_base {
    }
    export class $hyoo_crus_atom_ref_base extends $hyoo_crus_atom_ref {
        static Value: typeof $hyoo_crus_dict;
    }
    export function $hyoo_crus_atom_ref_to<const Value extends any>(Value: Value): {
        new (): {
            [x: symbol]: () => any[];
            Value: Value;
            remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            remote_of(peer: string | null, next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $mol_type_result<$mol_type_result<Value>> | null;
            local_ensure(): $mol_type_result<$mol_type_result<Value>> | null;
            val(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            val_of(peer: string | null, next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
            vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        toString(): any;
        Value: typeof $hyoo_crus_dict;
        parse: typeof $hyoo_crus_vary_cast_ref;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export {};
}

declare namespace $ {
    const $hyoo_crus_entity_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Title: (auto?: any) => $hyoo_crus_atom_str | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Title: typeof $hyoo_crus_atom_str;
        };
    };
    export class $hyoo_crus_entity extends $hyoo_crus_entity_base {
        title(next?: string): string;
    }
    export {};
}

declare namespace $ {
    const $hyoo_crus_home_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Selection: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Hall: (auto?: any) => {
            [x: symbol]: () => any[];
            Value: Value;
            remote(next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
            remote_of(peer: string | null, next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $hyoo_crus_dict | null;
            local_ensure(): $hyoo_crus_dict | null;
            val(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            val_of(peer: string | null, next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
            vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Selection: typeof $hyoo_crus_atom_str;
            readonly Hall: {
                new (): {
                    [x: symbol]: () => any[];
                    Value: () => typeof $hyoo_crus_dict;
                    remote(next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
                    remote_of(peer: string | null, next?: $hyoo_crus_dict | null | undefined): $hyoo_crus_dict | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_dict | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $hyoo_crus_dict | null;
                    local_ensure(): $hyoo_crus_dict | null;
                    val(next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    val_of(peer: string | null, next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
                    vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                toString(): any;
                Value: typeof $hyoo_crus_dict;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $hyoo_crus_home extends $hyoo_crus_home_base {
        hall_by<Node extends typeof $hyoo_crus_dict>(Node: Node, preset?: $hyoo_crus_rank_preset): InstanceType<Node> | null;
    }
    export {};
}

declare namespace $ {
    class $hyoo_crus_mine extends $mol_object {
        static unit_updates: number;
        static unit_appends: number;
        static rock_writes: number;
        static hash(blob: Uint8Array): Uint8Array<ArrayBuffer>;
        static rock(hash: Uint8Array, next?: Uint8Array): Uint8Array | null;
        static rock_save(blob: Uint8Array): Uint8Array<ArrayBuffer>;
        static units_persisted: WeakSet<$hyoo_crus_unit>;
        static units(land: $hyoo_crus_ref, next?: readonly $hyoo_crus_unit[]): readonly $hyoo_crus_unit[];
        static units_load(land: $hyoo_crus_ref): Promise<readonly $hyoo_crus_unit[]>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): Promise<void>;
    }
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema["Doc"];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $hyoo_crus_mine_idb extends $hyoo_crus_mine {
        static rock(hash: Uint8Array, next?: Uint8Array): Uint8Array | null;
        static rock_read(): $mol_db_store<{
            Key: [hash: Uint8Array];
            Doc: ArrayBuffer;
            Indexes: {};
        }>;
        static rock_change(): Promise<$mol_db_store<{
            Key: [hash: Uint8Array];
            Doc: ArrayBuffer;
            Indexes: {};
        }>>;
        static units_save(land: $hyoo_crus_ref, units: readonly $hyoo_crus_unit[]): Promise<void>;
        static units_load(land: $hyoo_crus_ref): Promise<($hyoo_crus_sand | $hyoo_crus_gift | $hyoo_crus_pass)[]>;
        static db(): Promise<$mol_db_database<{
            Rock: {
                Key: [hash: Uint8Array];
                Doc: ArrayBuffer;
                Indexes: {};
            };
            Land: {
                Key: [land: string, path: string];
                Doc: ArrayBuffer;
                Indexes: {};
            };
        }>>;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $hyoo_crus_pack_parts = {
        lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>;
        rocks: [Uint8Array, null | Uint8Array][];
    };
    class $hyoo_crus_pack extends $mol_buffer {
        toBlob(): Blob;
        parts(land?: $hyoo_crus_ref | null): {
            lands: Record<symbol & {
                $hyoo_crus_ref: symbol;
            }, {
                faces: $hyoo_crus_face_map;
                units: $hyoo_crus_unit[];
            }>;
            rocks: [Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike> | null][];
        };
        static make({ lands, rocks }: $hyoo_crus_pack_parts): $hyoo_crus_pack;
    }
}

declare namespace $ {
    class $hyoo_crus_yard extends $mol_object {
        glob(): $hyoo_crus_glob;
        lands_news: $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        static masters: string[];
        master_cursor(next?: number): number;
        master_current(): string;
        master_next(): void;
        reconnects(reset?: null): number;
        master(): $mol_rest_port | null;
        slaves: $mol_wire_set<$mol_rest_port>;
        sync(): void;
        sync_news(): void;
        sync_port(): void;
        sync_port_lands(port: $mol_rest_port): void;
        ports(): $mol_rest_port[];
        masters(): $mol_rest_port[];
        port_lands_active(port: $mol_rest_port): $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        port_lands_passive(port: $mol_rest_port): Set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        port_income(port: $mol_rest_port, msg: Uint8Array): void;
        face_port_sync(port: $mol_rest_port, income: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>): void;
        sync_land(land: $hyoo_crus_ref): void;
        forget_land(land: $hyoo_crus_land): void;
        sync_port_land([port, land]: [$mol_rest_port, $hyoo_crus_ref]): void;
        init_port_land([port, land]: [$mol_rest_port, $hyoo_crus_ref]): void;
        face_port_land([port, land]: [$mol_rest_port, $hyoo_crus_ref], next?: null | $hyoo_crus_face_map): $hyoo_crus_face_map | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_crus_glob extends $mol_object {
        static lands_touched: $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        lands_touched: $mol_wire_set<symbol & {
            $hyoo_crus_ref: symbol;
        }>;
        static yard(): $hyoo_crus_yard;
        yard(): $hyoo_crus_yard;
        static home<Node extends typeof $hyoo_crus_home = typeof $hyoo_crus_home>(Node?: Node): InstanceType<Node>;
        home(): $hyoo_crus_home;
        static king_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_auth;
        king_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_auth;
        static land_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_land;
        land_grab(preset?: $hyoo_crus_rank_preset): $hyoo_crus_land;
        static Land(ref: $hyoo_crus_ref): $hyoo_crus_land;
        Land(ref: $hyoo_crus_ref): $hyoo_crus_land;
        static Node<Node extends typeof $hyoo_crus_node>(ref: $hyoo_crus_ref, Node: Node): InstanceType<Node>;
        Node<Node extends typeof $hyoo_crus_node>(ref: $hyoo_crus_ref, Node: Node): InstanceType<Node>;
        static apply_pack(pack: $hyoo_crus_pack): void;
        apply_pack(pack: $hyoo_crus_pack): void;
        static apply_parts(lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>, rocks: [Uint8Array, Uint8Array | null][]): void;
        apply_parts(lands: Record<$hyoo_crus_ref, {
            faces: $hyoo_crus_face_map;
            units: $hyoo_crus_unit[];
        }>, rocks: [Uint8Array, Uint8Array | null][]): void;
    }
}

declare namespace $.$$ {
    class $hyoo_crus_status extends $.$hyoo_crus_status {
        message(): string;
        link_content(): $mol_icon_sync_off[];
        options(): string[];
        master_link(): string;
        master_id(uri: string): string;
        option_label(uri: string): string;
        value(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_avatar__id_hyoo_crus_status_1 = $mol_type_enforce<
		ReturnType< $hyoo_crus_status['master_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_avatar__id_hyoo_crus_status_2 = $mol_type_enforce<
		ReturnType< $hyoo_crus_status['master_link'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_link__uri_hyoo_crus_status_3 = $mol_type_enforce<
		ReturnType< $hyoo_crus_status['master_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_hyoo_crus_status_4 = $mol_type_enforce<
		ReturnType< $hyoo_crus_status['link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint_hyoo_crus_status_5 = $mol_type_enforce<
		ReturnType< $hyoo_crus_status['message'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	export class $hyoo_crus_status extends $mol_select {
		master_id( id: any): string
		Option_logo( id: any): $mol_avatar
		master_link( ): string
		Well( ): $mol_avatar
		Fail( ): $mol_icon_sync_off
		link_content( ): readonly(any)[]
		hint( ): string
		message( ): ReturnType< $hyoo_crus_status['hint'] >
		Link( ): $mol_link
		minimal_width( ): number
		minimal_height( ): number
		Filter( ): any
		option_content( id: any): readonly(any)[]
		trigger_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_6 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=6.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_6
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		field( ): Record<string, any> & ReturnType< $mol_view['field'] >
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image extends $.$mol_image {
        natural_width(next?: null): number;
        natural_height(next?: null): number;
        load(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: Array<{
            regExp: RegExp;
            name: string;
            size: number;
        }>;
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        spoiler: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        grid: RegExp;
        cut: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code: RegExp;
        insert: RegExp;
        delete: RegExp;
        embed: RegExp;
        link: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-word': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {

	type $mol_view__sub_mol_text_code_row_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_row_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_row_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_row_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_row_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_row_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_row_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_row extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        tokens(path: number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        sub(): $mol_view[];
        row_content(path: number[]): $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        token_uri(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob_mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob_mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {

	type $mol_text_code_row__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_row['numb'] >
	>
	type $mol_text_code_row__text_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__syntax_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_text_code_row__uri_resolve_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__highlight_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_10 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_row
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $.$mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): any;
        sub(): ($.$mol_list | $.$mol_button_copy)[];
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_base(): string;
        uri_resolve(uri: string): string;
        text_export(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	type $mol_grid_table__sub_mol_grid_1 = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle_mol_grid_2 = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_grid_3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells_mol_grid_4 = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height_mol_grid_5 = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width_mol_grid_6 = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells_mol_grid_7 = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub_mol_grid_8 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub_mol_grid_9 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name_mol_grid_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub_mol_grid_11 = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level_mol_grid_12 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label_mol_grid_13 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded_mol_grid_14 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri_mol_link_iconed_1 = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_mol_link_iconed_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {

	type $mol_link__uri_mol_embed_native_1 = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_mol_embed_native_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		mime( ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		uri( next?: string ): string
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'data': ReturnType< $mol_embed_native['uri'] >,
			'type': ReturnType< $mol_embed_native['mime'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        message_listener(): $mol_dom_listener;
        message_receive(event?: MessageEvent<[string, string]>): void;
        uri_change(event: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		allow( ): string
		uri( next?: string ): string
		html( ): any
		dom_name( ): string
		attr( ): ({ 
			'data': any,
			'type': any,
			'allow': ReturnType< $mol_frame['allow'] >,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
		})  & ReturnType< $mol_embed_native['attr'] >
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title_mol_embed_service_1 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_service_2 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title_mol_embed_service_3 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri_mol_embed_service_4 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_service extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_service['active'] > ): ReturnType< $mol_embed_service['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=service.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_service extends $.$mol_embed_service {
        sub(): $.$mol_frame[] | ($.$mol_image | $mol_icon_youtube)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_embed_youtube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_youtube extends $.$mol_embed_youtube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	export class $mol_embed_rutube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=rutube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_rutube extends $.$mol_embed_rutube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	type $mol_image__title_mol_embed_any_1 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_any_2 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title_mol_embed_any_3 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri_mol_embed_any_4 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title_mol_embed_any_5 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri_mol_embed_any_6 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	type $mol_embed_rutube__title_mol_embed_any_7 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_rutube['title'] >
	>
	type $mol_embed_rutube__uri_mol_embed_any_8 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_rutube['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
		Rutube( ): $mol_embed_rutube
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_any extends $.$mol_embed_any {
        type(): "object" | "image" | "youtube" | "rutube";
        sub(): $.$mol_image[] | $.$mol_embed_youtube[] | $.$mol_embed_native[];
    }
}

declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text__text_mol_text_1 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_mol_text_2 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_content'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_paragraph__sub_mol_text_3 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__uri_resolve_mol_text_4 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_5 = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_6 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__auto_scroll_mol_text_7 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text_list__uri_resolve_mol_text_8 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__type_mol_text_9 = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text_mol_text_10 = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight_mol_text_11 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_header__minimal_height_mol_text_12 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level_mol_text_13 = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content_mol_text_14 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg_mol_text_15 = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text_mol_text_16 = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__highlight_mol_text_17 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve_mol_text_18 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed_mol_text_19 = $mol_type_enforce<
		ReturnType< $mol_text['pre_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name_mol_text_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells_mol_text_21 = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows_mol_text_22 = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_23 = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_24 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_25 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_26 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_27 = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__rows_mol_text_28 = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_29 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_30 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_31 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_32 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_33 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_dimmer__dom_name_mol_text_34 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle_mol_text_35 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_text_36 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name_mol_text_37 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type_mol_text_38 = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub_mol_text_39 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_row__numb_showed_mol_text_40 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__highlight_mol_text_41 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_text_code_row__text_mol_text_42 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__uri_resolve_mol_text_43 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__syntax_mol_text_44 = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_link_iconed__uri_mol_text_45 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_46 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri_mol_text_47 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_48 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri_mol_text_49 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title_mol_text_50 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	type $mol_expander__label_mol_text_51 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content_mol_text_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		uri_resolve( id: any): string
		quote_text( id: any): string
		highlight( ): string
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		code_sidebar_showed( ): boolean
		pre_sidebar_showed( ): ReturnType< $mol_text['code_sidebar_showed'] >
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		spoiler_label( id: any): string
		Spoiler_label( id: any): $mol_text
		spoiler_content( id: any): string
		Spoiler_content( id: any): $mol_text
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_row
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
		Spoiler( id: any): $mol_expander
	}
	
	type $mol_link__arg_mol_text_header_1 = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_text_header_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_text_header_3 = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        flow_tokens(): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        block_type(index: number): string;
        rows(): ($mol_view | $.$mol_paragraph | $.$mol_text_code | $.$mol_grid)[];
        param(): string;
        header_level(index: number): number;
        header_arg(index: number): {
            [x: string]: string;
        };
        list_type(index: number): string;
        item_index(index: number): number;
        pre_text(index: number): string;
        quote_text(index: number): string;
        list_text(index: number): string;
        cell_content(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $.$mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        table_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        grid_content(indexBlock: number): string[][];
        grid_rows(blockId: number): $mol_grid_row[];
        grid_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        grid_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
        uri_base_abs(): URL;
        uri_resolve(uri: string): string;
        code_syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        block_text(index: number): string;
        block_content(index: number): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        line_tokens(path: readonly number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        link_host(path: readonly number[]): string;
        auto_scroll(): void;
        spoiler_rows(index: number): string[];
        spoiler_label(index: number): string;
        spoiler_content(index: number): string;
    }
    class $mol_text_header extends $.$mol_text_header {
        dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $hyoo_crus_file_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Name: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Type: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Chunks: (auto?: any) => $hyoo_crus_list_bin | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Name: typeof $hyoo_crus_atom_str;
            readonly Type: typeof $hyoo_crus_atom_str;
            readonly Chunks: typeof $hyoo_crus_list_bin;
        };
    };
    export class $hyoo_crus_file extends $hyoo_crus_file_base {
        uri(): string;
        name(next?: string | null): string;
        type(next?: string | null): string;
        blob(next?: $mol_blob): $mol_blob;
        buffer(next?: Uint8Array): Uint8Array<ArrayBufferLike>;
        chunks(next?: readonly (Uint8Array | null)[]): Uint8Array<ArrayBufferLike>[];
        str(next?: string, type?: string): string;
        json(next?: any, type?: string): any;
    }
    export {};
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: ReturnType<Value>;
    };
    export {};
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {
    function $mol_data_optional<Sub extends $mol_data_value, Fallback extends undefined | (() => ReturnType<Sub>)>(sub: Sub, fallback?: Fallback): ((val: Parameters<Sub>[0] | undefined) => ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>)) & {
        config: {
            sub: Sub;
            fallback: Fallback | undefined;
        };
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<$mol_type_override<Partial<Val>, Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }>, Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, { [Field in keyof { [key in keyof Sub]: Parameters<Sub[key]>[0]; }]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; }[keyof Sub]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>) & {
        config: Sub;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {
    type $hyoo_harp_query<Field extends string = string> = {
        [field in Field]: $hyoo_harp_query<never>;
    } & {
        '+'?: boolean;
        '='?: any[][];
        '!='?: any[][];
    };
}

declare namespace $ {
    function $hyoo_harp_from_string(uri: string): $hyoo_harp_query;
}

declare namespace $ {
    function $hyoo_harp_to_string<Query extends $hyoo_harp_query>(query: Query): string;
}

declare namespace $ {
    function $hyoo_harp_scheme<Sub extends Record<string, $mol_data_value<any, any>>, Value extends $mol_data_value<any, any> = typeof $mol_data_integer>(sub: Sub, value?: Value): ((val: $mol_type_merge<$mol_type_override<Partial<Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T ? { [key in keyof T]: Parameters<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key]>[0]; } : never>, Pick<Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_1 ? { [key in keyof T_1]: Parameters<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key]>[0]; } : never, ((Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_4 ? { [key in keyof T_4]: Parameters<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key]>[0]; } : never) extends infer T_2 ? { [Field in keyof T_2]: undefined extends (Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_3 ? { [key in keyof T_3]: Parameters<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key]>[0]; } : never)[Field] ? never : Field; } : never)["+" | "=" | "!=" | "_num" | keyof Sub | "_len" | "_max" | "_min" | "_sum"]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_5 ? { [key_1 in keyof T_5]: ReturnType<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key_1]>; } : never>, Pick<Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_6 ? { [key_1 in keyof T_6]: ReturnType<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key_1]>; } : never, ((Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_9 ? { [key_1 in keyof T_9]: ReturnType<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key_1]>; } : never) extends infer T_7 ? { [Field_1 in keyof T_7]: undefined extends (Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    } extends infer T_8 ? { [key_1 in keyof T_8]: ReturnType<(Sub & {
        '+': ((val: boolean | undefined) => boolean | undefined) & {
            config: {
                sub: (val: boolean) => boolean;
                fallback: (() => boolean) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
            config: {
                sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                    config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                        config: Value;
                        Value: ReturnType<Value_1>;
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _num: ((val: {
            '=': readonly (readonly (string | number)[])[];
        } | undefined) => Readonly<{
            '=': readonly (readonly number[])[];
        }> | undefined) & {
            config: {
                sub: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                }) => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) & {
                    config: {
                        '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                            config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                config: ((this: any, input: string | number) => number) & {
                                    config: {
                                        funcs: [((val: string | number) => string | number) & {
                                            config: [(val: string) => string, typeof $mol_data_integer];
                                            Value: ReturnType<Value_1>;
                                        }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                    };
                    Value: ReturnType<Value_1>;
                };
                fallback: (() => Readonly<{
                    '=': readonly (readonly number[])[];
                }>) | undefined;
            };
            Value: ReturnType<Value_1>;
        };
        _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
    })[key_1]>; } : never)[Field_1] ? never : Field_1; } : never)["+" | "=" | "!=" | "_num" | keyof Sub | "_len" | "_max" | "_min" | "_sum"]>>>>) & {
        config: Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        };
        Value: ReturnType<Value_1>;
    } & {
        parse(str: string): Readonly<$mol_type_merge<$mol_type_override<Partial<Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T extends Record<string, $mol_data_value<any, any>> ? { [key in keyof T]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>; } : never>, Pick<Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_1 extends Record<string, $mol_data_value<any, any>> ? { [key in keyof T_1]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>; } : never, ((Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_4 extends Record<string, $mol_data_value<any, any>> ? { [key in keyof T_4]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>; } : never) extends infer T_2 ? { [Field in keyof T_2]: undefined extends (Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_3 extends Record<string, $mol_data_value<any, any>> ? { [key in keyof T_3]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>; } : never)[Field] ? never : Field; } : never)["+" | "=" | "!=" | "_num" | keyof Sub | "_len" | "_max" | "_min" | "_sum"]>>>>;
        build(query: Parameters<((val: $mol_type_merge<$mol_type_override<Partial<Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T ? { [key in keyof T]: Parameters<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>[0]; } : never>, Pick<Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_1 ? { [key in keyof T_1]: Parameters<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>[0]; } : never, ((Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_4 ? { [key in keyof T_4]: Parameters<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>[0]; } : never) extends infer T_2 ? { [Field in keyof T_2]: undefined extends (Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_3 ? { [key in keyof T_3]: Parameters<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key]>[0]; } : never)[Field] ? never : Field; } : never)["+" | "=" | "!=" | "_num" | keyof Sub | "_len" | "_max" | "_min" | "_sum"]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_5 ? { [key_1 in keyof T_5]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key_1]>; } : never>, Pick<Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_6 ? { [key_1 in keyof T_6]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key_1]>; } : never, ((Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_9 ? { [key_1 in keyof T_9]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key_1]>; } : never) extends infer T_7 ? { [Field_1 in keyof T_7]: undefined extends (Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        } extends infer T_8 ? { [key_1 in keyof T_8]: ReturnType<(Sub & {
            '+': ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                config: {
                    sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                        config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                            config: Value;
                            Value: ReturnType<Value_1>;
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _num: ((val: {
                '=': readonly (readonly (string | number)[])[];
            } | undefined) => Readonly<{
                '=': readonly (readonly number[])[];
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        '=': readonly (readonly (string | number)[])[];
                    }) => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) & {
                        config: {
                            '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                    config: ((this: any, input: string | number) => number) & {
                                        config: {
                                            funcs: [((val: string | number) => string | number) & {
                                                config: [(val: string) => string, typeof $mol_data_integer];
                                                Value: ReturnType<Value_1>;
                                            }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                                Value: ReturnType<Value_1>;
                            };
                        };
                        Value: ReturnType<Value_1>;
                    };
                    fallback: (() => Readonly<{
                        '=': readonly (readonly number[])[];
                    }>) | undefined;
                };
                Value: ReturnType<Value_1>;
            };
            _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
        })[key_1]>; } : never)[Field_1] ? never : Field_1; } : never)["+" | "=" | "!=" | "_num" | keyof Sub | "_len" | "_max" | "_min" | "_sum"]>>>>) & {
            config: Sub & {
                '+': ((val: boolean | undefined) => boolean | undefined) & {
                    config: {
                        sub: (val: boolean) => boolean;
                        fallback: (() => boolean) | undefined;
                    };
                    Value: ReturnType<Value_1>;
                };
                '=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                    config: {
                        sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                            config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                                config: Value;
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                        fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                    };
                    Value: ReturnType<Value_1>;
                };
                '!=': ((val: readonly (readonly Parameters<Value>[0][])[] | undefined) => readonly (readonly ReturnType<Value>[])[] | undefined) & {
                    config: {
                        sub: ((val: readonly (readonly Parameters<Value>[0][])[]) => readonly (readonly ReturnType<Value>[])[]) & {
                            config: ((val: readonly Parameters<Value>[0][]) => readonly ReturnType<Value>[]) & {
                                config: Value;
                                Value: ReturnType<Value_1>;
                            };
                            Value: ReturnType<Value_1>;
                        };
                        fallback: (() => readonly (readonly ReturnType<Value>[])[]) | undefined;
                    };
                    Value: ReturnType<Value_1>;
                };
                _num: ((val: {
                    '=': readonly (readonly (string | number)[])[];
                } | undefined) => Readonly<{
                    '=': readonly (readonly number[])[];
                }> | undefined) & {
                    config: {
                        sub: ((val: {
                            '=': readonly (readonly (string | number)[])[];
                        }) => Readonly<{
                            '=': readonly (readonly number[])[];
                        }>) & {
                            config: {
                                '=': ((val: readonly (readonly (string | number)[])[]) => readonly (readonly number[])[]) & {
                                    config: ((val: readonly (string | number)[]) => readonly number[]) & {
                                        config: ((this: any, input: string | number) => number) & {
                                            config: {
                                                funcs: [((val: string | number) => string | number) & {
                                                    config: [(val: string) => string, typeof $mol_data_integer];
                                                    Value: ReturnType<Value_1>;
                                                }, NumberConstructor] & [(input: string | number) => any, (input: any) => unknown];
                                            };
                                            Value: ReturnType<Value_1>;
                                        };
                                        Value: ReturnType<Value_1>;
                                    };
                                    Value: ReturnType<Value_1>;
                                };
                            };
                            Value: ReturnType<Value_1>;
                        };
                        fallback: (() => Readonly<{
                            '=': readonly (readonly number[])[];
                        }>) | undefined;
                    };
                    Value: ReturnType<Value_1>;
                };
                _len: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
                _max: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
                _min: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
                _sum: $mol_data_value<Readonly<{ [Key in keyof Sub]: Parameters<Sub[Key]>[0]; }> | undefined, Readonly<{ [Key_1 in keyof Sub]: ReturnType<Sub[Key_1]>; }> | undefined>;
            };
            Value: ReturnType<Value_1>;
        }>[0]): string;
    };
}

declare namespace $ {
    function $mol_offline(): void;
}

declare namespace $ {
    function $mol_offline_web(): void;
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    const $shm_hitalama_token_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Organization: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Token: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly User_id: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Avatar: (auto?: any) => $hyoo_crus_file | null;
        readonly Avatar_url: (auto?: any) => $hyoo_crus_atom_str | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Organization: typeof $hyoo_crus_atom_str;
            readonly Token: typeof $hyoo_crus_atom_str;
            readonly User_id: typeof $hyoo_crus_atom_str;
            readonly Avatar: typeof $hyoo_crus_file;
            readonly Avatar_url: typeof $hyoo_crus_atom_str;
        };
    };
    export class $shm_hitalama_token extends $shm_hitalama_token_base {
    }
    export {};
}

declare namespace $ {

	type $mol_image__uri_shm_hitalama_token_view_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_view['logo_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__uri_shm_hitalama_token_view_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_view['avatar_url'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_shm_hitalama_token_view_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_view['user_id'] >
		,
		ReturnType< $mol_image['title'] >
	>
	export class $shm_hitalama_token_view extends $mol_view {
		user_id( ): string
		logo_uri( ): string
		Logo( ): $mol_image
		avatar_url( ): string
		Avatar( ): $mol_image
		token( ): $shm_hitalama_token
		title( ): ReturnType< $shm_hitalama_token_view['user_id'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_token_view extends $.$shm_hitalama_token_view {
        logo_uri(): string;
        token_str(): string;
        user_id(): string;
        avatar_url(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {

	export class $mol_pop_over extends $mol_pop {
		hovered( next?: boolean ): boolean
		event_show( next?: any ): any
		event_hide( next?: any ): any
		showed( ): ReturnType< $mol_pop_over['hovered'] >
		attr( ): ({ 
			'tabindex': number,
		})  & ReturnType< $mol_pop['attr'] >
		event( ): ({ 
			mouseenter( next?: ReturnType< $mol_pop_over['event_show'] > ): ReturnType< $mol_pop_over['event_show'] >,
			mouseleave( next?: ReturnType< $mol_pop_over['event_hide'] > ): ReturnType< $mol_pop_over['event_hide'] >,
		})  & ReturnType< $mol_pop['event'] >
	}
	
}

//# sourceMappingURL=over.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    export type $shm_hitalama_group_dto = {
        id: string;
        name: string;
        photo_50: string;
        members_count: number;
    };
    const $shm_hitalama_group_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Name: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Group_id: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Owner_id: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Photo_url: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Members_count: (auto?: any) => $hyoo_crus_atom_real | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Name: typeof $hyoo_crus_atom_str;
            readonly Group_id: typeof $hyoo_crus_atom_str;
            readonly Owner_id: typeof $hyoo_crus_atom_str;
            readonly Photo_url: typeof $hyoo_crus_atom_str;
            readonly Members_count: typeof $hyoo_crus_atom_real;
        };
    };
    export class $shm_hitalama_group extends $shm_hitalama_group_base {
        fill(dto: $shm_hitalama_group_dto): void;
    }
    export {};
}

declare namespace $ {
    const $shm_hitalama_list_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Name: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Groups: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_group[] | undefined): readonly $shm_hitalama_group[];
            remote_add(item: $shm_hitalama_group): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_group;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_group;
            local_make(idea?: number): $shm_hitalama_group;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Name: typeof $hyoo_crus_atom_str;
            readonly Groups: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_group[] | undefined): readonly $shm_hitalama_group[];
                    remote_add(item: $shm_hitalama_group): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_group;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_group;
                    local_make(idea?: number): $shm_hitalama_group;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $shm_hitalama_list extends $shm_hitalama_list_base {
    }
    export {};
}

declare namespace $ {
    const $shm_hitalama_file_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Size: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly File: (auto?: any) => {
            [x: symbol]: () => any[];
            Value: Value;
            remote(next?: $hyoo_crus_file | null | undefined): $hyoo_crus_file | null;
            remote_of(peer: string | null, next?: $hyoo_crus_file | null | undefined): $hyoo_crus_file | null;
            ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_file | null;
            ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_file | null;
            ensure_here(peer: string | null): void;
            ensure_area(peer: string | null, land: $hyoo_crus_land): void;
            ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
            remote_ensure(preset?: $hyoo_crus_rank_preset): $hyoo_crus_file | null;
            local_ensure(): $hyoo_crus_file | null;
            val(next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            val_of(peer: string | null, next?: (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null | undefined): (symbol & {
                $hyoo_crus_ref: symbol;
            }) | null;
            pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
            vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Size: typeof $hyoo_crus_atom_real;
            readonly File: {
                new (): {
                    [x: symbol]: () => any[];
                    Value: () => typeof $hyoo_crus_file;
                    remote(next?: $hyoo_crus_file | null | undefined): $hyoo_crus_file | null;
                    remote_of(peer: string | null, next?: $hyoo_crus_file | null | undefined): $hyoo_crus_file | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_file | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $hyoo_crus_file | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $hyoo_crus_file | null;
                    local_ensure(): $hyoo_crus_file | null;
                    val(next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    val_of(peer: string | null, next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
                    vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                toString(): any;
                Value: typeof $hyoo_crus_dict;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $shm_hitalama_file extends $shm_hitalama_file_base {
    }
    export {};
}

declare namespace $ {
    const $shm_hitalama_project_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Files: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_file[] | undefined): readonly $shm_hitalama_file[];
            remote_add(item: $shm_hitalama_file): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_file;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_file;
            local_make(idea?: number): $shm_hitalama_file;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Query_logs: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_project_query_log[] | undefined): readonly $shm_hitalama_project_query_log[];
            remote_add(item: $shm_hitalama_project_query_log): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_project_query_log;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_project_query_log;
            local_make(idea?: number): $shm_hitalama_project_query_log;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Files: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_file[] | undefined): readonly $shm_hitalama_file[];
                    remote_add(item: $shm_hitalama_file): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_file;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_file;
                    local_make(idea?: number): $shm_hitalama_file;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly Query_logs: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_project_query_log[] | undefined): readonly $shm_hitalama_project_query_log[];
                    remote_add(item: $shm_hitalama_project_query_log): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_project_query_log;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_project_query_log;
                    local_make(idea?: number): $shm_hitalama_project_query_log;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $shm_hitalama_project extends $shm_hitalama_project_base {
    }
    const $shm_hitalama_project_query_log_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Query: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Time: (auto?: any) => $hyoo_crus_atom_real | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Query: typeof $hyoo_crus_atom_str;
            readonly Time: typeof $hyoo_crus_atom_real;
        };
    };
    export class $shm_hitalama_project_query_log extends $shm_hitalama_project_query_log_base {
    }
    export {};
}

declare namespace $ {
    let $hyoo_crus_text_tokens: $mol_regexp<{
        [x: string]: string;
        readonly token: string;
        readonly link: string;
        readonly 'line-break': string;
        readonly indents: string;
        readonly emoji: string;
        readonly Word: string;
        readonly word: string;
        readonly spaces: string;
        readonly others: string;
        readonly space: string;
        readonly win_end: string;
        readonly mac_end: string;
    }>;
}

declare namespace $ {
    class $hyoo_crus_text extends $hyoo_crus_node {
        static tag: keyof typeof $hyoo_crus_sand_tag;
        value(next?: string): string;
        text(next?: string): string;
        str(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): readonly [string, number];
        offset_by_point([self, offset]: readonly [string, number]): readonly [string, number];
        selection(lord: $hyoo_crus_ref, next?: readonly [begin: number, end: number]): any;
    }
}

declare namespace $ {
    export const $shm_hitalama_board_block_types: readonly ["text", "input", "iframe"];
    const $shm_hitalama_board_block_type_base: (abstract new () => {
        [x: symbol]: () => any[];
        val(next?: "text" | "input" | "iframe" | undefined): "text" | "input" | "iframe" | null;
        val_of(peer: string | null, next?: "text" | "input" | "iframe" | undefined): "text" | "input" | "iframe" | null;
        pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
        vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
        land(): $hyoo_crus_land;
        head(): string;
        land_ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        ref(): symbol & {
            $hyoo_crus_ref: symbol;
        };
        toJSON(): string | undefined;
        cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
        nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
        units(): $hyoo_crus_sand[];
        units_of(peer: string | null): $hyoo_crus_sand[];
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        author_peers(): string[];
        author_lords(): (symbol & {
            $hyoo_crus_ref: symbol;
        })[];
        $: $;
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
    }) & {
        options: readonly ["text", "input", "iframe"];
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    class $shm_hitalama_board_block_type extends $shm_hitalama_board_block_type_base {
    }
    const $shm_hitalama_board_block_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Body_x: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Body_y: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Bottom_edge_y: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Right_edge_x: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Top_edge_y: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Left_edge_x: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Opacity: (auto?: any) => $hyoo_crus_atom_real | null;
        readonly Type: (auto?: any) => $shm_hitalama_board_block_type | null;
        readonly Image: (auto?: any) => $hyoo_crus_file | null;
        readonly Src: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Text: (auto?: any) => $hyoo_crus_text | null;
        readonly Color: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Font_size: (auto?: any) => $hyoo_crus_atom_real | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Body_x: typeof $hyoo_crus_atom_real;
            readonly Body_y: typeof $hyoo_crus_atom_real;
            readonly Bottom_edge_y: typeof $hyoo_crus_atom_real;
            readonly Right_edge_x: typeof $hyoo_crus_atom_real;
            readonly Top_edge_y: typeof $hyoo_crus_atom_real;
            readonly Left_edge_x: typeof $hyoo_crus_atom_real;
            readonly Opacity: typeof $hyoo_crus_atom_real;
            readonly Type: typeof $shm_hitalama_board_block_type;
            readonly Image: typeof $hyoo_crus_file;
            readonly Src: typeof $hyoo_crus_atom_str;
            readonly Text: typeof $hyoo_crus_text;
            readonly Color: typeof $hyoo_crus_atom_str;
            readonly Font_size: typeof $hyoo_crus_atom_real;
        };
    };
    export class $shm_hitalama_board_block extends $shm_hitalama_board_block_base {
    }
    export {};
}

declare namespace $ {
    const $shm_hitalama_board_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Blocks: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_board_block[] | undefined): readonly $shm_hitalama_board_block[];
            remote_add(item: $shm_hitalama_board_block): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_board_block;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_board_block;
            local_make(idea?: number): $shm_hitalama_board_block;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Blocks: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_board_block[] | undefined): readonly $shm_hitalama_board_block[];
                    remote_add(item: $shm_hitalama_board_block): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_board_block;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_board_block;
                    local_make(idea?: number): $shm_hitalama_board_block;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
        };
    };
    export class $shm_hitalama_board extends $shm_hitalama_board_base {
    }
    export {};
}

declare namespace $ {
    class $shm_hitalama_profile_key extends $mol_object {
        static key_size(): number;
        static import(serial: string, password: string): Promise<string | null>;
        static export(auth: string, password: string, login: string): Promise<string>;
    }
}

declare namespace $ {
    const $shm_hitalama_profile_base: Omit<typeof $hyoo_crus_dict, "prototype"> & (new (...args: any[]) => $mol_type_override<$hyoo_crus_dict, {
        readonly Tokens: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_token[] | undefined): readonly $shm_hitalama_token[];
            remote_add(item: $shm_hitalama_token): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_token;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_token;
            local_make(idea?: number): $shm_hitalama_token;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Groups_lists: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_list[] | undefined): readonly $shm_hitalama_list[];
            remote_add(item: $shm_hitalama_list): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_list;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_list;
            local_make(idea?: number): $shm_hitalama_list;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Projects: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_project[] | undefined): readonly $shm_hitalama_project[];
            remote_add(item: $shm_hitalama_project): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_project;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_project;
            local_make(idea?: number): $shm_hitalama_project;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly boards: (auto?: any) => {
            [x: symbol]: () => any[];
            remote_list(next?: readonly $shm_hitalama_board[] | undefined): readonly $shm_hitalama_board[];
            remote_add(item: $shm_hitalama_board): void;
            make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_board;
            remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_board;
            local_make(idea?: number): $shm_hitalama_board;
            items(next?: readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[] | undefined): readonly ((symbol & {
                $hyoo_crus_ref: symbol;
            }) | null)[];
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        } | null;
        readonly Login: (auto?: any) => $hyoo_crus_atom_str | null;
        readonly Pass_key: (auto?: any) => $hyoo_crus_atom_str | null;
    }>) & {
        schema: {
            [x: string]: typeof $hyoo_crus_node;
        } & {
            readonly Tokens: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_token[] | undefined): readonly $shm_hitalama_token[];
                    remote_add(item: $shm_hitalama_token): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_token;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_token;
                    local_make(idea?: number): $shm_hitalama_token;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly Groups_lists: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_list[] | undefined): readonly $shm_hitalama_list[];
                    remote_add(item: $shm_hitalama_list): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_list;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_list;
                    local_make(idea?: number): $shm_hitalama_list;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly Projects: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_project[] | undefined): readonly $shm_hitalama_project[];
                    remote_add(item: $shm_hitalama_project): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_project;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_project;
                    local_make(idea?: number): $shm_hitalama_project;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly boards: {
                new (): {
                    [x: symbol]: () => any[];
                    remote_list(next?: readonly $shm_hitalama_board[] | undefined): readonly $shm_hitalama_board[];
                    remote_add(item: $shm_hitalama_board): void;
                    make(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_board;
                    remote_make(config: $hyoo_crus_rank_preset): $shm_hitalama_board;
                    local_make(idea?: number): $shm_hitalama_board;
                    items(next?: readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[] | undefined): readonly ((symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null)[];
                    items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
                    splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
                    has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
                    add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
                    cut(vary: $hyoo_crus_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                Value: Value;
                toString(): any;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            readonly Login: typeof $hyoo_crus_atom_str;
            readonly Pass_key: typeof $hyoo_crus_atom_str;
        };
    };
    export class $shm_hitalama_profile extends $shm_hitalama_profile_base {
        static current(): $hyoo_crus_dict | null;
        password(password: string): void;
        auth_key_decrypt(password: string): string | null;
        enter(password: string): boolean;
    }
    const $shm_hitalama_profile_dict_base: {
        new (): {
            [x: symbol]: () => any[];
            Value: {
                new (): {
                    [x: symbol]: () => any[];
                    Value: () => typeof $shm_hitalama_profile;
                    remote(next?: $shm_hitalama_profile | null | undefined): $shm_hitalama_profile | null;
                    remote_of(peer: string | null, next?: $shm_hitalama_profile | null | undefined): $shm_hitalama_profile | null;
                    ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_profile | null;
                    ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_profile | null;
                    ensure_here(peer: string | null): void;
                    ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                    ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                    remote_ensure(preset?: $hyoo_crus_rank_preset): $shm_hitalama_profile | null;
                    local_ensure(): $shm_hitalama_profile | null;
                    val(next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    val_of(peer: string | null, next?: (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null | undefined): (symbol & {
                        $hyoo_crus_ref: symbol;
                    }) | null;
                    pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
                    vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                    land(): $hyoo_crus_land;
                    head(): string;
                    land_ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    ref(): symbol & {
                        $hyoo_crus_ref: symbol;
                    };
                    toJSON(): string | undefined;
                    cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                    nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                    units(): $hyoo_crus_sand[];
                    units_of(peer: string | null): $hyoo_crus_sand[];
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    author_peers(): string[];
                    author_lords(): (symbol & {
                        $hyoo_crus_ref: symbol;
                    })[];
                    $: $;
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                };
                toString(): any;
                Value: typeof $hyoo_crus_dict;
                parse: typeof $hyoo_crus_vary_cast_ref;
                tag: keyof typeof $hyoo_crus_sand_tag;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
            };
            key(key: $hyoo_crus_vary_type, auto?: any): {
                [x: symbol]: () => any[];
                Value: Value;
                remote(next?: $shm_hitalama_profile | null | undefined): $shm_hitalama_profile | null;
                remote_of(peer: string | null, next?: $shm_hitalama_profile | null | undefined): $shm_hitalama_profile | null;
                ensure(config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_profile | null;
                ensure_of(peer: string | null, config?: null | $hyoo_crus_rank_preset | $hyoo_crus_land): $shm_hitalama_profile | null;
                ensure_here(peer: string | null): void;
                ensure_area(peer: string | null, land: $hyoo_crus_land): void;
                ensure_lord(peer: string | null, preset: $hyoo_crus_rank_preset): void;
                remote_ensure(preset?: $hyoo_crus_rank_preset): $shm_hitalama_profile | null;
                local_ensure(): $shm_hitalama_profile | null;
                val(next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                val_of(peer: string | null, next?: (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null | undefined): (symbol & {
                    $hyoo_crus_ref: symbol;
                }) | null;
                pick_unit(peer: string | null): $hyoo_crus_sand | undefined;
                vary(next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                vary_of(peer: string | null, next?: $hyoo_crus_vary_type): $hyoo_crus_vary_type;
                land(): $hyoo_crus_land;
                head(): string;
                land_ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                ref(): symbol & {
                    $hyoo_crus_ref: symbol;
                };
                toJSON(): string | undefined;
                cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
                nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
                units(): $hyoo_crus_sand[];
                units_of(peer: string | null): $hyoo_crus_sand[];
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                author_peers(): string[];
                author_lords(): (symbol & {
                    $hyoo_crus_ref: symbol;
                })[];
                $: $;
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
            };
            keys(): readonly $hyoo_crus_vary_type[];
            dive<Node_1 extends typeof $hyoo_crus_node>(key: $hyoo_crus_vary_type, Node: Node_1, auto?: any): InstanceType<Node_1> | null;
            items_vary(next?: readonly $hyoo_crus_vary_type[], tag?: keyof typeof $hyoo_crus_sand_tag): readonly $hyoo_crus_vary_type[];
            splice(next: readonly $hyoo_crus_vary_type[], from?: number, to?: number, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            find(vary: $hyoo_crus_vary_type): $hyoo_crus_sand | null;
            has(vary: $hyoo_crus_vary_type, next?: boolean, tag?: keyof typeof $hyoo_crus_sand_tag): boolean;
            add(vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): void;
            cut(vary: $hyoo_crus_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            node_make<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1, vary: $hyoo_crus_vary_type, tag?: keyof typeof $hyoo_crus_sand_tag): InstanceType<Node_1>;
            land(): $hyoo_crus_land;
            head(): string;
            land_ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            ref(): symbol & {
                $hyoo_crus_ref: symbol;
            };
            toJSON(): string | undefined;
            cast<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1): InstanceType<Node_1>;
            nodes<Node_1 extends typeof $hyoo_crus_node>(Node: Node_1 | null): readonly InstanceType<Node_1>[];
            units(): $hyoo_crus_sand[];
            units_of(peer: string | null): $hyoo_crus_sand[];
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            author_peers(): string[];
            author_lords(): (symbol & {
                $hyoo_crus_ref: symbol;
            })[];
            $: $;
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
        };
        toString(): any;
        tag: keyof typeof $hyoo_crus_sand_tag;
        schema: Record<string, typeof $hyoo_crus_node>;
        with<This extends typeof $hyoo_crus_dict, const Schema extends Record<string, {
            tag: keyof typeof $hyoo_crus_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema): Omit<This, "prototype"> & (new (...args: any[]) => $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>) & {
            schema: {
                [x: string]: typeof $hyoo_crus_node;
            } & Schema;
        };
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
    };
    export class $shm_hitalama_profile_dict extends $shm_hitalama_profile_dict_base {
    }
    export {};
}

declare namespace $ {
    class $mol_import extends $mol_object2 {
        static module(uri: string): any;
        static module_async(uri: string): Promise<any>;
        static script(uri: string): any;
        static script_async(uri: string): Promise<any>;
        static style(uri: string): any;
        static style_async(uri: string): any;
    }
}

declare namespace $ {
    class $shm_hitalama_jsonp extends $mol_object {
        static _guid(): string;
        static make_cb(cb: any, ...args: any): string;
        static vk_method(method: string, params: Record<string, string>, cb: any, ...args: any): void;
        static vk_execute(access_token: string, code: string, cb: any, ...args: any): void;
        static vk_newFuncWall(params: {
            access_token: string;
            owner_id: string;
            offset: string;
            count_execute: string;
        }, cb: any, ...args: any): void;
        static vk_groups_getById(params: {
            access_token: string;
            groups_id: string;
        }, cb: any, ...args: any): void;
    }
}

declare namespace $ {

	type $shm_hitalama_token_view__token_shm_hitalama_token_switch_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['token'] >
		,
		ReturnType< $shm_hitalama_token_view['token'] >
	>
	type $mol_switch__value_shm_hitalama_token_switch_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['current_ref'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__keys_shm_hitalama_token_switch_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['tokens_refs'] >
		,
		ReturnType< $mol_switch['keys'] >
	>
	type $mol_switch__option_label_shm_hitalama_token_switch_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['option_label'] >
		,
		ReturnType< $mol_switch['option_label'] >
	>
	type $mol_button_minor__title_shm_hitalama_token_switch_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_link__title_shm_hitalama_token_switch_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__target_shm_hitalama_token_switch_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__uri_shm_hitalama_token_switch_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['vk_auth_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_pop_over__Anchor_shm_hitalama_token_switch_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['Add_anchor'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__bubble_content_shm_hitalama_token_switch_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	type $mol_button_minor__title_shm_hitalama_token_switch_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_token_switch_12 = $mol_type_enforce<
		ReturnType< $shm_hitalama_token_switch['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	export class $shm_hitalama_token_switch extends $mol_view {
		current_ref( next?: string ): string
		tokens_refs( ): readonly(string)[]
		token( id: any): $shm_hitalama_token
		Token( id: any): $shm_hitalama_token_view
		option_label( id: any): readonly(any)[]
		Switch( ): $mol_switch
		Add_anchor( ): $mol_button_minor
		Add_vk( ): $mol_link
		Add( ): $mol_pop_over
		clear( next?: any ): any
		Clear( ): $mol_button_minor
		vk_token_url_parse( ): string
		tokens( ): readonly($shm_hitalama_token)[]
		current( ): $shm_hitalama_token | null
		sub( ): readonly(any)[]
		auto( ): readonly(any)[]
		vk_client_id( ): string
		vk_redirect_uri( ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_token_switch extends $.$shm_hitalama_token_switch {
        vk_redirect_uri(): string;
        tokens(): any;
        clear(): void;
        current(): $hyoo_crus_node | null;
        current_ref(next?: string): string;
        token(ref_str: string): $hyoo_crus_node;
        tokens_refs(): any;
        tokens_view(): any;
        vk_get_user(token: $shm_hitalama_token, token_str: string, user_id: string): void;
        vk_user_receive(res: any, token: $shm_hitalama_token): void;
        vk_token_url_parse(): string;
        vk_user_id(): string | null;
        vk_auth_uri(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_button_minor__title_shm_hitalama_profile_switch_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_switch['login'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__title_shm_hitalama_profile_switch_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_profile_switch_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_switch['exit'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_pop_over__Anchor_shm_hitalama_profile_switch_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_switch['Login'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__bubble_content_shm_hitalama_profile_switch_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	type $mol_link__title_shm_hitalama_profile_switch_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_shm_hitalama_profile_switch_7 = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title_shm_hitalama_profile_switch_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_shm_hitalama_profile_switch_9 = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	export class $shm_hitalama_profile_switch extends $mol_view {
		login( ): string
		Login( ): $mol_button_minor
		exit( next?: any ): any
		Exit( ): $mol_button_minor
		Current( ): $mol_pop_over
		Enter_link( ): $mol_link
		Register_link( ): $mol_link
		profile( ): $shm_hitalama_profile | null
		sub( ): readonly(any)[]
		buttons( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_profile_switch extends $.$shm_hitalama_profile_switch {
        login(): string;
        sub(): readonly (any)[];
        exit(): void;
    }
}

declare namespace $ {

	type $mol_paragraph__dom_name_mol_section_1 = $mol_type_enforce<
		ReturnType< $mol_section['title_dom_name'] >
		,
		ReturnType< $mol_paragraph['dom_name'] >
	>
	type $mol_paragraph__title_mol_section_2 = $mol_type_enforce<
		ReturnType< $mol_section['title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_mol_section_3 = $mol_type_enforce<
		ReturnType< $mol_section['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_section_4 = $mol_type_enforce<
		ReturnType< $mol_section['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_section_5 = $mol_type_enforce<
		ReturnType< $mol_section['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_section extends $mol_list {
		title_dom_name( ): string
		Title( ): $mol_paragraph
		tools( ): readonly(any)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		level( ): number
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=section.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_section extends $.$mol_section {
        title_dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account_group extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account_group_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__value_shm_hitalama_group_search_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_group_search['search_value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_button_major__title_shm_hitalama_group_search_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_shm_hitalama_group_search_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_group_search['search'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__hint_shm_hitalama_group_search_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_labeler__label_shm_hitalama_group_search_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_group_search['search_label'] >
		,
		ReturnType< $mol_labeler['label'] >
	>
	type $mol_labeler__content_shm_hitalama_group_search_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_image__uri_shm_hitalama_group_search_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_group_search['photo_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_paragraph__title_shm_hitalama_group_search_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_group_search['name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_shm_hitalama_group_search_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_group_search_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_group_search_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_shm_hitalama_group_search_12 = $mol_type_enforce<
		ReturnType< $shm_hitalama_group_search['error_message'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $shm_hitalama_group_search extends $mol_view {
		search_title( ): string
		search_label( ): readonly($mol_view_content)[]
		search_value( next?: string ): string
		Group_id( ): $mol_string
		search( next?: any ): any
		Search( ): $mol_button_major
		Search_label( ): $mol_labeler
		photo_uri( ): string
		Photo( ): $mol_image
		name( ): string
		Name( ): $mol_paragraph
		Members_count_icon( ): $mol_icon_account_group_outline
		members_count( next?: string ): string
		Members_count( ): $mol_view
		Name_block( ): $mol_view
		buttons( ): readonly(any)[]
		Group( ): $mol_view
		search_result_view( ): readonly(any)[]
		error_message( ): string
		token_str( ): string
		group_id( ): string
		owner_id( ): string
		search_result( next?: any ): any
		reset( ): any
		dto( ): $shm_hitalama_group_dto | null
		search_click( ): any
		sub( ): readonly(any)[]
		Search_error( ): $mol_text
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_group_search extends $.$shm_hitalama_group_search {
        search_result(next?: any): any;
        reset(): void;
        dto(): $shm_hitalama_group_dto | null;
        members_count(): string;
        name(): string;
        group_id(): string;
        photo_uri(): string;
        owner_id(): string;
        error_message(): any;
        search(): void;
        search_result_view(): readonly (any)[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub_shm_hitalama_table_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_table['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__sub_shm_hitalama_table_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_table['rows'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	export class $shm_hitalama_table extends $mol_view {
		head( ): readonly(any)[]
		Head( ): $mol_view
		rows( ): readonly(any)[]
		Body( ): $mol_list
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=table.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node_external(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {

	export class $shm_hitalama_posts extends $mol_ghost {
		token_str( ): string
		owner_id( ): string
		posts_data( next?: any ): any
		dto( ): $shm_hitalama_posts_dto | null
		collect( ): any
		pending( next?: boolean ): boolean
		post_id( id: any): string
		post_date( id: any): string
		post_likes( id: any): string
		post_reposts( id: any): string
		post_comments( id: any): string
		post_views( id: any): string
	}
	
}

//# sourceMappingURL=posts.view.tree.d.ts.map
declare namespace $.$$ {
    type $shm_hitalama_posts_dto = [
        time: number[],
        id: number[],
        likes: number[],
        reposts: number[],
        comments: number[],
        view: number[]
    ];
    class $shm_hitalama_posts extends $.$shm_hitalama_posts {
        _posts_data: any;
        posts_data(next?: any): any;
        dto(): $shm_hitalama_posts_dto | null;
        post_id(n: number): string;
        post_date(n: number): string;
        post_likes(n: number): string;
        post_reposts(n: number): string;
        post_comments(n: number): string;
        post_views(n: number): string;
        collect(): void;
    }
}

declare namespace $ {

	type $mol_view__sub_shm_hitalama_analysis_summary_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_image__uri_shm_hitalama_analysis_summary_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['photo'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_shm_hitalama_analysis_summary_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['owner_id'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_12 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['members_count'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_14 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['posts_counts'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_15 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['views'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_16 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['likes'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['reposts'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_18 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['comments'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_19 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['erv'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_20 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_photo'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_21 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_22 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_members_count'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_23 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_posts_counts'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_24 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_views'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_25 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_likes'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_26 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_reposts'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_27 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis_summary['sum_comments'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_summary_28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_summary_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $shm_hitalama_analysis_summary extends $shm_hitalama_table {
		Head_photo( ): $mol_view
		Head_name( ): $mol_view
		Head_members_count( ): $mol_view
		Head_posts_counts( ): $mol_view
		Head_views( ): $mol_view
		Head_likes( ): $mol_view
		Head_reposts( ): $mol_view
		Head_comments( ): $mol_view
		Head_ERv( ): $mol_view
		photo( id: any): string
		owner_id( id: any): string
		Photo( id: any): $mol_image
		name( id: any): string
		Name( id: any): $mol_paragraph
		members_count( id: any): string
		Member_counts( id: any): $mol_paragraph
		posts_counts( id: any): string
		Posts_counts( id: any): $mol_paragraph
		views( id: any): string
		Views( id: any): $mol_paragraph
		likes( id: any): string
		Likes( id: any): $mol_paragraph
		reposts( id: any): string
		Reposts( id: any): $mol_paragraph
		comments( id: any): string
		Comments( id: any): $mol_paragraph
		erv( id: any): string
		ERv( id: any): $mol_paragraph
		sum_photo( ): string
		Sum_photo( ): $mol_paragraph
		sum_name( ): string
		Sum_name( ): $mol_paragraph
		sum_members_count( ): string
		Sum_members_count( ): $mol_paragraph
		sum_posts_counts( ): string
		Sum_posts_counts( ): $mol_paragraph
		sum_views( ): string
		Sum_views( ): $mol_paragraph
		sum_likes( ): string
		Sum_likes( ): $mol_paragraph
		sum_reposts( ): string
		Sum_reposts( ): $mol_paragraph
		sum_comments( ): string
		Sum_comments( ): $mol_paragraph
		Sum_ERv( ): $mol_paragraph
		token_str( ): string
		owner_ids( ): readonly(string)[]
		groups_dtos( next?: any ): any
		posts_dto_by_owner( id: any): $shm_hitalama_posts_dto | null
		head( ): readonly(any)[]
		Row( id: any): $mol_view
		Sum_row( ): $mol_view
	}
	
}

//# sourceMappingURL=summary.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_analysis_summary extends $.$shm_hitalama_analysis_summary {
        groups_dtos(next?: any): Map<any, any> | undefined;
        rows(): $mol_view[];
        photo(owner_id: string): any;
        owner_id(owner_id: string): string;
        name(owner_id: string): any;
        members_count(owner_id: string): any;
        posts_counts(owner_id: string): any;
        views(owner_id: string): string;
        likes(owner_id: string): string;
        reposts(owner_id: string): string;
        comments(owner_id: string): string;
        erv(owner_id: string): string;
        sum_members_count(): string;
        sum_posts_counts(): string;
        sum_views(): string;
        sum_likes(): string;
        sum_reposts(): string;
        sum_comments(): string;
    }
}

declare namespace $ {

	type _shm_hitalama_posts_multi_1 = $mol_type_enforce<
		Parameters< $shm_hitalama_posts_multi['collect'] >[0]
		,
		Parameters< $shm_hitalama_posts_multi['Posts_by_owner'] >[0]
	>
	type _shm_hitalama_posts_multi_2 = $mol_type_enforce<
		Parameters< $shm_hitalama_posts_multi['collect'] >[1]
		,
		Parameters< $shm_hitalama_posts_multi['Posts_by_owner'] >[0]
	>
	type _shm_hitalama_posts_multi_3 = $mol_type_enforce<
		Parameters< $shm_hitalama_posts_multi['dto_by_owner'] >[0]
		,
		Parameters< $shm_hitalama_posts_multi['Posts_by_owner'] >[0]
	>
	type _shm_hitalama_posts_multi_4 = $mol_type_enforce<
		Parameters< $shm_hitalama_posts_multi['posts_pending'] >[0]
		,
		Parameters< $shm_hitalama_posts_multi['Posts_by_owner'] >[0]
	>
	type $shm_hitalama_posts__token_str_shm_hitalama_posts_multi_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_multi['token_str'] >
		,
		ReturnType< $shm_hitalama_posts['token_str'] >
	>
	type $shm_hitalama_posts__owner_id_shm_hitalama_posts_multi_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_multi['owner_id'] >
		,
		ReturnType< $shm_hitalama_posts['owner_id'] >
	>
	export class $shm_hitalama_posts_multi extends $mol_ghost {
		collect( id: any, next?: ReturnType< ReturnType< $shm_hitalama_posts_multi['Posts_by_owner'] >['collect'] > ): ReturnType< ReturnType< $shm_hitalama_posts_multi['Posts_by_owner'] >['collect'] >
		dto_by_owner( id: any): ReturnType< ReturnType< $shm_hitalama_posts_multi['Posts_by_owner'] >['dto'] >
		posts_pending( id: any): ReturnType< ReturnType< $shm_hitalama_posts_multi['Posts_by_owner'] >['pending'] >
		owner_ids( ): readonly(string)[]
		Posts_by_owner( id: any): $shm_hitalama_posts
		post_id( id: any): string
		post_date( id: any): string
		post_likes( id: any): string
		post_reposts( id: any): string
		post_comments( id: any): string
		post_views( id: any): string
	}
	
}

//# sourceMappingURL=multi.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_posts_multi extends $.$shm_hitalama_posts_multi {
        post_id([dto_i, i]: [number, number]): string;
        post_date([dto_i, i]: [number, number]): string;
        post_likes([dto_i, i]: [number, number]): string;
        post_reposts([dto_i, i]: [number, number]): string;
        post_comments([dto_i, i]: [number, number]): string;
        post_views([dto_i, i]: [number, number]): string;
    }
}

declare namespace $ {

	type $mol_view__sub_shm_hitalama_posts_table_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_posts_table_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_posts_table_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_posts_table_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_posts_table_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_posts_table_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_shm_hitalama_posts_table_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['post_id'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_posts_table_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['post_date'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_posts_table_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['post_likes'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_posts_table_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['post_reposts'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_posts_table_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['post_comments'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_posts_table_12 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['post_views'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_shm_hitalama_posts_table_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $shm_hitalama_table__head_shm_hitalama_posts_table_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $shm_hitalama_table['head'] >
	>
	type $shm_hitalama_table__rows_shm_hitalama_posts_table_15 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_table['posts_rows'] >
		,
		ReturnType< $shm_hitalama_table['rows'] >
	>
	export class $shm_hitalama_posts_table extends $shm_hitalama_posts_multi {
		Head_id( ): $mol_view
		Head_date( ): $mol_view
		Head_likes( ): $mol_view
		Head_reposts( ): $mol_view
		Head_comments( ): $mol_view
		Head_views( ): $mol_view
		Post_id( id: any): $mol_paragraph
		Post_date( id: any): $mol_paragraph
		Post_likes( id: any): $mol_paragraph
		Post_reposts( id: any): $mol_paragraph
		Post_comments( id: any): $mol_paragraph
		Post_views( id: any): $mol_paragraph
		Post_row( id: any): $mol_view
		posts_rows( ): readonly(any)[]
		Table( ): $shm_hitalama_table
		Sub( ): ReturnType< $shm_hitalama_posts_table['Table'] >
	}
	
}

//# sourceMappingURL=table.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_posts_table extends $.$shm_hitalama_posts_table {
        posts_rows(): any[];
    }
}

declare namespace $ {

	type $mol_gallery__style_mol_gallery_1 = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items_mol_gallery_2 = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_gallery extends $.$mol_gallery {
        sub(): readonly $mol_view[];
        side_items(id: number): $mol_view[];
        side_size(id: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_group extends $mol_svg {
		dom_name( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {

	export class $mol_svg_title extends $mol_svg {
		dom_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=title.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range_mol_plot_graph_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_graph_8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d_mol_plot_graph_9 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['viewport_x'] >, ReturnType< $mol_plot_graph['viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_graph_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_graph_11 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_pane_x'] >, ReturnType< $mol_plot_graph['dimensions_pane_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_graph_12 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_x'] >, ReturnType< $mol_plot_graph['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_graph_13 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_graph_14 = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['gap_x'] >, ReturnType< $mol_plot_graph['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_svg_title__title_mol_plot_graph_15 = $mol_type_enforce<
		ReturnType< $mol_plot_graph['hint'] >
		,
		ReturnType< $mol_svg_title['title'] >
	>
	export class $mol_plot_graph extends $mol_svg_group {
		type( ): string
		color( ): string
		viewport_x( ): $mol_vector_range<number>
		viewport_y( ): $mol_vector_range<number>
		dimensions_pane_x( ): $mol_vector_range<number>
		dimensions_pane_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		title( ): string
		hint( ): ReturnType< $mol_plot_graph['title'] >
		series_x( ): readonly(number)[]
		series_y( ): readonly(number)[]
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph['type'] >,
		})  & ReturnType< $mol_svg_group['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph['color'] >,
		})  & ReturnType< $mol_svg_group['style'] >
		viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		shift( ): readonly(number)[]
		scale( ): readonly(number)[]
		cursor_position( ): $mol_vector_2d<number>
		dimensions_pane( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		size_real( ): $mol_vector_2d<number>
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		repos_x( id: any): number
		repos_y( id: any): number
		indexes( ): readonly(number)[]
		points( ): readonly(readonly(number)[])[]
		front( ): readonly($mol_svg)[]
		back( ): readonly($mol_svg)[]
		Hint( ): $mol_svg_title
		hue( next?: number ): number
		Sample( ): any
	}
	
	export class $mol_plot_graph_sample extends $mol_view {
		type( ): string
		color( ): string
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph_sample['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph_sample['color'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=graph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        indexes(): readonly number[];
        repos_x(val: number): number;
        repos_y(val: number): number;
        points(): readonly (readonly number[])[];
        series_x(): readonly number[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        color(): string;
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_gallery__items_mol_chart_legend_1 = $mol_type_enforce<
		ReturnType< $mol_chart_legend['graph_legends'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_view__sub_mol_chart_legend_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_chart_legend_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_chart_legend_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_chart_legend extends $mol_scroll {
		graph_legends( ): readonly($mol_view)[]
		Gallery( ): $mol_gallery
		Graph_sample( id: any): any
		Graph_sample_box( id: any): $mol_view
		graph_title( id: any): string
		Graph_title( id: any): $mol_view
		graphs( ): readonly($mol_plot_graph)[]
		graphs_front( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
		Graph_legend( id: any): $mol_view
	}
	
}

//# sourceMappingURL=legend.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): readonly $mol_plot_graph[];
        graph_legends(): readonly $mol_view[];
        graph_title(index: number): string;
        Graph_sample(index: number): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_2d_mol_touch_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_touch_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_touch_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        event_leave(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {

	type $mol_vector_range_mol_plot_pane_1 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_left'] >, ReturnType< $mol_plot_pane['gap_right'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_2 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_bottom'] >, ReturnType< $mol_plot_pane['gap_top'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_6 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_9 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_pane_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_touch__zoom_mol_plot_pane_11 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan_mol_plot_pane_12 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['shift'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	type $mol_touch__allow_draw_mol_plot_pane_13 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_draw'] >
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan_mol_plot_pane_14 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_touch__allow_zoom_mol_plot_pane_15 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_zoom'] >
		,
		ReturnType< $mol_touch['allow_zoom'] >
	>
	type $mol_touch__draw_start_mol_plot_pane_16 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_start'] >
		,
		ReturnType< $mol_touch['draw_start'] >
	>
	type $mol_touch__draw_mol_plot_pane_17 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw'] >
		,
		ReturnType< $mol_touch['draw'] >
	>
	type $mol_touch__draw_end_mol_plot_pane_18 = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_end'] >
		,
		ReturnType< $mol_touch['draw_end'] >
	>
	type $mol_vector_2d_mol_plot_pane_19 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_x'] >, ReturnType< $mol_plot_pane['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_pane_20 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['shift_limit_x'] >, ReturnType< $mol_plot_pane['shift_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_pane_21 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_pane_22 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_pane_23 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['scale_limit_x'] >, ReturnType< $mol_plot_pane['scale_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_pane_24 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_pane_25 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_pane_26 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_pane_27 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d_mol_plot_pane_28 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_x'] >, ReturnType< $mol_plot_pane['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d_mol_plot_pane_29 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_viewport_x'] >, ReturnType< $mol_plot_pane['dimensions_viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_pane extends $mol_svg_root {
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		shift_limit_x( ): $mol_vector_range<number>
		shift_limit_y( ): $mol_vector_range<number>
		scale_limit_x( ): $mol_vector_range<number>
		scale_limit_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		dimensions_viewport_x( ): $mol_vector_range<number>
		dimensions_viewport_y( ): $mol_vector_range<number>
		graphs_sorted( ): readonly($mol_svg)[]
		graphs( ): readonly($mol_plot_graph)[]
		graphs_positioned( ): ReturnType< $mol_plot_pane['graphs'] >
		graphs_visible( ): ReturnType< $mol_plot_pane['graphs_positioned'] >
		zoom( next?: number ): number
		cursor_position( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['pointer_center'] >
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_type'] >
		action_point( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_point'] >
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		Touch( ): $mol_touch
		aspect( ): string
		hue_base( next?: number ): number
		hue_shift( next?: number ): number
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_right( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_top( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap_bottom( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_default( ): $mol_vector_2d<number>
		shift( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		scale_default( ): $mol_vector_2d<number>
		scale( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_x( next?: number ): number
		scale_y( next?: number ): number
		size( ): $mol_vector_2d<number>
		size_real( ): $mol_vector_2d<number>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions_viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): ReturnType< $mol_plot_pane['graphs_sorted'] >
		graphs_colored( ): ReturnType< $mol_plot_pane['graphs_visible'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pane.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size(): $mol_vector_2d<number>;
        graph_hue(index: number): number;
        graphs_colored(): $.$mol_plot_graph[];
        size_real(): $mol_vector_2d<number>;
        view_box(): string;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        scale_x(next?: number): number;
        scale_y(next?: number): number;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        graph_touched: boolean;
        shift(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        reset(event?: Event): void;
        graphs_visible(): $.$mol_plot_graph[];
        graphs_positioned(): readonly $.$mol_plot_graph[];
        dimensions_viewport(): $mol_vector<$mol_vector_range<number>, 2>;
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_chart_legend__graphs_mol_chart_1 = $mol_type_enforce<
		ReturnType< $mol_chart['graphs_colored'] >
		,
		ReturnType< $mol_chart_legend['graphs'] >
	>
	type _mol_chart_2 = $mol_type_enforce<
		Parameters< $mol_chart['zoom'] >[0]
		,
		Parameters< ReturnType< $mol_chart['Plot'] >['scale_x'] >[0]
	>
	type $mol_plot_pane__zoom_mol_chart_3 = $mol_type_enforce<
		ReturnType< $mol_chart['zoom'] >
		,
		ReturnType< $mol_plot_pane['zoom'] >
	>
	type $mol_plot_pane__gap_left_mol_chart_4 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_left'] >
		,
		ReturnType< $mol_plot_pane['gap_left'] >
	>
	type $mol_plot_pane__gap_right_mol_chart_5 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_right'] >
		,
		ReturnType< $mol_plot_pane['gap_right'] >
	>
	type $mol_plot_pane__gap_bottom_mol_chart_6 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_bottom'] >
		,
		ReturnType< $mol_plot_pane['gap_bottom'] >
	>
	type $mol_plot_pane__gap_top_mol_chart_7 = $mol_type_enforce<
		ReturnType< $mol_chart['gap_top'] >
		,
		ReturnType< $mol_plot_pane['gap_top'] >
	>
	type $mol_plot_pane__graphs_mol_chart_8 = $mol_type_enforce<
		ReturnType< $mol_chart['graphs'] >
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	type $mol_plot_pane__hue_base_mol_chart_9 = $mol_type_enforce<
		ReturnType< $mol_chart['hue_base'] >
		,
		ReturnType< $mol_plot_pane['hue_base'] >
	>
	type $mol_plot_pane__hue_shift_mol_chart_10 = $mol_type_enforce<
		ReturnType< $mol_chart['hue_shift'] >
		,
		ReturnType< $mol_plot_pane['hue_shift'] >
	>
	export class $mol_chart extends $mol_view {
		Legend( ): $mol_chart_legend
		zoom( next?: ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] > ): ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] >
		graphs_colored( ): ReturnType< ReturnType< $mol_chart['Plot'] >['graphs_colored'] >
		hue_base( ): number
		hue_shift( ): number
		Plot( ): $mol_plot_pane
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_chart['gap_hor'] >
		gap_right( ): ReturnType< $mol_chart['gap_hor'] >
		gap_bottom( ): ReturnType< $mol_chart['gap_vert'] >
		gap_top( ): ReturnType< $mol_chart['gap_vert'] >
		graphs( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chart.view.tree.d.ts.map
declare namespace $ {

	type $mol_plot_graph_sample__color_mol_plot_line_1 = $mol_type_enforce<
		ReturnType< $mol_plot_line['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	type $mol_plot_graph_sample__type_mol_plot_line_2 = $mol_type_enforce<
		ReturnType< $mol_plot_line['type'] >
		,
		ReturnType< $mol_plot_graph_sample['type'] >
	>
	export class $mol_plot_line extends $mol_plot_graph {
		curve( ): string
		threshold( ): number
		spacing( ): number
		color_fill( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_plot_line['curve'] >,
		})  & ReturnType< $mol_plot_graph['attr'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_line extends $.$mol_plot_line {
        sub(): readonly any[];
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_coord_pack(high: number, low: number): number;
    function $mol_coord_high(pack: number): number;
    function $mol_coord_low(pack: number): number;
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_plot_dot_1 = $mol_type_enforce<
		ReturnType< $mol_plot_dot['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_plot_graph_sample__color_mol_plot_dot_2 = $mol_type_enforce<
		ReturnType< $mol_plot_dot['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	export class $mol_plot_dot extends $mol_plot_graph {
		diameter( ): number
		curve( ): string
		Curve( ): $mol_svg_path
		points_max( ): number
		aspect( ): number
		style( ): ({ 
			'stroke-width': ReturnType< $mol_plot_dot['diameter'] >,
		})  & ReturnType< $mol_plot_graph['style'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=dot.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_plot_graph_sample__sub_mol_plot_group_1 = $mol_type_enforce<
		ReturnType< $mol_plot_group['graph_samples'] >
		,
		ReturnType< $mol_plot_graph_sample['sub'] >
	>
	export class $mol_plot_group extends $mol_plot_graph {
		graphs( ): readonly($mol_plot_graph)[]
		graphs_enriched( ): ReturnType< $mol_plot_group['graphs'] >
		graph_samples( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_plot_group['graphs_enriched'] >
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_group extends $.$mol_plot_group {
        graphs_enriched(): readonly $.$mol_plot_graph[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        graph_samples(): any[];
        back(): $mol_plot_graph[];
        front(): $mol_plot_graph[];
    }
}

declare namespace $ {

	export class $mol_svg_rect extends $mol_svg {
		width( ): string
		height( ): string
		pos_x( ): string
		pos_y( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'width': ReturnType< $mol_svg_rect['width'] >,
			'height': ReturnType< $mol_svg_rect['height'] >,
			'x': ReturnType< $mol_svg_rect['pos_x'] >,
			'y': ReturnType< $mol_svg_rect['pos_y'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=rect.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {

	export class $mol_svg_text extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		align( ): string
		align_hor( ): ReturnType< $mol_svg_text['align'] >
		align_vert( ): string
		text( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_text['pos_x'] >,
			'y': ReturnType< $mol_svg_text['pos_y'] >,
			'text-anchor': ReturnType< $mol_svg_text['align_hor'] >,
			'alignment-baseline': ReturnType< $mol_svg_text['align_vert'] >,
		})  & ReturnType< $mol_svg['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {

	type $mol_svg_rect__pos_x_mol_plot_ruler_1 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_x'] >
		,
		ReturnType< $mol_svg_rect['pos_x'] >
	>
	type $mol_svg_rect__pos_y_mol_plot_ruler_2 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_y'] >
		,
		ReturnType< $mol_svg_rect['pos_y'] >
	>
	type $mol_svg_rect__width_mol_plot_ruler_3 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height_mol_plot_ruler_4 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_path__geometry_mol_plot_ruler_5 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text__pos_x_mol_plot_ruler_6 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_x'] >
		,
		ReturnType< $mol_svg_text['pos_x'] >
	>
	type $mol_svg_text__pos_y_mol_plot_ruler_7 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_y'] >
		,
		ReturnType< $mol_svg_text['pos_y'] >
	>
	type $mol_svg_text__align_mol_plot_ruler_8 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__text_mol_plot_ruler_9 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_vector_range_mol_plot_ruler_10 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_ruler_11 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_text__pos_mol_plot_ruler_12 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_pos'] >
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__text_mol_plot_ruler_13 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_text'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_svg_text__align_mol_plot_ruler_14 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	export class $mol_plot_ruler extends $mol_plot_graph {
		background_x( ): string
		background_y( ): string
		background_width( ): string
		background_height( ): string
		Background( ): $mol_svg_rect
		curve( ): string
		Curve( ): $mol_svg_path
		labels_formatted( ): readonly(any)[]
		title_pos_x( ): string
		title_pos_y( ): string
		title_align( ): string
		Title( ): $mol_svg_text
		label_pos_x( id: any): string
		label_pos_y( id: any): string
		label_pos( id: any): readonly(any)[]
		label_text( id: any): string
		label_align( ): string
		step( ): number
		scale_axis( ): number
		scale_step( ): number
		shift_axis( ): number
		dimensions_axis( ): $mol_vector_range<number>
		viewport_axis( ): $mol_vector_range<number>
		axis_points( ): readonly(number)[]
		normalize( next?: number ): number
		precision( ): number
		sub( ): readonly(any)[]
		Label( id: any): $mol_svg_text
	}
	
}

//# sourceMappingURL=ruler.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $.$mol_svg_text[];
        step(): number;
        snap_to_grid(coord: number): number;
        axis_points(): number[];
        precision(): number;
        label_text(index: number): string;
        font_size(): number;
        back(): $mol_svg_path[];
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_vert extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_y( ): string
		label_pos_x( id: any): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
		background_height( ): string
		background_width( ): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
	}
	
}

//# sourceMappingURL=vert.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        title_pos_x(): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_hor extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_x( ): string
		title_pos_y( ): string
		label_pos_y( id: any): ReturnType< $mol_plot_ruler_hor['title_pos_y'] >
		background_width( ): string
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        label_pos_x(index: number): string;
        background_y(): string;
        title_pos_y(): string;
        background_height(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
		labels( ): readonly(string)[]
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
        series_x(): readonly number[];
        labels(): readonly string[];
        visible_indexes(): number[];
        curve(): string;
        label_text(index: number): string;
        labels_formatted(): $.$mol_svg_text[];
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(font: string, text: string): number;
}

declare namespace $ {

	type $mol_svg_rect__width_mol_svg_text_box_1 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height_mol_svg_text_box_2 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_rect__pos_mol_svg_text_box_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_rect['pos'] >
	>
	type $mol_svg_text__pos_mol_svg_text_box_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__align_mol_svg_text_box_5 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__sub_mol_svg_text_box_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['sub'] >
	>
	export class $mol_svg_text_box extends $mol_svg_group {
		box_width( ): string
		box_height( ): string
		box_pos_x( ): ReturnType< $mol_svg_text_box['pos_x'] >
		box_pos_y( ): string
		Back( ): $mol_svg_rect
		pos_x( ): string
		pos_y( ): string
		align( ): string
		text( ): string
		Text( ): $mol_svg_text
		font_size( ): number
		width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text_box extends $.$mol_svg_text_box {
        box_width(): string;
        width(): number;
        box_pos_x(): string;
        box_pos_y(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_range_mol_plot_mark_cross_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range_mol_plot_mark_cross_2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_path__geometry_mol_plot_mark_cross_3 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text_box__pos_x_mol_plot_mark_cross_4 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y_mol_plot_mark_cross_5 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text_mol_plot_mark_cross_6 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_svg_text_box__pos_x_mol_plot_mark_cross_7 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y_mol_plot_mark_cross_8 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text_mol_plot_mark_cross_9 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_vector_2d_mol_plot_mark_cross_10 = $mol_type_enforce<
		[ ReturnType< $mol_plot_mark_cross['dimensions_x'] >, ReturnType< $mol_plot_mark_cross['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_mark_cross extends $mol_plot_graph {
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		curve( ): string
		Curve( ): $mol_svg_path
		title_x_pos_x( ): string
		title_x_pos_y( ): string
		title_x( ): string
		Label_x( ): $mol_svg_text_box
		title_y_pos_x( ): string
		title_y_pos_y( ): string
		title_y( ): string
		Label_y( ): $mol_svg_text_box
		labels( ): readonly(string)[]
		title_x_gap( ): number
		title_y_gap( ): number
		threshold( ): number
		graphs( ): readonly($mol_plot_graph)[]
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
        nearest(): {
            value: $mol_vector_2d<number>;
            scaled: $mol_vector_2d<number>;
            index: number;
        } | null;
        curve(): string;
        title_x(): string;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_y(): string;
        title_y_pos_y(): string;
        title_y_pos_x(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_paragraph__title_shm_hitalama_posts_plots_chart_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots_chart['title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_plot_group__title_shm_hitalama_posts_plots_chart_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots_chart['group_name'] >
		,
		ReturnType< $mol_plot_group['title'] >
	>
	type $mol_plot_group__series_y_shm_hitalama_posts_plots_chart_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots_chart['series_y'] >
		,
		ReturnType< $mol_plot_group['series_y'] >
	>
	type $mol_plot_group__graphs_shm_hitalama_posts_plots_chart_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_group['graphs'] >
	>
	type $mol_plot_mark_hor__labels_shm_hitalama_posts_plots_chart_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
		,
		ReturnType< $mol_plot_mark_hor['labels'] >
	>
	type $mol_plot_mark_cross__labels_shm_hitalama_posts_plots_chart_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs_shm_hitalama_posts_plots_chart_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	export class $shm_hitalama_posts_plots_chart extends $mol_chart {
		Title( ): $mol_paragraph
		group_name( id: any): string
		series_y( id: any): readonly(any)[]
		Line( id: any): $mol_plot_line
		Dot( id: any): $mol_plot_dot
		Group( id: any): $mol_plot_group
		groups( ): readonly(any)[]
		Vert_ruler( ): $mol_plot_ruler_vert
		labels( ): readonly(string)[]
		Marker_hor( ): $mol_plot_mark_hor
		Marker_cross( ): $mol_plot_mark_cross
		group_ids( ): readonly(string)[]
		sub( ): readonly(any)[]
		graphs( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chart.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_posts_plots_chart extends $.$shm_hitalama_posts_plots_chart {
        groups(): $.$mol_plot_group[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $shm_hitalama_posts_plots_chart__title_shm_hitalama_posts_plots_1 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_plots_chart['title'] >
	>
	type $shm_hitalama_posts_plots_chart__group_ids_shm_hitalama_posts_plots_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_ids'] >
	>
	type $shm_hitalama_posts_plots_chart__group_name_shm_hitalama_posts_plots_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['group_name'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_name'] >
	>
	type $shm_hitalama_posts_plots_chart__series_y_shm_hitalama_posts_plots_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['views'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['series_y'] >
	>
	type $shm_hitalama_posts_plots_chart__labels_shm_hitalama_posts_plots_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['labels'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
	>
	type $shm_hitalama_posts_plots_chart__title_shm_hitalama_posts_plots_6 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_plots_chart['title'] >
	>
	type $shm_hitalama_posts_plots_chart__group_ids_shm_hitalama_posts_plots_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_ids'] >
	>
	type $shm_hitalama_posts_plots_chart__group_name_shm_hitalama_posts_plots_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['group_name'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_name'] >
	>
	type $shm_hitalama_posts_plots_chart__series_y_shm_hitalama_posts_plots_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['posts'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['series_y'] >
	>
	type $shm_hitalama_posts_plots_chart__labels_shm_hitalama_posts_plots_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['labels'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
	>
	type $shm_hitalama_posts_plots_chart__title_shm_hitalama_posts_plots_11 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_plots_chart['title'] >
	>
	type $shm_hitalama_posts_plots_chart__group_ids_shm_hitalama_posts_plots_12 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_ids'] >
	>
	type $shm_hitalama_posts_plots_chart__group_name_shm_hitalama_posts_plots_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['group_name'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_name'] >
	>
	type $shm_hitalama_posts_plots_chart__series_y_shm_hitalama_posts_plots_14 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['likes'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['series_y'] >
	>
	type $shm_hitalama_posts_plots_chart__labels_shm_hitalama_posts_plots_15 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['labels'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
	>
	type $shm_hitalama_posts_plots_chart__title_shm_hitalama_posts_plots_16 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_plots_chart['title'] >
	>
	type $shm_hitalama_posts_plots_chart__group_ids_shm_hitalama_posts_plots_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_ids'] >
	>
	type $shm_hitalama_posts_plots_chart__group_name_shm_hitalama_posts_plots_18 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['group_name'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_name'] >
	>
	type $shm_hitalama_posts_plots_chart__series_y_shm_hitalama_posts_plots_19 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['reposts'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['series_y'] >
	>
	type $shm_hitalama_posts_plots_chart__labels_shm_hitalama_posts_plots_20 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['labels'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
	>
	type $shm_hitalama_posts_plots_chart__title_shm_hitalama_posts_plots_21 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_plots_chart['title'] >
	>
	type $shm_hitalama_posts_plots_chart__group_ids_shm_hitalama_posts_plots_22 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_ids'] >
	>
	type $shm_hitalama_posts_plots_chart__group_name_shm_hitalama_posts_plots_23 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['group_name'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['group_name'] >
	>
	type $shm_hitalama_posts_plots_chart__series_y_shm_hitalama_posts_plots_24 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['comments'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['series_y'] >
	>
	type $shm_hitalama_posts_plots_chart__labels_shm_hitalama_posts_plots_25 = $mol_type_enforce<
		ReturnType< $shm_hitalama_posts_plots['labels'] >
		,
		ReturnType< $shm_hitalama_posts_plots_chart['labels'] >
	>
	type $mol_list__sub_shm_hitalama_posts_plots_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	export class $shm_hitalama_posts_plots extends $shm_hitalama_posts_multi {
		group_name( id: any): string
		views( id: any): readonly(any)[]
		labels( ): readonly(string)[]
		Views( ): $shm_hitalama_posts_plots_chart
		posts( id: any): readonly(any)[]
		Posts( ): $shm_hitalama_posts_plots_chart
		likes( id: any): readonly(any)[]
		Likes( ): $shm_hitalama_posts_plots_chart
		reposts( id: any): readonly(any)[]
		Reposts( ): $shm_hitalama_posts_plots_chart
		comments( id: any): readonly(any)[]
		Comments( ): $shm_hitalama_posts_plots_chart
		Charts( ): $mol_list
		Sub( ): ReturnType< $shm_hitalama_posts_plots['Charts'] >
	}
	
}

//# sourceMappingURL=plots.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_posts_plots extends $.$shm_hitalama_posts_plots {
        traversed(): {
            indexes: Map<string, number>;
            moments: string[];
            posts_count: Map<string, number>;
        };
        moments(): string[];
        labels(): string[];
        likes(owner_id: string): number[];
        posts(owner_id: string): (number | undefined)[];
        reposts(owner_id: string): number[];
        comments(owner_id: string): number[];
        views(owner_id: string): number[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_switch__value_mol_deck_1 = $mol_type_enforce<
		ReturnType< $mol_deck['current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_mol_deck_2 = $mol_type_enforce<
		ReturnType< $mol_deck['switch_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	export class $mol_deck extends $mol_list {
		current( next?: string ): string
		switch_options( ): Record<string, any>
		Switch( ): $mol_switch
		Content( ): $mol_view
		items( ): readonly($mol_view)[]
		rows( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=deck.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): $mol_view;
    }
}

declare namespace $ {

	type $mol_section__title_shm_hitalama_analysis_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['title'] >
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_select__trigger_content_shm_hitalama_analysis_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['trigger_content'] >
	>
	type $mol_select__dictionary_shm_hitalama_analysis_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['lists_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__value_shm_hitalama_analysis_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['selected_list_ref'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_button_major__title_shm_hitalama_analysis_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_shm_hitalama_analysis_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['collect'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__title_shm_hitalama_analysis_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_shm_hitalama_analysis_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['collect_cancel'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $shm_hitalama_group_search__search_label_shm_hitalama_analysis_9 = $mol_type_enforce<
		readonly($mol_view_content)[]
		,
		ReturnType< $shm_hitalama_group_search['search_label'] >
	>
	type $shm_hitalama_group_search__search_click_shm_hitalama_analysis_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['cancel_select_list'] >
		,
		ReturnType< $shm_hitalama_group_search['search_click'] >
	>
	type $shm_hitalama_group_search__token_str_shm_hitalama_analysis_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['token_str'] >
		,
		ReturnType< $shm_hitalama_group_search['token_str'] >
	>
	type $shm_hitalama_group_search__buttons_shm_hitalama_analysis_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $shm_hitalama_group_search['buttons'] >
	>
	type $mol_text__text_shm_hitalama_analysis_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['selected_list_name'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_analysis_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $shm_hitalama_analysis_summary__token_str_shm_hitalama_analysis_16 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['token_str'] >
		,
		ReturnType< $shm_hitalama_analysis_summary['token_str'] >
	>
	type $shm_hitalama_analysis_summary__owner_ids_shm_hitalama_analysis_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['owner_ids'] >
		,
		ReturnType< $shm_hitalama_analysis_summary['owner_ids'] >
	>
	type $shm_hitalama_analysis_summary__posts_dto_by_owner_shm_hitalama_analysis_18 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['posts_dto_by_owner'] >
		,
		ReturnType< $shm_hitalama_analysis_summary['posts_dto_by_owner'] >
	>
	type $mol_labeler__title_shm_hitalama_analysis_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_analysis_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $shm_hitalama_posts_table__title_shm_hitalama_analysis_21 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_table['title'] >
	>
	type $shm_hitalama_posts_table__owner_ids_shm_hitalama_analysis_22 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_table['owner_ids'] >
	>
	type $shm_hitalama_posts_table__Posts_by_owner_shm_hitalama_analysis_23 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['Posts_by_owner'] >
		,
		ReturnType< $shm_hitalama_posts_table['Posts_by_owner'] >
	>
	type $shm_hitalama_posts_plots__title_shm_hitalama_analysis_24 = $mol_type_enforce<
		string
		,
		ReturnType< $shm_hitalama_posts_plots['title'] >
	>
	type $shm_hitalama_posts_plots__owner_ids_shm_hitalama_analysis_25 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['owner_ids'] >
		,
		ReturnType< $shm_hitalama_posts_plots['owner_ids'] >
	>
	type $shm_hitalama_posts_plots__group_name_shm_hitalama_analysis_26 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['group_name'] >
		,
		ReturnType< $shm_hitalama_posts_plots['group_name'] >
	>
	type $shm_hitalama_posts_plots__Posts_by_owner_shm_hitalama_analysis_27 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['Posts_by_owner'] >
		,
		ReturnType< $shm_hitalama_posts_plots['Posts_by_owner'] >
	>
	type $mol_deck__items_shm_hitalama_analysis_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_deck['items'] >
	>
	type $mol_paragraph__title_shm_hitalama_analysis_29 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['loader_message'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__sub_shm_hitalama_analysis_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type _shm_hitalama_analysis_31 = $mol_type_enforce<
		Parameters< $shm_hitalama_analysis['collect_by_owner'] >[0]
		,
		Parameters< $shm_hitalama_analysis['Posts_by_owner'] >[0]
	>
	type _shm_hitalama_analysis_32 = $mol_type_enforce<
		Parameters< $shm_hitalama_analysis['collect_by_owner'] >[1]
		,
		Parameters< $shm_hitalama_analysis['Posts_by_owner'] >[0]
	>
	type _shm_hitalama_analysis_33 = $mol_type_enforce<
		Parameters< $shm_hitalama_analysis['posts_dto_by_owner'] >[0]
		,
		Parameters< $shm_hitalama_analysis['Posts_by_owner'] >[0]
	>
	type _shm_hitalama_analysis_34 = $mol_type_enforce<
		Parameters< $shm_hitalama_analysis['posts_pending'] >[0]
		,
		Parameters< $shm_hitalama_analysis['Posts_by_owner'] >[0]
	>
	type $mol_text__text_shm_hitalama_analysis_35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__sub_shm_hitalama_analysis_36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $shm_hitalama_posts__token_str_shm_hitalama_analysis_37 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['token_str'] >
		,
		ReturnType< $shm_hitalama_posts['token_str'] >
	>
	type $shm_hitalama_posts__owner_id_shm_hitalama_analysis_38 = $mol_type_enforce<
		ReturnType< $shm_hitalama_analysis['owner_id'] >
		,
		ReturnType< $shm_hitalama_posts['owner_id'] >
	>
	export class $shm_hitalama_analysis extends $mol_list {
		auto_collect( ): any
		Section( ): $mol_section
		search_reset( ): ReturnType< ReturnType< $shm_hitalama_analysis['Search'] >['reset'] >
		search_title( ): string
		lists_dict( ): Record<string, any>
		selected_list_ref( next?: string ): string
		List_select( ): $mol_select
		cancel_select_list( ): any
		search_owner_id( ): ReturnType< ReturnType< $shm_hitalama_analysis['Search'] >['owner_id'] >
		search_dto( ): ReturnType< ReturnType< $shm_hitalama_analysis['Search'] >['dto'] >
		collect( next?: any ): any
		Collect( ): $mol_button_major
		collect_cancel( next?: any ): any
		Cancel( ): $mol_button_major
		collect_button( ): readonly(any)[]
		Search( ): $shm_hitalama_group_search
		selected_list_name( ): string
		List_name( ): $mol_text
		List( ): $mol_view
		list_view( ): readonly(any)[]
		Collect_block( ): $mol_view
		owner_ids( ): readonly(any)[]
		Summary( ): $shm_hitalama_analysis_summary
		Summary_label( ): $mol_labeler
		Posts_table( ): $shm_hitalama_posts_table
		group_name( id: any): string
		Plots( ): $shm_hitalama_posts_plots
		Posts_deck( ): $mol_deck
		analysis( ): readonly(any)[]
		group_body( ): readonly(any)[]
		loader_message( id: any): string
		Loader_message( id: any): $mol_paragraph
		Loader( id: any): $mol_list
		collect_by_owner( id: any, next?: ReturnType< ReturnType< $shm_hitalama_analysis['Posts_by_owner'] >['collect'] > ): ReturnType< ReturnType< $shm_hitalama_analysis['Posts_by_owner'] >['collect'] >
		posts_dto_by_owner( id: any): ReturnType< ReturnType< $shm_hitalama_analysis['Posts_by_owner'] >['dto'] >
		posts_pending( id: any): ReturnType< ReturnType< $shm_hitalama_analysis['Posts_by_owner'] >['pending'] >
		title( ): string
		token( ): $shm_hitalama_token
		token_str( ): string
		No_auth_message( ): $mol_text
		collect_queue( next?: readonly(string)[] ): readonly(string)[]
		auto( ): readonly(any)[]
		collect_pending( ): boolean
		sub( ): readonly(any)[]
		Loaders( ): $mol_list
		Posts_by_owner( id: any): $shm_hitalama_posts
	}
	
}

//# sourceMappingURL=analysis.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_analysis extends $.$shm_hitalama_analysis {
        token_str(): string;
        group_body(): readonly any[];
        list_view(): readonly any[];
        selected_list_ref(next?: string): string;
        cancel_select_list(): void;
        owner_ids(): any;
        analysis(): readonly any[];
        lists_dict(): {
            [k: string]: any;
        };
        selected_list(): $hyoo_crus_node | null;
        selected_list_name(): any;
        owner_id(id: string): string;
        collect_pending(): boolean;
        collect_button(): readonly (any)[];
        collect_interval: number;
        auto_collect(): void;
        queue_eat(): void;
        collect(): void;
        collect_cancel(): void;
        group_name(owner_id: string): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_link__title_shm_hitalama_lists_creating_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_shm_hitalama_lists_creating_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['cancel_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_string__value_shm_hitalama_lists_creating_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_shm_hitalama_lists_creating_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_lists_creating_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_major__title_shm_hitalama_lists_creating_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_shm_hitalama_lists_creating_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['add'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $shm_hitalama_group_search__token_str_shm_hitalama_lists_creating_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['token_str'] >
		,
		ReturnType< $shm_hitalama_group_search['token_str'] >
	>
	type $shm_hitalama_group_search__buttons_shm_hitalama_lists_creating_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $shm_hitalama_group_search['buttons'] >
	>
	type $mol_view__sub_shm_hitalama_lists_creating_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_image__uri_shm_hitalama_lists_creating_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['photo_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_button_minor__sub_shm_hitalama_lists_creating_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_shm_hitalama_lists_creating_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_view__sub_shm_hitalama_lists_creating_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_lists_creating_15 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['groups'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__title_shm_hitalama_lists_creating_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_shm_hitalama_lists_creating_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['save'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__enabled_shm_hitalama_lists_creating_18 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists_creating['save_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	export class $shm_hitalama_lists_creating extends $mol_section {
		cancel_arg( ): Record<string, any>
		Creating_cancel( ): $mol_link
		name( next?: string ): string
		Name( ): $mol_string
		Name_label( ): $mol_labeler
		group_dto_current( ): ReturnType< ReturnType< $shm_hitalama_lists_creating['Search'] >['dto'] >
		add( next?: any ): any
		Add( ): $mol_button_major
		Search( ): $shm_hitalama_group_search
		Add_block( ): $mol_view
		photo_uri( id: any): string
		Photo( id: any): $mol_image
		Remove_icon( id: any): $mol_icon_close
		remove( id: any, next?: any ): any
		Remove( id: any): $mol_button_minor
		Group( id: any): $mol_view
		groups( ): readonly(any)[]
		Creating_list( ): $mol_view
		save( next?: any ): any
		save_enabled( ): boolean
		Save( ): $mol_button_major
		token( ): $shm_hitalama_token
		title( ): string
		param( ): string
		groups_list( next?: readonly(string)[] ): readonly(string)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=creating.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_lists_creating extends $.$shm_hitalama_lists_creating {
        token_str(): string;
        cancel_arg(): {
            [x: string]: null;
        };
        groups_map: Map<string, $shm_hitalama_group_dto>;
        add(): void;
        remove(id: string): void;
        groups(): $mol_view[];
        photo_uri(id: string): string;
        save_enabled(): boolean;
        save(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $shm_hitalama_lists_editing extends $shm_hitalama_lists_creating {
		title( ): string
		param( ): string
		list( ): $shm_hitalama_list
	}
	
}

//# sourceMappingURL=editing.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_lists_editing extends $.$shm_hitalama_lists_editing {
        name(next?: string): string;
        groups_map: Map<string, $shm_hitalama_group_dto>;
        groups_list(next?: string[]): string[];
        save(): void;
    }
}

declare namespace $ {

	type $mol_link__title_shm_hitalama_lists_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_shm_hitalama_lists_2 = $mol_type_enforce<
		({ 
			'create': boolean,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_paragraph__title_shm_hitalama_lists_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_link__title_shm_hitalama_lists_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg_shm_hitalama_lists_5 = $mol_type_enforce<
		({ 
			'edit': ReturnType< $shm_hitalama_lists['ref_str'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_button_minor__title_shm_hitalama_lists_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_lists_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['remove_list'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_view__sub_shm_hitalama_lists_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_image__uri_shm_hitalama_lists_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['group_photo_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_view__sub_shm_hitalama_lists_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_shm_hitalama_lists_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['groups'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__sub_shm_hitalama_lists_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_list__sub_shm_hitalama_lists_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['lists'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_section__title_shm_hitalama_lists_14 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['title'] >
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__content_shm_hitalama_lists_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['content'] >
	>
	type $shm_hitalama_lists_creating__token_shm_hitalama_lists_16 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['token'] >
		,
		ReturnType< $shm_hitalama_lists_creating['token'] >
	>
	type $shm_hitalama_lists_editing__token_shm_hitalama_lists_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['token'] >
		,
		ReturnType< $shm_hitalama_lists_editing['token'] >
	>
	type $shm_hitalama_lists_editing__list_shm_hitalama_lists_18 = $mol_type_enforce<
		ReturnType< $shm_hitalama_lists['list_editing'] >
		,
		ReturnType< $shm_hitalama_lists_editing['list'] >
	>
	export class $shm_hitalama_lists extends $mol_list {
		current_view( ): ReturnType< $shm_hitalama_lists['Main'] >
		Open_create( ): $mol_link
		name( id: any): string
		Name( id: any): $mol_paragraph
		ref_str( id: any): string
		Edit( id: any): $mol_link
		remove_list( id: any, next?: any ): any
		Remove( id: any): $mol_button_minor
		List_head( id: any): $mol_view
		group_photo_uri( id: any): string
		Photo( id: any): $mol_image
		Group( id: any): $mol_view
		groups( id: any): readonly(any)[]
		Groups( id: any): $mol_view
		List( id: any): $mol_list
		lists( ): readonly(any)[]
		Lists( ): $mol_list
		list_editing( ): $shm_hitalama_list
		title( ): string
		token( ): $shm_hitalama_token
		sub( ): readonly(any)[]
		Main( ): $mol_section
		Creating( ): $shm_hitalama_lists_creating
		Editing( ): $shm_hitalama_lists_editing
	}
	
}

//# sourceMappingURL=lists.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_lists extends $.$shm_hitalama_lists {
        current_view(): $.$mol_section;
        token_str(): string;
        group_list(ref: $hyoo_crus_ref): $hyoo_crus_node;
        name(ref: $hyoo_crus_ref): any;
        lists(): any;
        groups(ref: $hyoo_crus_ref): any;
        group_photo_uri(ref: $hyoo_crus_ref): any;
        ref_str(ref: $hyoo_crus_ref): string;
        list_editing(): $hyoo_crus_node;
        remove_list(ref: $hyoo_crus_ref): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_string_button extends $mol_string {
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	type $mol_string_button__value_shm_hitalama_entity_page_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_entity_page['title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_button_minor__title_shm_hitalama_entity_page_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_entity_page['cut_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_entity_page_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_entity_page['cut'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	export class $shm_hitalama_entity_page extends $mol_page {
		title( next?: string ): string
		Title( ): $mol_string_button
		cut_title( ): string
		cut( next?: any ): any
		Cut( ): $mol_button_minor
		entity( ): $hyoo_crus_entity
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_entity_page extends $.$shm_hitalama_entity_page {
        title(next?: string): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_button_minor__hint_shm_hitalama_entity_catalog_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_shm_hitalama_entity_catalog_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_entity_catalog['add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_shm_hitalama_entity_catalog_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $shm_hitalama_entity_page__entity_shm_hitalama_entity_catalog_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_entity_catalog['entity'] >
		,
		ReturnType< $shm_hitalama_entity_page['entity'] >
	>
	type $shm_hitalama_entity_page__cut_shm_hitalama_entity_catalog_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_entity_catalog['cut'] >
		,
		ReturnType< $shm_hitalama_entity_page['cut'] >
	>
	export class $shm_hitalama_entity_catalog extends $mol_book2_catalog {
		add( next?: any ): any
		Add_icon( ): $mol_icon_plus
		Add( ): $mol_button_minor
		entity( id: any): $hyoo_crus_entity
		cut( id: any): any
		menu_title( ): string
		param( ): string
		list( ): any
		menu_tools( ): readonly(any)[]
		title_default( ): string
		entities( ): readonly($hyoo_crus_entity)[]
		Page( id: any): $shm_hitalama_entity_page
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_entity_catalog extends $.$shm_hitalama_entity_catalog {
        list(): InstanceType<ReturnType<typeof $hyoo_crus_list_ref_to>>;
        add(): any;
        cut(id: string): void;
        entity(id: string): $hyoo_crus_node;
        entities(): readonly any[];
        spreads(): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files_mol_button_open_1 = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept_mol_button_open_2 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple_mol_button_open_3 = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(any)[] ): readonly(any)[]
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(any)[] ): readonly(any)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_row__sub_mol_attach_1 = $mol_type_enforce<
		ReturnType< $mol_attach['content'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_image__title_mol_attach_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_attach_3 = $mol_type_enforce<
		ReturnType< $mol_attach['item_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_button_open__title_mol_attach_4 = $mol_type_enforce<
		ReturnType< $mol_attach['attach_title'] >
		,
		ReturnType< $mol_button_open['title'] >
	>
	type $mol_button_open__files_mol_attach_5 = $mol_type_enforce<
		ReturnType< $mol_attach['attach_new'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_button_minor__click_mol_attach_6 = $mol_type_enforce<
		ReturnType< $mol_attach['item_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_attach_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_attach extends $mol_view {
		content( ): readonly($mol_view)[]
		Content( ): $mol_row
		attach_title( ): string
		attach_new( next?: any ): any
		item_drop( id: any, next?: any ): any
		item_uri( id: any): string
		Image( id: any): $mol_image
		items( next?: readonly(string)[] ): readonly(string)[]
		sub( ): readonly(any)[]
		Add( ): $mol_button_open
		Item( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=attach.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(files: File[]): void;
        content(): ($mol_button_minor | $mol_button_open)[];
        item_uri(index: number): string;
        item_drop(index: number, event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $mol_si_prefix {
        y = -8,
        z = -7,
        a = -6,
        f = -5,
        p = -4,
        n = -3,
        µ = -2,
        m = -1,
        '' = 0,
        k = 1,
        M = 2,
        G = 3,
        T = 4,
        P = 5,
        E = 6,
        Z = 7,
        Y = 8
    }
}

declare namespace $ {
    function $mol_si_short(numb: number, unit?: string): string;
}

declare namespace $ {

	type $mol_paragraph__title_shm_hitalama_project_page_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_project_page['file_name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_shm_hitalama_project_page_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_project_page['file_size'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_shm_hitalama_project_page_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__sub_shm_hitalama_project_page_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_attach__attach_new_shm_hitalama_project_page_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_project_page['attach_new'] >
		,
		ReturnType< $mol_attach['attach_new'] >
	>
	type $mol_button_minor__title_shm_hitalama_project_page_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_project_page_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_project_page['files_clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	export class $shm_hitalama_project_page extends $shm_hitalama_entity_page {
		file_name( id: any): string
		File_name( id: any): $mol_paragraph
		file_size( id: any): string
		File_size( id: any): $mol_paragraph
		File( id: any): $mol_view
		files( ): readonly(any)[]
		Files( ): $mol_list
		attach_new( next?: readonly(any)[] ): readonly(any)[]
		Attach( ): $mol_attach
		files_clear( next?: any ): any
		Files_clear( ): $mol_button_minor
		project( ): $shm_hitalama_project
		cut_title( ): string
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_project_page extends $.$shm_hitalama_project_page {
        project(): $shm_hitalama_project;
        attach_new(files: File[]): File[];
        file(ref: $hyoo_crus_ref): $hyoo_crus_node;
        file_name(ref: $hyoo_crus_ref): any;
        file_size(ref: $hyoo_crus_ref): string;
        files(): $mol_view[];
        files_clear(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $shm_hitalama_project_page__entity_shm_hitalama_project_catalog_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_project_catalog['entity'] >
		,
		ReturnType< $shm_hitalama_project_page['entity'] >
	>
	type $shm_hitalama_project_page__cut_shm_hitalama_project_catalog_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_project_catalog['cut'] >
		,
		ReturnType< $shm_hitalama_project_page['cut'] >
	>
	export class $shm_hitalama_project_catalog extends $shm_hitalama_entity_catalog {
		menu_title( ): string
		param( ): string
		title_default( ): string
		Page( id: any): $shm_hitalama_project_page
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_project_catalog extends $.$shm_hitalama_project_catalog {
        list(): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $shm_hitalama_duckdb extends $mol_object2 {
        static db(): Promise<any>;
        static file_query(file_name: string, buffer: Uint8Array, query: string): Promise<any>;
        static connection(files: {
            name: string;
            buffer: Uint8Array;
        }[]): Promise<any>;
    }
}

declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type $mol_textarea_edit__value_mol_textarea_1 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint_mol_textarea_2 = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled_mol_textarea_3 = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck_mol_textarea_4 = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max_mol_textarea_5 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection_mol_textarea_6 = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit_mol_textarea_7 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl_mol_textarea_8 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text_mol_textarea_9 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only_mol_textarea_10 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb_mol_textarea_11 = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed_mol_textarea_12 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight_mol_textarea_13 = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        symbol_insert(event: KeyboardEvent): void;
        clickable(next?: boolean): boolean;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_dump_value__value_mol_dump_list_1 = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_value'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_dump_value__expanded_mol_dump_list_2 = $mol_type_enforce<
		ReturnType< $mol_dump_list['dump_expanded'] >
		,
		ReturnType< $mol_dump_value['expanded'] >
	>
	type $mol_dump_value__prototypes_mol_dump_list_3 = $mol_type_enforce<
		ReturnType< $mol_dump_list['prototypes'] >
		,
		ReturnType< $mol_dump_value['prototypes'] >
	>
	type $mol_dump_value__preview_show_mol_dump_list_4 = $mol_type_enforce<
		ReturnType< $mol_dump_list['preview_show'] >
		,
		ReturnType< $mol_dump_value['preview_show'] >
	>
	export class $mol_dump_list extends $mol_view {
		dump_value( id: any): any
		dump_expanded( id: any, next?: boolean ): boolean
		prototypes( ): boolean
		preview_show( ): boolean
		Dump( id: any): $mol_dump_value
		values( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_list extends $.$mol_dump_list {
        sub(): $.$mol_dump_value[];
        dump_value(index: number): any;
        expand_all(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_try<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {

	type $mol_text_code__text_mol_dump_value_1 = $mol_type_enforce<
		ReturnType< $mol_dump_value['simple'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__text_mol_dump_value_2 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_title'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_check_expand__minimal_height_mol_dump_value_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_height'] >
	>
	type $mol_check_expand__minimal_width_mol_dump_value_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check_expand['minimal_width'] >
	>
	type $mol_check_expand__expanded_mol_dump_value_5 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	type $mol_check_expand__expandable_mol_dump_value_6 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__clicks_mol_dump_value_7 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_all'] >
		,
		ReturnType< $mol_check_expand['clicks'] >
	>
	type $mol_check_expand__label_mol_dump_value_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__dom_node_mol_dump_value_9 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_dom'] >
		,
		ReturnType< $mol_view['dom_node'] >
	>
	type $mol_view__render_mol_dump_value_10 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub_mol_dump_value_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_dump_list__values_mol_dump_value_12 = $mol_type_enforce<
		ReturnType< $mol_dump_value['row_values'] >
		,
		ReturnType< $mol_dump_list['values'] >
	>
	type $mol_dump_list__prototypes_mol_dump_value_13 = $mol_type_enforce<
		ReturnType< $mol_dump_value['prototypes'] >
		,
		ReturnType< $mol_dump_list['prototypes'] >
	>
	type $mol_dump_list__preview_show_mol_dump_value_14 = $mol_type_enforce<
		ReturnType< $mol_dump_value['preview_show'] >
		,
		ReturnType< $mol_dump_list['preview_show'] >
	>
	type $mol_expander__expanded_mol_dump_value_15 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__Trigger_mol_dump_value_16 = $mol_type_enforce<
		ReturnType< $mol_dump_value['Expand_head'] >
		,
		ReturnType< $mol_expander['Trigger'] >
	>
	type $mol_expander__content_mol_dump_value_17 = $mol_type_enforce<
		ReturnType< $mol_dump_value['expand_content'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_dump_value extends $mol_view {
		simple( ): string
		Simple( ): $mol_text_code
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		expand_all( next?: any ): any
		expand_title( ): string
		Expand_title( ): $mol_text_code
		Expand_head( ): $mol_check_expand
		preview_dom( ): any
		preview( ): any
		Preview_dom( ): $mol_view
		Preview( ): $mol_view
		row_values( id: any): readonly(any)[]
		prototypes( ): boolean
		Row( id: any): $mol_dump_list
		expand_content( ): readonly(any)[]
		Expand( ): $mol_expander
		value( next?: any ): any
		preview_show( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=value.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dump_value extends $.$mol_dump_value {
        sub(): $.$mol_text_code[] | $.$mol_expander[];
        simple(): string;
        expand_title(): any;
        rows_values(): any[][];
        preview_dom(): Element | null;
        expand_content(): ($mol_view | $.$mol_dump_list)[];
        expandable(): boolean;
        row_values(index: number): any[];
        expand_all(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $shm_hitalama_duckdb_lib: typeof import("@duckdb/duckdb-wasm");
}

declare namespace $ {

	type $mol_select__value_shm_hitalama_duckdb_page_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['project_id'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_shm_hitalama_duckdb_page_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['projects_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title_shm_hitalama_duckdb_page_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_duckdb_page_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_check_box__title_shm_hitalama_duckdb_page_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['file_name'] >
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_shm_hitalama_duckdb_page_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['file_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_copy__title_shm_hitalama_duckdb_page_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['query_default'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__sub_shm_hitalama_duckdb_page_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_copy['sub'] >
	>
	type $mol_view__sub_shm_hitalama_duckdb_page_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__sub_shm_hitalama_duckdb_page_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['file_views'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_scroll__sub_shm_hitalama_duckdb_page_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_labeler__title_shm_hitalama_duckdb_page_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_duckdb_page_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub_shm_hitalama_duckdb_page_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_textarea__value_shm_hitalama_duckdb_page_15 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['query'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__hint_shm_hitalama_duckdb_page_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_labeler__title_shm_hitalama_duckdb_page_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_duckdb_page_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_minor__title_shm_hitalama_duckdb_page_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_duckdb_page_20 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['run'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_dump_value__value_shm_hitalama_duckdb_page_21 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['duckdb_res'] >
		,
		ReturnType< $mol_dump_value['value'] >
	>
	type $mol_page__title_shm_hitalama_duckdb_page_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_shm_hitalama_duckdb_page_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_select__value_shm_hitalama_duckdb_page_24 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['logs_project_id'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_shm_hitalama_duckdb_page_25 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['projects_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_button_minor__title_shm_hitalama_duckdb_page_26 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_duckdb_page_27 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['logs_clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_paragraph__title_shm_hitalama_duckdb_page_28 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['query_time'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_copy__minimal_height_shm_hitalama_duckdb_page_29 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_copy['minimal_height'] >
	>
	type $mol_button_copy__title_shm_hitalama_duckdb_page_30 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['query_sql'] >
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__sub_shm_hitalama_duckdb_page_31 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_copy['sub'] >
	>
	type $mol_view__sub_shm_hitalama_duckdb_page_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code__text_shm_hitalama_duckdb_page_33 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['query_sql'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_view__sub_shm_hitalama_duckdb_page_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__title_shm_hitalama_duckdb_page_35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools_shm_hitalama_duckdb_page_36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_shm_hitalama_duckdb_page_37 = $mol_type_enforce<
		ReturnType< $shm_hitalama_duckdb_page['logs'] >
		,
		ReturnType< $mol_page['body'] >
	>
	export class $shm_hitalama_duckdb_page extends $mol_book2 {
		remote_url( ): string
		project_id( next?: string ): string
		projects_dict( ): Record<string, any>
		Project( ): $mol_select
		Project_label( ): $mol_labeler
		file_name( id: any): string
		file_checked( id: any, next?: boolean ): boolean
		File_check( id: any): $mol_check_box
		query_default( id: any, next?: string ): string
		Copy_icon( id: any): $mol_icon_clipboard_outline
		File_name_copy( id: any): $mol_button_copy
		File( id: any): $mol_view
		file_views( ): readonly(any)[]
		Files_list( ): $mol_list
		Files_scroll( ): $mol_scroll
		Files_label( ): $mol_labeler
		files_label( ): readonly(any)[]
		Project_and_files( ): $mol_view
		query( next?: string ): string
		Query( ): $mol_textarea
		Query_label( ): $mol_labeler
		run( next?: any ): any
		Run( ): $mol_button_minor
		duckdb_res( next?: any ): any
		Duckdb_dump( ): $mol_dump_value
		Query_page( ): $mol_page
		logs_project_id( next?: string ): string
		Logs_project( ): $mol_select
		logs_clear( next?: any ): any
		Logs_clear( ): $mol_button_minor
		query_time( id: any): string
		Query_time( id: any): $mol_paragraph
		query_sql( id: any): string
		Query_copy( id: any): $mol_button_copy
		Query_head( id: any): $mol_view
		Log_sql( id: any): $mol_text_code
		Query_log( id: any): $mol_view
		logs( ): readonly(any)[]
		Logs( ): $mol_page
		query_current( next?: string ): string
		remote_file_urls( ): readonly(any)[]
		pages( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $.$$ {
    class $shm_hitalama_duckdb_page extends $.$shm_hitalama_duckdb_page {
        project_id(next?: string): any;
        logs_project_id(next?: string): string;
        projects_dict(): {
            [x: string]: any;
        };
        project(): $hyoo_crus_node;
        projects(): any;
        files_label(): readonly any[];
        files(): any;
        file_views(): any;
        files_checked(): any;
        file_name(id: string): any;
        query_default(file_id: string): string;
        get_last_query(): any;
        query(next?: string): string;
        run(next?: any): void;
        duckdb_res(): any;
        conn(): Promise<any>;
        conn_query(query: string): any;
        query_log(ref: $hyoo_crus_ref): $hyoo_crus_node;
        query_time(ref: $hyoo_crus_ref): string;
        query_sql(ref: $hyoo_crus_ref): any;
        logs(): any;
        logs_clear(): void;
    }
}

declare namespace $ {

	export class $mol_icon_open_in_new extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=new.view.tree.d.ts.map
declare namespace $ {

	export class $shm_hitalama_drag extends $mol_plugin {
		pointerdown( next?: any ): any
		dragged( next?: boolean ): boolean
		x( next?: number ): number
		y( next?: number ): number
		repos_x( id: any): number
		repos_y( id: any): number
		drag( next?: any ): any
		drag_start( next?: any ): any
		drag_end( next?: any ): any
		event( ): ({ 
			pointerdown( next?: ReturnType< $shm_hitalama_drag['pointerdown'] > ): ReturnType< $shm_hitalama_drag['pointerdown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		attr( ): ({ 
			'shm_hitalama_dragged': ReturnType< $shm_hitalama_drag['dragged'] >,
		})  & ReturnType< $mol_plugin['attr'] >
	}
	
}

//# sourceMappingURL=drag.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_drag extends $.$shm_hitalama_drag {
        repos_x(val: number): number;
        repos_y(val: number): number;
        start_event?: PointerEvent;
        start_pos?: {
            x: number;
            y: number;
        };
        pointerdown(event?: any): void;
    }
}

declare namespace $ {

	type $shm_hitalama_drag__drag_shm_hitalama_drag_view_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_drag_view['drag'] >
		,
		ReturnType< $shm_hitalama_drag['drag'] >
	>
	type $shm_hitalama_drag__drag_start_shm_hitalama_drag_view_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_drag_view['drag_start'] >
		,
		ReturnType< $shm_hitalama_drag['drag_start'] >
	>
	type $shm_hitalama_drag__drag_end_shm_hitalama_drag_view_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_drag_view['drag_end'] >
		,
		ReturnType< $shm_hitalama_drag['drag_end'] >
	>
	type $shm_hitalama_drag__y_shm_hitalama_drag_view_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_drag_view['y'] >
		,
		ReturnType< $shm_hitalama_drag['y'] >
	>
	type $shm_hitalama_drag__x_shm_hitalama_drag_view_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_drag_view['x'] >
		,
		ReturnType< $shm_hitalama_drag['x'] >
	>
	export class $shm_hitalama_drag_view extends $mol_view {
		drag( next?: any ): any
		drag_start( next?: any ): any
		drag_end( next?: any ): any
		dragged( ): ReturnType< ReturnType< $shm_hitalama_drag_view['Drag'] >['dragged'] >
		y( next?: number ): number
		x( next?: number ): number
		Drag( ): $shm_hitalama_drag
		plugins( ): readonly(any)[]
		style( ): ({ 
			'userSelect': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $ {

	type $shm_hitalama_drag_view__sub_shm_hitalama_resize_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['drag_body'] >
		,
		ReturnType< $shm_hitalama_drag_view['sub'] >
	>
	type $shm_hitalama_drag_view__x_shm_hitalama_resize_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['body_x'] >
		,
		ReturnType< $shm_hitalama_drag_view['x'] >
	>
	type $shm_hitalama_drag_view__y_shm_hitalama_resize_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['body_y'] >
		,
		ReturnType< $shm_hitalama_drag_view['y'] >
	>
	type $shm_hitalama_drag_view__drag_start_shm_hitalama_resize_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['drag_start'] >
		,
		ReturnType< $shm_hitalama_drag_view['drag_start'] >
	>
	type $shm_hitalama_drag_view__drag_end_shm_hitalama_resize_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['drag_end'] >
		,
		ReturnType< $shm_hitalama_drag_view['drag_end'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__y_shm_hitalama_resize_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['top_edge_y'] >
		,
		ReturnType< $shm_hitalama_resize_edge['y'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__x_shm_hitalama_resize_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['left_edge_x'] >
		,
		ReturnType< $shm_hitalama_resize_edge['x'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_12 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__y_shm_hitalama_resize_14 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['bottom_edge_y'] >
		,
		ReturnType< $shm_hitalama_resize_edge['y'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_15 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_16 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__x_shm_hitalama_resize_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['right_edge_x'] >
		,
		ReturnType< $shm_hitalama_resize_edge['x'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_18 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_19 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__y_shm_hitalama_resize_20 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['top_edge_y'] >
		,
		ReturnType< $shm_hitalama_resize_edge['y'] >
	>
	type $shm_hitalama_resize_edge__x_shm_hitalama_resize_21 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['left_edge_x'] >
		,
		ReturnType< $shm_hitalama_resize_edge['x'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_22 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_23 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__y_shm_hitalama_resize_24 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['top_edge_y'] >
		,
		ReturnType< $shm_hitalama_resize_edge['y'] >
	>
	type $shm_hitalama_resize_edge__x_shm_hitalama_resize_25 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['right_edge_x'] >
		,
		ReturnType< $shm_hitalama_resize_edge['x'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_26 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_27 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__y_shm_hitalama_resize_28 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['bottom_edge_y'] >
		,
		ReturnType< $shm_hitalama_resize_edge['y'] >
	>
	type $shm_hitalama_resize_edge__x_shm_hitalama_resize_29 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['left_edge_x'] >
		,
		ReturnType< $shm_hitalama_resize_edge['x'] >
	>
	type $shm_hitalama_resize_edge__drag_start_shm_hitalama_resize_30 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_start'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_start'] >
	>
	type $shm_hitalama_resize_edge__drag_end_shm_hitalama_resize_31 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['resize_end'] >
		,
		ReturnType< $shm_hitalama_resize_edge['drag_end'] >
	>
	type $shm_hitalama_resize_edge__y_shm_hitalama_resize_32 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['bottom_edge_y'] >
		,
		ReturnType< $shm_hitalama_resize_edge['y'] >
	>
	type $shm_hitalama_resize_edge__x_shm_hitalama_resize_33 = $mol_type_enforce<
		ReturnType< $shm_hitalama_resize['right_edge_x'] >
		,
		ReturnType< $shm_hitalama_resize_edge['x'] >
	>
	export class $shm_hitalama_resize extends $mol_view {
		drag_body( ): readonly(any)[]
		body_x( next?: number ): number
		body_y( next?: number ): number
		drag_start( next?: any ): any
		drag_end( next?: any ): any
		dragged( ): ReturnType< ReturnType< $shm_hitalama_resize['Drag'] >['dragged'] >
		Drag( ): $shm_hitalama_drag_view
		resize_start( next?: any ): any
		resize_end( next?: any ): any
		top_edge_y( next?: number ): number
		Top_edge( ): $shm_hitalama_resize_edge
		left_edge_x( next?: number ): number
		Left_edge( ): $shm_hitalama_resize_edge
		bottom_edge_y( next?: number ): number
		Bottom_edge( ): $shm_hitalama_resize_edge
		right_edge_x( next?: number ): number
		Right_edge( ): $shm_hitalama_resize_edge
		Top_left_edge( ): $shm_hitalama_resize_edge
		Top_right_edge( ): $shm_hitalama_resize_edge
		Bottom_left_edge( ): $shm_hitalama_resize_edge
		Bottom_right_edge( ): $shm_hitalama_resize_edge
		edges( ): readonly(any)[]
		vals_to_sticks( ): any
		top_px( ): string
		left_px( ): string
		height_px( ): string
		width_px( ): string
		sub( ): readonly(any)[]
		resizing( next?: boolean ): boolean
		height_base( ): number
		width_base( ): number
		height( ): number
		width( ): number
		top( ): number
		left( ): number
		stick_threshold( ): number
		body_x_stick( next?: number ): number
		body_y_stick( next?: number ): number
		bottom_edge_y_stick( next?: number ): number
		right_edge_x_stick( next?: number ): number
		top_edge_y_stick( next?: number ): number
		left_edge_x_stick( next?: number ): number
		sticks_y( ): readonly(number)[]
		sticks_x( ): readonly(number)[]
		auto( ): readonly(any)[]
		style( ): ({ 
			'top': ReturnType< $shm_hitalama_resize['top_px'] >,
			'left': ReturnType< $shm_hitalama_resize['left_px'] >,
			'height': ReturnType< $shm_hitalama_resize['height_px'] >,
			'width': ReturnType< $shm_hitalama_resize['width_px'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
	export class $shm_hitalama_resize_edge extends $shm_hitalama_drag_view {
	}
	
}

//# sourceMappingURL=resize.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_resize extends $.$shm_hitalama_resize {
        to_stick(sticks: readonly number[], val: number, shift: number): number;
        to_stick_x(val: number, shift: number): number;
        to_stick_y(val: number, shift: number): number;
        body_y(next?: number): number;
        top_edge_y(next?: number): number;
        bottom_edge_y(next?: number): number;
        body_x(next?: number): number;
        left_edge_x(next?: number): number;
        right_edge_x(next?: number): number;
        top(): number;
        left(): number;
        width(): number;
        height(): number;
        height_px(): string;
        width_px(): string;
        top_px(): string;
        left_px(): string;
        drag_end(): void;
        resize_start(next?: any): void;
        resize_end(): void;
        vals_to_sticks(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $shm_hitalama_color_dot extends $mol_view {
		color( ): string
		style( ): ({ 
			'backgroundColor': ReturnType< $shm_hitalama_color_dot['color'] >,
		}) 
	}
	
}

//# sourceMappingURL=dot.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	type $mol_check__checked_shm_hitalama_color_switch_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_color_switch['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__sub_shm_hitalama_color_switch_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__enabled_shm_hitalama_color_switch_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_color_switch['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_shm_hitalama_color_switch_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_color_switch['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_shm_hitalama_color_switch_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__style_shm_hitalama_color_switch_6 = $mol_type_enforce<
		({ 
			'backgroundColor': ReturnType< $shm_hitalama_color_switch['color'] >,
		}) 
		,
		ReturnType< $mol_check['style'] >
	>
	export class $shm_hitalama_color_switch extends $mol_switch {
		option_enabled( id: any): ReturnType< $shm_hitalama_color_switch['enabled'] >
		Option( id: any): $mol_check
		colors( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_color_switch extends $.$shm_hitalama_color_switch {
        options(): any;
        color(id: string): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $shm_hitalama_color_dot__color_shm_hitalama_color_pick_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_color_pick['color'] >
		,
		ReturnType< $shm_hitalama_color_dot['color'] >
	>
	type $shm_hitalama_color_switch__value_shm_hitalama_color_pick_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_color_pick['color'] >
		,
		ReturnType< $shm_hitalama_color_switch['value'] >
	>
	type $shm_hitalama_color_switch__event_shm_hitalama_color_pick_3 = $mol_type_enforce<
		({ 
			click( next?: ReturnType< $shm_hitalama_color_pick['click'] > ): ReturnType< $shm_hitalama_color_pick['click'] >,
		}) 
		,
		ReturnType< $shm_hitalama_color_switch['event'] >
	>
	export class $shm_hitalama_color_pick extends $mol_pick {
		Current( ): $shm_hitalama_color_dot
		color( next?: string ): string
		click( next?: any ): any
		Colors( ): $shm_hitalama_color_switch
		trigger_content( ): readonly(any)[]
		bubble_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_color_pick extends $.$shm_hitalama_color_pick {
        click(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_minus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=minus.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_string__type_mol_number_1 = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value_mol_number_2 = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_number_3 = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled_mol_number_4 = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit_mol_number_5 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click_mol_number_6 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_7 = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__event_click_mol_number_9 = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled_mol_number_10 = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub_mol_number_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		event_dec( next?: any ): any
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_minus
		Dec( ): $mol_button_minor
		event_inc( next?: any ): any
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_plus
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        value_limited(val?: number): number;
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        round(val: number): string;
        value_string(next?: string): string;
        dec_enabled(): boolean;
        inc_enabled(): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_chevron_up extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=up.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_down extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=down.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_arrow_collapse extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=collapse.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_arrow_collapse_up extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=up.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_arrow_collapse_down extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=down.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_delete extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=delete.view.tree.d.ts.map
declare namespace $ {

	type $shm_hitalama_color_pick__color_shm_hitalama_board_block_float_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['color'] >
		,
		ReturnType< $shm_hitalama_color_pick['color'] >
	>
	type _shm_hitalama_board_block_float_2 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_block_float['font_size_dec'] >[0]
		,
		Parameters< ReturnType< $shm_hitalama_board_block_float['Font_size'] >['event_dec'] >[0]
	>
	type _shm_hitalama_board_block_float_3 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_block_float['font_size_inc'] >[0]
		,
		Parameters< ReturnType< $shm_hitalama_board_block_float['Font_size'] >['event_inc'] >[0]
	>
	type $mol_number__value_shm_hitalama_board_block_float_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['font_size'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__Dec_shm_hitalama_board_block_float_5 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_number['Dec'] >
	>
	type $mol_number__Inc_shm_hitalama_board_block_float_6 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_number['Inc'] >
	>
	type $mol_button_minor__minimal_height_shm_hitalama_board_block_float_7 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_shm_hitalama_board_block_float_8 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $mol_button_minor__event_click_shm_hitalama_board_block_float_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['font_size_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_shm_hitalama_board_block_float_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__minimal_height_shm_hitalama_board_block_float_11 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__minimal_width_shm_hitalama_board_block_float_12 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_width'] >
	>
	type $mol_button_minor__event_click_shm_hitalama_board_block_float_13 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['font_size_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_shm_hitalama_board_block_float_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_shm_hitalama_board_block_float_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__sub_shm_hitalama_board_block_float_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_shm_hitalama_board_block_float_17 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['to_top'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_shm_hitalama_board_block_float_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_shm_hitalama_board_block_float_19 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['to_bottom'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_shm_hitalama_board_block_float_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_shm_hitalama_board_block_float_21 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['delete'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_view__sub_shm_hitalama_board_block_float_22 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_float['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $shm_hitalama_board_block_float extends $shm_hitalama_resize {
		editing( next?: boolean ): boolean
		color( next?: string ): string
		Color( ): $shm_hitalama_color_pick
		font_size( next?: number ): number
		font_size_dec( next?: ReturnType< ReturnType< $shm_hitalama_board_block_float['Font_size'] >['event_dec'] > ): ReturnType< ReturnType< $shm_hitalama_board_block_float['Font_size'] >['event_dec'] >
		font_size_inc( next?: ReturnType< ReturnType< $shm_hitalama_board_block_float['Font_size'] >['event_inc'] > ): ReturnType< ReturnType< $shm_hitalama_board_block_float['Font_size'] >['event_inc'] >
		Font_size( ): $mol_number
		inc_icon( ): $mol_icon_chevron_up
		Inc( ): $mol_button_minor
		dec_icon( ): $mol_icon_chevron_down
		Dec( ): $mol_button_minor
		Inc_dec( ): $mol_view
		font_tools( ): readonly(any)[]
		Top_icon( ): $mol_icon_arrow_collapse_up
		to_top( next?: any ): any
		Top( ): $mol_button_minor
		Bottom_icon( ): $mol_icon_arrow_collapse_down
		to_bottom( next?: any ): any
		Bottom( ): $mol_button_minor
		Delete_icon( ): $mol_icon_delete
		delete( next?: any ): any
		Delete( ): $mol_button_minor
		tools( ): readonly(any)[]
		Toolbar( ): $mol_view
		opacity_str( ): string
		transition_smooth( ): string
		transition( ): ReturnType< $shm_hitalama_board_block_float['transition_smooth'] >
		down( next?: any ): any
		selected( next?: boolean ): boolean
		block( ): $shm_hitalama_board_block
		auto( ): readonly(any)[]
		selected_or_dragged( ): boolean
		toolbar( ): readonly(any)[]
		opacity( next?: number ): number
		style( ): ({ 
			'opacity': ReturnType< $shm_hitalama_board_block_float['opacity_str'] >,
			'transition': ReturnType< $shm_hitalama_board_block_float['transition'] >,
		})  & ReturnType< $shm_hitalama_resize['style'] >
		font_size_px( ): string
		event( ): ({ 
			keydown( next?: ReturnType< $shm_hitalama_board_block_float['down'] > ): ReturnType< $shm_hitalama_board_block_float['down'] >,
		})  & ReturnType< $shm_hitalama_resize['event'] >
		attr( ): ({ 
			'shm_hitalama_board_block_float_selected': ReturnType< $shm_hitalama_board_block_float['selected'] >,
			'shm_hitalama_board_block_float_dragged': ReturnType< $shm_hitalama_board_block_float['dragged'] >,
		})  & ReturnType< $shm_hitalama_resize['attr'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_block_float extends $.$shm_hitalama_board_block_float {
        body_x_stick(next?: number): number;
        body_y_stick(next?: number): number;
        bottom_edge_y_stick(next?: number): number;
        right_edge_x_stick(next?: number): number;
        top_edge_y_stick(next?: number): number;
        left_edge_x_stick(next?: number): number;
        opacity(next?: number): number;
        font_size(next?: number): number;
        font_tools(): readonly any[];
        font_size_px(): string;
        color(next?: string): string;
        opacity_str(): string;
        edges(): readonly (any)[];
        toolbar(): readonly (any)[];
        transition(): string;
        drag_end(): void;
        drag_start(): void;
        selected_or_dragged(): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_string__value_shm_hitalama_board_block_input_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_input['text'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_view__sub_shm_hitalama_board_block_input_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__dom_name_shm_hitalama_board_block_input_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_input['title_dom_name'] >
		,
		ReturnType< $mol_paragraph['dom_name'] >
	>
	type $mol_paragraph__title_shm_hitalama_board_block_input_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_input['text'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	export class $shm_hitalama_board_block_input extends $shm_hitalama_board_block_float {
		text( next?: string ): string
		input_focused( ): ReturnType< ReturnType< $shm_hitalama_board_block_input['Input'] >['focused'] >
		Input( ): $mol_string
		Head( ): $mol_view
		title_dom_name( ): string
		Title( ): $mol_paragraph
		sub( ): readonly(any)[]
		font_tools( ): readonly(any)[]
		drag_body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=input.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_block_input extends $.$shm_hitalama_board_block_input {
        text(next?: string): string;
        editing(): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_frame__uri_shm_hitalama_board_block_iframe_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_iframe['src'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	type $mol_string__value_shm_hitalama_board_block_iframe_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_iframe['src'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_paragraph__title_shm_hitalama_board_block_iframe_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_iframe['src'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	export class $shm_hitalama_board_block_iframe extends $shm_hitalama_board_block_float {
		Iframe( ): $mol_frame
		Blocker( ): $mol_view
		blocker( ): readonly(any)[]
		src( next?: string ): string
		src_focused( ): ReturnType< ReturnType< $shm_hitalama_board_block_iframe['Src'] >['focused'] >
		Src( ): $mol_string
		Title( ): $mol_paragraph
		sub( ): readonly(any)[]
		font_tools( ): readonly(any)[]
		tools( ): readonly(any)[]
		drag_body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=iframe.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_block_iframe extends $.$shm_hitalama_board_block_iframe {
        src(next?: string): string;
        blocker(): readonly (any)[];
        editing(): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    function $mol_blob_uri(blob: $mol_blob): Promise<string>;
}

declare namespace $ {

	type $mol_image__uri_shm_hitalama_board_block_text_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_text['image_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_textarea__value_shm_hitalama_board_block_text_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_text['text'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection_shm_hitalama_board_block_text_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_text['selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	type $mol_textarea__spellcheck_shm_hitalama_board_block_text_4 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_textarea['spellcheck'] >
	>
	type $mol_textarea__style_shm_hitalama_board_block_text_5 = $mol_type_enforce<
		({ 
			'color': ReturnType< $shm_hitalama_board_block_text['color'] >,
			'fontSize': ReturnType< $shm_hitalama_board_block_text['font_size_px'] >,
		}) 
		,
		ReturnType< $mol_textarea['style'] >
	>
	type $mol_view__event_shm_hitalama_board_block_text_6 = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $shm_hitalama_board_block_text['pointerdown'] > ): ReturnType< $shm_hitalama_board_block_text['pointerdown'] >,
			pointerup( next?: ReturnType< $shm_hitalama_board_block_text['pointerup'] > ): ReturnType< $shm_hitalama_board_block_text['pointerup'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	export class $shm_hitalama_board_block_text extends $shm_hitalama_board_block_float {
		image_uri( ): string
		Image( ): $mol_image
		image( ): readonly(any)[]
		text( next?: string ): string
		selection( next?: readonly(number)[] ): readonly(number)[]
		Text( ): $mol_textarea
		pointerdown( next?: any ): any
		pointerup( next?: any ): any
		Blocker( ): $mol_view
		blocker( ): readonly(any)[]
		sub( ): readonly(any)[]
		drag_body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_block_text extends $.$shm_hitalama_board_block_text {
        text(next?: string): string;
        pointerdown_event?: PointerEvent;
        pointerdown(next?: any): void;
        pointerup(next?: any): void;
        editing(next?: boolean): boolean;
        blocker(): readonly (any)[];
        blob_uri(): Promise<string> | null;
        image_uri(): string;
        image(): readonly any[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type _shm_hitalama_board_block_any_1 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_block_any['editing'] >[0]
		,
		Parameters< ReturnType< $shm_hitalama_board_block_any['Sub'] >['editing'] >[0]
	>
	type $shm_hitalama_board_block_float__block_shm_hitalama_board_block_any_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['block'] >
		,
		ReturnType< $shm_hitalama_board_block_float['block'] >
	>
	type $shm_hitalama_board_block_float__delete_shm_hitalama_board_block_any_3 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['delete'] >
		,
		ReturnType< $shm_hitalama_board_block_float['delete'] >
	>
	type $shm_hitalama_board_block_float__to_top_shm_hitalama_board_block_any_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['to_top'] >
		,
		ReturnType< $shm_hitalama_board_block_float['to_top'] >
	>
	type $shm_hitalama_board_block_float__to_bottom_shm_hitalama_board_block_any_5 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['to_bottom'] >
		,
		ReturnType< $shm_hitalama_board_block_float['to_bottom'] >
	>
	type $shm_hitalama_board_block_float__sticks_y_shm_hitalama_board_block_any_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['sticks_y'] >
		,
		ReturnType< $shm_hitalama_board_block_float['sticks_y'] >
	>
	type $shm_hitalama_board_block_float__sticks_x_shm_hitalama_board_block_any_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['sticks_x'] >
		,
		ReturnType< $shm_hitalama_board_block_float['sticks_x'] >
	>
	type $shm_hitalama_board_block_float__selected_shm_hitalama_board_block_any_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_block_any['selected'] >
		,
		ReturnType< $shm_hitalama_board_block_float['selected'] >
	>
	export class $shm_hitalama_board_block_any extends $mol_ghost {
		height( ): ReturnType< ReturnType< $shm_hitalama_board_block_any['Sub'] >['height'] >
		width( ): ReturnType< ReturnType< $shm_hitalama_board_block_any['Sub'] >['width'] >
		top( ): ReturnType< ReturnType< $shm_hitalama_board_block_any['Sub'] >['top'] >
		left( ): ReturnType< ReturnType< $shm_hitalama_board_block_any['Sub'] >['left'] >
		block( ): $shm_hitalama_board_block
		delete( ): any
		to_top( ): any
		to_bottom( ): any
		sticks_y( ): readonly(any)[]
		sticks_x( ): readonly(any)[]
		selected( next?: boolean ): boolean
		editing( next?: ReturnType< ReturnType< $shm_hitalama_board_block_any['Sub'] >['editing'] > ): ReturnType< ReturnType< $shm_hitalama_board_block_any['Sub'] >['editing'] >
		Sub( ): $shm_hitalama_board_block_float
		Input( ): $shm_hitalama_board_block_input
		Iframe( ): $shm_hitalama_board_block_iframe
		Text( ): $shm_hitalama_board_block_text
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_block_any extends $.$shm_hitalama_board_block_any {
        Sub(): $shm_hitalama_board_block_float;
    }
}

declare namespace $ {

	type $mol_link_iconed__sub_shm_hitalama_board_page_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['sub'] >
	>
	type $mol_link_iconed__arg_shm_hitalama_board_page_2 = $mol_type_enforce<
		({ 
			'section': string,
			'board': ReturnType< $shm_hitalama_board_page['board_id'] >,
		}) 
		,
		ReturnType< $mol_link_iconed['arg'] >
	>
	type $mol_link_iconed__external_shm_hitalama_board_page_3 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_link_iconed['external'] >
	>
	type $mol_view__event_shm_hitalama_board_page_4 = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $shm_hitalama_board_page['back_pointerdown'] > ): ReturnType< $shm_hitalama_board_page['back_pointerdown'] >,
			contextmenu( next?: ReturnType< $shm_hitalama_board_page['back_contextmenu'] > ): ReturnType< $shm_hitalama_board_page['back_contextmenu'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_button_minor__title_shm_hitalama_board_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_board_page_6 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['block_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title_shm_hitalama_board_page_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_board_page_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['input_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__title_shm_hitalama_board_page_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_shm_hitalama_board_page_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['iframe_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_list__sub_shm_hitalama_board_page_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_list__style_shm_hitalama_board_page_12 = $mol_type_enforce<
		({ 
			'left': ReturnType< $shm_hitalama_board_page['context_menu_left'] >,
			'top': ReturnType< $shm_hitalama_board_page['context_menu_top'] >,
		}) 
		,
		ReturnType< $mol_list['style'] >
	>
	type $mol_list__event_shm_hitalama_board_page_13 = $mol_type_enforce<
		({ 
			pointerenter( next?: ReturnType< $shm_hitalama_board_page['context_menu_pointerenter'] > ): ReturnType< $shm_hitalama_board_page['context_menu_pointerenter'] >,
			pointerleave( next?: ReturnType< $shm_hitalama_board_page['context_menu_pointerleave'] > ): ReturnType< $shm_hitalama_board_page['context_menu_pointerleave'] >,
		}) 
		,
		ReturnType< $mol_list['event'] >
	>
	type _shm_hitalama_board_page_14 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_page['block_height'] >[0]
		,
		Parameters< $shm_hitalama_board_page['Block'] >[0]
	>
	type _shm_hitalama_board_page_15 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_page['block_width'] >[0]
		,
		Parameters< $shm_hitalama_board_page['Block'] >[0]
	>
	type _shm_hitalama_board_page_16 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_page['block_top'] >[0]
		,
		Parameters< $shm_hitalama_board_page['Block'] >[0]
	>
	type _shm_hitalama_board_page_17 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_page['block_left'] >[0]
		,
		Parameters< $shm_hitalama_board_page['Block'] >[0]
	>
	type _shm_hitalama_board_page_18 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_page['editing'] >[0]
		,
		Parameters< $shm_hitalama_board_page['Block'] >[0]
	>
	type _shm_hitalama_board_page_19 = $mol_type_enforce<
		Parameters< $shm_hitalama_board_page['editing'] >[1]
		,
		Parameters< $shm_hitalama_board_page['Block'] >[0]
	>
	type $shm_hitalama_board_block_any__block_shm_hitalama_board_page_20 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['block'] >
		,
		ReturnType< $shm_hitalama_board_block_any['block'] >
	>
	type $shm_hitalama_board_block_any__delete_shm_hitalama_board_page_21 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['block_delete'] >
		,
		ReturnType< $shm_hitalama_board_block_any['delete'] >
	>
	type $shm_hitalama_board_block_any__to_top_shm_hitalama_board_page_22 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['block_to_top'] >
		,
		ReturnType< $shm_hitalama_board_block_any['to_top'] >
	>
	type $shm_hitalama_board_block_any__to_bottom_shm_hitalama_board_page_23 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['block_to_bottom'] >
		,
		ReturnType< $shm_hitalama_board_block_any['to_bottom'] >
	>
	type $shm_hitalama_board_block_any__sticks_y_shm_hitalama_board_page_24 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['sticks_y'] >
		,
		ReturnType< $shm_hitalama_board_block_any['sticks_y'] >
	>
	type $shm_hitalama_board_block_any__sticks_x_shm_hitalama_board_page_25 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['sticks_x'] >
		,
		ReturnType< $shm_hitalama_board_block_any['sticks_x'] >
	>
	type $shm_hitalama_board_block_any__selected_shm_hitalama_board_page_26 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_page['selected'] >
		,
		ReturnType< $shm_hitalama_board_block_any['selected'] >
	>
	export class $shm_hitalama_board_page extends $shm_hitalama_entity_page {
		Open_in_new_icon( ): $mol_icon_open_in_new
		Open_in_new( ): $mol_link_iconed
		keydown_listener( ): any
		paste_listener( ): any
		pointerdown_listener( ): any
		back_pointerdown( next?: any ): any
		back_contextmenu( next?: any ): any
		Back( ): $mol_view
		block_add( next?: any ): any
		Text_add( ): $mol_button_minor
		input_add( next?: any ): any
		Input_add( ): $mol_button_minor
		iframe_add( next?: any ): any
		Iframe_add( ): $mol_button_minor
		context_menu_left( next?: string ): string
		context_menu_top( next?: string ): string
		context_menu_pointerenter( next?: any ): any
		context_menu_pointerleave( next?: any ): any
		Context_menu( ): $mol_list
		context_menu( ): readonly(any)[]
		block( id: any): $shm_hitalama_board_block
		block_delete( id: any): any
		block_to_top( id: any): any
		block_to_bottom( id: any): any
		block_height( id: any): ReturnType< ReturnType< $shm_hitalama_board_page['Block'] >['height'] >
		block_width( id: any): ReturnType< ReturnType< $shm_hitalama_board_page['Block'] >['width'] >
		block_top( id: any): ReturnType< ReturnType< $shm_hitalama_board_page['Block'] >['top'] >
		block_left( id: any): ReturnType< ReturnType< $shm_hitalama_board_page['Block'] >['left'] >
		sticks_y( id: any): readonly(any)[]
		sticks_x( id: any): readonly(any)[]
		selected( id: any, next?: boolean ): boolean
		editing( id: any, next?: ReturnType< ReturnType< $shm_hitalama_board_page['Block'] >['editing'] > ): ReturnType< ReturnType< $shm_hitalama_board_page['Block'] >['editing'] >
		Block( id: any): $shm_hitalama_board_block_any
		blocks( ): readonly(any)[]
		board( ): $shm_hitalama_board
		cut_title( ): string
		head( ): readonly(any)[]
		auto( ): readonly(any)[]
		context_menu_hovered( next?: boolean ): boolean
		context_menu_visible( next?: boolean ): boolean
		body_content( ): readonly(any)[]
		selected_ref( next?: any ): any
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_page extends $.$shm_hitalama_board_page {
        board(): $shm_hitalama_board;
        board_id(): string | undefined;
        board_cut(): void;
        block_add(): $shm_hitalama_board_block | undefined;
        block_delete(ref: $hyoo_crus_ref): void;
        block_to_top(ref: $hyoo_crus_ref): void;
        block_to_bottom(ref: $hyoo_crus_ref): void;
        block(ref: $hyoo_crus_ref): $hyoo_crus_node;
        pos_by_ref: Map<string, number>;
        blocks(): $.$shm_hitalama_board_block_any[];
        blocks_clear(): void;
        sticks_y_by_block(ref: $hyoo_crus_ref): number[];
        sticks_x_by_block(ref: $hyoo_crus_ref): number[];
        sticks_x(ref: $hyoo_crus_ref): any[];
        sticks_y(ref: $hyoo_crus_ref): any[];
        selected(ref: $hyoo_crus_ref, next?: boolean): boolean;
        back_pointerdown(e: PointerEvent): void;
        deselect_all(): void;
        back_contextmenu(e: PointerEvent): void;
        context_menu(): readonly (any)[];
        context_menu_pointerenter(next?: any): void;
        context_menu_pointerleave(next?: any): void;
        text_add(text: string): $shm_hitalama_board_block | undefined;
        input_add(): $shm_hitalama_board_block | undefined;
        iframe_add(): $shm_hitalama_board_block | undefined;
        image_add(blob: Blob): $shm_hitalama_board_block | undefined;
        pointerdown_listener(): $mol_dom_listener;
        keydown_listener(): $mol_dom_listener;
        paste_listener(): $mol_dom_listener;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $shm_hitalama_board_page__entity_shm_hitalama_board_catalog_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_catalog['entity'] >
		,
		ReturnType< $shm_hitalama_board_page['entity'] >
	>
	type $shm_hitalama_board_page__cut_shm_hitalama_board_catalog_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_board_catalog['cut'] >
		,
		ReturnType< $shm_hitalama_board_page['cut'] >
	>
	export class $shm_hitalama_board_catalog extends $shm_hitalama_entity_catalog {
		menu_title( ): string
		param( ): string
		title_default( ): string
		Page( id: any): $shm_hitalama_board_page
	}
	
}

//# sourceMappingURL=catalog.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_board_catalog extends $.$shm_hitalama_board_catalog {
        list(): any;
    }
}

declare namespace $ {

	export class $mol_icon_eye extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=eye.view.tree.d.ts.map
declare namespace $ {

	type $mol_string__type_mol_password_1 = $mol_type_enforce<
		ReturnType< $mol_password['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__hint_mol_password_2 = $mol_type_enforce<
		ReturnType< $mol_password['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_mol_password_3 = $mol_type_enforce<
		ReturnType< $mol_password['value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit_mol_password_4 = $mol_type_enforce<
		ReturnType< $mol_password['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_password_5 = $mol_type_enforce<
		ReturnType< $mol_password['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_check_icon__checked_mol_password_6 = $mol_type_enforce<
		ReturnType< $mol_password['checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon_mol_password_7 = $mol_type_enforce<
		ReturnType< $mol_password['Show_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	export class $mol_password extends $mol_view {
		hint( ): string
		value( next?: string ): string
		submit( next?: any ): any
		enabled( ): boolean
		Pass( ): $mol_string
		checked( next?: boolean ): boolean
		Show_icon( ): $mol_icon_eye
		Show( ): $mol_check_icon
		content( ): readonly(any)[]
		type( next?: string ): string
		sub( ): ReturnType< $mol_password['content'] >
	}
	
}

//# sourceMappingURL=password.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_password extends $.$mol_password {
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {

	type $mol_string__value_shm_hitalama_profile_register_1 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_register['login'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_shm_hitalama_profile_register_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_profile_register_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_password__value_shm_hitalama_profile_register_4 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_register['passwond'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_labeler__title_shm_hitalama_profile_register_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_shm_hitalama_profile_register_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_major__title_shm_hitalama_profile_register_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_register['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_shm_hitalama_profile_register_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_register['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__enabled_shm_hitalama_profile_register_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_register['submit_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_text__text_shm_hitalama_profile_register_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_profile_register['message'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $shm_hitalama_profile_register extends $mol_section {
		login( next?: string ): string
		Login( ): $mol_string
		Login_label( ): $mol_labeler
		passwond( next?: string ): string
		Password( ): $mol_password
		Password_label( ): $mol_labeler
		submit_title( ): string
		submit( next?: any ): any
		submit_enabled( next?: boolean ): boolean
		Submit( ): $mol_button_major
		message( next?: string ): string
		Message( ): $mol_text
		message_view( ): readonly(any)[]
		title( ): string
		profiles( ): $shm_hitalama_profile_dict
		account_exist_message( ): string
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=register.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_profile_register extends $.$shm_hitalama_profile_register {
        submit(next?: any): void;
        account_exist(): boolean;
        submit_enabled(): boolean;
        message(next?: string): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $shm_hitalama_profile_enter extends $shm_hitalama_profile_register {
		pull_pass_keys( ): any
		title( ): string
		submit_title( ): string
		auto( ): readonly(any)[]
		message_incorrect_pass( ): string
	}
	
}

//# sourceMappingURL=enter.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_profile_enter extends $.$shm_hitalama_profile_enter {
        login(next?: string): string;
        passwond(next?: string): string;
        pull_pass_keys(): void;
        submit(next?: any): void;
        message(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_list_item__index_mol_text_list_1 = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub_mol_text_list_2 = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {
    function $shm_hitalama_web_hidden(event: $mol_log3_event<{}>): boolean;
    function $shm_hitalama_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {

	type $mol_paragraph__title_shm_hitalama_app_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_image__uri_shm_hitalama_app_2 = $mol_type_enforce<
		ReturnType< $shm_hitalama_app['logo_uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_text__text_shm_hitalama_app_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_shm_hitalama_app_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__head_shm_hitalama_app_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__body_shm_hitalama_app_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $shm_hitalama_analysis__token_shm_hitalama_app_7 = $mol_type_enforce<
		ReturnType< $shm_hitalama_app['token'] >
		,
		ReturnType< $shm_hitalama_analysis['token'] >
	>
	type $shm_hitalama_lists__token_shm_hitalama_app_8 = $mol_type_enforce<
		ReturnType< $shm_hitalama_app['token'] >
		,
		ReturnType< $shm_hitalama_lists['token'] >
	>
	type $shm_hitalama_profile_enter__profiles_shm_hitalama_app_9 = $mol_type_enforce<
		ReturnType< $shm_hitalama_app['profiles'] >
		,
		ReturnType< $shm_hitalama_profile_enter['profiles'] >
	>
	type $shm_hitalama_profile_register__profiles_shm_hitalama_app_10 = $mol_type_enforce<
		ReturnType< $shm_hitalama_app['profiles'] >
		,
		ReturnType< $shm_hitalama_profile_register['profiles'] >
	>
	type $shm_hitalama_board_page__entity_shm_hitalama_app_11 = $mol_type_enforce<
		ReturnType< $shm_hitalama_app['board'] >
		,
		ReturnType< $shm_hitalama_board_page['entity'] >
	>
	type $shm_hitalama_board_page__Open_in_new_shm_hitalama_app_12 = $mol_type_enforce<
		any
		,
		ReturnType< $shm_hitalama_board_page['Open_in_new'] >
	>
	type $shm_hitalama_board_page__Cut_shm_hitalama_app_13 = $mol_type_enforce<
		any
		,
		ReturnType< $shm_hitalama_board_page['Cut'] >
	>
	export class $shm_hitalama_app extends $mol_book2_catalog {
		Theme( ): $mol_theme_auto
		Status( ): $hyoo_crus_status
		Lights( ): $mol_lights_toggle
		Foot_label( ): $mol_paragraph
		logo_uri( ): string
		Foot_logo( ): $mol_image
		Tokens_label( ): $mol_text
		token( ): ReturnType< ReturnType< $shm_hitalama_app['Token_switch'] >['current'] >
		Token_switch( ): $shm_hitalama_token_switch
		Tokens( ): $mol_view
		Profile( ): $shm_hitalama_profile_switch
		Spread_current( ): $mol_view
		Main( ): $mol_page
		Analysis( ): $shm_hitalama_analysis
		Lists( ): $shm_hitalama_lists
		Projects( ): $shm_hitalama_project_catalog
		Duckdb( ): $shm_hitalama_duckdb_page
		Boards( ): $shm_hitalama_board_catalog
		profiles( ): $shm_hitalama_profile_dict
		board( ): $shm_hitalama_board
		param( ): string
		menu_title( ): string
		plugins( ): readonly(any)[]
		menu_tools( ): readonly(any)[]
		menu_foot( ): readonly(any)[]
		pages( ): readonly(any)[]
		spreads( ): ({ 
			'': ReturnType< $shm_hitalama_app['Analysis'] >,
			'lists': ReturnType< $shm_hitalama_app['Lists'] >,
			'projects': ReturnType< $shm_hitalama_app['Projects'] >,
			'duckdb_page': ReturnType< $shm_hitalama_app['Duckdb'] >,
			'boards': ReturnType< $shm_hitalama_app['Boards'] >,
		}) 
		Enter( ): $shm_hitalama_profile_enter
		Register( ): $shm_hitalama_profile_register
		Placeholder( ): any
		Board( ): $shm_hitalama_board_page
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    class $shm_hitalama_app extends $.$shm_hitalama_app {
        profiles_ref(): string;
        Spread_current(): $mol_view;
        pages(): readonly any[];
        logo_uri(): string;
        profiles(): $shm_hitalama_profile_dict;
        board(): $hyoo_crus_node;
    }
}

declare namespace $.$$ {
}

export = $;
//# sourceMappingURL=web.d.ts.map