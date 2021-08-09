import React from 'react';
import ArticleCard from '../../components/ArticleCard';
import { DataStructure } from '../interfaces';

type Props = {
	data: DataStructure[];
};

const ArticlesView: React.FC<Props> = ({data}) => {
    return (
        <div className="source--content">
            {data.map((item) => (
                <ArticleCard
                    item={item}
                    key={item.publishedAt}
                />
            ))}
        </div>
    )   
};

export default ArticlesView;
