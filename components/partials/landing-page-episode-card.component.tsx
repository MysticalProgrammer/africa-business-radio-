
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image';
import { DefaultButton } from '@/components/shared/default-button.component';
import { SharedModel } from "@/components/shared/shared-model.component";
import { Root } from "@/types";
import Link from "next/link";

export function LandingPageEpisodeCard({data}: {data:Root}) {
	return (
		<Card className='relative px-[21px] gap-[17px] pt-[23px] pb-[17px] border-0 shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-[#F4F4F4] rounded-[5px] after:content-[""] after:w-full after:bg-[#D5D3D3] after:h-[5px] after:rounded-[5px] after:absolute after:bottom-0 after:left-0'>
			<CardContent className='p-0'>
				<Link href={`/podcasts/${data.id}`}>
					<div className='h-[187px]'>
						<Image
						src={data.picture_url}
						width={1000}
						height={1000}
						style={{ objectFit: "cover", width: "100%", height: "100%" }}
						alt={data.title}
						/>
					</div>
				</Link>
			</CardContent>
			<CardHeader className='p-0'>
			<CardTitle className='line-clamp-1'>
				<Link href={`/podcasts/${data.id}`}>
					{data.title}
				</Link>
			</CardTitle>
			</CardHeader>
			<CardFooter className='flex gap-[11px] -mt-[3px] p-0'>
				<SharedModel link="">
					<button type='button' className={`flex items-center justify-center aspect-square rounded-full bg-[#E1E1E1] cursor-pointer`} style={{height: 30, width: 30}}>
						<Image
							src="/assets/images/icons/share.svg"
							width={1000}
							height={1000}
							style={{ width: "16.5px", height: "16.5px" }}
							alt="share"
						/>
					</button>
				</SharedModel>
				<DefaultButton buttonSize={30}>
					<Image
					src="/assets/images/icons/gift.svg"
					width={1000}
					height={1000}
					style={{ width: "18px", height: "18px" }}
					alt="gift"
					/>
				</DefaultButton>
			</CardFooter>
		</Card>
	);
}
