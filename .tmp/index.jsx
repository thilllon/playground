// import React, { createContext, useContext, useState } from 'react';
// import styled from '@emotion/styled';
// import _ from 'lodash';
// import { gql } from '@apollo/client';
// import GameContext from './GameContext';

// const PUT_CARD_DOWN = gql`
//   mutation($putCardDownInput: PutCardDownInput) {
//     putCardDown(putCardDownInput: $putCardDownInput) {
//       expeditions
//       stack
//     }
//   }
// `;

// const TAKE_CARD = gql`
//   mutation($takeCardInput: TakeCardInput) {
//     takeCard(takeCardInput: $takeCardInput) {
//       expeditions
//       stack
//     }
//   }
// `;
// const HandCard = ({ playerId, text, className }) => {
//   const {
//     players,
//     setPlayers,
//     expeditions,
//     setExpeditions,
//     stack,
//     setStack,
//   } = useContext(GameContext);

//   const onClickTakeStack = (value) => {
//     // 스택에서 가져오는 경우

//     // if (stack.length === 0) {
//     //   alert('게임종료');
//     // }
//     setStack(stack.slice(1));
//   };

//   const onClick = (ev) => {
//     ev.preventDefault();
//     const value = ev.target.textContent;
//     const myCards = players[0].cards.filter((elem) => elem !== value);
//     setPlayers([
//       {
//         ...players[0],
//         cards: myCards,
//       },
//       players[1],
//     ]);
//     const city = value[0];

//     let mine = expeditions[city][0];
//     let yours = expeditions[city][1];
//     let abd = expeditions[city][2];
//     setExpeditions({
//       ...expeditions,
//       [city]: [[...mine, value], yours, abd],
//     });
//   };

//   return (
//     <Card
//       // className={className}
//       onClick={onClick}
//       // my={playerId === 0}
//       my={true}>
//       {text}
//     </Card>
//   );
// };

// const EmptyCard = styled(Card)`
//   background-color: black;
// `;

// const Expedition = styled.div`
//   width: 100%;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
// `;

// const CITIES = ['a', 'b', 'c', 'd', 'e', 'f'];
// const NUMBER_OF_HANDS = 8;
// const CARDS = CITIES.map((city) => {
//   return [...Array(9 + 3).keys()].map((elem, idx) => {
//     if (idx > 8) {
//       return city;
//     } else {
//       return city + String(idx + 2);
//     }
//   });
// });

// console.info(CARDS);

// const generateInitialState = (numberOfCities) => {
//   //
//   if (![5, 6].includes(numberOfCities)) {
//     throw new Error();
//   }
//   let cards = CARDS.slice(0, numberOfCities - 1);
//   const shuffled = _.shuffle(cards.flat());
//   return {
//     numberOfCities,
//     players: [
//       {
//         name: 'aa',
//         cards: shuffled.splice(0, NUMBER_OF_HANDS).sort(),
//       },
//       {
//         name: 'bb',
//         cards: shuffled.splice(0, NUMBER_OF_HANDS).sort(),
//       },
//     ],
//     stack: [...shuffled],
//     expeditions: {
//       // 0: Mine, 1: Yours, 2: abandoned
//       a: [[], [], []],
//       b: [[], [], []],
//       c: [[], [], []],
//       d: [[], [], []],
//       e: [[], [], []],
//       f: [[], [], []],
//     },
//   };
// };

// const LostCities = () => {
//   const initialStates = generateInitialState(5);
//   const [numberOfCities, setNumberOfCities] = useState(
//     initialStates.numberOfCities,
//   );
//   const [players, setPlayers] = useState(initialStates.players);
//   const [stack, setStack] = useState(initialStates.stack);
//   const [expeditions, setExpeditions] = useState(initialStates.expeditions);
//   return (
//     <GameContext.Provider
//       value={{
//         numberOfCities,
//         setNumberOfCities,
//         players,
//         setPlayers,
//         stack,
//         setStack,
//         expeditions,
//         setExpeditions,
//       }}>
//       <div>
//         <h1>Lost Cities</h1>
//         <PlayerCards playerId={1} />
//         <Board />
//         <PlayerCards playerId={0} />
//       </div>
//     </GameContext.Provider>
//   );
// };

// const Stack = () => {
//   const StackWrapper = styled.div`
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: center;
//     align-items: center;
//   `;
//   const { stack, setStack } = useContext(GameContext);

//   return (
//     <StackWrapper>
//       <div>카드 스택</div>
//       <Card>{stack.length > 0 ? stack[stack.length - 1] : 'XX'}</Card>
//       <div>남은 카드: {String(stack.length)}</div>
//     </StackWrapper>
//   );
// };
// const PlayerCards = ({ playerId }) => {
//   // const { players } = useContext(GameContext);
//   const ctx = useContext(GameContext);
//   const players = ctx.players;
//   //

//   return (
//     <Hand>
//       {players[playerId].cards.map((elem) =>
//         playerId === 0 ? (
//           <HandCard my={true} text={elem} />
//         ) : (
//           <HandCard my={false} text={elem} />
//         ),
//       )}
//     </Hand>
//   );
// };
// const Board = () => {
//   const { numberOfCities, expeditions } = useContext(GameContext);
//   const showSingleExpedition = (arr) => {
//     let LastDumpedCard;
//     const numberOfDumped = arr[2].length;
//     if (numberOfDumped > 0) {
//       LastDumpedCard = <Card>{arr[2][numberOfDumped - 1]}</Card>;
//     } else {
//       LastDumpedCard = <Card>XX</Card>;
//     }
//     return (
//       <>
//         <Expedition>
//           {arr[1].map((elem) => (
//             <Card>{elem}</Card>
//           ))}
//           ::{LastDumpedCard}::
//           {arr[0].map((elem) => (
//             <Card>{elem}</Card>
//           ))}
//         </Expedition>
//       </>
//     );
//   };
//   return (
//     <div>
//       {showSingleExpedition(expeditions['a'])}
//       {showSingleExpedition(expeditions['b'])}
//       {showSingleExpedition(expeditions['c'])}
//       {showSingleExpedition(expeditions['d'])}
//       {showSingleExpedition(expeditions['e'])}
//       <Stack />
//       {numberOfCities === 6 && showSingleExpedition(expeditions['f'])}
//     </div>
//   );
// };

// export default LostCities;
