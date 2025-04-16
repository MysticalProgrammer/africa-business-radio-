import Image from 'next/image';

import { CardWithFloatingPlayButton } from '@components/partials/card-with-floating-play-button.component';
import { PlayButton } from '@components/shared/play-button.component';

export function EditorsPick() {
	return (
		<div className='bg-[#F6F6F6]'>
			<div className='container mx-auto py-[27px] pb-[37px] sm:px-0 px-4'>
			<div className='sm:px-0 px-[4px]'>
				<p className='text-[24px] font-[700]'>EDITOR’S PICKS</p>
				<div className='flex items-center h-[13px] mt-[6px] mb-[18px] border-l-[3px] border-[#CC0001]'>
				<p className='text-[16px] font-[600] text-[#5A5A5A] pl-[5px]'>Featured Episodes</p>
				</div>
			</div>
			<div className='grid lg:grid-cols-2 grid-cols-1 xl:gap-[43px] lg:gap-[20px] gap-[30px]'>
				<div className='md:h-[561px] relative rounded-[3px] '>
				<Image
					src="/assets/images/license.jpeg"
					width={1000}
					height={1000}
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
					alt="ads"
				/>
				<div className='flex text-white md:px-[25px] px-[5px] items-center absolute bottom-0 h-[86px] w-full bg-[#00000080] gap-[16px]'>
					<PlayButton />
					<p className='text-[24px] font-[800] line-clamp-2 w-full'>Bridging the Financing Gap in Nigeria’s off-grid sector</p>
				</div>
				</div>
				<div className='md:h-[561px]'>
				<div className='grid sm:grid-cols-2 grid-cols-1 gap-[35px]'>
					<CardWithFloatingPlayButton image_url='flyer_1.png' />
					<CardWithFloatingPlayButton image_url='flyer_2.jpeg'  />
				</div>
				<div className='mt-[22px]'>
					<div>
					<p className='leading-4 text-[#5A5A5A] md:text-[13px] text-[10px] text-right font-[700] mr-[12px]'>ADVERTISEMENT</p>
					</div>
					<div>
					<Image
						src="/assets/images/btc.jpeg"
						width={1000}
						height={1000}
						style={{ objectFit: "cover", objectPosition: "left", width: "100%", height: "99px" }}
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
