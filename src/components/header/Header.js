import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SearchInput } from 'components/common';
import { setSearch, requestTicker } from 'actions/tickerSearch';
import { getSearch, getIsLoading } from 'selectors/tickerSearch';
import { voidFn } from 'utils/common';
import './styles.scss';

function Header(props) {
  const {
    search = '',
    isLoading = false,
    setSearch = voidFn,
    requestTicker = voidFn
  } = props;

  return (
    <AppBar className="main-header" position="static">
      <Toolbar variant="dense">
        <SearchInput
          value={search}
          isDisabled={isLoading}
          onChange={setSearch}
          onSearch={requestTicker}
        />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setSearch: PropTypes.func.isRequired,
  requestTicker: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: getSearch(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = {
  setSearch,
  requestTicker
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
