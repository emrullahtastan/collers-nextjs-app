import {HeroRow} from "@/components/templates/rows/hero/HeroRow";
import {CollectionOfWorldRow} from "@/components/templates/rows/collection-of-world-row/CollectionOfWorldRow";
import {FeaturedRow} from "@/components/templates/rows/featured-row/FeaturedRow";
import {BanneredRow} from "@/components/templates/rows/bannered-row/BanneredRow";
import {CarouselRow} from "@/components/templates/rows/carousel-row/CarouselRow";
import {FooterRow} from "@/components/templates/rows/footer/FooterRow";

export default function Home() {
    return (
        <div>
            <div>
                <HeroRow/>
            </div>
            <div>
                <FeaturedRow/>
            </div>
            <div>
                <BanneredRow/>
            </div>
            <div>
                <CarouselRow/>
            </div>
            <div>
                <CollectionOfWorldRow/>
            </div>
            <div>
                <FooterRow/>
            </div>
        </div>
    );
}
