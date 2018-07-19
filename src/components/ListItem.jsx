import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { title } = props;
  return (
    <div className="item">
      {
        title
      }
    </div>
  );
};

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
