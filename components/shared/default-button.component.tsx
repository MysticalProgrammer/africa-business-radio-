interface DefaultButtonProps {
	buttonSize: number,
	children: React.ReactNode;
}

export function DefaultButton(
	{
		children,
		buttonSize,
	} : DefaultButtonProps) {
	return (
		<>
			<button type='button' className={`flex items-center justify-center aspect-square rounded-full bg-[#E1E1E1]`} style={{height: buttonSize, width: buttonSize}}>
				{children}
			</button>
		</>
	);
}
