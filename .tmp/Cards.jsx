import React from 'react';
import styled from 'styled-components';

/* background: ${(props) => (props.primary ? 'palevioletred' : 'white')}; */
/* color: ${(props) => (props.primary ? 'white' : 'palevioletred')}; */
/* z-index:   ${(props) => props.zIndex}; */

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 20px;

  & > div {
    /* z-index: */
    width: 150px;
    height: 250px;
    width: 30px;
    height: 50px;
    /* margin-right:-50px; */
    /* margin-right: -10%; */
    background-color: white;
    /* padding:1px; */

    &:hover {
      cursor: pointer;
      background-color: gray;
    }
    & > .edge {
      /* background: green; */
      /* background: gainsboro; */
      background: transparent;
      border: none;
      position: absolute;
      width: 30px;
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    & > .edge {
      display: none;
    }
    & > .center {
      font-size: 1rem;
      font-weight: bold;
      /* background: gray; */
      position: relative;
      border: 2px solid black;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;
const onClickCard = (e) => {
  console.info(e);
};
function Cards({ list = [2, 23, 61, 88] }) {
  //
  let cardList = list.sort((b, a) => (a > b ? 1 : a < b ? -1 : 0));

  return (
    <CardWrapper className='card-wrapper' zIndex={0}>
      {cardList.map((elem, idx) => {
        // console.info(idx);
        return (
          <div className='card' key={`card_${idx}`} onClick={onClickCard}>
            <div className='edge'>{elem}</div>
            <div className='center'>{elem}</div>
          </div>
        );
      })}
    </CardWrapper>
  );
}

export default Cards;
