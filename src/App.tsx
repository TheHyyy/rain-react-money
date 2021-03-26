import React from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";

const Wrapper = styled.div`
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column
`
const Main = styled.div`
  border:5px solid green;
  flex-grow:1;
  overflow:hidden;
`
const Nav = styled.nav`
  border:10px solid blue;
  >ul {
      display:flex;
    > li{
        width:33.3333%;
        text-align:center;
        padding:16px;
    }
  }

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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </Nav>
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