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
  let url = `${NEWS_API_URL}/top-headlines?`;
  let isParams = false;
  if (params.sources) {
    isParams = true;
    url = `${url}sources=${params.sources}&apiKey=${NEWS_API_KEY}`;
  } else if (params.searchString) {
    isParams = true;
    url = `${url}q=${params.searchString}&apiKey=${NEWS_API_KEY}`;
  } else {
    if (params.country) {
      isParams = true;
      url = `${url}country=${params.country}`;
    }
    if (params.category) {
      isParams = true;
      url = `${url}category=${params.category}`;
    }
    url = `${url}&apiKey=${NEWS_API_KEY}`;
  }

  url = isParams ? url : `${NEWS_API_URL}/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.articles;
  } catch (error) {
    console.log(error);
  }
};
