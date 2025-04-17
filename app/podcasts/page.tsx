'use client'

import Link from "next/link";
import Image from 'next/image';
import { PodcastCard } from "@/components/partials/podcast-card.component";
import { AdsBoard } from "@components/partials/ads-board.component";

// interface Props {
// 	params: {
// 		id: string;
// 	};
// }

export default function Podcast() {

	return (
		<div className="pb-[174px]">
			<div className="h-[435px] bg-linear-[133.14deg] from-[#2B3221] from-[9.11%] to-[#F2F2F200] to-[298.89%] mt-[144px]">
				<div className="container flex h-full items-center gap-[25px] mx-auto relative">
					<button type="button" className="absolute right-0 top-[40px]">
						<Image
							src="/assets/images/icons/white-share.svg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
						/>
					</button>
					<div className="w-[390px] h-[350px] rounded-[3px] bg-yellow-200"></div>
					<div className="text-white">
						<div className="mb-[40px] max-w-[578px]">
							<p className="text-[14px] text-[#BFBFBF] font-[800] mb-[20px]">PODCAST</p>
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
										alt="ads"
									/>
								</Link>
								<Link href='/' className="block size-[32px] rounded-full">
									<Image
										src="/assets/images/icons/broadcast.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="ads"
									/>
								</Link>
								<Link href='/' className="block size-[32px] rounded-full">
									<Image
										src="/assets/images/icons/waves.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="ads"
									/>
								</Link>
								<Link href='/' className="block rounded-full">
									<Image
										src="/assets/images/icons/WokpaLogo.svg"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="ads"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="mt-[51px] mb-[19px]">
					<p className="text-[14px] font-[800]">ALL EPISODES  <span className="font-[500]">(3 AVAILABLE)</span></p>
				</div>
				<div className="flex flex-1 w-full gap-[163px]">
					<div className="pb-[100px] w-full">
						<div className="max-[846px]">
							<PodcastCard />
						</div>
						<div className="max-[846px]">
							<PodcastCard />
						</div>
						<div className="max-[846px] border-b">
							<PodcastCard />
						</div>
					</div>
					<div>
						<AdsBoard>
							<div>
								<p className='text-[#5A5A5A] md:text-[11px] text-[10px] text-right font-[700] mr-[5px]'>ADVERTISEMENT</p>
							</div>
							<div className="space-y-[34px]">
								<div className="w-[344px] h-[489px]">
									<Image
										src="/assets/images/FBN-ADVERT-2 1.png"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="ads"
									/>
								</div>
								<div className="w-[344px] h-[330px]">
									<Image
										src="/assets/images/FBN-ADVERT-2 1.png"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="ads"
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
