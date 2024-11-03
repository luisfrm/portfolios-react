interface Props {
  children: React.ReactNode;
  url: string;
}

const NavItemMobile = ({children, url}: Props) => {
	return (
		<a
			href={url}
			className="text-gray-700 dark:text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
		>
			{children}
		</a>
	);
};

export default NavItemMobile;
