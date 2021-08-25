NavBar.js 밑 NavBar.css 추가하시고
아래와 같이 App.js에서 13번째 줄, 22번째 줄만 추가하시면 됩니다.



-------------------------------------------------------------
<pre>
<code>
import './App.css';
import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
       <NavBar />
      </HashRouter>
    </div>
  );
}
export default App;
</code>
<pre>
