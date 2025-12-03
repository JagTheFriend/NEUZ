import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@/components/ui/button";
import type { NewsArticle } from "@/data/newsData";

type NewsCardProps = {
	article: NewsArticle;
};

const NewsCard = ({ article }: NewsCardProps) => {
	const truncateText = (text: string, maxLength: number) => {
		if (text.length <= maxLength) return text;
		return `${text.slice(0, maxLength)}...`;
	};

	return (
		<article
			className="group flex flex-col overflow-hidden rounded-lg bg-card card-shadow transition-all duration-300 hover:card-shadow-hover border-2 hover:scale-105 cursor-pointer"
			onClick={() => window.open(article.sourceUrl, "_blank")}
		>
			<div className="relative aspect-16/10 overflow-hidden">
				<LazyLoadImage
					src={article.imageUrl}
					alt={article.title}
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					loading="lazy"
				/>
			</div>

			<div className="flex flex-1 flex-col p-4">
				<h2 className="mb-2 font-heading text-lg font-semibold leading-tight text-card-foreground">
					{truncateText(article.title, 60)}
				</h2>

				<p className="mb-4 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
					{truncateText(article.summary, 100)}
				</p>

				<Button asChild variant="default" size="sm" className="w-fit">
					<a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
						Read More
						<p className="opacity-70 group-hover:opacity-90 transition-all duration-200 transform">
							&rarr;
						</p>
					</a>
				</Button>
			</div>
		</article>
	);
};

export default NewsCard;
