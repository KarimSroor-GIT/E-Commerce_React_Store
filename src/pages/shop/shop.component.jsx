import React from 'react';
import {Route} from 'react-router-dom';
import Collection from '../collection/collection.component';
import  CollectionOverview   from '../../components/collection-overview/collection-overview.component';

import './shop.styles.scss';


/**
 *     
 * @param {*} param0 
 */

const ShopPage =({match}) =>
{ 
       return(
       <div className='shop'>                                    
      <Route  path = {`${match.path}:collectionId`} component={Collection}/>
      <Route exact path={`${match.path}`}   component={CollectionOverview}/> 
       </div>
     )

}


export default  ShopPage;
