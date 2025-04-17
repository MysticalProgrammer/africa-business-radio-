'use client'

import Image from 'next/image';
import { Icon } from "@iconify/react";

import { CategoriesCard } from "@/components/partials/categories-card.component";
import { CarouselModal } from '@/components/shared/carousel-modal.component';
import {
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Categories() {
	return (
		<div className="pt-[144px] pb-[87px]">
			<div className="relative pt-[76px] pb-[17px]">
				<div className="container mx-auto">
					<p className="text-[28px] font-[800]">ALL PODCASTS</p>
					<div className="absolute left-[50%] translate-x-[-50%] border-b w-[90%] pb-[17px]"></div>
				</div>
			</div>
			<div className="container mx-auto h-[80px]">
				<div className='flex flex-wrap gap-[30px] uppercase mt-[49.5px]'>
					<div className='flex gap-[10px] items-center pr-[24.5px] h-[34px] leading-[34px] text-[16px] border-r border-[#C9C9C9]'>
						<p>Sort by : <span className='font-[700]'>Popular</span></p>
						<Popover>
							<PopoverTrigger className='cursor-pointer'>
								<Icon icon="pepicons-pencil:dots-x" width="30" height="30" />
							</PopoverTrigger>
							<PopoverContent>No other option yet.</PopoverContent>
						</Popover>
					</div>
					<div className='flex gap-[10px] items-center pr-[24.5px] h-[34px] leading-[34px] text-[16px]'>
						<p>Sort by category : <span className='font-[700]'>All</span></p>
						<Popover>
							<PopoverTrigger className='cursor-pointer'>
								<Icon icon="pepicons-pencil:dots-x" width="30" height="30" />
							</PopoverTrigger>
							<PopoverContent>No other option yet.</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
			<div className="pb-[53px] mb-[66px] border-b">
				<div className="container mx-auto grid grid-cols-5 gap-x-[47px] gap-y-[67px]">
					<CategoriesCard addClass='bg-transparent gap-[11.63px]' />
					<CategoriesCard addClass='bg-transparent gap-[11.63px]' />
					<CategoriesCard addClass='bg-transparent gap-[11.63px]' />
					<CategoriesCard addClass='bg-transparent gap-[11.63px]' />
					<CategoriesCard addClass='bg-transparent gap-[11.63px]' />
					<CategoriesCard addClass='bg-transparent gap-[11.63px]' />
				</div>
			</div>
			<div className="container mx-auto">
				<p className="text-[24px] font-[800] mb-[29px]">Explore other categories</p>
				<div>
					<CarouselModal withButtons={false} addClass="gap-[25px]">
						<CarouselItem className="basis-[306px]">
							<Card className='h-[177px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
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
								<CardHeader className='px-[12px] gap-0 py-[12px] absolute rounded-[3px] bottom-0 w-full text-white'>
									<CardTitle className='text-[18px] font-[700] line-clamp-1'>News & Storytelling</CardTitle>
								</CardHeader>
							</Card>
						</CarouselItem>
					</CarouselModal>
				</div>
			</div>
		</div>
	);
}
