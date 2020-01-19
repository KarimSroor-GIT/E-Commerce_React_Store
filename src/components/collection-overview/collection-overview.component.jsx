import  React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForOverview} from '../../redux/shop/shop.selector';
import  CollectionPreview  from '../collection-preview/collection-preview.component.jsx';


import './collection-overview.styles.scss';

const CollectionOverview = ({collections})=> (
<div className ='collection-overview'>
{
  collections.map( ({ id , ...otherProps}) => (
      <CollectionPreview key= {id} {...otherProps}>
      </CollectionPreview>
    
    )
  )
}
</div>
)


const mapStateToprops = createStructuredSelector({
  collections :selectCollectionForOverview
})

export default connect (mapStateToprops)(CollectionOverview);