// (() => {
//   Array.prototype.shuffle = function () {
//     let idx, targetIdx, tmp;
//     let a = [...this];
//     for (idx = a.length; idx; idx--) {
//       targetIdx = Math.floor(Math.random() * idx);
//       tmp = a[idx - 1];
//       a[idx - 1] = a[targetIdx];
//       a[targetIdx] = tmp;
//     }
//     return a;
//   };
//   Number.prototype.rnd = function (n1, n2, option = {}) {
//     let ret = 0;
//     let digits = option.digits;
//     if (arguments.length === 0) {
//       ret = Math.random();
//     } else if (typeof n1 === 'number' && typeof n2 === 'number') {
//       let from = n1,
//         to = n2;
//       ret = Math.random() * (to - from) + from;
//     } else if (typeof n1 === 'number') {
//       let from = 0,
//         to = n1;
//       ret = Math.random() * (to - from) + from;
//     } else {
//     }
//     // if (option.format === 'integer') ret = Math.floor(ret);
//     if (digits) ret = Math.floor(ret * 10 ** digits) / 10 ** digits;
//     else ret = Math.floor(ret);
//     return ret;
//   };
//   Array.prototype.rnd = function () {
//     // todo
//   };
// })();

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// var add = async function (x) {
//   // async function 표현식을 변수에 할당
//   var a = await resolveAfter2Seconds(20);
//   // console.info('after a');
//   var b = await resolveAfter2Seconds(30);
//   // console.info('after b');
//   return x + a + b;
// };

// // console.info(addResult);
// // addResult.then((v) => {
// //   // console.log(v); // 4초 뒤에 60 출력
// // });
// // (async function (x) {
// //   // async function 표현식을 IIFE로 사용
// //   var p_a = resolveAfter2Seconds(20);
// //   var p_b = resolveAfter2Seconds(30);
// //   return x + (await p_a) + (await p_b);
// // })(10).then((v) => {
// //   // console.log(v); // 2초 뒤에 60 출력
// // });

// // var addSync = function (x) {
// //   var a = resolveAfter2Seconds(20);
// //   // console.info("after a");
// //   var b = resolveAfter2Seconds(30);
// //   // console.info("after b");
// //   return x + a + b;
// // };

// // var addSyncResult = addSync(10);
// // console.info(addSyncResult);

// // (function () {
// //   // console.info(this);
// // })();
// // (function () {
// //   // console.info(this);
// // }.bind(Window)());
// // (function () {
// //   // console.info(this);
// // }.bind(Object)());

// // (function () {
// //   // console.info(this);
// // }.bind(Array)());
// // (function () {
// //   // console.info(this);
// // }.bind(Function)());

// // (function () {
// //   // console.info(this);
// // }.bind(undefined)());

// const numberOfAnimals = 8;
// const containerWidth = 800;
// const animalWidth = 50;
// const animalHeight = 50;
// const bezierRandomFactor1 = 0.4;
// const bezierRandomFactor2 = 0.6;
// const minDuration = 1000;
// const maxDuration = 3000;

// (function getReady(n) {
//   for (let i = 0; i < n; i++) {
//     let rgb = `rgb(${Number.prototype.rnd(255)}, ${Number.prototype.rnd(
//       255,
//     )}, ${Number.prototype.rnd(255)})`;
//     let animalBox = document.createElement('div');
//     animalBox.textContent = '';
//     animalBox.setAttribute('id', `animal${i}`);
//     animalBox.setAttribute('class', 'animal');
//     animalBox.setAttribute(
//       'style',
//       `background: ${rgb};
//               top: ${animalHeight * i}px;
//               background-image:url(./resources/animal${i + 1}.jpg);`,
//     );
//     document.querySelector('#container').appendChild(animalBox);
//     animalBox.addEventListener('onfinish', function (event) {
//       // console.info('onfinish');
//     });
//     animalBox.addEventListener('finish', function (event) {
//       // console.info('finish');
//     });
//   }
// })(numberOfAnimals);

// (() => {
//   let animationObjList;
//   let finishNumber;

//   function startGame(event) {
//     let animalList = [];
//     let animalObj;
//     finishNumber = 0;

//     for (let i = 0; i < numberOfAnimals; i++) {
//       animalObj = {
//         id: `animal${i}`,
//         idx: i,
//         rank: undefined,
//         duration: Number.prototype.rnd(minDuration, maxDuration),
//         // duration: Number.prototype.rnd(1000, (i > 0 ? animalList[i - 1].duration : 3000)),
//         easingFunction: (() => {
//           let p1x = Number.prototype.rnd(0, bezierRandomFactor1, { digits: 3 });
//           let p1y = Number.prototype.rnd(0, bezierRandomFactor1, { digits: 3 });
//           let p2x = Number.prototype.rnd(bezierRandomFactor2, 1.0, {
//             digits: 3,
//           });
//           let p2y = Number.prototype.rnd(bezierRandomFactor2, 1.0, {
//             digits: 3,
//           });
//           return `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`;
//         })(),
//       };
//       // console.info(animalObj);
//       animalList.push(animalObj);
//     }
//     // //
//     let sortedList = animalList.sort((a, b) =>
//       a.duration < b.duration ? -1 : a.duration > b.duration ? 1 : 0,
//     );

//     sortedList.forEach((elem, idx) => {
//       animalList[elem.idx].rank = idx;
//     });
//     // animalList.shuffle().forEach((elem) => {
//     //     runAnimal(elem)
//     // })
//     animationObjList = [];
//     animalList.forEach((elem) => {
//       // console.info(elem.rank);
//       animationObjList.push(runAnimal(elem));
//     });
//   }

//   function runAnimal({ id, duration, easingFunction }) {
//     let animal = document.getElementById(id);
//     let keyframes = [
//       { left: 0 },
//       { left: `${containerWidth - animalWidth}px` }, // 400px(container) - 50px(animal)
//     ];

//     let options = {
//       duration: duration,
//       // easing: 'ease-in-out',
//       easing: easingFunction,
//       iterations: 1,
//       direction: 'alternate',
//       fill: 'forwards',
//     };

//     let animationObj = animal.animate(keyframes, options);
//     animationObj.onfinish = function (event) {
//       // console.info(event.target.effect.target);
//       event.target.effect.target.innerHTML = ++finishNumber;
//     };

//     // console.info(animationObj);
//     return animationObj;
//   }
//   function resetGame(event) {
//     // document.querySelectorAll('.animal').forEach(elem => elem.setAttribute("style", "left: 0px;"))
//     // // debugger
//     animationObjList.forEach((elem) => {
//       // console.info(elem);
//       // // debugger
//       elem.effect.target.textContent = '';
//       elem.cancel();
//     });
//   }
//   function finishGame(event) {
//     animationObjList.forEach((elem) => {
//       // console.info(elem);
//       elem.finish();
//     });
//   }
//   function pauseGame(event) {
//     animationObjList.forEach((elem) => {
//       elem.pause();
//     });
//   }

//   document.getElementById('startButton').addEventListener('click', startGame);
//   document.getElementById('resetButton').addEventListener('click', resetGame);
//   document.getElementById('finishButton').addEventListener('click', finishGame);
//   document.getElementById('pauseButton').addEventListener('click', pauseGame);
// })();
