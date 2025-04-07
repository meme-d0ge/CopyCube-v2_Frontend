'use client'
import React from 'react';
import {LogOut} from "lucide-react";
import {Button} from "@/shared/ui/button";
import {api, useLogoutMutation} from "@/shared/api";
import {toast} from "sonner";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";

interface LogoutProps {
    className?: string;
}

const Logout = ({className}: LogoutProps) => {
    const [LogoutMutation] = useLogoutMutation()
    const dispatch = useAppDispatch()
    const logout = async () => {
        const requestPromise = new Promise((resolve, reject) => {
            return LogoutMutation('').then(({error}) => {
                if (error) {
                    reject("Logged out failed");
                } else {
                    dispatch(api.util.resetApiState())
                    resolve('Successfully logged out.');
                }
            })
        })
        toast.promise(requestPromise, {
            loading: 'Loading...',
            success: (result) => `${result}`,
            error: (error) => `${error}`,
        });
    };
    return (
        <Button onClick={logout} className={className} variant={'ghost'}>
            <LogOut/>
            Sign out
        </Button>
    );
};

export default Logout;