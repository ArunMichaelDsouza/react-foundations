import React from 'react';
import ReactDOM from 'react-dom';
// import { FragmentsArray, FragmentsString } from './snippets/Fragments.jsx';
// const Fragments = <div><FragmentsArray /><FragmentsString /></div>;
import ErrorBoundaries from './snippets/ErrorBoundaries.jsx';

ReactDOM.render(<ErrorBoundaries />, document.getElementById('app'));