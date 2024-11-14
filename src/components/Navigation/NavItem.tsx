interface Props {
  children: React.ReactNode;
  url: string;
}

const NavItem = ({children, url}: Props) => {
	const makeScrollTo = (hash: string) => {
		if (hash === "#") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}
		
		const element = document.getElementById(hash);
		
		if (!element) return;

		// make 120px below the element
		// 120px is the height of the fixed navbar
		if (element) {
			const y = element.getBoundingClientRect().top + window.scrollY - 120;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	}

	return (
		<div
			onClick={()=>{makeScrollTo(url)}}
			className="cursor-pointer border-transparent text-gray-900 dark:text-gray-400 hover:border-gray-300 hover:text-gray-500 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
			aria-label="Navigation Item"
		>
			{children}
		</div>
	);
};

export default NavItem;
