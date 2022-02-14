import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <React.Fragment>
      <div>{data}</div>;
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default App;
