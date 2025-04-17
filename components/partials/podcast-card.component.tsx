import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image';
import { DefaultButton } from '@/components/shared/default-button.component';
import { PlayButton } from '@components/shared/play-button.component';

// interface PodcastCardProps {
// 	children: React.ReactNode;
// }

export function PodcastCard() {
	return (
		<Card className='border-0 rounded-none shadow-none p-0 bg-transparent border-t'>
          <CardContent className='flex gap-[15px] p-0 pt-[29px] pb-[36px]'>
            <div className='min-w-[157px] h-[129px] rounded-[3px] overflow-hidden'>
              <Image
                src="/assets/images/license.jpeg"
                width={1000}
                height={1000}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt="ads"
              />
            </div>
            <div className='w-full'>
              <CardHeader className='p-0 gap-0 w-full'>
                <CardDescription className='flex items-center text-[13px] font-[700] gap-[12px] mb-[11px]'>
                  <p>AUG 29, 2023</p>
				  <div className='size-[6px] rounded-full bg-red-400'></div>
                  <p className="ml-[1px]">45 MINS</p>
                </CardDescription>
                <CardTitle className='line-clamp-3 text-[20px] font-[700] mb-[7px]'>
                  The Funeral Experience – the Good, the Bad, and the Ugly
                </CardTitle>
                <CardDescription className="mb-[18px]">
                  <p className='line-clamp-3 text-[15px] font-[500]'>The challenges widows go through especially the less privileged ones can be daunting. From the experiences of ostracization and isolation to neglect, and rejection, widowhood can be a lonely journey.</p>
                </CardDescription>
              </CardHeader>
              <CardFooter className='flex gap-[21px] p-0'>
                <PlayButton buttonSize={40} iconSize={24} />
                <DefaultButton buttonSize={40}>
                  <Image
                    src="/assets/images/icons/file.svg"
                    width={1000}
                    height={1000}
                    style={{ width: "24px", height: "24px" }}
                    alt="ads"
                  />
                </DefaultButton>
                <DefaultButton buttonSize={40}>
                  <Image
                    src="/assets/images/icons/share.svg"
                    width={1000}
                    height={1000}
                    style={{ width: "22px", height: "22px" }}
                    alt="ads"
                  />
                </DefaultButton>
                <DefaultButton buttonSize={40}>
                  <Image
                    src="/assets/images/icons/gift.svg"
                    width={1000}
                    height={1000}
                    style={{ width: "24px", height: "24px" }}
                    alt="ads"
                  />
                </DefaultButton>
              </CardFooter>
            </div>
          </CardContent>
        </Card>
	);
}
