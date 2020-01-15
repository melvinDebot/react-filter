import React from 'react';
import Maps from './Maps';

function MapsList(props){
  let dogs = props.filter.map((dog, i) => {
    return <Maps name={dog.name} breed={dog.breed} key={i}/>
  })
  return(
    <div className="containt">
      {dogs}
    </div>
  )
}
export default MapsList;