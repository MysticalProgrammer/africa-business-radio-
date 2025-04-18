'use client'

import Image from 'next/image';
import { Icon } from "@iconify/react";
import { PlayButton } from '@/components/shared/play-button.component';
import { DefaultButton } from '@/components/shared/default-button.component';
import { CardWithFloatingPlayButton } from '@/components/partials/card-with-floating-play-button.component';
import { EmailSubscribe } from '@/components/partials/email-subscribe.component';
import { SharedModel } from '@/components/shared/shared-model.component';
import Link from 'next/link';
import { convertToDate, getData, timeAgo } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { use, useState } from 'react';
import { Root } from '@/types';

interface PodcastProps {
	params: {
		id: string;
	};
}

const maxChars = 500;

export default function Podcast({params}: PodcastProps) {

	const paramsBlack = use(params);
	
	const {data, isLoading} = useQuery({
		queryKey: ['episode'],
		queryFn: () => getData(`listeners/episodes/${paramsBlack.id}}`),
	})

	const episodes = useQuery({
		queryKey: ['episodes'],
		queryFn: () => getData(`listeners/podcasts/${data.data.podcast.id}/episodes?page=1&per_page=15`),
	})

	console.log(data);
	
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const toggleReadMore = () => setIsExpanded(prev => !prev);

	if(episodes.isLoading || isLoading) return (
		<div className='fixed grid place-content-center z-[999999] bg-black text-white w-screen h-screen'>
		<Icon icon="svg-spinners:pulse-multiple" width="200" height="200" />
		<p className='text-center'>Loading...</p>
		</div>
	)

	const shouldTruncate = data && data?.data?.description.length > maxChars;

	return (
		<div className="pb-[79px]">
			<div className="lg:h-[497px] bg-linear-[133.14deg] from-[#2B3221] from-[9.11%] to-[#F2F2F200] to-[298.89%] lg:mt-[144px] mt-[100px] lg:pb-0 pb-[20px]">
				<div className="container mx-auto h-full">
					<div className="py-[32px]">
						<Link href="/podcasts" className="flex items-center text-[13px] font-[600] text-white">
							<Icon icon="icon-park-outline:left" className="size-[17px]" />
							<p>Back to podcast</p>
						</Link>
					</div>
					<div className="flex md:flex-row flex-col gap-[15px] sm:px-0 px-4">
						<div className="min-w-[157px] w-[157px] h-[129px] rounded-[3px] bg-yellow-200">
							<Image
								src={data.data.picture_url}
								width={1000}
								height={1000}
								style={{ objectFit: "cover", width: "100%", height: "100%" }}
								alt="license"
							/>
						</div>
						<div className="text-white">
							<div className="mb-[40px]">
								<div className='flex items-center text-[13px] font-[700] gap-[12px]'>
									<p>{convertToDate(data.data.created_at)}</p>
									<div className='size-[6px] rounded-full bg-[#828282]'></div>
									<p className='ml-[1px]'>{timeAgo(data.data.created_at)}</p>
								</div>
								<p className="text-[20px] font-[700] mt-[11px] mb-[7px]">
									{data.title}
								</p>
								<div>
									<p className="text-[16px] font-[500] leading-[26px]">
										{shouldTruncate && !isExpanded
											? data.data.description.slice(0, maxChars) + '...' : data.data.description}
										{shouldTruncate && (
											<button type="button" onClick={toggleReadMore} className="text-[#BCFFB6] text-[15px] font-[700] uppercase">{isExpanded ? 'Read Less' : 'Read More'}</button>
										)}
									</p>
								</div>
							</div>
							<div className="flex space-y-[13px]">
								<div className="flex gap-[25px] w-full">
									<div className="flex flex-1 gap-[9.5px] items-center text-[13px] font-[700]">
										<p>00:15</p>
										<div className="w-full">
											<input type="range" className="block w-full bg-[#CDCDCD] h-[4px] accent-[#9CCC65]" />
										</div>
										<p>28:04</p>
									</div>
									<button type="button" className="text-[#CDCDCD]">
										<Icon icon="heroicons:speaker-wave-solid" width="18" height="18" />
										{/* <Icon icon="heroicons:speaker-x-mark-solid" width="24" height="24" /> */}
									</button>
								</div>
							</div>
							<div className='flex justify-between mt-[50px]'>
								<div className='flex gap-[17px] items-center'>
									<button type='button'>
										<Image
											src="/assets/images/icons/rotate-right.svg"
											width={1000}
											height={1000}
											style={{ width: "30px", height: "30px" }}
											alt="right"
										/>
									</button>
									<PlayButton />
									<button type='button'>
										<Image
										src="/assets/images/icons/rotate-left.svg"
										width={1000}
										height={1000}
										style={{ width: "30px", height: "30px" }}
										alt="left"
										/>
									</button>
								</div>
								<div className='flex gap-[21px]'>
									<SharedModel link="">
										<button type='button' className={`flex items-center justify-center aspect-square rounded-full bg-[#E1E1E1] cursor-pointer`} style={{height: 40, width: 40}}>
											<Image
												src="/assets/images/icons/share.svg"
												width={1000}
												height={1000}
												style={{ width: "16.5px", height: "16.5px" }}
												alt="share"
											/>
										</button>
									</SharedModel>
									<DefaultButton buttonSize={40}>
										<Image
										src="/assets/images/icons/gift.svg"
										width={1000}
										height={1000}
										style={{ width: "18px", height: "18px" }}
										alt="gift"
										/>
									</DefaultButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="mt-[49px] mb-[16px] border-b pb-[20.01px]">
					<p className="text-[14px] font-[800]">NEXT EPISODES IN QUEUE</p>
				</div>
				<div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[35px] mt-[28.99px] sm:px-0 px-4">
					{
						episodes?.data?.data?.data.map((item:Root, index:number) => (
							<CardWithFloatingPlayButton data={item} image_url={item.picture_url} key={index} />
						))
					}
				</div>
			</div>
			<div className='mt-[127px]'>
				<EmailSubscribe />
			</div>
		</div>
	);
}
