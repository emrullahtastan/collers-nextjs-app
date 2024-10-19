'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import Title from "@/components/atoms/title/Title";
import {LeftIcon} from "@/components/atoms/icons/LeftIcon";
import {RightIcon} from "@/components/atoms/icons/RightIcon";
import {CarouselCard} from "@/components/molecules/carousel-card/CarouselCard";

export const CarouselRow = () => {
    const data = [{
        logo: '/assets/logos/logo-one.png',
        description: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        profile: {image: '/assets/profile-images/profile-one.png', name: 'Hellen Jummy', title: 'Team Lead'}
    }, {
        logo: '/assets/logos/logo-two.png',
        description: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.  ',
        profile: {image: '/assets/profile-images/profile-two.png', name: 'Hellen Jummy', title: 'Team Lead'}
    }, {
        logo: '/assets/logos/logo-three.png',
        description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        profile: {image: '/assets/profile-images/profile-three.png', name: 'Hellen Jummy', title: 'Team Lead'}
    }, {
        logo: '/assets/logos/logo-four.png',
        description: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        profile: {image: '/assets/profile-images/profile-four.png', name: 'Hellen Jummy', title: 'Team Lead'}
    }, {
        logo: '/assets/logos/logo-five.png',
        description: 'Egestas aliquet, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis enim nibh sit.',
        profile: {image: '/assets/profile-images/profile-five.png', name: 'Hellen Jummy', title: 'Team Lead'}
    },{
        logo: '/assets/logos/logo-two.png',
        description: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.  ',
        profile: {image: '/assets/profile-images/profile-two.png', name: 'Hellen Jummy', title: 'Team Lead'}
    }, {
        logo: '/assets/logos/logo-three.png',
        description: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        profile: {image: '/assets/profile-images/profile-three.png', name: 'Hellen Jummy', title: 'Team Lead'}
    },]
    return (
        <div className={'mb-10'}>
            <div className={'container mx-auto flex justify-between'}>
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
            <div className={'mt-[-370px]'}>
                <div className={'bg-yellow h-[400px] mx-4'} style={{position: 'relative', bottom:'-370px'}}></div>
                <div>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={100} // Slaytlar arasındaki boşluğu belirler
                        slidesPerView={4} // Her seferinde 2.5 slayt gösterir
                        centeredSlides={true} // Ortadaki slaytı merkeze alır
                        loop={true} // Döngü sağlar
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {data?.map((item, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <CarouselCard {...item}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
