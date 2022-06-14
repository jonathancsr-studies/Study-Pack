import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Group, Header, MantineProvider, Navbar, Text, UnstyledButton } from '@mantine/core';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function MainLink({ label, path }) {
    return (_jsx(Link, Object.assign({ to: path }, { children: _jsx(UnstyledButton, Object.assign({ sx: (theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                "&:hover": {
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                }
            }) }, { children: _jsx(Group, { children: _jsx(Text, Object.assign({ size: "sm" }, { children: label })) }) })) })));
}
export const AppShell = ({ title, colorScheme, routes, navLinks }) => {
    return (_jsx(BrowserRouter, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: {
                colorScheme
            } }, { children: _jsx(MantineAppShell, Object.assign({ padding: "md", navbar: _jsx(Navbar, Object.assign({ width: { base: 300 }, height: 500, p: "xs" }, { children: navLinks.map((link) => (_jsx(MainLink, { path: link.path, label: link.label }, link.path))) })), header: _jsx(Header, Object.assign({ height: 60, p: "xs", sx: {
                        display: "flex",
                    }, styles: (theme) => ({
                        main: {
                            backgroundColor: theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                        }
                    }) }, { children: title })) }, { children: _jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: _jsx(route.element, {}) }, route.path))) }) })) })) }));
};
