import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import { Label } from '@/shared/ui/label';

import styles from './Login.module.scss'

const Login = () => {
    return (
        <form>
            <Card>
                <CardHeader>
                    <CardTitle className={styles.header}>Login</CardTitle>
                    <CardDescription>Login to your account to start communicating</CardDescription>
                </CardHeader>
                <CardContent className={styles.content}>
                    <div>
                        <Label className={styles.label} htmlFor="name">Username</Label>
                        <Input id='username' placeholder={'Username'}></Input>
                    </div>
                    <div>
                        <Label className={styles.label} htmlFor="password">Password</Label>
                        <Input type={'password'} id='password' placeholder={'Password'}></Input>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className={styles.button} type={'submit'}>Login</Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default Login;