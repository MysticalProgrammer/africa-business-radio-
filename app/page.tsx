'use client'

import Image from 'next/image';

import { AdsBoard } from "@components/partials/ads-board.component";
import { WhiteBoardAds } from '@components/partials/white-board-ads.component';


import { TitleTag } from '@/components/shared/title-tag.component';
// import { Icon } from "@iconify/react";
import { EditorsPick } from '@/components/partials/landing-page/editors-pick.component';
import { Trending } from '@/components/partials/landing-page/trending.component';
import { NewEpisodes } from '@/components/partials/landing-page/new-episodes.component';
import { Episodes } from '@/components/partials/landing-page/episodes.component';
import { MultipleAdsDisplay } from '@/components/partials/multiple-ads-display.component';
import { EmailSubscribe } from '@/components/partials/email-subscribe.component';
import { Sponsors } from '@/components/partials/landing-page/sponsors.component';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/lib/utils';
import { Icon } from '@iconify/react';

export default function Home() {
  const editorspick = useQuery({
    queryKey: ['podcasts'],
    queryFn: () => getData('listeners/episodes/latest'),
  })

  const trending = useQuery({
    queryKey: ['trending'],
    queryFn: () => getData('listeners/popular-and-trending-podcasts'),
  })

  const latestEpisode = useQuery({
    queryKey: ['latestEpisode'],
    queryFn: () => getData('listeners/episodes/latest'),
  })

  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: () => getData('listeners/top-podcasts?page=1&per_page=20'),
  })

  const turnArrayToObject = (array) => {
    return array.reduce((acc, item) => {
      if (!acc[item.category_name]) {
        acc[item.category_name] = [];
      }

      acc[item.category_name]?.push(item);
      return acc;
    }, {});
  };


  if(editorspick.isLoading || trending.isLoading || latestEpisode.isLoading || categories.isLoading) return (
    <div className='fixed grid place-content-center z-[999999] bg-black text-white w-screen h-screen'>
      <Icon icon="svg-spinners:pulse-multiple" width="200" height="200" />
      <p className='text-center'>Loading...</p>
    </div>
  )

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
      <EditorsPick data={editorspick.data.data.data} />
      <Trending data={trending.data.data.data} />
      <NewEpisodes data={latestEpisode.data.data.data} />
      <div className='container mx-auto my-[66px]'>
        <TitleTag backgroundColor='#F0E4FF'>
          <p className='sm:text-[24px] text-[15px] font-[800]'>LISTEN BY ABR CATEGORIES</p>
        </TitleTag>
      </div>
      {
        categories && categories.data?.data?.data && <Episodes title={Object.entries(turnArrayToObject(categories.data?.data?.data))[0][0]} data={Object.entries(turnArrayToObject(categories.data?.data?.data))[1]} />
      }
      <AdsBoard>
        <MultipleAdsDisplay />
      </AdsBoard>
      <div className='space-y-[85px]'>
        {
          categories && categories.data?.data?.data && Object.entries(turnArrayToObject(categories.data?.data?.data)).map(entry => (
            <Episodes title={entry[0]} key={entry[0]} data={entry} />
          ))
        }
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
