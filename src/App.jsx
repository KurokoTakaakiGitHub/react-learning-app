import React from "react";
import ColorfulMessage from "./Components/ColorfulMessage";

const App = () => {
  // ボタンクリックイベント
  const onClickButton = () => alert();
  const contentladyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="bule" message="お元気ですか" />
      <p style={contentladyStyle}>元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも使用できるようにする指定
export default App;
