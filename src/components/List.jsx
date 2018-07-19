import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = (props) => {
  const { titleList } = props;
  return (
    <div className="listView">
      {
        titleList.map((title, i) => <ListItem key={`${title}${i + 1}`} title={title} />)
      }
    </div>
  );
};

export default List;

List.propTypes = {
  titleList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
