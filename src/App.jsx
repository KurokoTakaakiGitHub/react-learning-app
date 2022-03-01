import React, { useEffect, useState } from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  // state 変数, 関数 (初期値)
  const [num, setNum] = useState(0);

  // faceShow
  const [faceShowFlag, changeFaceShowFlg] = useState(false);

  // カウントアップボタン クリックイベント
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 顔文字on/offボタン クリックイベント
  const onClickFaceOnOff = () => {
    changeFaceShowFlg(!faceShowFlag);
  };

  // effect numに変化があったときだけ動作
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || changeFaceShowFlg(true);
    } else {
      faceShowFlag && changeFaceShowFlg(false);
    }
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickFaceOnOff}>顔文字 on/off</button>
      <br />
      <p>{num}</p>
      <p>{faceShowFlag && "(^ ^)"}</p>
    </>
  );
};

// 他のファイルでも使用できるようにする指定
export default App;
