import Layout from 'components/Layout';
import React from "react";
import styled from 'styled-components';
import { CategorySection } from './Money/CategorySection';
import { NotesSection } from './Money/NotesSection';
import { NumberPadSection } from './Money/NumberPadSection';
import { TagsSection } from './Money/TagSection';


const MyLayout= styled(Layout)`
  border:1px solid red;
  display:flex;
  flex-direction:column;
`

function Money(){
  return (
    <MyLayout className="xxx">
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
    </MyLayout>
  )
}

export default Money