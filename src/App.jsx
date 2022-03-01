import React from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  // ボタンクリックイベント
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="元気です" />
      <ColorfulMessage color="green">タグで渡す</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも使用できるようにする指定
export default App;
