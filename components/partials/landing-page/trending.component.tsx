import Image from 'next/image';

import { CarouselModal } from '@/components/shared/carousel-modal.component';
import {
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Root } from '@/types';
import Link from 'next/link';

export function Trending({data}:{data: Root[]}) {

	return (
		<div>
			<div className='container mx-auto py-[27px] pb-[37px] sm:px-0 px-4'>
				<div className='sm:px-0 px-[4px]'>
					<p className='text-[24px] font-[700]'>Trending this week</p>
					<div className='flex items-center h-[13px] mt-[6px] mb-[18px] border-l-[3px] border-[#CC0001]'>
					<p className='text-[16px] font-[600] text-[#5A5A5A] pl-[5px]'>Featured Episodes</p>
					</div>
				</div>
				<div>
					<CarouselModal>
						{
							data.length && data.map((item:Root, index:number) => (
								<CarouselItem className="basis-[288px]" key={index}>
									<Link href={`/episode/${item.id}`}>
										<Card className='h-[424px] relative rounded-[3px] shadow-none border-0 p-0 bg-transparent overflow-hidden'>
										<div className='absolute top-0 left-0 bg-linear-to-t from-black to-transparent w-full form-[56.45%] to-[104.25%] h-full'>
										</div>
										<CardContent className='h-full w-full px-0'>
											<Image
											src={item.picture_url}
											width={1000}
											height={1000}
											style={{ objectFit: "cover", width: "100%", height: "100%" }}
											alt={item.title}
											/>
										</CardContent>
										<CardHeader className='p-0 px-6 py-4 absolute rounded-[3px] bottom-0 w-full text-white'>
											{/* <CardDescription className='text-[13px] font-[700] text-white'>8 Episodes</CardDescription> */}
											<CardTitle className='text-[20px] font-[700] line-clamp-2'>{item.title}</CardTitle>
										</CardHeader>
										</Card>
									</Link>
								</CarouselItem>
							))
						}
					</CarouselModal>
				</div>
			</div>
		</div>
	);
}
