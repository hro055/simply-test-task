import React from "react";
import { DataSources } from "../interfaces";

interface IProps {
    data: DataSources[];
    filter: string;
}

const Sources: React.FC<IProps> = ({data, filter}) => {
    const filteredData = data.filter(item=>item.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <div className="filter-section">
            {!!filteredData.length && <div className="filter-header">Source</div>}
            {filteredData.map((item) => {
                return (
                    <div className="filter-item" key={item.id}>
                      <input type="checkbox"></input>
                      <span >{item.name.slice(0, 10)}</span>
                    </div>
                  );
                })
            }
        </div>
    )   
};

export default Sources;
