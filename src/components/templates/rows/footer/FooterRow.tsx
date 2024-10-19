import {WorldIcon} from "@/components/atoms/icons/WorldIcon";
import Link from "next/link";
import styles from './FooterRow.module.css';
import {DownloadAppStoreIcon} from "@/components/atoms/icons/DownloadAppStoreIcon";
import {DownloadGooglePlay} from "@/components/atoms/icons/DownloadGooglePlay";
import {YouTubeIcon} from "@/components/atoms/icons/YouTubeIcon";
import {FacebookIcon} from "@/components/atoms/icons/FacebookIcon";
import {TwitterIcon} from "@/components/atoms/icons/TwitterIcon";
import {InstagramIcon} from "@/components/atoms/icons/InstagramIcon";
import {LinkedInIcon} from "@/components/atoms/icons/LinkedInIcon";

export const FooterRow = () => {
    return (
        <>
            <div className={'bg-dark-jungle-green text-white md:px-40 font-roboto'}>
                <div
                    className={'text-center flex flex-col gap-12 md:flex md:flex-row md:text-left justify-between border-bottom-1 border-b border-charcoal py-12'}>
                    <div>
                        <div className={styles.footerMenuTitle}>Product</div>
                        <ul>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Pricing</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Overview</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Browse</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Accessibility</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Five</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.footerMenuTitle}>Solutions</div>
                        <ul>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Brainstorming</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Ideation</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Wireframing</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Research</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Design</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className={styles.footerMenuTitle}>Support</div>
                        <ul>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Contact Us</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Developers</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Documentation</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Integrations</Link></li>
                            <li className={styles.footerMenuItem}><Link href={'/'}>Reports</Link></li>
                        </ul>
                    </div>
                    <div className={'flex flex-col justify-between items-center md:items-start'}>
                        <div className={'flex flex-col items-center md:items-start md:justify-start'}>
                            <div className={styles.footerMenuTitle}>Get the App</div>
                            <div className={'mb-2'}><Link href={'/'}><DownloadGooglePlay/></Link></div>
                            <div className={'my-1'}><Link href={'/'}><DownloadAppStoreIcon/></Link></div>
                        </div>
                        <div className={''}>
                            <div className={'mt-4 mb-3 align-middle'}>Follow Us</div>
                            <div>
                                <ul className={'flex gap-4'}>
                                    <li><Link href={'/'}><YouTubeIcon/></Link></li>
                                    <li><Link href={'/'}><FacebookIcon/></Link></li>
                                    <li><Link href={'/'}><TwitterIcon/></Link></li>
                                    <li><Link href={'/'}><InstagramIcon/></Link></li>
                                    <li><Link href={'/'}><LinkedInIcon/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'py-12 flex flex-col items-center gap-12 md:items-start md:flex-row justify-between'}>
                    <div>Collers @ 2023. All rights reserved.</div>
                    <div>
                        <ul className={'flex justify-between gap-8'}>
                            <li><Link href={'/'}> Terms</Link></li>
                            <li><Link href={'/'}>Privacy</Link></li>
                            <li><Link href={'/'}>Contact</Link></li>
                            <li><Link href={'/'}>
                                <div className={'flex gap-2'}><WorldIcon/><span>EN</span></div>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
