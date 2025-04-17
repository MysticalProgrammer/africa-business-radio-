import { Key } from "react";
import { Icon } from "@iconify/react";

interface DropdownProps {
	item: {
		name: string,
		href: string,
		hasDrop: boolean,
		drop: {
			name: string,
			href: string,
		}[]
	};
}

export function Dropdown({ item }: DropdownProps) {
	if(! item.hasDrop){
		return (
			<a href={item.href} className="text-[15px] font-[700] h-full grid place-content-center leading-full cursor-pointer px-[17.5px]">{item.name}</a>
		);
	}else{
		return (
			<button type="button" className="dropdown grid place-content-center relative px-[17.5px] cursor-pointer z-50">
				<span className="flex font-[700] gap-[2px] items-center text-[15px] h-full">{item.name} <Icon icon="mingcute:down-fill" width="15" height="18" /></span>
				<div>
					<div className="dropdown-content text-sm">
						{
							item.drop.map((drop: { name: string, href: string | undefined; }, index: Key | null | undefined) => (
								<a href={drop.href} key={index} className="font-[700]">{drop.name}</a>
							))
						}
					</div>
				</div>
			</button>
		);
	}
}
