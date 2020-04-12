import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.scss';

function Header(props) {
  return (
    <header>
      Header
    </header>
  );
}

Header.propTypes = {

};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
