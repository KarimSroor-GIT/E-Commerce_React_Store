import React from 'react';
import {selectCollection} from '../../redux/shop/shop.selector.js';
import {connect} from 'react-redux';

import './collection.styles.scss';

const Collection = ({collection}) => {

  console.log(collection);
  return (
    <h2> Collection component Page </h2>
    
  )
};

const mapStateToProps = (state,ownProps) =>({
  collection: selectCollection (ownProps.match.params.collectionId)(state)
});

export default connect (mapStateToProps)(Collection) ; 