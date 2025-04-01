import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card";
import {Label} from "@/shared/ui/label";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import styles from './Register.module.scss'
import useRegisterForm from "@/features/register/model/useRegisterForm";

const Register = () => {
    const {register, onSubmit, handleSubmit} = useRegisterForm()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <CardHeader>
                    <CardTitle className={styles.header}>Register</CardTitle>
                    <CardDescription>Register to your account to start communicating</CardDescription>
                </CardHeader>
                <CardContent className={styles.content}>
                    <div>
                        <Label className={styles.label} htmlFor="displayName">Display name</Label>
                        <Input {...register('displayName')} id='displayName' placeholder={'Display name'}></Input>
                    </div>
                    <div>
                        <Label className={styles.label} htmlFor="name">Username</Label>
                        <Input {...register('username')} id='username' placeholder={'Username'}></Input>
                    </div>
                    <div>
                        <Label className={styles.label} htmlFor="password">Password</Label>
                        <Input {...register('password')} type={'password'} id='password' placeholder={'Password'}></Input>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className={styles.button} type={'submit'}>Register</Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default Register;