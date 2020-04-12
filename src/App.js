import React from 'react';
import { Header } from 'components/header';
import Router from './Router';
import 'styles/Main.scss';

export default function App() {
  return (
    <div data-testid="mainApp" className="main-app">
      <Header />
      <Router />
    </div>
  );
}
