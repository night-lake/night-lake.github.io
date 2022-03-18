import { ItemListProps } from '../lib/types';

export default function ItemList(props: ItemListProps) {
	return (
		<div className="no-pointer-parent flex flex-row content-center space-x-2 py-2">
			<props.icon className="align-middle text-xl text-gray-600 dark:text-gray-300" />
			<h3 className="font-bold text-pink-500">{props.title}</h3>
			<p className="text-md font-medium text-gray-800 dark:text-gray-300">
				{props.content
					.sort((a, b) => {
						if (a < b) return -1;
						if (a > b) return 1;
						return 0;
					})
					.join(props.joinKey ?? ', ')}
			</p>
		</div>
	);
}
