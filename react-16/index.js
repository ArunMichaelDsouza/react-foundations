import React from 'react';
import ReactDOM from 'react-dom';
// import { FragmentsArray, FragmentsString } from './snippets/Fragments.jsx';
// const Fragments = <div><FragmentsArray /><FragmentsString /></div>;
import ErrorBoundary from './snippets/ErrorBoundary.jsx';

ReactDOM.render(<ErrorBoundary />, document.getElementById('app'));