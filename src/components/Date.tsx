import { parseISO, format } from 'date-fns';

export default function Date({ dateString, className }: Record<string, string>) {
	const date = parseISO(dateString);
	return (
		<time className={className} dateTime={dateString}>
			{format(date, 'LLLL d, yyyy')}
		</time>
	);
}
