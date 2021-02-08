// http://www.theyt.net/wiki/%ED%95%9C%EC%98%81%ED%83%80%EB%B3%80%ED%99%98%EA%B8%B0

// 초성 가지 수 19개(14개)
// 중성 가지수 21개
// 종성 가지수 (공백 포함) 28개, (공백제외) 27개
// 종성 겹받침 11개

// 한글키 33개
const KOR_KEY =
  'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';
const ENG_KEY = 'rRseEfaqQtTdwWczxvgkoiOjpuPhynbml';
const TOP_DATA = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const MID_DATA = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const BOT_DATA = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';

export const convertK2E = (() => (target) => {
  // 한 글자가 가지는 최대 문자는 5개
  // 된소리: 후두 근육을 긴장하면서 기식이 거의 없이 내는 자음. 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ' 따위의 소리
  // 겹받침: 서로 다른 두 개의 자음으로 이루어진 받침. 'ㄳ', 'ㄵ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄾ', 'ㅄ' 따위
  // 쌍자음, 겹자음은 다른 의미

  let result = '';
  if (target.length === 0) return result;
  for (let i = 0; i < target.length; i++) {
    const ch = target.charAt(i);
    // 자음 / 모음 / 글자 / 한글 아닐때
    let inUnicode = ch.charCodeAt(0);
    let iTop = TOP_DATA.indexOf(ch);
    let iMid = MID_DATA.indexOf(ch);
    let iBot = BOT_DATA.indexOf(ch);
    const keyIdxArr = [-1, -1, -1, -1, -1]; // 한글 문자는 최대 5번의 타이핑으로 이루어짐

    if (0xac00 <= inUnicode && inUnicode <= 0xd7a3) {
      // 한글 유니코드 범위: '가(0xac00)에서부터 '힣(0xd7a3)'까지
      // keyIdxArr[2]는 이중모음인경우, keyIdxArr[4]는 겹받침인경우
      let idx = inUnicode - 0xac00; // 몇번째 한글인지
      keyIdxArr[0] = Math.floor(idx / (21 * 28)); // 초성
      keyIdxArr[1] = Math.floor(idx / 28) % 21; // 중성
      keyIdxArr[3] = (idx % 28) - 1; // 종성
    } else if (iTop !== -1) {
      keyIdxArr[0] = iTop; // 초성(자음)
    } else if (iMid !== -1) {
      keyIdxArr[1] = iMid; // 중성(모음)
    } else if (iBot !== -1) {
      keyIdxArr[3] = iBot; // 종성(자음)
    } else {
      result += ch; // 한글이 아님
    }

    // 초성
    if (keyIdxArr[0] !== -1) {
      // do nothing
    }

    // 중성
    if (keyIdxArr[1] !== -1) {
      if (keyIdxArr[1] === 9) {
        // ㅘ
        keyIdxArr[1] = 27;
        keyIdxArr[2] = 19;
      } else if (keyIdxArr[1] === 10) {
        // ㅙ
        keyIdxArr[1] = 27;
        keyIdxArr[2] = 20;
      } else if (keyIdxArr[1] === 11) {
        // ㅚ
        keyIdxArr[1] = 27;
        keyIdxArr[2] = 32;
      } else if (keyIdxArr[1] === 14) {
        // ㅝ
        keyIdxArr[1] = 29;
        keyIdxArr[2] = 23;
      } else if (keyIdxArr[1] === 15) {
        // ㅞ
        keyIdxArr[1] = 29;
        keyIdxArr[2] = 24;
      } else if (keyIdxArr[1] === 16) {
        // ㅟ
        keyIdxArr[1] = 29;
        keyIdxArr[2] = 32;
      } else if (keyIdxArr[1] === 19) {
        // ㅢ
        keyIdxArr[1] = 31;
        keyIdxArr[2] = 32;
      } else {
        keyIdxArr[1] = KOR_KEY.indexOf(MID_DATA.charAt(keyIdxArr[1]));
        keyIdxArr[2] = -1;
      }
    }

    // 종성
    if (keyIdxArr[3] !== -1) {
      if (keyIdxArr[3] === 2) {
        // ㄳ
        keyIdxArr[3] = 0;
        keyIdxArr[4] = 9;
      } else if (keyIdxArr[3] === 4) {
        // ㄵ
        keyIdxArr[3] = 2;
        keyIdxArr[4] = 12;
      } else if (keyIdxArr[3] === 5) {
        // ㄶ
        keyIdxArr[3] = 2;
        keyIdxArr[4] = 18;
      } else if (keyIdxArr[3] === 8) {
        // ㄺ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 0;
      } else if (keyIdxArr[3] === 9) {
        // ㄻ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 6;
      } else if (keyIdxArr[3] === 10) {
        // ㄼ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 7;
      } else if (keyIdxArr[3] === 11) {
        // ㄽ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 9;
      } else if (keyIdxArr[3] === 12) {
        // ㄾ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 16;
      } else if (keyIdxArr[3] === 13) {
        // ㄿ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 17;
      } else if (keyIdxArr[3] === 14) {
        // ㅀ
        keyIdxArr[3] = 5;
        keyIdxArr[4] = 18;
      } else if (keyIdxArr[3] === 17) {
        // ㅄ
        keyIdxArr[3] = 7;
        keyIdxArr[4] = 9;
      } else {
        keyIdxArr[3] = KOR_KEY.indexOf(BOT_DATA.charAt(keyIdxArr[3]));
        keyIdxArr[4] = -1;
      }
    }

    // 알파벳으로 변환
    keyIdxArr.forEach((elem) => {
      if (elem > -1) result += ENG_KEY.charAt(elem);
    });
  }

  return result;
})();

const makeHangul = (t, m1, m2, b1, b2) => {
  const DEFAULT_VALUE = '';
  // // t,m1,m2,b1,b2는 KOR_KEY의 인덱스
  // // unicode*는 unicode 의 인덱스
  if (t < 0 || m1 < 0) {
    return DEFAULT_VALUE;
  }
  const unicodeTopIdx = t;
  let unicodeMidIdx;
  let unicodeBotIdx;

  if (m2 === -1) {
    unicodeMidIdx = MID_DATA.indexOf(KOR_KEY[m1]);
  } else if (m1 === 27 && m2 === 19) {
    unicodeMidIdx = 9; // ㅘ 27 19
  } else if (m1 === 27 && m2 === 20) {
    unicodeMidIdx = 10; // ㅙ 27 20
  } else if (m1 === 27 && m2 === 32) {
    unicodeMidIdx = 11; // ㅚ 27 32
  } else if (m1 === 29 && m2 === 23) {
    unicodeMidIdx = 14; // ㅝ 29 23
  } else if (m1 === 29 && m2 === 24) {
    unicodeMidIdx = 15; // ㅞ 29 24
  } else if (m1 === 29 && m2 === 32) {
    unicodeMidIdx = 16; // ㅟ 29 32
  } else if (m1 === 31 && m2 === 32) {
    unicodeMidIdx = 19; // ㅢ 31 32
  } else {
    return DEFAULT_VALUE;
  }

  if (b2 === -1) {
    unicodeBotIdx = BOT_DATA.indexOf(KOR_KEY[b1]);
  } else if (b1 === 0 && b2 === 9) {
    unicodeBotIdx = 2; // ㄳ 0 9
  } else if (b1 === 2 && b2 === 12) {
    unicodeBotIdx = 4; // ㄵ 2 12
  } else if (b1 === 2 && b2 === 18) {
    unicodeBotIdx = 5; // ㄶ 2 18
  } else if (b1 === 5 && b2 === 0) {
    unicodeBotIdx = 8; // ㄺ 5 0
  } else if (b1 === 5 && b2 === 6) {
    unicodeBotIdx = 9; // ㄻ 5 6
  } else if (b1 === 5 && b2 === 7) {
    unicodeBotIdx = 10; // ㄼ 5 7
  } else if (b1 === 5 && b2 === 9) {
    unicodeBotIdx = 11; // ㄽ 5 9
  } else if (b1 === 5 && b2 === 16) {
    unicodeBotIdx = 12; // ㄾ 5 16
  } else if (b1 === 5 && b2 === 17) {
    unicodeBotIdx = 13; // ㄿ 5 17
  } else if (b1 === 5 && b2 === 18) {
    unicodeBotIdx = 14; // ㅀ 5 18
  } else if (b1 === 7 && b2 === 9) {
    unicodeBotIdx = 17; // ㅄ 7 9
  } else {
    return DEFAULT_VALUE;
  }

  // 한글 유니코드 구성 공식
  // https://www.key-shortcut.com/en/writing-systems/%ED%95%9C%EA%B5%AD-korean-script/hangul-characters-2

  return String.fromCharCode(
    0xac00 + unicodeTopIdx * 21 * 28 + unicodeMidIdx * 28 + unicodeBotIdx + 1
  );
};

// 두 모음이 서로 합성이 가능한지 판단해주는 함수
const areSynthesizableVowels = (syl1, syl2) => {
  const possibleCombinations = [
    [27, 19], // ㅘ
    [27, 20], // ㅙ
    [27, 32], // ㅚ
    [29, 23], // ㅝ
    [29, 24], // ㅞ
    [29, 32], // ㅟ
    [31, 32], // ㅢ
  ];
  return possibleCombinations.some(
    (elem) => elem[0] === syl1 && elem[1] === syl2
  );
};

// 두 자음이 서로 합성이 가능한지 판단해주는 함수
const areSynthesizableConsonants = (syl1, syl2) => {
  const possibleCombinations = [
    [0, 9], // ㄳ
    [2, 12], // ㄵ
    [2, 18], // ㄶ
    [5, 0], // ㄺ
    [5, 6], // ㄻ
    [5, 7], // ㄼ
    [5, 9], // ㄽ
    [5, 16], // ㄾ
    [5, 17], // ㄿ
    [5, 18], // ㅀ
    [7, 9], // ㅄ
  ];
  return possibleCombinations.some(
    (elem) => elem[0] === syl1 && elem[1] === syl2
  );
};

export const convertE2K = (target) => {
  const AllowShiftMistake = true;
  const AllowEngKorMixed = false;
  let result = '';
  if (!(target && target.length > 0)) return result;
  let flush = [-1, -1, -1, -1, -1];
  let [t, m1, m2, b1, b2] = flush;
  let tmp, idx, raw, charCode;

  if (AllowEngKorMixed) {
    // target = [...target].map((elem) => {
    //   elem.charCodeAt()
    //   return 'a';
    // });
  }

  for (let i = 0; i < target.length; i++) {
    raw = target[i]; // english alphabet
    charCode = raw.charCodeAt();
    if (
      !(
        (65 <= charCode && charCode <= 90) ||
        (97 <= charCode && charCode <= 122)
      )
    ) {
      // A-Z, a-z 아닌 경우
      idx = -1;
    } else {
      idx = ENG_KEY.indexOf(raw);
      // 쌍자음 없는데 쉬프트 누른 경우
      if (idx < 0 && ENG_KEY.indexOf(raw.toLowerCase()) > -1) {
        if (AllowShiftMistake) {
          idx = ENG_KEY.indexOf(raw.toLowerCase());
        }
      }
    }

    if (0 <= idx && idx <= 18) {
      // ******************************
      // 자음인경우
      // ******************************
      // console.info(KOR_KEY[idx]);

      if (b2 > -1) {
        result += makeHangul(t, m1, m2, b1, b2);
        [t, m1, m2, b1, b2] = flush;
        t = idx;
      } else if (b1 > -1) {
        // 자음+자음 조합 확인
        if (areSynthesizableConsonants(b1, idx)) {
          b2 = idx;
        } else {
          result += makeHangul(t, m1, m2, b1, b2);
          [t, m1, m2, b1, b2] = flush;
          t = idx;
        }
      } else if (m2 > -1) {
        b1 = idx;
      } else if (m1 > -1) {
        b1 = idx;
      } else if (t > -1) {
        // 자음뒤 자음
        result += KOR_KEY[t];
        // result += KOR_KEY[idx];
        [t, m1, m2, b1, b2] = flush;
        t = idx;
      } else {
        // 플러시 필요없음
        t = idx;
      }
    } else if (19 <= idx && idx <= 32) {
      // ******************************
      // 모음인경우
      // ******************************

      // console.info(KOR_KEY[idx]);
      if (b2 > -1) {
        tmp = b2;
        b2 = -1;
        result += makeHangul(t, m1, m2, b1, b2);
        [t, m1, m2, b1, b2] = flush;
        t = tmp;
        m1 = idx;
      } else if (b1 > -1) {
        tmp = b1;
        b1 = -1;
        result += makeHangul(t, m1, m2, b1, b2);
        [t, m1, m2, b1, b2] = flush;
        t = tmp;
        m1 = idx;
      } else if (m2 > -1) {
        result += makeHangul(t, m1, m2, b1, b2);
        [t, m1, m2, b1, b2] = flush;
        result += KOR_KEY[idx];
      } else if (m1 > -1) {
        // 모음+모음 조합이 되는가?
        if (areSynthesizableVowels(m1, idx)) {
          //
          m2 = idx;
        } else {
          result += makeHangul(t, m1, m2, b1, b2);
          [t, m1, m2, b1, b2] = flush;
          result += KOR_KEY[idx];
        }
      } else if (t > -1) {
        m1 = idx;
      } else {
        result += KOR_KEY[idx];
        // 뒤에 모음이 올수도 있어서 플러시 금지
      }
    } else {
      // ******************************
      // 한글이 아닌경우
      // ******************************

      // 남은 한글 처리
      if (m1 > -1) {
        result += makeHangul(t, m1, m2, b1, b2);
        [t, m1, m2, b1, b2] = flush;
      } else if (t > -1) {
        result += KOR_KEY[t];
        // 이미 문자가 아닌게 왔으므로 플러시 필수
        [t, m1, m2, b1, b2] = flush;
      }
      // 문자 그대로 추가
      result += raw;
    }
  }

  // 남은 스택 처리
  if (m1 > -1) {
    result += makeHangul(t, m1, m2, b1, b2);
  } else if (t > -1) {
    result += KOR_KEY[t];
  }

  return result;
};

// 'ㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄ';
// 'ㅘㅙㅚㅝㅞㅟㅢ';

// 0 ㄱ
// 1 ㄲ
// 2 ㄳ
// 3 ㄴ
// 4 ㄵ
// 5 ㄶ
// 6 ㄷ
// 7 ㄹ
// 8 ㄺ
// 9 ㄻ
// 10 ㄼ
// 11 ㄽ
// 12 ㄾ
// 13 ㄿ
// 14 ㅀ
// 15 ㅁ
// 16 ㅂ
// 17 ㅄ
// 18 ㅅ
// 19 ㅆ
// 20 ㅇ
// 21 ㅈ
// 22 ㅊ
// 23 ㅋ
// 24 ㅌ
// 25 ㅍ
// 26 ㅎ

// ㄱ 0
// ㄴ 2
// ㄷ 3
// ㄹ 5
// ㅁ 6
// ㅂ 7
// ㅅ 9
// ㅈ 12
// ㅊ 14
// ㅋ 15
// ㅌ 16
// ㅍ 17
// ㅎ 18

// 19 ㅏ
// 20 ㅐ
// 21 ㅑ
// 22 ㅒ
// 23 ㅓ
// 24 ㅔ
// 25 ㅕ
// 26 ㅖ
// 27 ㅗ
// 28 ㅛ
// 29 ㅜ
// 30 ㅠ
// 31 ㅡ
// 32 ㅣ

// 'ㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄ';
// ㄱ 0
// ㄴ 2
// ㄷ 3
// ㄹ 5
// ㅁ 6
// ㅂ 7
// ㅅ 9
// ㅈ 12
// ㅊ 14
// ㅋ 15
// ㅌ 16
// ㅍ 17
// ㅎ 18

// 19ㅏ
// 20ㅐ
// 21ㅑ
// 22ㅒ
// 23ㅓ
// 24ㅔ
// 25ㅕ
// 26ㅖ
// 27ㅗ
// 28ㅛ
// 29ㅜ
// 30ㅠ
// 31ㅡ
// 32ㅣ

// unicodeMidIdx = 0; // ㅏ
// unicodeMidIdx = 1; // ㅐ
// unicodeMidIdx = 2; // ㅑ
// unicodeMidIdx = 3; // ㅒ
// unicodeMidIdx = 4; // ㅓ
// unicodeMidIdx = 5; // ㅔ
// unicodeMidIdx = 6; // ㅕ
// unicodeMidIdx = 7; // ㅖ
// unicodeMidIdx = 8; // ㅗ
// unicodeMidIdx = 9; // ㅘ 27 19
// unicodeMidIdx = 10; // ㅙ 27 20
// unicodeMidIdx = 11; // ㅚ 27 32
// unicodeMidIdx = 12; // ㅛ
// unicodeMidIdx = 13; // ㅜ
// unicodeMidIdx = 14; // ㅝ 29 23
// unicodeMidIdx = 15; // ㅞ 29 24
// unicodeMidIdx = 16; // ㅟ 29 32
// unicodeMidIdx = 17; // ㅠ
// unicodeMidIdx = 18; // ㅡ
// unicodeMidIdx = 19; // ㅢ 31 32
// unicodeMidIdx = 20; // ㅣ

// 'ㄳㄵㄶㄺㄻㄼㄽㄾㄿㅀㅄ';
// 'ㅘㅙㅚㅝㅞㅟㅢ';

// unicodeBotIdx = 0; // ㄱ
// unicodeBotIdx = 1; // ㄲ
// unicodeBotIdx = 2; // ㄳ 0 9
// unicodeBotIdx = 3; // ㄴ
// unicodeBotIdx = 4; // ㄵ 2 12
// unicodeBotIdx = 5; // ㄶ 2 18
// unicodeBotIdx = 6; // ㄷ
// unicodeBotIdx = 7; // ㄹ
// unicodeBotIdx = 8; // ㄺ 5 0
// unicodeBotIdx = 9; // ㄻ 5 6
// unicodeBotIdx = 10; // ㄼ 5 7
// unicodeBotIdx = 11; // ㄽ 5 9
// unicodeBotIdx = 12; // ㄾ 5 16
// unicodeBotIdx = 13; // ㄿ 5 17
// unicodeBotIdx = 14; // ㅀ 5 18
// unicodeBotIdx = 15; // ㅁ
// unicodeBotIdx = 16; // ㅂ
// unicodeBotIdx = 17; // ㅄ 7 9
// unicodeBotIdx = 18; // ㅅ
// unicodeBotIdx = 19; // ㅆ
// unicodeBotIdx = 20; // ㅇ
// unicodeBotIdx = 21; // ㅈ
// unicodeBotIdx = 22; // ㅊ
// unicodeBotIdx = 23; // ㅋ
// unicodeBotIdx = 24; // ㅌ
// unicodeBotIdx = 25; // ㅍ
// unicodeBotIdx = 26; // ㅎ
