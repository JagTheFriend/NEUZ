import { Activity, useEffect, useState } from "react";
import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";
import CustomError from "./components/CustomError";
import Skeletons from "./components/Skeletons";
import { getNewsArticles, type NewsArticle } from "./data/newsData";

const Index = () => {
	const [newsArticles, setNewsArticle] = useState<NewsArticle[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchNewsArticles = async () => {
			setIsLoading(true);
			try {
				const articles = await getNewsArticles();
				setNewsArticle(articles);
			} catch (error) {
				console.error("Failed to fetch news articles:", error);
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchNewsArticles();
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<Header />

			<Activity mode={isError ? "visible" : "hidden"}>
				<CustomError />
			</Activity>

			<Activity mode={isLoading ? "visible" : "hidden"}>
				<Skeletons />
			</Activity>

			<Activity mode={isLoading ? "hidden" : "visible"}>
				<main className="container mx-auto px-4 py-8">
					<NewsGrid articles={newsArticles} />
				</main>
			</Activity>

			<footer className="border-t border-border py-6">
				<div className="container mx-auto px-4 text-center">
					<p className="font-body text-sm text-muted-foreground">
						© {new Date().getFullYear()} NEUZ-A News App. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Index;
