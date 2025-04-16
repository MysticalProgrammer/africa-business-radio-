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

import Image from 'next/image';

// interface CategoriesCardProps {
// 	children: React.ReactNode;
// }

export function CategoriesCard() {
	return (
		<Card className='py-0 border-0 shadow-transparent'>
          <CardContent className='p-0'>
            <div className='h-[187px]'>
              <Image
                src="/assets/images/license.jpeg"
                width={1000}
                height={1000}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                alt="ads"
              />
            </div>
          </CardContent>
          <CardHeader className='p-0'>
            <CardTitle className='line-clamp-3'>
              Relationship Button - Starting Afresh as a Widow
            </CardTitle>
            <CardDescription>
              <p><b>EP12:</b> Cardio Vascular Exercise Part 3</p>
            </CardDescription>
            <CardDescription>
              <p>AUG 29, 2023</p>
              <p>45 MINS</p>
            </CardDescription>
          </CardHeader>
          <CardFooter className='p-0'>
            <PlayButton buttonSize={30} iconSize={16.956522274725444} />
            <DefaultButton buttonSize={30}>
              <Image
                src="/assets/images/icons/share.svg"
                width={1000}
                height={1000}
                style={{ width: "16.5px", height: "16.5px" }}
                alt="ads"
              />
            </DefaultButton>
            <DefaultButton buttonSize={30}>
              <Image
                src="/assets/images/icons/gift.svg"
                width={1000}
                height={1000}
                style={{ width: "16.5px", height: "16.5px" }}
                alt="ads"
              />
            </DefaultButton>
          </CardFooter>
        </Card>
	);
}
