import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

import { updateFilters } from "../../modules/reducers/AppListReducer";
import { Input } from '../../components/core';

import CategoriesView from "./CategoriesView";
import { DataSources } from '../interfaces';

type IProps = {
    sources: DataSources[];
}

const Home: React.FC<IProps> = ({sources}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState("");
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([] as DataSources[]);
    const [perPage] = useState(12);
    const [pageCount, setPageCount] = useState(0);

    const getPaginetedData = React.useCallback(() => {
        const startIndex = offset * perPage;
        const slice = sources.slice(startIndex, startIndex + perPage);
        setData(slice);
        setPageCount(Math.ceil(sources.length / perPage));
    }, [offset, perPage, sources]);

    React.useEffect( () => {
        getPaginetedData();
    }, [offset, getPaginetedData]);

    function handleInputChange(newVal: string) {
        setSearchString(newVal);
    }

    function handleSearch() {
        dispatch(updateFilters({searchString}));
        history.push(`/search?q=${searchString}`);
    }

    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage)
    };

    const handleSourceClick = (sources: string) => {
        dispatch(updateFilters({sources}));
        history.push(`/search?sources=${sources}`);
    };

    return (
        <section className="apps-list">
            <div className="header">
                <div style={{marginTop: 5}}>News</div>
                <Input
                    onChange={handleInputChange}
                    onEnter={handleSearch}
                    value={searchString}
                    width={"200px"}
                    withIcon={true}
                />
            </div>
            <CategoriesView
                data={data}
                handleSourceClick={handleSourceClick}
            />
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
		sources: state.appData.sources,
        filters: state.appData.filters,
	};
}

export default connect(mapStateToProps)(Home);

