import React from 'react';
import './search-box.styles.css'

export const SearchBox= ({placeholder,handleChange})=>(
    <input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange}
      //  e=> {
      //this.setState({searchField:e.target.value})
        //,()=>console.log(this.state)) need to put this as 2nd paramater on setstate function for latest update
    />
);