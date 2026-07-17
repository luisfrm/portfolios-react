import { Button } from "@/components/ui/button";

interface Props {
  name?: string;
  icon: React.ReactNode;
  url: string;
  size?: "default" | "icon" | "sm" | "lg";
}

export function SocialItem({ icon, name, url, size = "default" }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name ? `${name} social` : "Social link"}>
      <Button variant="outline" size={size}>
        {icon}
        {name && ` ${name}`}
      </Button>
    </a>
  );
}

export default SocialItem;
