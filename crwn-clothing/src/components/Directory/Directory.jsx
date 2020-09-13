import React from 'react';
import './Directory.scss';
import { sections } from '../../data/sections.js';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: sections
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    )
  }
}

export default Directory;