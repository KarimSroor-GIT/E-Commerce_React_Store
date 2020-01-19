import React from 'react';
import {connect} from  'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector}  from 'reselect';

import './directory.styles.scss';

const Directory = ({sections})=> (
    <div className= 'directory-menu'>
    {
      sections.map(({id,...sectionsProp})=>(
      <MenuItem key={id} {...sectionsProp}></MenuItem>
      ))
    }
    
    </div>
  );

  const mapStateTopProps = createStructuredSelector(
    {
      sections: selectDirectorySections

    });


export default connect(mapStateTopProps) (Directory);