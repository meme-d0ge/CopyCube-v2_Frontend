'use client'
import React from "react";
import '@/app/styles/globals.css'
import {Provider} from "react-redux";
import {persistor, store} from "@/app/store/store";
import dynamic from "next/dynamic";
import {PersistGate} from "redux-persist/integration/react";
import {Toaster} from "@/shared/ui/sonner";
import Header from "@/widgets/Header";

const NoSSRThemeProvider = dynamic(() => import('@/shared/ui/providers/CustomThemeProvider'), { ssr: false })
export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Provider store={store}>
            <body>
            <div className={'inner'}>
                <PersistGate loading={null} persistor={persistor}>
                    <NoSSRThemeProvider>
                        <Header/>
                        {children}
                        <Toaster position={'bottom-left'} richColors/>
                    </NoSSRThemeProvider>
                </PersistGate>
            </div>
            </body>
        </Provider>
        </html>
    );
}
