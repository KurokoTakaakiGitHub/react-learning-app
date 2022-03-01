import React, { useState } from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  // ボタンクリックイベント
  const onClickCountUpCountUp = () => {
    setNum(num + 1);
  };
  // state 変数, 関数 (初期値)
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUpCountUp}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};

// 他のファイルでも使用できるようにする指定
export default App;
