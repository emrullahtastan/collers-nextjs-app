import React from 'react';
import Image from "next/image";
import Title from "@/components/atoms/title/Title";
import {SecondaryButton} from "@/components/atoms/button/SecondaryButton";
import WatchDemoButton from "@/components/atoms/button/WatchDemoButton";
import {HeroCard} from "@/components/molecules/hero-card/HeroCard";

const HeroBottom = () => {
    return (
        <div className={'mt-10 flex md:bg-custom-gradient bg-custom-gradient-two'}>
            <div className={'container mx-auto'}>
                <div className={'md:flex m-4 md:m-1'}>
                    <div className={'flex flex-col gap-6 md:w-3/5'}>
                        <Title
                            className={'md:text-6xl md:text-left text-[56px] leading-none font-extrabold text-dark-jungle-green text-center'}>
                            Collectible Sneakers
                        </Title>
                        <Title className={'md:text-left text-lg text-dark-jungle-green text-center'}>
                            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
                            mauris.
                            Pharetra, eu imperdiet ipsum ultrices amet.
                        </Title>
                        <div className={'flex gap-1 items-center md:justify-start justify-center'}>
                            <SecondaryButton>Sign up now</SecondaryButton>
                            <WatchDemoButton></WatchDemoButton>
                        </div>
                    </div>
                    <div className={'md:w-2/5'}>
                        <Image src={'/assets/shoe.png'} alt={''} width={'486'} height={'486'}/>
                    </div>
                </div>
                <div className={'md:flex flex flex-col md:flex-row justify-center'}>
                    <HeroCard icon={'CupIcon'} title={'Nibh viverra'} desc={'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '}/>
                    <HeroCard icon={'TwoIcon'} title={'Cursus amet'} desc={'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '}/>
                    <HeroCard icon={'TvIcon'} title={'Ipsum fermentum'} desc={'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. '}/>
                </div>
            </div>
        </div>
    );
};

export default HeroBottom;
