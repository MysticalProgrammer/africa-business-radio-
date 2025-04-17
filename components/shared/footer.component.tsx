import Image from 'next/image';
import Link from 'next/link';

// interface FooterProps {
// 	children: React.ReactNode;
// }

const menu = [
	{
		name: 'HOME',
		href: '/',
	},
	{
		name: 'ABOUT US',
		href: '/',
	},
	{
		name: 'CONTACT US',
		href: '/',
	},
	{
		name: 'ALL PODCAST',
		href: '/podcasts',
	},
	{
		name: 'ADVERTISE',
		href: '/',
	},
	{
		name: 'RESOURCES',
		href: '/',
	},
]

export function Footer() {
	return (
		<div className="bg-[#282828] py-[26px] xl:px-[60px] px-[20px]">
			<div className="container mx-auto">
				<div className='w-[140px]'>
					<Image
						src="/assets/images/white-logo.png"
						width={1000}
						height={1000}
						style={{ objectFit: "cover", width: "100%", height: "100%" }}
						alt="ads"
					/>
				</div>
				<div className='flex flex-wrap gap-[30px] uppercase mt-[49.5px]'>
					{
						menu.map((item, index) => (
							<Link href={item.href} key={index} className='block text-[#C9C9C9] pr-[24.5px] h-[34px] leading-[34px] text-[16px] font-[700] border-r border-[#C9C9C9]'>{item.name}</Link>
						))
					}
					<div className='flex gap-[10px] items-center text-[#C9C9C9] pr-[24.5px] h-[34px] leading-[34px] text-[16px] font-[700]'>
						<p>CONNECT WITH ABR</p>
						<div className='flex gap-[10px] h-[24px]'>
							<div className='w-[24px]'>
								<Image
									src="/assets/images/icons/instagram.png"
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="ads"
								/>
							</div>
							<div className='w-[24px]'>
								<Image
									src="/assets/images/icons/facebook.png"
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="ads"
								/>
							</div>
							<div className='w-[24px]'>
								<Image
									src="/assets/images/icons/twitter.png"
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="ads"
								/>
							</div>
							<div className='w-[24px]'>
								<Image
									src="/assets/images/icons/location.png"
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="ads"
								/>
							</div>
							<div className='w-[24px]'>
								<Image
									src="/assets/images/icons/linkedin.png"
									width={1000}
									height={1000}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt="ads"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap items-center md:gap-10 gap-4 mt-[49.5px] text-white text-[14px]'>
					<div className='flex gap-3 items-center'>
						<div className='size-[3px] rounded-full bg-white'></div> 
						<span>© Copyright 2021. All Rights Reserved.</span>
					</div>
					<Link href="/">Terms & conditions</Link>
					<Link href="/">Privacy policy</Link>
				</div>
			</div>
		</div>
	);
}
