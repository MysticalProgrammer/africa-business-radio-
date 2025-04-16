import { Icon } from "@iconify/react";

// interface PlayButtonProps {
// 	children: React.ReactNode;
// }

export function PlayButton() {
	return (
		<>
			<button type='button' className='flex items-center justify-center size-[46px] aspect-square rounded-full bg-[#CC0001]'>
				<Icon icon="si:play-fill" className='size-[26px] text-white' />
			</button>
		</>
	);
}
