import React, { useState } from 'react';
import {Plot} from 'react-d3-plot';

 export const Photonplot =()=>{
    const xData = Array.from(new Array(10000), (val, index)=>index*0.01);

    const [graphics, setGraphics] = useState([
        {
            name: 'Test signal',
            xData: xData,
            yData: xData.map((value)=>value*value)
          },
           
          {
            name: 'Third signal',
            xData: xData,
            yData: xData.map((value)=>value)
          }
    ]);

    return <div className="row">
        <Plot signals={graphics}/>
    </div>
}