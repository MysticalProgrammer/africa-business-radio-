import Image from 'next/image';
import { Icon } from "@iconify/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// interface CarouselWithButtonsProps {
// 	children: React.ReactNode;
// }

export function CarouselWithButtons() {
	return (
		<Carousel className='relative'>
			<CarouselContent>
				<CarouselItem className="basis-[288px]">
					<Card className='h-[424px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
						<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
						</div>
						<CardContent className='h-full w-full px-0'>
							<Image
							src="/assets/images/license.jpeg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
							/>
						</CardContent>
						<CardHeader className='p-0 px-6 py-4 absolute rounded-[3px] bottom-0 w-full text-white'>
							<CardDescription className='text-[13px] font-[700] text-white'>8 Episodes</CardDescription>
							<CardTitle className='text-[20px] font-[700] line-clamp-1'>Hope For the Widow</CardTitle>
						</CardHeader>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-[288px]">
					<Card className='h-[424px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
						<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
						</div>
						<CardContent className='h-full w-full px-0'>
							<Image
							src="/assets/images/license.jpeg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
							/>
						</CardContent>
						<CardHeader className='p-0 px-6 py-4 absolute rounded-[3px] bottom-0 w-full text-white'>
							<CardDescription className='text-[13px] font-[700] text-white'>8 Episodes</CardDescription>
							<CardTitle className='text-[20px] font-[700] line-clamp-1'>Hope For the Widow</CardTitle>
						</CardHeader>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-[288px]">
					<Card className='h-[424px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
						<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
						</div>
						<CardContent className='h-full w-full px-0'>
							<Image
							src="/assets/images/license.jpeg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
							/>
						</CardContent>
						<CardHeader className='p-0 px-6 py-4 absolute rounded-[3px] bottom-0 w-full text-white'>
							<CardDescription className='text-[13px] font-[700] text-white'>8 Episodes</CardDescription>
							<CardTitle className='text-[20px] font-[700] line-clamp-1'>Hope For the Widow</CardTitle>
						</CardHeader>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-[288px]">
					<Card className='h-[424px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
						<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
						</div>
						<CardContent className='h-full w-full px-0'>
							<Image
							src="/assets/images/license.jpeg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
							/>
						</CardContent>
						<CardHeader className='p-0 px-6 py-4 absolute rounded-[3px] bottom-0 w-full text-white'>
							<CardDescription className='text-[13px] font-[700] text-white'>8 Episodes</CardDescription>
							<CardTitle className='text-[20px] font-[700] line-clamp-1'>Hope For the Widow</CardTitle>
						</CardHeader>
					</Card>
				</CarouselItem>
				<CarouselItem className="basis-[288px]">
					<Card className='h-[424px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
						<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
						</div>
						<CardContent className='h-full w-full px-0'>
							<Image
							src="/assets/images/license.jpeg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
							/>
						</CardContent>
						<CardHeader className='p-0 px-6 py-4 absolute rounded-[3px] bottom-0 w-full text-white'>
							<CardDescription className='text-[13px] font-[700] text-white'>8 Episodes</CardDescription>
							<CardTitle className='text-[20px] font-[700] line-clamp-1'>Hope For the Widow</CardTitle>
						</CardHeader>
					</Card>
				</CarouselItem>
			</CarouselContent>
			<div className='absolute top-[50%] translate-y-[-50%] w-[73px] h-[44px] rounded-[12px] bg-[#F9F9F9] z-10 right-[-36.5px] overflow-hidden shadow-[0_0px_5px_rgba(0,0,0,0.25)]'>
				<CarouselPrevious className='border-0 w-[36.5px] left-0 bg-transparent rounded-none h-full'>
					<Icon icon="bxs:left-arrow" width="24" height="24" />
				</CarouselPrevious>
				<CarouselNext className='border-0  w-[36.5px] right-0 bg-transparent rounded-none h-full'>
					<Icon icon="bxs:right-arrow" width="24" height="24" />
				</CarouselNext>
			</div>
		</Carousel>
	);
}
