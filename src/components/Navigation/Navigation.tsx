import { Menu } from "lucide-react";
import NavItem from "./NavItem";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItemMobile from "./NavItemMobile";
import SocialItem from "../SocialMedia/SocialItem";
import Logo from "@/components/Logo/Logo";
import { openPdfInNewTab } from "@/lib/utils";
import { NAV_CONFIG, ANIMATION_CLASSES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Language } from "@/hooks/useLanguage";
import { useState } from "react";

interface NavigationProps {
	socialMedia: {
		url: string;
		icon: React.ReactNode;
	}[];
	changeLanguage: () => void;
	language: Language;
	navItems: {
		name: string;
		href: string;
	}[];
	downloadText: string;
}

const Navigation = ({ socialMedia, changeLanguage, language, navItems, downloadText="Download CV" }: NavigationProps) => {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	return (
		<>
			{/* Custom overlay que no bloquea scroll */}
			{isSheetOpen && (
				<div 
					className="fixed inset-0 z-40 bg-black/80 animate-in fade-in-0"
					onClick={() => setIsSheetOpen(false)}
				/>
			)}
			<nav className="shadow-md fixed w-screen z-50 bg-gradient-to-b from-background via-background/90 to-background top-0 border-b border-b-[#ffffff77]">
			<div className={cn(NAV_CONFIG.MAX_WIDTH, "mx-auto", NAV_CONFIG.PADDING_X, NAV_CONFIG.PADDING_Y)}>
				<div className="flex justify-between">
					<div id="nav_logo" className="flex-shrink-0">
						<NavItem url="#">
							<Logo className={cn("text-black dark:text-white h-8 w-8 md:h-14 md:w-14", ANIMATION_CLASSES.HOVER_SCALE, ANIMATION_CLASSES.TRANSITION)} />
						</NavItem>
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
					{/* Desktop buttons */}
					<div id="nav_actions" className="hidden sm:flex sm:items-center gap-2">
						<Button variant="outline" size="sm" onClick={() => openPdfInNewTab(language)}>
							CV
						</Button>
						{changeLanguage && (
							<Button variant="outline" size="icon" onClick={changeLanguage}>
								{language === "en" ? "ES" : "EN"}
							</Button>
						)}
						{socialMedia &&
							socialMedia.length > 0 &&
							socialMedia.map((item, index) => <SocialItem key={index} icon={item.icon} url={item.url} size="icon" />)}
						<ThemeToggle />
					</div>
					<div id="nav_actions" className="sm:hidden">
						<Sheet modal={false} onOpenChange={setIsSheetOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" className="bg-transparent" size="icon">
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
									<div id="nav_actions_mobile" className="flex flex-col gap-3">
										<section className="flex gap-3">
											{changeLanguage && (
												<Button variant="outline" size="icon" onClick={changeLanguage}>
													{language === "en" ? "ES" : "EN"}
												</Button>
											)}
											<ThemeToggle />
											{socialMedia &&
												socialMedia.length > 0 &&
												socialMedia.map((item, index) => (
													<SocialItem key={index} icon={item.icon} url={item.url} size="icon" />
												))}
										</section>
										<section>
											<Button className="flex-1 w-100" variant="outline" onClick={() => openPdfInNewTab(language)}>
												{downloadText}
											</Button>
										</section>
									</div>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
		</>
	);
};

export default Navigation;
