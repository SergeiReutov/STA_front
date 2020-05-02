import React from 'react';
import PropTypes from 'prop-types';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { CandlestickSeries } from 'react-stockcharts/lib/series';
import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { first, last } from 'react-stockcharts/lib/utils';
import { TrendLine } from 'react-stockcharts/lib/interactive';

class CandleStickChart extends React.Component {
  render() {
    const { type, width, data: initialData, ratio } = this.props;

    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);

    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor
    } = xScaleProvider(initialData);

    const xExtents = [
      xAccessor(first(data)),
      xAccessor(last(data))
    ];

    return (
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        seriesName="MSFT"
        data={data}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xScale={xScale}
        xScaleProvider={discontinuousTimeScaleProvider}
        xExtents={xExtents}
      >
        <Chart id={1} yExtents={d => [d.high + d.high * 0.05, d.low - d.low * 0.05]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
          <YAxis axisAt="right" orient="right" ticks={5} />
          <CandlestickSeries />
          <TrendLine
						enabled={false}
						type="RAY"
						trends={[{ start: [0, 16], end: [505, 21], appearance: { stroke: 'green' }, type: 'XLINE' }]}
					/>
        </Chart>
      </ChartCanvas>
    );
  }
  
}

CandleStickChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(['svg', 'hybrid']).isRequired
};

CandleStickChart.defaultProps = {
	type: 'hybrid'
};

export default fitWidth(CandleStickChart);
