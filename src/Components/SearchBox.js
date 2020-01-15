import React from 'react';

function SearchBox(props){
  return(
    <div className="wrapper-input">
      <input onChange={props.handleInput} type="text" placeholder="Recherche"/>
    </div>
  )
}

export default SearchBox;