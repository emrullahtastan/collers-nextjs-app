'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import Title from "@/components/atoms/title/Title";
import {LeftIcon} from "@/components/atoms/icons/LeftIcon";
import {RightIcon} from "@/components/atoms/icons/RightIcon";

export const CarouselRow = () => {
    return (
        <div className={'container mx-auto'}>
            <div className={'flex justify-between px-6'}>
                <Title className={'text-[56px] font-bold'}>
                    Because they love us
                </Title>
                <div className={'flex gap-4 items-center'}>
                    <div className="swiper-button-prev cursor-pointer">
                        <LeftIcon/>
                    </div>
                    <div className="swiper-button-next cursor-pointer">
                        <RightIcon/>
                    </div>
                </div>
            </div>
            <div className={'bg-yellow'}>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
