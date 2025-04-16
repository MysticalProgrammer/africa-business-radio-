import { Icon } from "@iconify/react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselModalProps {
	children: React.ReactNode,
	withButtons?: boolean,
}

export function CarouselModal({children, withButtons = true} : CarouselModalProps) {
	return (
		<Carousel className='relative'>
			<CarouselContent>
				{children}
			</CarouselContent>

			{withButtons && 
				<div className='xl:block hidden absolute top-[50%] translate-y-[-50%] w-[73px] h-[44px] rounded-[12px] bg-[#F9F9F9] z-10 right-[-36.5px] overflow-hidden shadow-[0_0px_5px_rgba(0,0,0,0.25)]'>
					<CarouselPrevious className='border-0 w-[36.5px] left-0 bg-transparent rounded-none h-full'>
						<Icon icon="bxs:left-arrow" width="24" height="24" />
					</CarouselPrevious>
					<CarouselNext className='border-0  w-[36.5px] right-0 bg-transparent rounded-none h-full'>
						<Icon icon="bxs:right-arrow" width="24" height="24" />
					</CarouselNext>
				</div>
			}
		</Carousel>
	);
}
