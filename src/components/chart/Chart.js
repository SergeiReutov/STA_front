import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Loader, ErrorMessage, NoData } from 'components/common';
import { clearError } from 'actions/chartData';
import { getChartData, getIsLoading, getError } from 'selectors/chartData';
import { voidFn } from 'utils/common';

function Chart(props) {
  const {
    chartData = {},
    isLoading = false,
    error = null,
    clearError = voidFn
  } = props;

  const renderContent = () => R.isEmpty(chartData)
    ? <NoData />
    : JSON.stringify(chartData);

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
  chartData: PropTypes.shape({
    chart: PropTypes.string
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  chartData: getChartData(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

const mapDispatchToProps = {
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
