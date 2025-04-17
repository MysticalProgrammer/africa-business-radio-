import Image from 'next/image';

export function MultipleAdsDisplay() {
	return (
		<div className="flex items-center justify-center gap-[71px] flex-wrap mt-[100px] mb-[85px]">
			<div className="md:min-w-[285px] md:w-[285px] w-[150px] md:min-h-[255px] md:h-[255px] h-[150px] overflow-hidden">
				<Image
					src="/assets/images/ads/pizza.jpeg"
					width={1000}
					height={1000}
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
					alt="pizza"
				/>
			</div>
			<div className="md:min-w-[285px] md:w-[285px] w-[150px] md:min-h-[255px] md:h-[255px] h-[150px] overflow-hidden">
				<Image
					src="/assets/images/ads/mtn.jpeg"
					width={1000}
					height={1000}
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
					alt="mtn"
				/>
			</div>
			<div className="md:min-w-[285px] md:w-[285px] w-[150px] md:min-h-[255px] md:h-[255px] h-[150px] overflow-hidden">
				<Image
					src="/assets/images/ads/firstbank.jpeg"
					width={1000}
					height={1000}
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
					alt="firstbank"
				/>
			</div>
		</div>
	);
}
