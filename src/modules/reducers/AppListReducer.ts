const ADD_ARTICLES = "ADD_ARTICLES";
const ADD_SOURCES = "ADD_SOURCES";
const UPDATE_FILTER = "UPDATE_FILTER";

export interface DataStructure {
  id: string;
  name: string;
  description: string;
  categories: string[];
  subscriptions: Subscriptions[];
}

export interface DataSources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

interface Subscriptions {
  name: string;
  price: number;
}

export interface IAppReducerState {
  articles: DataStructure[];
  sources: DataSources[];
  filters: ViewFilters;
}

export interface ViewFilters {
	searchString: string;
  sources: string;
};

export function addArticles(data: DataStructure) {
	return {
		type: ADD_ARTICLES,
		data,
	};
}

export function addSources(data: DataSources) {
	return {
		type: ADD_SOURCES,
		data,
	};
}

export function updateFilters(data: Partial<ViewFilters>) {
	return {
		type: UPDATE_FILTER,
		data,
	};
}

const initialState: IAppReducerState = {
  articles: [],
  sources: [],
  filters: {
    searchString: "",
    sources: "",
  },
};

type ReducerAction = (
	{ type: "ADD_ARTICLES"; data: DataStructure[] }
  | { type: "ADD_SOURCES"; data: DataSources[] }
  | { type: "UPDATE_FILTER"; data: string }
);

const appReducer = ( state = initialState, action: ReducerAction ) => {

  switch (action.type) {
    case ADD_ARTICLES:
      return { ...state, articles: action.data };
    case ADD_SOURCES:
      return { ...state, sources: action.data };
    case UPDATE_FILTER: {
      const newFilters = Object.assign({}, state.filters, action.data);
			return { ...state, filters: newFilters };
    }
    default:
      return state;
  }
};

export default appReducer;
