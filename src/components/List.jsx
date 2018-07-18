import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    const movies = props.titleList;
    return (
        <div className="listView">
            {
                movies.map(title => <ListItem title={title}/>)
            }
        </div>
    )
};

export default List;
