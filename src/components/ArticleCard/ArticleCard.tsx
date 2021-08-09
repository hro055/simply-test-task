import React from 'react';
import './ArticleCard.styles.scss';
import { DataStructure } from '../../modules/interfaces';

interface IProps {
  item: DataStructure;
}

const ArticleCard: React.FC<IProps> = ({ item }) => {
  return (
    <div className="item">
      <div className="item-box-info">
        <div>
          <img className="img-content" src={item.urlToImage}></img>
        </div>
        <div className="info-content">
          {item.content}
          <div className="published">{new Date(item.publishedAt).toDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
