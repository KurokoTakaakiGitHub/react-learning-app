import React from "react";
import ReactDom from "react-dom";

import App from "./App";

// retrunの中はひとつのタグにする必要がある
// error回避　React.Fragment　や　<> </>

//ReactDom rootに App関数の結果を判定する
ReactDom.render(<App />, document.getElementById("root"));
