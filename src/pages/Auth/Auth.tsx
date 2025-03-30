'use client'
import React from 'react';
import styles from './Auth.module.scss'
import AuthWidget from "@/widgets/AuthWidget/ui/AuthWidget";

const Auth = () => {
    return (
        <main className={styles.container}>
            <AuthWidget className={styles.tabs}/>
        </main>
    );
};

export default Auth;