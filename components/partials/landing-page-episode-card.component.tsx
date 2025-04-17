
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

// interface LandingPageEpisodeCardProps {
// 	children: React.ReactNode;
// }

export function LandingPageEpisodeCard() {
	return (
		<Card className='relative px-[21px] gap-[17px] pt-[23px] pb-[17px] border-0 shadow-[0_0px_10px_rgba(0,0,0,0.1)] bg-[#F4F4F4] rounded-[5px] after:content-[""] after:w-full after:bg-[#D5D3D3] after:h-[5px] after:rounded-[5px] after:absolute after:bottom-0 after:left-0'>
			<CardContent className='p-0'>
			<div className='h-[187px]'>
				<Image
				src="/assets/images/license.jpeg"
				width={1000}
				height={1000}
				style={{ objectFit: "cover", width: "100%", height: "100%" }}
				alt="license"
				/>
			</div>
			</CardContent>
			<CardHeader className='p-0'>
			<CardTitle className='line-clamp-3'>
				Relationship Button - Starting Afresh as a Widow
			</CardTitle>
			</CardHeader>
			<CardFooter className='flex gap-[11px] -mt-[3px] p-0'>
				<SharedModel>
					<DefaultButton buttonSize={30}>
						<Image
						src="/assets/images/icons/share.svg"
						width={1000}
						height={1000}
						style={{ width: "16.5px", height: "16.5px" }}
						alt="share"
						/>
					</DefaultButton>
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
