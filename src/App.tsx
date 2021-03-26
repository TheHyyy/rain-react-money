import React from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";
import Nav from 'components/Nav';

const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column
`
const Main = styled.div`
  flex-grow:1;
  overflow:hidden;
`




function App() {
  return (
    <Router>

      <Wrapper>
      {/* 内容 */}
      <Main>
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
      </Main>
        {/* 导航 */}
        <Nav/>
        
      </Wrapper>
    </Router>
  );
}


function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}
function Statistics() {
  return <h2>Statistics</h2>;
}
function NoMatch() {
  return <h2>没有这个路径哦哥们</h2>;
}

export default App;