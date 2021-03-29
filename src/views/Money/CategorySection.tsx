

import styled from 'styled-components';
const CategorySection =styled.section`

> ul{
  display:flex;
  background:#189ffa;
  font-size:24px;
  color:white;
  > li {
    width:50%;
    text-align:center;
    padding:16px  0 ;
    position:relative;
    &.selected::after{
      content:'';
      display:block;
      height:3px;
      background:white;
      position:absolute;
      bottom:0;
      width:100%;
      left:0;
    }
  }
}

`
export {CategorySection}