
import styled from 'styled-components';
const NumberPadSection =styled.section`
display:flex;
flex-direction:column;
> .output{
  background:white;
  font-size:36px;
  line-height:72px;
  padding:0 16px;
  box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25),
  inset 0 5px 5px -5px rgba(0,0,0,0.25);
}
> .clearfix{
  content:'';
  display:block;
  clear:both;
}
> .pad{
  border:1px solid red;
  > button{
    float:left;
    width:25%;
    height:64px;
    &.ok{
      height: 128px;
      float:right;
    }
    &.zero{
      width:50%;
    }
    &.dot{
      font-size:24px;
    }
  }
}
`

export {NumberPadSection}