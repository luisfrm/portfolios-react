interface Props {
  children: React.ReactNode;
  url: string;
}

const NavItemMobile = ({children, url}: Props) => {
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
			className="cursor-pointer text-gray-700 dark:text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
		>
			{children}
		</div>
	);
};

export default NavItemMobile;
