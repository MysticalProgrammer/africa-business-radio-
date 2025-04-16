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
		<Card className='border-0 rounded-none shadow-none p-0'>
          <CardContent className='flex p-0'>
            <div className='min-w-[157px] h-[129px]'>
              <Image
                src="/assets/images/license.jpeg"
                width={1000}
                height={1000}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt="ads"
              />
            </div>
            <div className='w-full'>
              <CardHeader className='p-0 w-full'>
                <CardDescription>
                  <p>AUG 29, 2023</p>
                  <p>45 MINS</p>
                </CardDescription>
                <CardTitle className='line-clamp-3'>
                  Relationship Button - Starting Afresh as a Widow
                </CardTitle>
                <CardDescription>
                  <p className='line-clamp-3'>The challenges widows go through especially the less privileged ones can be daunting. From the experiences of ostracization and isolation to neglect, and rejection, widowhood can be a lonely journey.</p>
                </CardDescription>
              </CardHeader>
              <CardFooter className='p-0'>
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
