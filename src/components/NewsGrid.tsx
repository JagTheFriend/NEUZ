import { useMemo, useState } from "react";
import type { NewsArticle } from "@/data/newsData";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

type NewsGridProps = {
	articles: NewsArticle[];
};
const ARTICLES_PER_PAGE = 6;

const NewsGrid = ({ articles }: NewsGridProps) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

	const currentArticles = useMemo(() => {
		const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
		const endIndex = startIndex + ARTICLES_PER_PAGE;
		return articles.slice(startIndex, endIndex);
	}, [currentPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="flex flex-col gap-8">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
