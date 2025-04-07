'use client'
import React from 'react';
import Link from "next/link";
import styles from './Header.module.scss'
import {useAppSelector} from "@/shared/hooks/useAppSelector";
import HeaderProfileCard from "../components/HeaderProfileCard";
import {CardVariant} from "@/widgets/Header/components/HeaderProfileCard/ui/HeaderProfileCard";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import {Book, LogIn, Pencil, UserRoundPlus} from "lucide-react";
import Logout from "@/features/logout";

const Header = () => {
    const accessToken = useAppSelector(state => state.auth.accessToken)
    return (
        <header>
            <nav className={styles['nav']}>
                <div className={`${styles['nav__link-group']} ${styles['nav__content']}`}>
                    <Link className={styles['nav__link']} href={'/public'}>Public Post</Link>
                    <Link className={styles['nav__link']} href={'/'}>Create Post</Link>
                </div>
                <div className={`${styles['nav__content']}`}>
                    {accessToken ?
                        <HeaderProfileCard variant={CardVariant.outline}/> :
                        <div className={styles['nav__link-group']}>
                            <Link className={styles['nav__link']} href={'/auth'}>Login</Link>
                            <Link className={styles['nav__link']} href={'/auth'}>Register</Link>
                        </div>
                    }
                </div>
                <div className={styles['menu']}>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={styles['menu__trigger']}/>
                        <DropdownMenuContent className={styles['menu__content']}>
                            <DropdownMenuItem className={`${styles['menu__item']}`}>
                                <Link href={'/public'} className={styles['menu__link']}><Book/> Public Post</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem className={`${styles['menu__item']}`}>
                                <Link className={styles['menu__link']} href={'/'}><Pencil/>Create Post</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            {accessToken ?
                                <>
                                    <DropdownMenuItem className={`${styles['menu__item']}`}>
                                        <HeaderProfileCard/>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem className={`${styles['menu__item']}`}>
                                        <Logout/>
                                    </DropdownMenuItem>
                                </> :
                                <>
                                    <DropdownMenuItem className={`${styles['menu__item']}`}>
                                        <Link className={styles['menu__link']} href={'/auth'}><LogIn/>Login</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem className={`${styles['menu__item']}`}>
                                        <Link className={styles['menu__link']} href={'/auth'}><UserRoundPlus/>Register</Link>
                                    </DropdownMenuItem>
                                </>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
};

export default Header;