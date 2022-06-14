import * as React from "react";
export declare type Route = {
    element: React.FunctionComponent;
    path: string;
};
export declare type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: React.FunctionComponent<{
    title: string;
    routes: Route[];
    navLinks: NavLink[];
    colorScheme?: 'light' | 'dark';
}>;
//# sourceMappingURL=index.d.ts.map