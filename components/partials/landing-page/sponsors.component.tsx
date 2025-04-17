import Image from 'next/image';

// interface SponsorsProps {
// 	children: React.ReactNode;
// }

export function Sponsors() {
	return (
		<div className="">
			<p className="lg:text-[24px] text-[16px] font-[800] text-center">OUR GLOBAL PARTNERS</p>
			<div className='container mx-auto'>
				<div className='flex flex-wrap justify-center items-center gap-[72px]'>
					<div className='xl:w-[176px] w-[100px] grayscale hover:grayscale-0 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/theworldbank.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="theworldbank"
						/>
					</div>
					<div className='xl:w-[318px] w-[218px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/nieman.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="nieman"
						/>
					</div>
					<div className='xl:w-[176px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/ned.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ned"
						/>
					</div>
					<div className='xl:w-[222px] w-[150px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/fledge.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="fledge"
						/>
					</div>
				</div>
				<div className='flex flex-wrap justify-center items-center gap-[72px] pt-[55px] pb-[45px]'>
					<div className='xl:w-[176px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/pan.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="pan"
						/>
					</div>
					<div className='xl:w-[214px] w-[114px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/business.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="business"
						/>
					</div>
					<div className='xl:w-[178px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/hub.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="hub"
						/>
					</div>
					<div className='xl:w-[179px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/africa.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="africa"
						/>
					</div>
					<div className='xl:w-[158px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/mic.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="mic"
						/>
					</div>
				</div>
				<div className='flex flex-wrap justify-center items-center gap-[50px]'>
					<div className='xl:w-[109px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/uae.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ads"
						/>
					</div>
					<div className='xl:w-[246px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/989.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="989"
						/>
					</div>
					<div className='xl:w-[91px] w-[80px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/ge.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="ge"
						/>
					</div>
					<div className='xl:w-[266px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/prof.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="prof"
						/>
					</div>
					<div className='xl:w-[108px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/absa.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="absa"
						/>
					</div>
					<div className='xl:w-[105px] w-[100px] grayscale hover:grayscale-50 transition-filter duration-1000'>
						<Image
							src="/assets/images/sponsors/sapna.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="sapna"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
