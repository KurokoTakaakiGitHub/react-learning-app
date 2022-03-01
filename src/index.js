import React from "react";
import ReactDom from "react-dom";

// App関数(コンポーネント)
const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか</p>
    </>
  );
};

// retrunの中はひとつのタグにする必要がある
// error回避　React.Fragment　や　<> </>

//ReactDom rootに App関数の結果を判定する
ReactDom.render(<App />, document.getElementById("root"));
