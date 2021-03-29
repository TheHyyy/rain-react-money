import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';

const AppWrapper = styled.div`
  color:#333;
`



function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}




export default App;