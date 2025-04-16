import { LandingPageEpisodeCard } from '@/components/partials/landing-page-episode-card.component';
import {
  CarouselItem,
} from "@/components/ui/carousel"
import { Icon } from "@iconify/react";
import { CarouselModal } from '@/components/shared/carousel-modal.component';

interface MultipleAdsDisplayProps {
	title: string;
}

export function Episodes({title}: MultipleAdsDisplayProps) {
	return (
		<div className='container mx-auto space-y-[35px] sm:px-0 px-4'>
			<div className='flex justify-between items-center sm:px-0 px-[4px]'>
				<div className='flex items-center h-[13px] mt-[6px] mb-[18px] border-l-[3px] border-[#CC0001]'>
				<p className='text-[16px] font-[600] text-[#5A5A5A] pl-[5px]'>{title}</p>
				</div>
				<button type='button' className='flex items-center gap-[10px] text-[#9747FF] border border-[#9747FF] text-[15px] px-[18px] py-[7px] rounded-[22px]'>View All <Icon icon="uiw:right" className='size-[15px]' /></button>
			</div>
			<CarouselModal withButtons={false}>
				<CarouselItem className="basis-[265px]">
				<LandingPageEpisodeCard />
				</CarouselItem>
			</CarouselModal>
		</div>
	);
}
