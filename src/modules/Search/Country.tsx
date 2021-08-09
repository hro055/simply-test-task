import React from "react";
import { countrys } from '../../modules/interfaces';

interface IProps {
    filter: string;
}

const Country: React.FC<IProps> = ({filter}) => {
    const filteredCountry = countrys.filter(item=>item.countryName.toLowerCase().includes(filter.toLowerCase()));
    return (
        <div className="filter-section">
            {!!filteredCountry.length && <div className="filter-header">Country</div>}
            {filteredCountry.map((item) => {
                return (
                    <div className="filter-item" key={item.countryCode}>
                      <input type="checkbox"></input>
                      <span>{item.countryName}</span>
                    </div>
                  );
                })
            }
        </div>
    )   
};

export default Country;
