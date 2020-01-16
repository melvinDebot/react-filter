import React, { useState } from 'react';
import './../App.scss';
import Slider from 'react-input-slider';

// class Filter extends React.Component {

//   render(){
    
//     return (
//       <div className="list_container">    
//         <h1>Filtre</h1>
//       </div>
      
//     );
//   }
  
// }


function Filter() {
  const [state1, setState] = useState({ x: 0 });
  const [state2, setState2] = useState({ x: 0 });
  const [state3, setState3] = useState({ x: 0 });

 
  return (
    <div>
      <h1>Filtres</h1>
      <div className="filter_slider_container">
        
        <div className="filter_text_box">
          <h4>Temps disponible</h4>
          <span>{state1.x}</span>
        </div>
        <Slider className="slider_filter"
          axis="x"
          x={state1.x}
          onChange={({ x }) => setState(state1 => ({ ...state1, x }))}
        />
      </div>

      <div className="filter_slider_container">
        <div className="filter_text_box">
          <h4>Plage horaire</h4>
          <span>{state2.x}</span>
        </div>
        
        <Slider className="slider_filter"
          axis="x"
          x={state2.x}
          onChange={({ x }) => setState2(state2 => ({ ...state2, x }))}
        />
      </div>

      <div className="filter_slider_container">
        <div className="filter_text_box">
          <h4>Distance</h4>
          <span>{state3.x}</span>
        </div>
        
        <Slider className="slider_filter"
          axis="x"
          x={state3.x}
          onChange={({ x }) => setState3(state3 => ({ ...state3, x }))}
        />
      </div>

      <div className="filter_slider_container">
        <h4>Type d’activité</h4>
      </div>

    </div>
  );
}export default Filter;