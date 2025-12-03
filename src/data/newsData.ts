export type NewsArticle = {
	id: number;
	title: string;
	summary: string;
	imageUrl: string;
	sourceUrl: string;
};

export async function getNewsArticles(): Promise<NewsArticle[]> {
	return [];
}
