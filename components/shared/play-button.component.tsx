import { Icon } from "@iconify/react";

// interface PlayButtonProps {
// 	children: React.ReactNode;
// }

export function PlayButton({buttonSize = 46, iconSize = 26}) {
	return (
		<>
			<button type='button' className={`flex items-center justify-center aspect-square rounded-full bg-[#CC0001]`} style={{height: buttonSize, width: buttonSize}}>
				<Icon icon="si:play-fill" className={`text-white`} style={{height: iconSize, width: iconSize}} />
			</button>
		</>
	);
}
