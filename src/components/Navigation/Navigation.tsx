import { Menu } from "lucide-react";
import NavItem from "./NavItem";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItemMobile from "./NavItemMobile";
import SocialItem from "../SocialMedia/SocialItem";

const navItems = [
	{ name: "About", href: "#" },
	{ name: "Projects", href: "#" },
	{ name: "Contact", href: "#" },
];

interface Props {
	socialMedia: {
		url: string;
		icon: React.ReactNode;
	}[];
}

const Navigation = ({ socialMedia }: Props) => {
	return (
		<nav className="bg-white shadow-md fixed w-screen z-50 dark:bg-slate-800 top-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
				<div className="flex justify-between">
					<div id="nav_logo" className="flex-shrink-0 flex items-center">
						<span className="text-xl font-bold text-gray-800 dark:text-white">
							Luis Rivas
						</span>
					</div>
					<div id="nav_listElement" className="hidden sm:flex ml-5 gap-6">
						{navItems &&
							navItems.length > 0 &&
							navItems.map((item, index) => (
								<NavItem key={index} url={item.href}>
									{item.name}
								</NavItem>
							))}
					</div>
					<div
						id="nav_actions"
						className="hidden sm:flex sm:items-center gap-2"
					>
						{socialMedia &&
							socialMedia.length > 0 &&
							socialMedia.map((item, index) => (
								<SocialItem key={index} icon={item.icon} url={item.url} size="icon" />
							))}
						<ThemeToggle />
					</div>
					<div id="nav_actions" className="sm:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<nav className="flex flex-col gap-4">
									{navItems &&
										navItems.length > 0 &&
										navItems.map((item, index) => (
											<NavItemMobile key={index} url={item.href}>
												{item.name}
											</NavItemMobile>
										))}
									<div
										id="nav_actions_mobile"
										className="flex gap-2"
									>
										<ThemeToggle />
										{socialMedia &&
											socialMedia.length > 0 &&
											socialMedia.map((item, index) => (
												<SocialItem
													key={index}
													icon={item.icon}
													url={item.url}
													size="icon"
												/>
											))}
									</div>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;