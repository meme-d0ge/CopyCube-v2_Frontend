'use client'
import React from "react";
import '@/app/styles/globals.css'
import {Provider} from "react-redux";
import {store} from "@/app/store/store";
import dynamic from "next/dynamic";

const NoSSRThemeProvider = dynamic(() => import('@/shared/ui/providers/CustomThemeProvider'), { ssr: false })
export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Provider store={store}>
                <body>
                    <NoSSRThemeProvider>
                        {children}
                    </NoSSRThemeProvider>
                </body>
        </Provider>
        </html>
    );
}
