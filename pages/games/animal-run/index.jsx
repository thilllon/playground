import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { css } from '@emotion/react';
import { lorem } from 'faker';
import shortid from 'shortid';

// #container {
//   width: 800px;
//   height: 400px;
//   position: relative;
//   background: var(--color-container);
// }

// .animal {
//   background-repeat: no-repeat !important;
//   background-color: white !important;
//   background-position: center !important;
//   background-size: contain !important;
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   text-align: center;
//   vertical-align: middle;
// }

// .clicker + .circle {
//     -webkit-animation: rotor 1.5s linear 0s infinite normal;
//     -mox-animation: rotor 1.5s linear 0s infinite normal;
//     -o-animation: rotor 1.5s linear 0s infinite normal;
//     animation: rotor 1.5s linear 0s infinite normal;
// }

// .paused {
//     -webkit-animation-play-state: paused !important;
//     -moz-animation-play-state: paused !important;
//     -o-animation-play-state: paused !important;
//     animation-play-state: paused !important;
// }

const title = 'Animal Run';
const numberOfAnimals = 8;
const containerWidth = 800;
const animalWidth = 50;
const animalHeight = 50;
const bezierRandomFactor1 = 0.4;
const bezierRandomFactor2 = 0.6;
const minDuration = 1000;
const maxDuration = 3000;

export default function AnimalRun() {
  const [num, setNum] = useState(0);
  const [status, setStatus] = useState('ready'); // ready, start, pause

  const onClickReset = (ev) => {
    //
  };

  return (
    <Container maxWidth='lg'>
      <Head>
        <title>{title}</title>
      </Head>
    </Container>
  );
}
//  <Typography variant='h1'>{title}</Typography>
//       <Box>
//         <Box>
//           <Button onClick={onClickButton}>+</Button>
//           <Input value={33} />
//           <Button onClick={onClickButton}>-</Button>
//         </Box>
//         <Box>
//           {status === 'ready' && <Button>Start</Button>}
//           {status === 'start' && <Button>Pause</Button>}
//           {status === 'pause' && <Button onClick={onClickReset}>Reset</Button>}
//         </Box>
//       </Box>
//       <Box>
//         {Array(num)
//           .fill(null)
//           .map((_, idx) => {
//             return <Button key={'_' + idx}>{idx}</Button>;
//           })}
//       </Box>
//       {status === 'start' && (
//         <Box>
//           {Array(num)
//             .fill(null)
//             .map((elem, idx) => {
//               return (
//                 <Box key={'_' + idx}>
//                   <img alt={idx} src={elem.src} />
//                 </Box>
//               );
//             })}
//         </Box>
//       )}
