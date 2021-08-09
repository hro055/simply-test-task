import React from 'react';
import './Card.styles.scss';
import { langs, countrys, DataSources } from '../../modules/interfaces';

interface IProps {
  item: DataSources;
  handleSourceClick: any;
}

const Card: React.FC<IProps> = ({ item, handleSourceClick }) => {
  const lang = langs.find(c => c.langCode === item.language);
  const country = countrys.find(c => c.countryCode === item.country);

  return (
    <div className="app-item" key={item.id}>
        <div className="box-info--content">
          <div>
            <h4 onClick={() => handleSourceClick(item.id)}>{item.name}</h4>
            <div>{item.description}</div>
          </div>
        </div>
        <div className="box-info--footer" >
          <div>{item.category}</div>
          <div>{lang?.langName}</div>
          <div>{country?.countryName}</div>
        </div>
    </div>
  );
};

export default Card;
