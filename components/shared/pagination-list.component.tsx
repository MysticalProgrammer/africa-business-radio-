"use client";

import { Pagination } from "@/types";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";

export function PaginationList({ data }: Pagination) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get("page")) || data.current_page || 1;

	const goToPage = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", String(page));
		router.push(`?${params.toString()}`);
	};

	return (
		<div className="flex gap-[8px]">
			<button
				type="button"
				className="cursor-pointer"
				disabled={currentPage === 1}
				onClick={() => goToPage(currentPage - 1)}
			>
				<Icon icon="bxs:left-arrow" className="size-[16px]" />
			</button>

			{Array(data.last_page)
				.fill('')
				.map((_, index) => {
					const page = index + 1;
					return (
						<button
							key={page}
							type="button"
							className="h-[34px] w-[37px] text-[15px] text-white rounded-[8px] cursor-pointer"
							style={{
								backgroundColor:
									currentPage === page ? "#2C2C2C" : "#AEAEAE",
							}}
							onClick={() => goToPage(page)}
						>
							{page}
						</button>
					);
				})}

			<button
				type="button"
				className="cursor-pointer"
				disabled={currentPage == parseInt(data.last_page)}
				onClick={() => goToPage(currentPage + 1)}
			>
				<Icon icon="bxs:right-arrow" className="size-[16px]" />
			</button>
		</div>
	);
}