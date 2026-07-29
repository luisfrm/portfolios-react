import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { useTranslations } from "next-intl";
import { SocialItem } from "./social-item";

export function SocialMedia() {
  const t = useTranslations();

  const items = [
    {
      name: t("social.github"),
      icon: <GithubIcon className="w-4 h-4" />,
      url: "https://github.com/luisfrm/",
    },
    {
      name: t("social.linkedin"),
      icon: <LinkedinIcon className="w-4 h-4" />,
      url: "https://www.linkedin.com/in/luisrivasm/",
    },
  ];

  return (
    <div id="social" className="flex justify-center space-x-4 my-4">
      {items.map((item) => (
        <SocialItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default SocialMedia;
