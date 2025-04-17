import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { PlayButton } from '@components/shared/play-button.component';
import { DefaultButton } from '@/components/shared/default-button.component';
import { SharedModel } from "@components/shared/shared-model.component";

import Image from 'next/image';

export function CategoriesCard({addClass = ''}) {
	return (
		<Card className={`py-0 border-0 shadow-transparent `+addClass}>
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
            <CardTitle className='text-[18px] line-clamp-3'>
              Relationship Button - Starting Afresh as a Widow
            </CardTitle>
            <CardDescription>
              <p className="text-[15px] leading-[22px]"><span className="font-[600]">EP12:</span> Cardio Vascular Exercise Part 3</p>
            </CardDescription>
            <CardDescription className='flex items-center text-[13px] font-[500] gap-[12px] mb-[10.84px]'>
              	<p>AUG 29, 2023</p>
				<div className='size-[6px] rounded-full bg-[#828282]'></div>
				<p className="ml-[1px]">45 MINS</p>
            </CardDescription>
          </CardHeader>
          <CardFooter className='p-0 gap-[10.69px]'>
            <PlayButton buttonSize={30} iconSize={16.956522274725444} />
			<SharedModel>
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
                style={{ width: "16.5px", height: "16.5px" }}
                alt="license"
              />
            </DefaultButton>
          </CardFooter>
        </Card>
	);
}
