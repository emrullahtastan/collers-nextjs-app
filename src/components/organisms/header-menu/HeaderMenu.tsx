import Link from "next/link";
import styles from './HeaderMenu.module.css'
import {SecondaryButton} from "@/components/atoms/button/SecondaryButton";
import React from "react";

type HeaderMenuProps = {
    isMobile?: boolean;
};

export const HeaderMenu: React.FC<HeaderMenuProps> = ({isMobile = false}) => {
    return (
        <>
            <ul className={`${isMobile ? styles.headerMenuIsMobile : styles.headerMenu}`}>
                <li className={styles.headerMenuItem}><Link href={'/'}>Products</Link></li>
                <li className={styles.headerMenuItem}><Link href={'/'}>Solutions</Link></li>
                <li className={styles.headerMenuItem}><Link href={'/'}>Pricing</Link></li>
                <li className={styles.headerMenuItem}><Link href={'/'}>Resources</Link></li>
                <li className={styles.headerMenuItem}><Link href={'/'}>Log In</Link></li>
                <li className={styles.headerMenuItem}><Link href={'/'}><SecondaryButton>Sign up
                    now</SecondaryButton></Link></li>
            </ul>
        </>
    );
};
