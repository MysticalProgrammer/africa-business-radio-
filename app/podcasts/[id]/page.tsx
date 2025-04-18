'use client'

import Link from "next/link";
import Image from 'next/image';
import { PodcastCard } from "@/components/partials/podcast-card.component";
import { AdsBoard } from "@components/partials/ads-board.component";
import { SharedModel } from '@components/shared/shared-model.component';
import { useQuery } from '@tanstack/react-query';
import { use, useState } from 'react';
import { Root } from '@/types';
import { getData } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { PaginationList } from "@/components/shared/pagination-list.component";
import { useSearchParams } from "next/navigation";

interface PodcastProps {
	params?: {
		id: string;
	};
}

const maxChars = 500;

export default function Podcast({params}: PodcastProps) {
	const paramsBlack = use(params);
	const searchParams = useSearchParams();
	const page = Number(searchParams.get("page")) || 1;
	
	const {data, isLoading} = useQuery({
		queryKey: ['podcast'],
		queryFn: () => getData(`listeners/podcasts/${paramsBlack.id}}`),
	})

	const episodes = useQuery({
		queryKey: ['episode', page],
		queryFn: () => getData(`listeners/podcasts/${paramsBlack.id}/episodes${window.location.search}&per_page=5`),
	})
	
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
		<div className="pb-[174px]">
			<div className="md:h-[435px] bg-linear-[133.14deg] from-[#2B3221] from-[9.11%] to-[#F2F2F200] to-[298.89%] lg:mt-[144px] mt-[100px] md:py-0 py-[20px] sm:px-0 px-4">
				<div className="container flex md:flex-row flex-col h-full items-center gap-[25px] mx-auto relative">
					<div className="md:block hidden">
						<SharedModel link="">
							<button type="button" className="absolute right-0 top-[40px] cursor-pointer">
								<Image
									src="/assets/images/icons/white-share.svg"
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="share"
								/>
							</button>
						</SharedModel>
					</div>
					<div className="md:w-[390px] h-[350px] rounded-[3px]">
						<Image
							src={data.data.picture_url}
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="share"
						/>
					</div>
					<div className="text-white sm:px-0 px-4">
						<div className="mb-[40px] max-w-[578px]">
							<div className="flex items-center mb-[20px]">
								<p className="text-[14px] text-[#BFBFBF] font-[800]">PODCAST</p>
								<div className="md:hidden">
									<SharedModel link="">
										<button type="button" className="ml-2 size-[14px] cursor-pointer">
											<Image
												src="/assets/images/icons/white-share.svg"
												width={1000}
												height={1000}
												style={{ objectFit: "cover", width: "100%", height: "100%" }}
												alt="share"
											/>
										</button>
									</SharedModel>
								</div>
							</div>
							<p className="text-[28px] font-[800] mb-[4px]">{data.data.title}</p>
							<p className="text-[16px] font-[500] leading-[26px]">{shouldTruncate && !isExpanded
								? data.data.description.slice(0, maxChars) + '...' : data.data.description}
							{shouldTruncate && (
								<button type="button" onClick={toggleReadMore} className="text-[#BCFFB6] text-[15px] font-[700] uppercase">{isExpanded ? 'Read Less' : 'Read More'}</button>
							)}</p>
						</div>
						<div className="space-y-[13px]">
							<p className="text-[14px] font-[600] text-[#BFBFBF]">Available on</p>
							<div className="flex gap-[15px]">
								<Link href='/' className="block size-[32px] rounded-full">
									<Image
										src="/assets/images/icons/sportify.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="shopify"
									/>
								</Link>
								<Link href='/' className="block size-[32px] rounded-full">
									<Image
										src="/assets/images/icons/broadcast.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="broadcast"
									/>
								</Link>
								<Link href='/' className="block size-[32px] rounded-full">
									<Image
										src="/assets/images/icons/waves.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="waves"
									/>
								</Link>
								<Link href='/' className="block rounded-full">
									<Image
										src="/assets/images/icons/WokpaLogo.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="wokpa"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto sm:px-0 px-4">
				<div className="mt-[51px] mb-[19px]">
					<p className="text-[14px] font-[800]">ALL EPISODES  <span className="font-[500]">({episodes ? episodes?.data?.data?.data.length : 0} AVAILABLE)</span></p>
				</div>
				<div className="flex flex-1 w-full gap-[163px]">
					<div className="pb-[100px] w-full">
						<div className="w-full pb-[42px]">
							{
								episodes && episodes?.data?.data?.data.map((item:Root, index:number) => (
									<div className={episodes?.data?.data?.data.length == 1+index ? 'border-b' : ''} key={index}>
										<PodcastCard data={item} />
									</div>
								))
							}
						</div>
						<div className='container mx-auto md:pl-[57px] md:block flex justify-center'>
							<PaginationList data={episodes.data.data} />
						</div>
					</div>
					<div className="lg:block hidden">
						<AdsBoard>
							<div>
								<p className='text-[#5A5A5A] md:text-[11px] text-[10px] text-right font-[700] mr-[5px]'>ADVERTISEMENT</p>
							</div>
							<div className="space-y-[34px]">
								<div className="w-[344px] h-[489px]">
									<Image
										src="/assets/images/ads/mtn.jpeg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="fbn"
									/>
								</div>
								<div className="w-[344px] h-[330px]">
									<Image
										src="/assets/images/ads/pizza.jpeg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="fbn"
									/>
								</div>
							</div>
						</AdsBoard>
					</div>
				</div>
			</div>
		</div>
	);
}
