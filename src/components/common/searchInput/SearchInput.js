import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { voidFn } from 'utils/common';
import './styles.scss';

export default function SearchInput(props) {
  const {
    value = '',
    isDisabled = false,
    onChange = voidFn,
    onSearch = voidFn
  } = props;

  const handleChange = ({ target: { value } }) => onChange(value);

  return (
    <Paper className="search-input" variant="outlined">
      <InputBase
        placeholder="Search a ticker"
        margin="dense"
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <IconButton
        size="small"
        disabled={isDisabled}
        onClick={onSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
