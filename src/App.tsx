import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
Redirect
} from "react-router-dom";
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';





function App() {
  return (
    <Router>
      {/* 内容 */}
          <Switch>
            <Redirect exact from="/" to="/money" />
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        {/* 导航 */}
        
    </Router>
  );
}




export default App;