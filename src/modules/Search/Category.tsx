import React from "react";
import { category } from '../../modules/interfaces';

interface IProps {
    filter: string;
}

const Category: React.FC<IProps> = ({filter}) => {
    const filteredCategory = category.filter(item=>item.toLowerCase().includes(filter.toLowerCase()));
    return (
        <div className="filter-section">
            {!!filteredCategory.length && <div className="filter-header">Category</div>}
            {filteredCategory.map((item) => {
                return (
                    <div className="filter-item" key={item}>
                      <input type="checkbox"></input>
                      <span>{item}</span>
                    </div>
                  );
                })
            }
        </div>
    )   
};

export default Category;
