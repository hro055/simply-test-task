import { NEWS_API_KEY, NEWS_API_URL } from "./config";

export const getSources = async () => {
  try {
    const response = await fetch(
      `${NEWS_API_URL}/top-headlines/sources?apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json.sources;
  } catch (error) {
    console.log(error);
  }
};

export const getArticles = async (params) => {
  const authorizedParams = {...params, apiKey: NEWS_API_KEY }
  const url = new URL(`${NEWS_API_URL}/top-headlines?`);
  url.search = new URLSearchParams(authorizedParams).toString();
  try {
    const response = await fetch(url.toString());
    const json = await response.json();
    return json.articles;
  } catch (error) {
    console.log(error);
  }
};
