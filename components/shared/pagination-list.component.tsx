import { Pagination } from "@/types";
import { Icon } from "@iconify/react";

export function PaginationList({data}:Pagination) {
	return (
		<div className="flex gap-[8px]">
			<button type="button" className="cursor-pointer">
				<Icon icon="bxs:left-arrow" className="size-[16px]" />
			</button>
			{
				Array(10).fill(null).map((item, index) => (
					<button type="button" key={index} className="h-[34px] w-[37px] text-[15px] text-white rounded-[8px] cursor-pointer"
					style={{backgroundColor: data.current_page == 1+index ? '#2C2C2C' : '#AEAEAE'}}>
						<p>{1+index}</p>
					</button>
				))
			}
			<button type="button" className="cursor-pointer">
				<Icon icon="bxs:right-arrow" className="size-[16px]" />
			</button>
		</div>
	);
}
