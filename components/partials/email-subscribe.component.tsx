import Image from 'next/image';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// interface EmailSubscribeProps {
// 	children: React.ReactNode;
// }

export function EmailSubscribe() {
	return (
		<div className="px-[11px]">
			<div className="grid xl:grid-cols-2 grid-cols-1 bg-[#F6E8E8] xl:h-[486px] xl:px-[121px] px-[50px] items-center xl:py-0 py-8 xl:gap-0 gap-[50px]">
				<div className='space-y-[51px] xl:order-1 order-2 xl:text-left text-center'>
					<div>
						<p className='text-[32px] font-[800]'>Never stop listening!</p>
						<p className='text-[24px] leading-[32px] font-[500]'>Every episodes is a journey<br /> you don’t wanna miss out on.</p>
					</div>
					<div className='space-y-[11px]'>
						<p className='text-[16px] leading-[25px]'>Get the latest headlines and unique ABR stories, sent every <br />  weekday.</p>
						<div className='flex items-center xl:justify-start justify-center gap-[9px]'>
							<div className='flex items-center gap-[4px]'>
								<Input type="email" placeholder="Enter your email" className='text-[14px] xl:w-[336px] rounded-[3px] h-[49px] bg-[#D9D9D9]' />
								<Button type="submit" className='text-[16px] px-[22px] py-[18px] rounded-[3px] h-[49px]'>Get me in</Button>
							</div>
							<button>
								<Image
									src={`/assets/images/icons/alert-circle.svg`}
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="ads"
								/>
							</button>
						</div>
					</div>
				</div>
				<div className='relative flex items-center xl:justify-end justify-center xl:order-2 order-1'>
					<div className='xl:size-[404px] size-[202px] rounded-full aspect-square'>
						<div className='relative size-full'>
							<Image
								src={`/assets/images/ads/podcast.png`}
								width={1000}
								height={1000}
								style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: '100%' }}
								alt="ads"
							/>
							<div className='absolute top-0 right-10 size-[50px]'>
								<Image
									src={`/assets/images/ads/image 22.svg`}
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: '100%' }}
									alt="ads"
								/>
							</div>
						</div>
					</div>
					<div className='absolute bottom-0 xl:right-[260px] right-[50%] xl:size-[218px] size-[150px] aspect-square rounded-full'>
						<div className='relative size-full scale-x-[-1]'>
							<Image
								src={`/assets/images/ads/sip.jpeg`}
								width={1000}
								height={1000}
								style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: '100%' }}
								alt="ads"
							/>
							<div className='absolute top-8 -right-[32px] size-[68.81px] scale-x-[-1]'>
								<Image
									src={`/assets/images/ads/image 23.svg`}
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: '100%' }}
									alt="ads"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
