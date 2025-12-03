import { useCallback, useMemo, useState } from "react";
import type { NewsArticle } from "@/data/newsData";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

type NewsGridProps = {
	articles: NewsArticle[];
};
const ARTICLES_PER_PAGE = 6;

const NewsGrid = ({ articles }: NewsGridProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

	const currentArticles = useMemo(() => {
		const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
		const endIndex = startIndex + ARTICLES_PER_PAGE;
		return articles.slice(startIndex, endIndex);
	}, [currentPage, articles.slice]);

	const handlePageChange = useCallback((page: number) => {
		setIsTransitioning(true);

		setTimeout(() => {
			setCurrentPage(page);
			setIsTransitioning(false);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 200);
	}, []);

	return (
		<div className="flex flex-col gap-4">
			<div
				className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-out ${
					isTransitioning
						? "opacity-0 translate-y-4"
						: "opacity-100 translate-y-0"
				}`}
			>
				{currentArticles.map((article) => (
					<NewsCard key={article.id} article={article} />
				))}
			</div>

			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	);
};

export default NewsGrid;
