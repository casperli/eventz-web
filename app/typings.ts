interface IComponentRouteConfig {
    path: string;
    name: string;
    component: string;
    useAsDefault?: boolean;
}

// - "styles" is included here in order to reference the style sheet at a reasonable point in
//   the code -- next to the template -- instead of somewhere else. Angular 2 will include the
//   styles in the component definition, too.
// - "$routeConfig" is missing from the original angular typings. Remove it here when
//   angular has fixed it!
interface IExtendedComponentOptions extends ng.IComponentOptions {
    styles?: string;
    $routeConfig?: IComponentRouteConfig[]
}
