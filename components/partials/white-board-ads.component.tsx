interface WhiteBoardAdsProps {
	children: React.ReactNode;
}

export function WhiteBoardAds({ children }: WhiteBoardAdsProps) {
	return (
		<>
			<div className="bg-white">
				<div className="w-[80%] md:pt-[21px] pt-[15px] md:pb-[51px] pb-[31px] mx-auto">
					{children}
				</div>
			</div>
		</>
	);
}
