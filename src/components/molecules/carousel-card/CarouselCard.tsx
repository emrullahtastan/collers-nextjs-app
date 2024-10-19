import React from "react";
type Profile = {
    image: string;
    name: string;
    title: string;
}

type CarouselCardProps = {
    logo: string;
    description: string;
    profile: Profile
}

export const CarouselCard: React.FC<CarouselCardProps> = ({logo, description, profile}) => {
    return (
        <>
            <div
                className={'box-border flex flex-col justify-between p-8 isolate w-[320px] h-[300px] md:w-[364px] md:h-[430px] bg-white border border-blue-gray-200 rounded-[20px] order-1 shadow-lg'}>
                <div className={'pb-4'}>
                    <img src={logo}/>
                </div>
                <div className={'text-base md:text-2xl md:leading-9'}>
                    {description}
                </div>
                <div className={'pt-4 flex gap-4 items-center '}>
                    <div>
                        <img src={profile.image}/>
                    </div>
                    <div>
                        <div className={'text-lg'}>{profile.name}</div>
                        <div className={'text-base text-independence'}>{profile.title}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
