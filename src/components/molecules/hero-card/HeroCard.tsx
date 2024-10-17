import React from "react";
import Title from "@/components/atoms/title/Title";
import {CupIcon} from "@/components/atoms/icons/CupIcon";
import {TwoIcon} from "@/components/atoms/icons/TwoIcon";
import {TvIcon} from "@/components/atoms/icons/TvIcon";

type HeroCardProps = {
    icon: string;
    title: string;
    desc: string;
};

export const HeroCard: React.FC<HeroCardProps> = ({ icon, title, desc }) => {

    const icons: { [key: string]: React.FC } = {
        CupIcon: CupIcon,
        TvIcon: TvIcon,
        TwoIcon: TwoIcon,
    };

    const Icon = icons[icon];

    return (
        <div className={'flex flex-col items-center md:items-start mx-2'}>
            <div className={'min-h-28'}>
                {Icon ? <Icon /> : null}
            </div>
            <Title className={'text-dark-jungle-green font-semibold text-xl mb-4'}>
                {title}
            </Title>
            <Title className={'text-lg text-center md:text-left'}>
                {desc}
            </Title>
        </div>
    );
};
