import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import renderActiveShape from "./DonutPieChartHelper";

const makeData = (timeSignatures) => {

  if (timeSignatures != null ) {
    let data = [];
    for (let i = 0; i < Object.keys(timeSignatures).length; i++) {
      data.push({
        name: Object.keys(timeSignatures)[i],
        value: timeSignatures[parseInt(Object.keys(timeSignatures)[i])]
      });
    }
    return data;
  }
};

function DonutPieChart(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
  
    return (
      <PieChart width={700} height={700}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={makeData(props.timeSignatures)}
          cx={700 / 2}
          cy={200}
          innerRadius={120}
          outerRadius={150}
          fill="blue"
          fillOpacity={0.5}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    );
  }

  export default DonutPieChart;