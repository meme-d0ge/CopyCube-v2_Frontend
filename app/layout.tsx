'use client'
import React from "react";
import '@/app/styles/globals.css'
import {Provider} from "react-redux";
import {store} from "@/app/store/store";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Provider store={store}>
                <body>
                    {children}
                </body>
            </Provider>
        </html>
    );
}
