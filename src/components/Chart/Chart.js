import "./Chart.css";

import ChartBars from "./ChartBars";

const Chart = ({ dataPoints }) => {
    
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)
 
    const displayBars = () => {
        return dataPoints.map((dataPoint) => {
            return (
                <ChartBars
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            );
        });
    };

    return <div className="chart">{displayBars()}</div>;
};

export default Chart;
