import {SubmitHandler, useForm} from "react-hook-form";
import {CreateUserData, useCreateUserMutation} from "@/shared/api";
import {toast} from "sonner";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {ErrorApi} from "@/shared/api/api.interface";

const UseRegisterForm = () => {
    const {register, handleSubmit} = useForm<CreateUserData>()

    const [CreateUser] = useCreateUserMutation();

    const onSubmit: SubmitHandler<CreateUserData> = async (registerData) => {
        const customPromise = new Promise((resolve, reject) => {
            CreateUser({
                displayName: registerData.displayName,
                username: registerData.username,
                password: registerData.password,
            } as CreateUserData).then(({error}) => {
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
                    resolve('Successful register');
                }
            }).catch((error) => {
                reject(`${error}`)
            });
        });
        toast.promise(customPromise, {
            loading: 'Loading...',
            success: (result) => `${result}`,
            error: (error)=> `${error}`,
        });
    }

    return {
        register,
        handleSubmit,
        onSubmit
    };
};

export default UseRegisterForm;