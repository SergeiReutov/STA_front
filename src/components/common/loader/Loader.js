import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';

export default function Loader() {
  return (
    <Backdrop
      className="loaderContainer"
      open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
