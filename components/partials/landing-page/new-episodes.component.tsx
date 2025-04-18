import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { DefaultButton } from '@/components/shared/default-button.component';
import { CarouselModal } from '@/components/shared/carousel-modal.component';
import {
  CarouselItem,
} from "@/components/ui/carousel"
import { SharedModel } from "@/components/shared/shared-model.component";
import { Root } from '@/types';
import { convertToDate, timeAgo } from '@/lib/utils';
import Link from 'next/link';

export function NewEpisodes({data}:{data: Root[]}) {
	return (
		<div className='container mx-auto mb-[50px] sm:px-0 px-4'>
			<div className='sm:px-0 px-[4px] mb-[29px] mt-[93px]'>
				<p className='text-[24px] font-[700]'>Newly added episodes</p>
			</div>
			<CarouselModal>
				{
					data.length && data.map((item:Root, index:number) => (
						<CarouselItem className="basis-[288px]" key={index}>
							<Card className='py-0 border-0 shadow-transparent bg-transparent gap-[14px] pb-4'>
							<CardContent className='p-0'>
								<Link href={`/episode/${item.id}`}>
									<div className='h-[187px]'>
										<Image
											src={item.picture_url}
											width={1000}
											height={1000}
											style={{ objectFit: "cover", width: "100%", height: "100%" }}
											alt={item.title}
										/>
									</div>
								</Link>
							</CardContent>
							<CardHeader className='p-0'>
								<CardDescription className='flex items-center text-[13px] font-[700] gap-[14px]'>
									<p>{convertToDate(item.created_at)}</p>
									<div className='size-[6px] rounded-full bg-[#828282]'></div>
									<p className='ml-[-1px]'>{timeAgo(item.created_at)}</p>
								</CardDescription>
								<CardTitle className='text-[16px] line-clamp-3'>
									<Link href={`/episode/${item.id}`}>
										{item.title}
									</Link>
								</CardTitle>
							</CardHeader>
							<CardFooter className='flex gap-[23px] p-0'>
								<p className='text-[13px] font-[500]'>More Episodes</p>
								<div className='flex gap-[11px]'>
									<SharedModel link={window.location.origin+'/episode/'+item.id}>
										<button type='button' className={`flex items-center justify-center aspect-square rounded-full bg-[#E1E1E1] cursor-pointer`} style={{height: 30, width: 30}}>
											<Image
											src="/assets/images/icons/share.svg"
											width={1000}
											height={1000}
											style={{ width: "16.5px", height: "16.5px" }}
											alt="share"
											/>
										</button>
									</SharedModel>
									<DefaultButton buttonSize={30}>
										<Image
										src="/assets/images/icons/gift.svg"
										width={1000}
										height={1000}
										style={{ width: "18px", height: "18px" }}
										alt="gift"
										/>
									</DefaultButton>
								</div>
							</CardFooter>
							</Card>
						</CarouselItem>
					))
				}
			</CarouselModal>
		</div>
	);
}
