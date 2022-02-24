import "./ChartBars.css";

const ChartBars = ({ value, label, maxValue }) => {

    let barFillHeight = '0%';

    if(maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100 ) + '%' ;
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
                <label className='char-bar__label'>{label}</label>
        </div>
    );
}

export default ChartBars;