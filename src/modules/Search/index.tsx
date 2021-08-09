import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Input } from '../../components/core';
import ReactPaginate from "react-paginate";
import { DataStructure, DataSources, ISearchParams } from "../interfaces";

import ArticlesView from "./ArticlesView";
import Country from "./Country";
import Category from "./Category";
import Sources from "./Sources";
import { getArticles } from "../../api";
import { addArticles } from "../../modules/reducers/AppListReducer";
import './SearchView.styles.scss';
import { useLocation } from "react-router-dom";

interface IProps {
    articles: DataStructure[];
    sources: DataSources[];
    filters: any;
}

const Search: React.FC<IProps> = ({articles, sources, filters}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchInFilter, setSearchInFilter] = useState("");
    const [searchQuery, setSearch] = useState("");
    const [country, setCountry] = useState("en");
    const [category, setCategory] = useState("");

    const [perPageData, setPerPageData] = useState([] as DataStructure[]);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const getArticlesData = React.useCallback( async () => {
        const search = new URLSearchParams(location.search);
        const params:ISearchParams  = {};
        const q = filters.searchString || search.get("q");
        const sources = search.get("sources");
        const category = search.get("category");


        if(sources) params.sources = sources;
        if(q) params.q = q;
        if(category) params.category = category;
        
        const data = await getArticles(params);
        dispatch(addArticles(data));
    }, [dispatch, location]);
    
    React.useEffect( () => {
        getArticlesData();
    }, [getArticlesData, location]);

    function handleInputChange(newVal: string) {
        setSearch(newVal);
    }

    function handleInputChangeFilter(newVal: string) {
        setSearchInFilter(newVal);
    }

    function handleClearFilter() {
        setSearchInFilter("");
        setSearch("");
    }

    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage)
    };

    const getPaginetedData = React.useCallback(() => {
        const startIndex = offset * perPage;
        const filteredData = articles.filter((item: DataStructure) => {
			if (searchQuery.length && !item.content?.toLowerCase().includes(searchQuery.toLowerCase())) {
				return false;
			}
			return true;
		});
        const slicedData = filteredData.slice(startIndex, startIndex + perPage);
        setPerPageData(slicedData);
        setPageCount(Math.ceil(filteredData.length / perPage));
    }, [offset, perPage, articles, searchQuery]);

    React.useEffect( () => {
        getPaginetedData();
    }, [offset, getPaginetedData, articles]);

    return (
        <section className="apps-list">
            <div className="header">
                <div style={{marginTop: 5}}>News</div>
                <Input
                    onChange={handleInputChange}
                    value={searchQuery}
                    width={200}
                    withIcon={true}
                />
                
            </div>
            <div className="content">
                <span className={"clear"} title={"Clear filters"} onClick={handleClearFilter}>Clear</span>
                <div className="news-content">
                    <div className="left-section">
                        <Input
                            placeholder={"Search..."}
                            onChange={handleInputChangeFilter}
                            value={searchInFilter}
                            width={"95%"}
                        />
                        <Country filter={searchInFilter}/>
                        <Category filter={searchInFilter}/>
                        <Sources filter={searchInFilter} data={sources}/>
                    </div>
                    <div className="right-section">
                        <ArticlesView data={perPageData}/>
                    </div>
                </div>
            </div>
            <ReactPaginate
                previousLabel={offset > 0 ? "<" : null}
                nextLabel={pageCount - offset > 1 ? ">" : null}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </section>
    )
};

function mapStateToProps(state) {
	return {
		articles: state.appData.articles,
        sources: state.appData.sources,
        filters: state.appData.filters,
	};
}

export default connect(mapStateToProps)(Search);

