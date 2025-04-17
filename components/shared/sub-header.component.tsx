'use client'

import Image from 'next/image';
import { Icon } from "@iconify/react";
import { useState } from 'react';

const menu = [
	{
		name: 'Latest News',
		href: '/',
		icon: 'book.svg',
	},
	{
		name: 'New Episodes',
		href: '/',
		icon: 'microphone.svg',
	},
	{
		name: 'Our Services',
		href: '/',
		icon: 'services.svg',
	},
	{
		name: 'All Podcasts',
		href: '/podcasts',
		icon: 'podcast.svg',
	},
]

export function SubHeader() {
	const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)

	return (
		<div className="fixed lg:top-[72px] top-[50px] w-screen lg:h-[72px] h-[50px] bg-[#1B1B1B] shadow-[#00000026] z-[800]">
			<div className='container mx-auto flex lg:h-[72px] h-[50px] justify-between'>
				<div>
					<div className="md:absolute left-0 flex justify-between h-full md:w-[608px] w-full md:px-[16px] px-[8px] filter-[8px]" style={{backgroundImage: "url('/assets/images/studio.png')"}}>
						<div className='flex items-center md:gap-[17px] gap-[5px] h-full'>
							<button type='button' className='md:size-[46px] size-[20px]'>
								<Image
									src="/assets/images/icons/Live-play-button.svg"
									width={400}
									height={500}
									className='md:size-[46px] size-[20px]'
									style={{ objectFit: "cover" }}
									alt="play"
								/>
							</button>
							<div>
								<p className='md:text-[18px] text-[13px] font-[700] text-white md:w-full w-[200px] truncate'>Listen to ABR Live Radio</p>
								<div className='flex items-center gap-[3px] md:text-[13px] text-[11px] text-[#9CCC65]'> 
									<div className='size-[11px] rounded-full'></div>
									<p>ON AIR</p>
								</div>
							</div>
						</div>
						<div className='flex items-center gap-[8px] h-full'>
							<Image
								src="/assets/images/icons/schedule.svg"
								width={400}
								height={500}
								className='md:size-[18px] size-[15px]'
								style={{ objectFit: "cover" }}
								alt="schedules"
							/>
							<p className='md:block hidden md:text-[13px] text-[11px] font-[600] text-white'>View schedules</p>
						</div>
					</div>
				</div>
				<div className='xl:flex hidden items-center h-full'>
					<div className='h-[20px] pl-[31px] flex items-center border-l-[1.5px] text-white gap-[30px]'>
						{
							menu.map((item, index) => (
								<a href={item.href} className='flex items-center gap-[7px] text-[15px]' key={index}>
									<Image
										src={`/assets/images/icons/${item.icon}`}
										width={400}
										height={500}
										style={{ objectFit: "cover", width: "18px", height: "18px" }}
										alt={item.name}
									/>
									<p className='font-[700]'>{item.name}</p>
								</a>
							))
						}
					</div>
				</div>
				<div className='xl:hidden flex items-center h-full'>
					<button type='button' className="grid place-content-center size-[40px] rounded-lg" onClick={() => setSubMenuIsOpen(!subMenuIsOpen)}>
						{subMenuIsOpen ? (<Icon icon="material-symbols:close-rounded" className="size-[38px] text-white" />) : (<Icon icon="subway:menu" className="size-[24px] text-white" />)}
					</button>
				</div>
			</div>
			{subMenuIsOpen && (
				<div className='xl:hidden grid justify-center w-full bg-neutral-800 text-center py-2'>
					{
						menu.map((item, index) => (
							<a href={item.href} className='flex items-center gap-[7px] text-[15px] py-2 text-white mx-auto' key={index}>
								<Image
									src={`/assets/images/icons/${item.icon}`}
									width={400}
									height={500}
									style={{ objectFit: "cover", width: "18px", height: "18px" }}
									alt={item.name}
								/>
								<p className='font-[700]'>{item.name}</p>
							</a>
						))
					}
				</div>
			)}
		</div>
	);
}
