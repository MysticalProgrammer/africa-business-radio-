import Image from 'next/image';


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PlayButton } from '@components/shared/play-button.component';
import { Root } from '@/types';
import Link from 'next/link';

interface CardWithFloatingPlayButtonProps {
	image_url: string,
	data: Root,
}

export function CardWithFloatingPlayButton({ image_url, data }: CardWithFloatingPlayButtonProps) {
	return (
		<>
			<Card className="h-[424px] relative p-0 rounded-[3px] gap-0 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
				<Link href={`/episode/${data.id}`}>
					<CardContent className="p-0">
						<Image
							src={image_url}
							width={1000}
							height={1000}
							style={{ objectFit: "cover", width: "100%", height: "288px" }}
							alt="flyer"
						/>
					</CardContent>
				</Link>
				<CardHeader className="p-0 pt-[13px]">
					<CardTitle className='p-0 relative'>
						<div className='absolute left-[-16px] top-[50%] translate-y-[-50%]'>
							<Link href={`/episode/${data.id}`}>
								<PlayButton />
							</Link>
						</div>
						<Link href={`/episode/${data.id}`}>
							<p className='pl-[45px] xl:text-[18px] text-[15px] leading-[20px] font-[600] line-clamp-3'>{data.title}</p>
						</Link>
					</CardTitle>
				</CardHeader>
				<CardFooter className=" absolute bottom-[26px] p-0 mt-[19px] text-[#282828]">
					<div className='flex items-center text-[13px] h-[12px] pl-[45px] overflow-hidden'>
						<p className='border-r-[1px] border-[#979797] pr-[10px]'>Sept 7, 2023</p>
						<p className='pl-[10px]'>35 mins</p>
					</div>
				</CardFooter>
			</Card>
		</>
	);
}
