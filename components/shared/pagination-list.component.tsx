import { Icon } from "@iconify/react";

export function PaginationList() {
	return (
		<div className="flex gap-[8px]">
			<button type="button" className="cursor-pointer">
				<Icon icon="bxs:left-arrow" className="size-[16px]" />
			</button>
			<button type="button" className="h-[34px] w-[37px] text-[15px] bg-[#2C2C2C] text-white rounded-[8px] cursor-pointer">
				<p>1</p>
			</button>
			<button type="button" className="h-[34px] w-[37px] text-[15px] bg-[#AEAEAE] text-white rounded-[8px] cursor-pointer">
				<p>2</p>
			</button>
			<button type="button" className="cursor-pointer">
				<Icon icon="bxs:right-arrow" className="size-[16px]" />
			</button>
		</div>
	);
}
