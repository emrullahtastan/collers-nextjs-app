import {WorldMapSvg} from "@/components/atoms/image/WorldMapSvg";
import {PopupOfMap} from "@/components/molecules/collection-of-word/PopupOfMap";
import Title from "@/components/atoms/title/Title";
import Link from "next/link";
import {SettingsIcon} from "@/components/atoms/icons/SettingsIcon";
import styles from './CollectionOfWorldRow.module.css';
import {PodcastIcon} from "@/components/atoms/icons/PodcastIcon";
import {ScreenIcon} from "@/components/atoms/icons/ScreenIcon";
import {RocketIcon} from "@/components/atoms/icons/RocketIcon";
import {SheildCheckIcon} from "@/components/atoms/icons/SheildCheckIcon";
import {SearchIcon} from "@/components/atoms/icons/SearchIcon";


export const CollectionOfWorldRow = () => {
    return (
        <>
            <div className={'bg-waves bg-left-top bg-no-repeat bg-cover md:bg-center w-full md:h-[856px]'}>
                <div className={' container mx-auto px-4'}>
                    <Title className={'text-[32px] md:text-[56px] font-extrabold text-center md:text-left mb-8'}>Grow your
                        collection</Title>
                    <Title className={'text-base md:text-lg mb-4 text-center md:text-left'}>Enim neque massa porta
                        adipiscing elit. Sem libero id faucibus
                        nibh
                        amet
                        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam
                        tellus.</Title>
                    <div className={'md:flex'}>
                        <div>
                        <ul className={'flex gap-0 md:block overflow-x-scroll mb-4'}>
                            <li><Link href={'/'} className={styles.leftMenuItemLink}><SearchIcon/>Bibendum tellus</Link>
                            </li>
                            <li><Link href={'/'} className={styles.leftMenuItemLink}><SheildCheckIcon/>Cras eget</Link>
                            </li>
                            <li><Link href={'/'} className={styles.leftMenuItemLink}><RocketIcon/>Dolor pharetra</Link>
                            </li>
                            <li><Link href={'/'} className={styles.leftMenuItemLink}><ScreenIcon/>Amet, fringilla</Link>
                            </li>
                            <li><Link href={'/'} className={styles.leftMenuItemLink}><PodcastIcon/>Amet nibh</Link></li>
                            <li><Link href={'/'} className={styles.leftMenuItemLink}><SettingsIcon/>Sed velit</Link>
                            </li>
                        </ul>
                        </div>

                        <div className={'container'}>
                            <img src={'/assets/screens.png'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-philippine-bronze pt-4 md:mt-[-100px]'}>
                <div className={'px-4 overflow-x-hidden'}>
                    <PopupOfMap/>
                    <div className={'container mx-auto overflow-hidden md:overflow-visible px-4'}>
                        <WorldMapSvg/>
                        <div
                            className={'text-white flex flex-col items-center font-extrabold mt-[-350px] h-[350px] md:mt-[-400px] md:h-[400px]'}>
                            <div className={'text-5xl md:text-8xl'}>11,658,467</div>
                            <div className={'text-[32px] md:text-[56px]'}>Shoes Collected</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
