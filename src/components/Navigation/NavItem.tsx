interface Props {
  children: React.ReactNode;
  url: string;
}

const NavItem = ({children, url}: Props) => {
	return (
		<a
			href={url}
			className="border-transparent text-gray-700 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
		>
			{children}
		</a>
	);
};

export default NavItem;
