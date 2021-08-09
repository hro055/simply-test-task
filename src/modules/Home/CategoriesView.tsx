import React from 'react';
import Card from '../../components/Card';
import { DataSources } from '../interfaces';

type Props = {
	data: DataSources[];
    handleSourceClick: any;
};

const CategoriesView: React.FC<Props> = ({data, handleSourceClick}) => {

    return (
        <div className="source--content">
            <div className="sources">Sources</div>
            {data.map((item) => (
                <Card
                    item={item}
                    key={item.id}
                    handleSourceClick={handleSourceClick}
                />
            ))}
        </div>
    )   
};

export default CategoriesView;
