import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface Props {
	project: {
		title: string;
		description: string;
		imageUrl?: string;
		technologies: string[];
		githubUrl?: string;
		liveUrl?: string;
	};
	delayClass?: string;
}

const PROJECT_ITEM_STYLES = {
	card: cn(
		"group relative bg-card rounded-2xl overflow-hidden shadow-lg",
		"border border-border/50 hover:border-blue-500/30",
		"transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10",
		"hover:-translate-y-1 h-full flex flex-col"
	),
	imageContainer: "relative h-64 overflow-hidden bg-muted",
	image: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
	overlay: cn(
		"absolute inset-0 bg-black/70 backdrop-blur-sm",
		"opacity-0 group-hover:opacity-100 transition-opacity duration-300",
		"flex items-center justify-center",
		"hidden md:flex"
	),
	overlayActions: "flex gap-4",
	actionButton: cn(
		"flex items-center gap-3 px-6 py-3 rounded-full",
		"bg-white/10 backdrop-blur-sm border border-white/20 text-white",
		"hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300",
		"hover:scale-105 font-medium"
	),
	mobileActions: "flex gap-3 px-8 py-4 border-b border-border/50 bg-gradient-to-r from-background/50 to-muted/30 md:hidden",
	mobileActionButton: cn(
		"flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
		"bg-blue-50 text-blue-700 border border-blue-200",
		"dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
		"hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-200",
		"active:scale-95"
	),
	content: "flex-1 p-8",
	title: cn(
		"font-bold text-xl mb-4 text-foreground",
		"group-hover:text-blue-600 dark:group-hover:text-blue-400",
		"transition-colors duration-300"
	),
	description: "text-muted-foreground leading-relaxed mb-6 text-base",
	technologies: "flex flex-wrap gap-3",
	tech: cn(
		"px-4 py-2 text-sm font-medium rounded-full",
		"bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
		"border border-blue-200 dark:border-blue-800",
		"transition-colors duration-200"
	),
	fallbackImage: cn(
		"w-full h-full flex items-center justify-center",
		"bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900",
		"text-muted-foreground"
	)
} as const

const ProjectItem = ({ project, delayClass }: Props) => {
	const { title, description, imageUrl, technologies, githubUrl, liveUrl } = project;
	const { ref, isInView } = useInView({ threshold: 0.2, rootMargin: '100px' });
	
	return (
		<div 
			ref={ref}
			className={cn(
				"animate-fade-up",
				delayClass,
				isInView && "is-visible"
			)}
		>
			<article className={PROJECT_ITEM_STYLES.card}>
				{/* Image Section */}
				<div className={PROJECT_ITEM_STYLES.imageContainer}>
					{imageUrl ? (
						<>
							<img
								src={imageUrl}
								alt={`Preview of ${title}`}
								className={PROJECT_ITEM_STYLES.image}
								loading="lazy"
							/>
							{/* Desktop Overlay with actions - appears on hover */}
							<div className={PROJECT_ITEM_STYLES.overlay}>
								<div className={PROJECT_ITEM_STYLES.overlayActions}>
									{githubUrl && (
										<a
											href={githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={PROJECT_ITEM_STYLES.actionButton}
											aria-label={`View ${title} source code`}
										>
											<Github className="w-5 h-5" />
											<span>View Code</span>
										</a>
									)}
									{liveUrl && (
										<a
											href={liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={PROJECT_ITEM_STYLES.actionButton}
											aria-label={`View ${title} live demo`}
										>
											<ExternalLink className="w-5 h-5" />
											<span>Live Demo</span>
										</a>
									)}
								</div>
							</div>
						</>
					) : (
						<div className={PROJECT_ITEM_STYLES.fallbackImage}>
							<div className="text-center">
								<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
									<svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
								</div>
								<p className="text-lg font-medium">{title}</p>
							</div>
						</div>
					)}
				</div>

				{/* Mobile Actions - Always visible on mobile */}
				{(githubUrl || liveUrl) && (
					<div className={PROJECT_ITEM_STYLES.mobileActions}>
						{githubUrl && (
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={PROJECT_ITEM_STYLES.mobileActionButton}
								aria-label={`View ${title} source code`}
							>
								<Github className="w-4 h-4" />
								<span>Code</span>
							</a>
						)}
						{liveUrl && (
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={PROJECT_ITEM_STYLES.mobileActionButton}
								aria-label={`View ${title} live demo`}
							>
								<ExternalLink className="w-4 h-4" />
								<span>Demo</span>
							</a>
						)}
					</div>
				)}

				{/* Content Section */}
				<div className={PROJECT_ITEM_STYLES.content}>
					<h3 className={PROJECT_ITEM_STYLES.title}>{title}</h3>
					<p className={PROJECT_ITEM_STYLES.description}>{description}</p>
					
					{/* Technologies */}
					<div className={PROJECT_ITEM_STYLES.technologies}>
						{technologies.slice(0, 6).map((tech, index) => (
							<span key={`tech-${index}`} className={PROJECT_ITEM_STYLES.tech}>
								{tech}
							</span>
						))}
						{technologies.length > 6 && (
							<span className={cn(PROJECT_ITEM_STYLES.tech, "bg-muted text-muted-foreground border-muted-foreground/20")}>
								+{technologies.length - 6}
							</span>
						)}
					</div>
				</div>
			</article>
		</div>
	);
};

export default ProjectItem;
