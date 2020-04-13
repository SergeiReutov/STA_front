import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { voidFn } from 'utils/common';

export default function ErrorMessage(props) {
  const {
    error,
    onClose = voidFn
  } = props;

  if (error === null) {
    return null;
  }

  const defaultMessage = 'Cannot do that!';

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open
      autoHideDuration={3000}
      onClose={onClose}
      message={error || defaultMessage}
      action={
        <IconButton size="small" color="inherit" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
  onClose: PropTypes.func.isRequired
};
