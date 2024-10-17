"use client";
import {useState} from "react";
import {HeaderMenu} from "@/components/organisms/header-menu/HeaderMenu";
import Title from "@/components/atoms/title/Title";
import HeroBottom from "@/components/templates/rows/hero/HeroBottom";
import {MenuIcon} from "@/components/atoms/icons/MenuIcon";



export const HeroRow = () => {
    const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
    const toggleMobileMenu = ()=>{
        setVisibleMobileMenu(!visibleMobileMenu);
    }
    return (
        <div className={'bg-floral-white'}>
            <div className={'container mx-auto'}>
                <div className={'flex justify-between align-middle'}>
                    <div className={'px-4 pt-1 flex items-center justify-between w-full'}>
                        <Title className={'text-philippine-bronze font-bold text-[32px]'}>Collers</Title>
                        <div className={'md:hidden'} onClick={toggleMobileMenu}><MenuIcon/></div>
                    </div>
                    <div className={'hidden md:flex items-center'}><HeaderMenu/></div>
                </div>
                <div className={'md:hidden flex justify-center'}>
                    {visibleMobileMenu ? <div className={'flex items-center'}><HeaderMenu isMobile={true}/></div> : <></>}
                </div>
            </div>
            <HeroBottom/>
        </div>
    );
};
