import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { DefaultButton } from '@/components/shared/default-button.component';
import { PlayButton } from '@components/shared/play-button.component';
import { SharedModel } from "@components/shared/shared-model.component";
import { Root } from '@/types';
import { convertToDate, timeAgo } from '@/lib/utils';
import Link from 'next/link';

export function PodcastCard({data}:{data: Root}) {
	return (
		<Card className='border-0 rounded-none shadow-none p-0 bg-transparent border-t'>
          <CardContent className='flex md:flex-row flex-col gap-[15px] p-0 pt-[29px] pb-[36px]'>
            <Link href={`/episode/${data.id}`}>
              <div className='md:min-w-[157px] md:h-[129px] rounded-[3px] overflow-hidden'>
                <Image
                  src={data.picture_url}
                  width={1000}
                  height={1000}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  alt="license"
                />
              </div>
            </Link>
            <div className='w-full'>
              <CardHeader className='p-0 gap-0 w-full'>
                <CardDescription className='flex items-center text-[13px] font-[700] gap-[12px] mb-[11px]'>
                  <p>{convertToDate(data.created_at)}</p>
				  <div className='size-[6px] rounded-full bg-[#828282]'></div>
                  <p className="ml-[1px]">{timeAgo(data.created_at)}</p>
                </CardDescription>
                <CardTitle className='line-clamp-3 text-[20px] font-[700] mb-[7px]'>
                  <Link href={`/episode/${data.id}`}>{data.title}</Link>
                </CardTitle>
                <CardDescription className="mb-[18px]">
                  <Link href={`/episode/${data.id}`}><p className='line-clamp-3 text-[15px] font-[500]' dangerouslySetInnerHTML={{ __html: data.description }}></p></Link>
                </CardDescription>
              </CardHeader>
              <CardFooter className='flex gap-[21px] p-0'>
                <Link href={`/episode/${data.id}`}>
                  <PlayButton buttonSize={40} iconSize={24} />
                </Link>
                <DefaultButton buttonSize={40}>
                  <Image
                    src="/assets/images/icons/file.svg"
                    width={1000}
                    height={1000}
                    style={{ width: "24px", height: "24px" }}
                    alt="file"
                  />
                </DefaultButton>
                <SharedModel link="">
                  <button type='button' className={`flex items-center justify-center aspect-square rounded-full bg-[#E1E1E1] cursor-pointer`} style={{height: 40, width: 40}}>
                    <Image
                      src="/assets/images/icons/share.svg"
                      width={1000}
                      height={1000}
                      style={{ width: "22px", height: "22px" }}
                      alt="share"
                    />
                  </button>
                </SharedModel>
                <DefaultButton buttonSize={40}>
                  <Image
                    src="/assets/images/icons/gift.svg"
                    width={1000}
                    height={1000}
                    style={{ width: "24px", height: "24px" }}
                    alt="gift"
                  />
                </DefaultButton>
              </CardFooter>
            </div>
          </CardContent>
        </Card>
	);
}
