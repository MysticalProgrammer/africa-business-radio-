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
import { PaginationList } from '@/components/shared/pagination-list.component';
import { useQuery } from '@tanstack/react-query';
import { Root } from '@/types'
import { getData } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CategoriesClient(){
	const searchParams = useSearchParams();
	const page = Number(searchParams.get("page")) || 1;

	const categories = useQuery({
		queryKey: ['podcasts', page],
		queryFn: () => getData(`listeners/top-categories'}`),
	})

	const podcasts = useQuery({
		queryKey: ['podcasts', page],
		queryFn: () => getData(`listeners/top-podcasts${window.location.search ? window.location.search+'&per_page=15' : '?page=1&per_page=15'}`),
	})

	
	if(podcasts.isLoading) return (
		<div className='fixed grid place-content-center z-[999999] bg-black text-white w-screen h-screen'>
		<Icon icon="svg-spinners:pulse-multiple" width="200" height="200" />
		<p className='text-center'>Loading...</p>
		</div>
	)

	return (
		<div className="pt-[144px] pb-[87px] sm:px-0 px-4">
			<div className='border-b pb-[87px]'>
				<div className="relative pt-[76px] pb-[17px]">
					<div className="container mx-auto">
						<p className="text-[28px] font-[800]">ALL PODCASTS</p>
						<div className="absolute left-[50%] translate-x-[-50%] border-b w-[90%] pb-[17px]"></div>
					</div>
				</div>
				<div className="container mx-auto h-[80px]">
					<div className='flex flex-wrap md:gap-[30px] gap-[10px] uppercase mt-[49.5px]'>
						<div className='flex gap-[10px] items-center md:pr-[24.5px] pr-[10px] md:h-[34px] h-[20px] leading-[34px] md:text-[16px] text-[11px] border-r border-[#C9C9C9]'>
							<p>Sort by : <span className='font-[700]'>Popular</span></p>
							<Popover>
								<PopoverTrigger className='cursor-pointer'>
									<Icon icon="pepicons-pencil:dots-x" width="30" height="30" />
								</PopoverTrigger>
								<PopoverContent>No other option yet.</PopoverContent>
							</Popover>
						</div>
						<div className='flex gap-[10px] items-center pr-[24.5px] h-[34px] leading-[34px] md:text-[16px] text-[11px]'>
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
				<div className="pb-[53px] mb-[66px]">
					<div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-[47px] gap-y-[67px]">
						{
							podcasts.data?.data?.data && podcasts.data?.data?.data?.map((item:Root, index:number) => (
								<CategoriesCard key={index} data={item} addClass='bg-transparent gap-[11.63px]' />
							))
						}
					</div>
				</div>
				<div className='container mx-auto flex justify-center'>
					<PaginationList data={podcasts.data.data} />
				</div>
			</div>
			<div className="container mx-auto mt-[66px]">
				<p className="text-[24px] font-[800] mb-[29px]">Explore other categories</p>
				<div>
					<CarouselModal withButtons={false} addClass="gap-[25px]">
						{
							categories.data?.data?.data?.map((item:Root, index:number) => (
								<CarouselItem className="basis-[306px]" key={index}>
									<Card className='h-[177px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
										<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
										</div>
										<CardContent className='h-full w-full px-0'>
											<Image
											src={item.picture_url}
											width={1000}
											height={1000}
											style={{ objectFit: "cover", width: "100%", height: "100%" }}
											alt="license"
											/>
										</CardContent>
										<CardHeader className='px-[12px] gap-0 py-[12px] absolute rounded-[3px] bottom-0 w-full text-white'>
											<CardTitle className='text-[18px] font-[700] line-clamp-1'>{item.title}</CardTitle>
										</CardHeader>
									</Card>
								</CarouselItem>
							))
						}
					</CarouselModal>
				</div>
			</div>
		</div>
	);
}

export default function Categories() {

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CategoriesClient />
		</Suspense>
	);
}
