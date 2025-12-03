import axios from "axios";

export type NewsArticle = {
	id: number;
	title: string;
	summary: string;
	imageUrl: string;
	sourceUrl: string;
};

const API_URL =
	"https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=20";

export async function getNewsArticles(): Promise<NewsArticle[]> {
	const response = await axios.get(API_URL);
	if (response.status === 200) {
		return response.data.results.map((d: any) => ({
			id: d.id,
			title: d.title,
			summary: d.summary,
			imageUrl: d.image_url,
			sourceUrl: d.url,
		}));
	} else {
		throw new Error("Failed to fetch news articles");
	}
}
