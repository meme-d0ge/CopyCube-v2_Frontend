'use client'
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/tabs";
import Login from "@/features/login";
import Register from "@/features/register";
import styles from './AuthWidget.module.scss'

interface AuthWidgetProps {
    className?: string,
}
const AuthWidget = ({className}: AuthWidgetProps) => {
    return (
        <Tabs className={className} defaultValue='login'>
            <TabsList className={styles['tabs-list']}>
                <TabsTrigger value="login">Account</TabsTrigger>
                <TabsTrigger value="register">Password</TabsTrigger>
            </TabsList>
            <TabsContent value={'login'}>
                <Login/>
            </TabsContent>
            <TabsContent value={'register'}>
                <Register/>
            </TabsContent>
        </Tabs>
    );
};

export default AuthWidget