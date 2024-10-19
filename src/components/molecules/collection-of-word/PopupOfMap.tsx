import {ArrowBottomIcon} from "@/components/atoms/icons/ArrowBottomIcon";
import {CircleIcon} from "@/components/atoms/icons/CircleIcon";

export const PopupOfMap = () => {
    return (
        <div className={'relative h-[310px] mt-[-270px] bottom-[-270px] left-[30px] md:left-[120px] overflow-x-hidden'}>
            <div className={'relative z-20'}>
                <img src={'/assets/shoe-two.png'}/>
            </div>
            <div
                className={'flex flex-col items-start w-[250px] text-xs bg-azureish-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),_0_0px_15px_rgba(0,0,0,0.07)] rounded-[5px] p-4 mt-[-45px] ml-[27.5px] font-roboto relative z-10'}>
                Emma Simpson collected one pair of <strong>Cool Shoes.</strong>
            </div>
            <div>
                <div className={'relative h-0 left-[135px]'}>
                    <div className={'max-w-[32px]'}>
                        <div className={'flex flex-col items-center'}>
                            <div className={'relative z-20'}>
                                <ArrowBottomIcon/>
                            </div>
                            <div className={'relative h-0 z-5 -top-4'}>
                                <CircleIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
