'use client'
import React from 'react';
import {useGetProfileQuery} from "@/shared/api";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/ui/avatar";
import {Skeleton} from "@/shared/ui/skeleton";
import styles from './UserProfileCard.module.scss'
import Link from "next/link";
import {switchVariant} from "@/features/UserProfileCard/model/switchVariant";

export enum CardVariant {
    default = '',
    outline = 'outline',
}
interface UserProfileCardProps {
    variant?: CardVariant;
}
const UserProfileCard = ({variant = CardVariant.default}: UserProfileCardProps) => {
    const {isError, isLoading, data} = useGetProfileQuery('')

    if (isLoading) {
        return (
            <div className={`${styles['profileCard--skeleton']} ${switchVariant(variant)}`}>
                <Skeleton className={styles['profileCard__avatar--skeleton']}/>
                <div className={styles['profileCard__textBox--skeleton']}>
                    <Skeleton className={styles['profileCard__displayName--skeleton']}/>
                    <Skeleton className={styles['profileCard__username--skeleton']}/>
                </div>
            </div>
        );
    } else if (isError) {
        return (
            <div>
                Error
            </div>
        );
    } else if (data) {
        return (
            <Link href={'/profile'} className={`${styles['profileCard']} ${switchVariant(variant)}`}>
                <Avatar className={styles['profileCard__avatar']}>
                    <AvatarImage src={data.avatar || process.env.NEXT_PUBLIC_DEFAULT_AVATAR}></AvatarImage>
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <div className={styles['profileCard__textBox']}>
                    <p className={styles['profileCard__displayName']}>{data.displayName}</p>
                    <p className={styles['profileCard__username']}>@{data.username}</p>
                </div>
            </Link>
        );
    }
};

export default UserProfileCard;