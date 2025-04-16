import { Input } from "@components/ui/input";
import { Dropdown } from "../partials/dropdown.component";
import { Icon } from "@iconify/react";
import Image from 'next/image'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";

const menu = [
	{
		name: 'Home',
		href: '/',
		hasDrop: false,
		drop: [],
	},
	{
		name: 'Company',
		href: '/',
		hasDrop: true,
		drop: [
			{
				name: 'Company 1',
				href: '/',
			}
		]
	},
	{
		name: 'Resources',
		href: '/',
		hasDrop: false,
		drop: [],
	},
	{
		name: 'Contact us',
		href: '/',
		hasDrop: false,
		drop: [],
	},
	{
		name: 'Advertise',
		href: '/',
		hasDrop: false,
		drop: [],
	},
]


export function Header() {
	return (
		<>
			<div className="fixed top-0 w-screen lg:h-[72px] h-[50px] bg-[#FCFCFC] z-50">
				<div className="container mx-auto lg:flex hidden justify-between h-full">
					<div className="h-full py-2">
						<Image
							src="/assets/images/ABR Logo 1.png"
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="logo"
						/>
					</div>
					<div className="flex h-full items-center space-x-[17.5px]">
						<nav className="flex h-full capitalize">
							{
								menu.map((item, index) => (
									<Dropdown item={item} key={index} />
								))
							}
						</nav>
						<div className="relative">
							<Icon icon="mynaui:search" className="size-[13px] absolute top-[50%] translate-y-[-50%] ml-[19px] text-white" />
							<Input type="text" placeholder="Search" className="h-[43px] w-[192px] rounded-[32px] pl-[35px] bg-[#00000052] text-white placeholder-white !border-0" />
						</div>
					</div>
				</div>
				<div className="container flex mx-auto lg:hidden justify-between h-full">
					<div className="h-full py-2">
						<Image
							src="/assets/images/ABR Logo 1.png"
							width={400}
							height={500}
							style={{ objectFit: "cover", width: "100%", height: "100%" }}
							alt="logo"
						/>
					</div>
					<Sheet>
						<SheetTrigger className="grid place-content-center border-1 size-[40px] rounded-lg">
							<Icon icon="proicons:menu" className="size-[24px]" />
						</SheetTrigger>
						<SheetContent side="left">
							<SheetHeader>
								<SheetTitle className="h-full w-[100px] py-2">
									<Image
										src="/assets/images/ABR Logo 1.png"
										width={1000}
										height={1000}
										style={{ objectFit: "cover", width: "100%", height: "100%" }}
										alt="logo"
									/>
								</SheetTitle>
								<nav className="flex flex-col h-full capitalize font-[700]">
									{
										menu.map((item, index) => (
											<div key={index}>
												{! item.hasDrop
													? (<a href={item.href} className="block py-2">{item.name}</a>)
													: (
														<button type="button" className="mobile-menu block w-full">
															<p className="flex w-full font-[700] gap-[2px] items-center justify-between text-[15px] h-full py-2"><span>{item.name}</span> <Icon icon="mingcute:down-fill" width="15" height="18" /></p>
															<div className="mobile-menu-content pl-4 overflow-hidden">
																<div className="text-sm">
																	{
																		item.drop.map((drop, dropIndex) => (
																			<a href={drop.href} key={dropIndex} className="block py-2 font-[700] text-left">{drop.name}</a>
																		))
																	}
																</div>
															</div>
														</button>
													)
												}
											</div>
										))
									}
								</nav>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</>
	);
}
