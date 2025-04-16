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

export function NewEpisodes() {
	return (
		<div className='container mx-auto mb-[50px]'>
			<div className='sm:px-0 px-[4px] mb-[29px] mt-[93px]'>
				<p className='text-[24px] font-[700]'>Newly added episodes</p>
			</div>
			<CarouselModal>
				<CarouselItem className="basis-[288px]">
					<Card className='py-0 border-0 shadow-transparent bg-transparent gap-[14px] pb-4'>
					<CardContent className='p-0'>
						<div className='h-[187px]'>
						<Image
							src="/assets/images/license.jpeg"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
						/>
						</div>
					</CardContent>
					<CardHeader className='p-0'>
						<CardDescription className='flex items-center text-[13px] font-[700] gap-[14px]'>
						<p>AUG 29, 2023</p>
						<div className='size-[6px] rounded-full bg-red-400'></div>
						<p className='ml-[-1px]'>45 MINS</p>
						</CardDescription>
						<CardTitle className='text-[16px] line-clamp-3'>
						Relationship Button - Starting Afresh as a Widow
						</CardTitle>
					</CardHeader>
					<CardFooter className='flex gap-[23px] p-0'>
						<p className='text-[13px] font-[500]'>More Episodes</p>
						<div className='flex gap-[11px]'>
						<DefaultButton buttonSize={30}>
							<Image
							src="/assets/images/icons/share.svg"
							width={1000}
							height={1000}
							style={{ width: "16.5px", height: "16.5px" }}
							alt="ads"
							/>
						</DefaultButton>
						<DefaultButton buttonSize={30}>
							<Image
							src="/assets/images/icons/gift.svg"
							width={1000}
							height={1000}
							style={{ width: "18px", height: "18px" }}
							alt="ads"
							/>
						</DefaultButton>
						</div>
					</CardFooter>
					</Card>
				</CarouselItem>
			</CarouselModal>
		</div>
	);
}
