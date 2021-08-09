import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { category } from '../../modules/interfaces';

interface IProps {
    filter: string;
}

const Category: React.FC<IProps> = ({filter}) => {
    const filteredCategory = category.filter(item=>item.toLowerCase().includes(filter.toLowerCase()));
    const history = useHistory();
    const {search} = useLocation();

    const url = new URLSearchParams(search);

    return (
        <div className="filter-section">
            {!!filteredCategory.length && <div className="filter-header">Category</div>}
            {filteredCategory.map((item) => {
                return (
                    <div className="filter-item" key={item}>
                      <input type="radio" checked={url.get("category") === item } onClick={() => history.push(`/search?category=${item}`)}></input>
                      <span>{item}</span>
                    </div>
                  );
                })
            }
        </div>
    )   
};

export default Category;
