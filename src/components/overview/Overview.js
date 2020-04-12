import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Chart } from 'components/chart';
import { FavoriteTickers } from 'components/favoriteTickers';
import './styles.scss';

function Overview(props) {
  return (
    <main className="overview">
      <section className="chart">
        <Chart />
      </section>
      <section className="sidePanel right">
        <FavoriteTickers />
      </section>
    </main>
  );
}

Overview.propTypes = {

};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
