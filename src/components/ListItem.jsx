import React from 'react';

const ListItem = (props) => {
    // console.log(props.movieData);
    return (
        <div className="item">{props.title}</div>
    )
};

export default ListItem;
