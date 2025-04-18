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
import { Root } from '@/types'

import Image from 'next/image';
import { convertToDate, timeAgo } from "@/lib/utils";
import Link from "next/link";

export function CategoriesCard({addClass = '', data}: {addClass: string, data:Root}) {
	return (
		<Card className={`py-0 border-0 shadow-transparent `+addClass}>
          <CardContent className='p-0'>
            <Link href={`/podcasts/${data.id}`}>
              <div className='h-[187px]'>
                <Image
                  src={data.picture_url}
                  width={1000}
                  height={1000}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  alt="license"
                />
              </div>
            </Link>
          </CardContent>
          <CardHeader className='p-0'>
            <CardTitle>
              <Link href={`/podcasts/${data.id}`} className='text-[18px] line-clamp-3'>{data.title}</Link>
            </CardTitle>
            <CardDescription>
              <Link href={`/podcasts/${data.id}`}>
                <p className="text-[15px] leading-[22px] line-clamp-3" dangerouslySetInnerHTML={{ __html: data.description }}></p>
              </Link>
            </CardDescription>
            <CardDescription className='flex items-center text-[13px] font-[500] gap-[12px] mb-[10.84px] uppercase'>
              	<p>{convertToDate(data.created_at)}</p>
                <div className='size-[6px] rounded-full bg-[#828282]'></div>
                <p className="ml-[1px]">{timeAgo(data.created_at)}</p>
            </CardDescription>
          </CardHeader>
          <CardFooter className='p-0 gap-[10.69px]'>
            <Link href={`/podcasts/${data.id}`}>
              <PlayButton buttonSize={30} iconSize={16.956522274725444} />
            </Link>
            <SharedModel link={window.location.origin+'/podcasts/'+data.id}>
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
