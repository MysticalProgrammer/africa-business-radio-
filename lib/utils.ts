import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getData = async (url:string) => {
  const response = await fetch(`https://api.wokpa.app/api/${url}`);
  return response.json();
}

export const convertToDate = (dateTime: string | number | Date) => {
	const now = new Date();
	const date = new Date(dateTime);

	// Get date parts (year, month, day) to compare properly
	const nowDate = now.toDateString();
	const dateOnly = date.toDateString();

	if (nowDate === dateOnly) return 'today';

	const yesterday = new Date();
	yesterday.setDate(now.getDate() - 1);
	if (date.toDateString() === yesterday.toDateString()) return 'yesterday';

	const twoDaysAgo = new Date();
	twoDaysAgo.setDate(now.getDate() - 2);
	if (date.toDateString() === twoDaysAgo.toDateString()) return '2 days ago';

	const options: {
		day: string;
		month: string;
		year: string;
	} = { day: '2-digit', month: 'short', year: 'numeric' };
	return date.toLocaleDateString('en-US', options);
};

export const timeAgo = (input: Date | string) => {
  const date = typeof input === 'string' ? new Date(input) : input;
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  if (seconds < MINUTE) {
    return `${seconds} sec${seconds !== 1 ? 's' : ''}`;
  } else if (seconds < HOUR) {
    const mins = Math.floor(seconds / MINUTE);
    return `${mins} min${mins !== 1 ? 's' : ''}`;
  } else if (seconds < DAY) {
    const hours = Math.floor(seconds / HOUR);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else if (seconds < MONTH) {
    const days = Math.floor(seconds / DAY);
    return `${days} day${days !== 1 ? 's' : ''}`;
  } else if (seconds < YEAR) {
    const months = Math.floor(seconds / MONTH);
    return `${months} mon${months !== 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(seconds / YEAR);
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
}

type ReadMoreState = {
  fullText: string;
  maxChars: number;
  isExpanded: boolean;
};

export function toggleReadMore(state: ReadMoreState) {
  const { fullText, maxChars, isExpanded } = state;

  return {
    text: isExpanded ? fullText.slice(0, maxChars) + '...' : fullText,
    isExpanded: !isExpanded,
  };
}