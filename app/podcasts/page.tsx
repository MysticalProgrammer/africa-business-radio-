'use client'

import Link from "next/link";
import Image from 'next/image';
import { PodcastCard } from "@/components/partials/podcast-card.component";
import { AdsBoard } from "@components/partials/ads-board.component";
import { SharedModel } from '../../components/shared/shared-model.component';
import { PaginationList } from "@/components/shared/pagination-list.component";

// interface Props {
// 	params: {
// 		id: string;
// 	};
// }

export default function Podcast() {

	return (
		<div className="pb-[174px]">
			<div className="md:h-[435px] bg-linear-[133.14deg] from-[#2B3221] from-[9.11%] to-[#F2F2F200] to-[298.89%] lg:mt-[144px] mt-[100px] md:py-0 py-[20px] sm:px-0 px-4">
				<div className="container flex md:flex-row flex-col h-full items-center gap-[25px] mx-auto relative">
					<div className="md:block hidden">
						<SharedModel>
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
					<div className="md:w-[390px] h-[350px] rounded-[3px] bg-yellow-200">
						<Image
							src="/assets/images/icons/white-share.svg"
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
									<SharedModel>
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
							<p className="text-[28px] font-[800] mb-[4px]">Hope For the Widow</p>
							<p className="text-[16px] font-[500] leading-[26px]">The show aims to shed light on the challenges faced by less privileged widows, providing support and a platform to promote a better life. Join us in making a difference. #EmpoweringWidows #SupportingWidows.</p>
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
					<p className="text-[14px] font-[800]">ALL EPISODES  <span className="font-[500]">(3 AVAILABLE)</span></p>
				</div>
				<div className="flex flex-1 w-full gap-[163px]">
					<div className="pb-[100px] w-full">
						<div className="w-full pb-[42px]">
							<div className="">
								<PodcastCard />
							</div>
							<div className="">
								<PodcastCard />
							</div>
							<div className="max-[846px] border-b">
								<PodcastCard />
							</div>
						</div>
						<div className='container mx-auto md:pl-[57px] md:block flex justify-center'>
							<PaginationList />
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
