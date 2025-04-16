import { Icon } from "@iconify/react";

// interface PlayButtonProps {
// 	children: React.ReactNode;
// }

export function PlayButton({buttonSize = 46, iconSize = 26}) {
	return (
		<>
			<button type='button' className={`flex items-center justify-center size-[${buttonSize}px] aspect-square rounded-full bg-[#CC0001]`}>
				<Icon icon="si:play-fill" className={`size-[${iconSize}px] text-white`} />
			</button>
		</>
	);
}
