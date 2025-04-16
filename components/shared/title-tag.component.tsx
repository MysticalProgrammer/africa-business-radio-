interface TitleTagProps {
	children: React.ReactNode;
	backgroundColor: string,
}

export function TitleTag({ children, backgroundColor }: TitleTagProps) {
	return (
		<div className={`sm:h-[64px] px-[29px] py-[17px]`} style={{backgroundColor: backgroundColor}}>
			{children}
		</div>
	);
}
