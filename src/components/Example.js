import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addValue } from 'actions/example';

function Example(props) {
  const {
    value = 0
  } = props;

  return (
    <section>
      Value: {value}
      <button onClick={props.addValue}>+1</button>
    </section>
  );
}

Example.propTypes = {
  value: PropTypes.number.isRequired,
  addValue: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: state.example.value
});

const mapDispatchToProps = {
  addValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
