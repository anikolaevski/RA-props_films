import React from 'react';

import './App.css';
import './css/main.css';
import { films} from './AppData';
import { DispFilms } from './DispFilms';

export default function App() {
  return (<DispFilms films={films} />);
}
