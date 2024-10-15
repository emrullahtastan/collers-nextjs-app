import {HeaderMenu} from "@/components/organisms/header-menu/HeaderMenu";
import Title from "@/components/atoms/title/Title";
import HeroBottom from "@/components/templates/rows/hero/HeroBottom";


export const HeroRow = () => {
    return (
        <div className={'bg-floral-white'} >
            <div className={'container mx-auto'}>
                <div className={'flex justify-between align-middle'}>
                    <div><Title className={'text-philippine-bronze font-bold text-[32px]'}>Collers</Title></div>
                    <div className={'flex items-center'}><HeaderMenu/></div>
                </div>
            </div>
            <HeroBottom/>
        </div>
    );
};
