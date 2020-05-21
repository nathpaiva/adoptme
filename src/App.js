import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import ThemeContext from './ThemeContext';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">
            Adopt Me!
          </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      {/* <div id="modal"></div> */}
      </div>

      </ThemeContext.Provider>
    </React.StrictMode>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
