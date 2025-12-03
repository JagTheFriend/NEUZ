import { Activity, useEffect, useState } from "react";
import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";
import Skeletons from "./components/Skeletons";
import { getNewsArticles, type NewsArticle } from "./data/newsData";

const Index = () => {
	const [newsArticles, setNewsArticle] = useState<NewsArticle[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNewsArticles = async () => {
			const articles = await getNewsArticles();
			setNewsArticle(articles);
			setIsLoading(false);
		};
		fetchNewsArticles();
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<Header />

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
