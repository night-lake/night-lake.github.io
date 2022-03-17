import { IconButtonProps } from '../lib/types';

function IconButton({ link, icon }: IconButtonProps) {
	return (
		<a className="hover:color-pink-500 transition-all" href={link}>
			{icon}
		</a>
	);
}

export default IconButton;
