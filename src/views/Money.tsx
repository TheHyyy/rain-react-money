import Layout from 'components/Layout';
import React from "react";
import styled from 'styled-components';

const TagsSection =styled.section`
  background-color:#ffffff;
  padding: 12px 16px;
  > ol{
      margin: 0 -12px;
    > li {
      background-color:#d9d9d9;
      border-radius:18px;
      display:inline-block;
      padding : 3px 16px;
      font-size:14px;
      margin:8px 12px;
    }
  }
  > button{
      background:none;
      border:none;
      padding: 2px 4px;
      border-bottom:1px solid #333;
      color:#666;
      margin-top:8px;
  }
`



const NotesSection =styled.section`
  background-color:#f5f5f5;
  padding:0px 16px;
  font-size:14px;
  > label {
    display:flex;
    align-items:center;
    > span{
      margin-right:16px;
      white-space:nowrap;
    }
    > input{
      display:block;
      width:100%;
      height:72px;
      background:none;
      border:none;
    }
  }

` 
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
        background:#333;
        position:absolute;
        bottom:0;
        width:100%;
        left:0;
      }
    }
  }

`
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



function Money(){
  return (
    <Layout>
        <TagsSection>
          <ol>
              <li>外卖</li>
              <li>超市</li>
              <li>聚餐</li>
              <li>运动</li>
          </ol>
          <button>新增标签啊妈的</button>
        </TagsSection>
        <NotesSection>
          <label>
            <span>备注</span>
            <input type="text" placeholder="在这里添加备注"/>
          </label>
        </NotesSection>
        <CategorySection>
          <ul>
            <li className="selected">支出</li>
            <li>收入</li>
          </ul>
        </CategorySection>
        <NumberPadSection>
            <div className="output">
              100
            </div>
            <div className="pad clearfix">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>删除</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>清空</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button className="ok">OK</button>
              <button className="zero">0</button>
              <button className="dot">.</button>

            </div>
        </NumberPadSection>
    </Layout>
  )
}

export default Money