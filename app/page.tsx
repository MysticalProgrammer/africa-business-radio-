import Image from 'next/image';

import { AdsBoard } from "@components/partials/ads-board.component";
import { WhiteBoardAds } from '@components/partials/white-board-ads.component';


import { TitleTag } from '@/components/shared/title-tag.component';

import { EditorsPick } from '@/components/partials/landing-page/editors-pick.component';
import { Trending } from '@/components/partials/landing-page/trending.component';
import { NewEpisodes } from '@/components/partials/landing-page/new-episodes.component';
import { Episodes } from '@/components/partials/landing-page/episodes.component';
import { MultipleAdsDisplay } from '@/components/partials/multiple-ads-display.component';
import { EmailSubscribe } from '@/components/partials/email-subscribe.component';
import { Sponsors } from '@/components/partials/landing-page/sponsors.component';


export default function Home() {
  return (
    <div className="lg:pt-[144px] pt-[100px]">
      <AdsBoard>
        <WhiteBoardAds>
          <div>
            <p className='text-[#5A5A5A] md:text-[11px] text-[10px] text-right font-[700] mr-[5px]'>ADVERTISEMENT</p>
          </div>
          <div>
            <Image
              src="/assets/images/FBN-ADVERT-2 1.png"
              width={1000}
              height={1000}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt="fbn"
            />
          </div>
        </WhiteBoardAds>
      </AdsBoard>
      <EditorsPick />
      <Trending />
      <NewEpisodes />
      <div className='container mx-auto my-[66px]'>
        <TitleTag backgroundColor='#F0E4FF'>
          <p className='sm:text-[24px] text-[15px] font-[800]'>LISTEN BY ABR CATEGORIES</p>
        </TitleTag>
      </div>
      <Episodes title='News & Storytelling' />
      <AdsBoard>
        <MultipleAdsDisplay />
      </AdsBoard>
      <div className='space-y-[85px]'>
        <Episodes title='Educational' />
        <Episodes title='Entertainment & Lifestyle' />
        <Episodes title='Tech, Sport & Business' />
        <Episodes title='Other Podcasts' />
      </div>
      <div className='mt-[150px] mb-[146px]'>
        <EmailSubscribe />
      </div>
      <div className='mb-[127px]'>
        <Sponsors />
      </div>
    </div>
  );
}
