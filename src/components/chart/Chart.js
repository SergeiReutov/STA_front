import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Loader, ErrorMessage, NoData } from 'components/common';
import { clearError } from 'actions/chart';
import { getChart, getIsLoading, getError } from 'selectors/chart';
import { voidFn } from 'utils/common';
import { ChartType } from 'types/chart';
import CandleStickChart from './CandleBarChart';

function Chart(props) {
  const {
    chart = {},
    isLoading = false,
    error = null,
    clearError = voidFn
  } = props;

  const renderContent = () => R.isEmpty(chart)
    ? <NoData />
    : <CandleStickChart chart={chart} />;

  return (
    <Fragment>
      {isLoading
        ? <Loader />
        : renderContent()
      }
      <ErrorMessage error={error} onClose={clearError} />
    </Fragment>
  );
}

Chart.propTypes = {
  chart: ChartType.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  chart: getChart(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = {
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
