import type { NewsArticle } from "@/data/newsData";
import NewsCard from "./NewsCard";

type NewsGridProps = {
	articles: NewsArticle[];
};

const NewsGrid = ({ articles }: NewsGridProps) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{articles.map((article) => (
					<NewsCard key={article.id} article={article} />
				))}
			</div>
		</div>
	);
};

export default NewsGrid;
