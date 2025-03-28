import React from 'react';
import {ThemeProvider} from "next-themes";

const CustomThemeProvider = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <ThemeProvider attribute="class" defaultTheme={window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"}>
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider;
