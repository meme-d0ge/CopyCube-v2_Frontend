import {SubmitHandler, useForm} from "react-hook-form";
import {LoginData, useLoginMutation} from "@/shared/api";
import {toast} from "sonner";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {ErrorApi} from "@/shared/api/api.interface";

const UseLoginForm = () => {
    const {register, handleSubmit} = useForm<LoginData>()

    const [LoginUser] = useLoginMutation();

    const onSubmit: SubmitHandler<LoginData> = async (loginData) => {
        if (!loginData.username){
            toast.warning(`Username field is required`)
        }
        else if (!loginData.password){
            toast.warning(`Password field is required`)
        }
        else {
            const customPromise = new Promise((resolve, reject) => {
                LoginUser({
                    username: loginData.username,
                    password: loginData.password,
                } as LoginData).then(({error}) => {
                    if (error) {
                        const typedError = error as FetchBaseQueryError;
                        const errorMessage = (typedError.data as ErrorApi).message;
                        if (typedError.status === 'FETCH_ERROR' || typedError.status === 'TIMEOUT_ERROR') {
                            reject('Network Error');
                        } else if (errorMessage) {
                            reject(errorMessage)
                        } else {
                            reject('Error')
                        }
                    } else {
                        resolve('Successful login');
                    }
                }).catch((error) => {
                    reject(`${error}`)
                });
            });
            toast.promise(customPromise, {
                loading: 'Loading...',
                success: (result) => `${result}`,
                error: (error) => `${error}`,
            });
        }

    }

    return {
        register,
        handleSubmit,
        onSubmit
    };
};

export default UseLoginForm;