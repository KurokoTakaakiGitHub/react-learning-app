import React from "react";

const App = () => {
  // ボタンクリックイベント
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <p style={contentStyle}>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも使用できるようにする指定
export default App;
