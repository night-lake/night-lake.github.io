import { ItemListProps } from '../lib/types';

export default function ItemList({ title, content, icon, joinKey = ', ' }: ItemListProps) {
	return (
		<div className="no-pointer-parent flex flex-row content-center space-x-2 py-2">
			{icon}
			<h3 className="font-bold text-pink-500">{title}</h3>
			<p className="text-md font-medium text-gray-800 dark:text-gray-300">
				{content
					.sort((a, b) => {
						if (a < b) return -1;
						if (a > b) return 1;
						return 0;
					})
					.join(joinKey)}
			</p>
		</div>
	);
}
