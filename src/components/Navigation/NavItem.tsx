interface Props {
  children: React.ReactNode;
  url: string;
}

const NavItem = ({children, url}: Props) => {
	const makeScrollTo = (hash: string) => {
		console.log("Hello");
		const element = document.getElementById(hash);
		// make 100px below the element
		if (element) {
			const y = element.getBoundingClientRect().top + window.scrollY - 120;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	}

	return (
		<div
			onClick={()=>{makeScrollTo(url)}}
			className="cursor-pointer border-transparent text-gray-700 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
		>
			{children}
		</div>
	);
};

export default NavItem;
