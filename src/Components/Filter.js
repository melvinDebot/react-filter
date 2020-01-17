// import React, { useState } from 'react';
// import './../App.scss';
// import Slider from 'react-input-slider';

// // class Filter extends React.Component {

// //   render(){
    
// //     return (
// //       <div className="list_container">    
// //         <h1>Filtre</h1>
// //       </div>
      
// //     );
// //   }
  
// // }


// function Filter() {
//   const [state1, setState] = useState({ x: 0, x1: 5 });
//   const [state2, setState2] = useState({ x: 0 });
//   const [state3, setState3] = useState({ x: 0 });

 
//   return (
//     <div>
//       <h1>Filtres</h1>
//       <div className="filter_slider_container">
        
//         <div className="filter_text_box">
//           <h4>Temps disponible</h4>
//           <span>{state1.x} - {state1.x1}h</span>
//         </div>
//         <Slider className="slider_filter"
//           axis="x"
//           x={state1.x}
//           x1={state1.x1}
//           onChange={({ x, x1 }) => setState(state1 => ({ ...state1, x, x1 }))}
          
//         />
//       </div>

//       <div className="filter_slider_container">
//         <div className="filter_text_box">
//           <h4>Plage horaire</h4>
//           <span>{state2.x}</span>
//         </div>
        
//         <Slider className="slider_filter"
//           axis="x"
//           x={state2.x}
//           onChange={({ x }) => setState2(state2 => ({ ...state2, x }))}
//         />
//       </div>

//       <div className="filter_slider_container">
//         <div className="filter_text_box">
//           <h4>Distance</h4>
//           <span>{state3.x}</span>
//         </div>
        
//         <Slider className="slider_filter"
//           axis="x"
//           x={state3.x}
//           onChange={({ x }) => setState3(state3 => ({ ...state3, x }))}
//         />
//       </div>

//       <div className="filter_slider_container">
//         <h4>Type d’activité</h4>
//       </div>

//     </div>
//   );
// }export default Filter;

import React from 'react';
import './../App.scss';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TypeActivite from './TypeActivite';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {

  const [value, setValue] = React.useState([0, 2]);
  const [value1, setValue1] = React.useState([0, 10]);
  const [value2, setValue2] = React.useState([0, .5]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      <h1>Filtres</h1>
      <div className="filter_slider_container">

        <div>
          <div>
            Type d'activité
          </div>
          <TypeActivite />
        </div>

        <div className="filter_text_box">
          <Typography id="range-slider" gutterBottom>
            Temps disponible
          </Typography>
          <Typography id="range-slider" gutterBottom>
            0 - 5h
          </Typography>
        </div>
        
        <Slider
          min={0} max={5}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
        
        <div className="filter_text_box">
          <Typography id="range-slider" gutterBottom>
            Plage horaire
          </Typography>
          <Typography id="range-slider" gutterBottom>
            0 - 24h
          </Typography>
        </div>
        
        <Slider
          min={0} max={24}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        <div className="filter_text_box">
          <Typography id="range-slider" gutterBottom>
            Distance
          </Typography>
          <Typography id="range-slider" gutterBottom>
            0 - 1km
          </Typography>
        </div>
        
        <Slider
          min={0} max={1}
          value={value2}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          step={0.1}
        />
      </div>
    
    </div>
  );
}