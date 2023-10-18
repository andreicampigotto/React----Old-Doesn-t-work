import React from "react";

import First from "./components/basics/First";
import WithPrameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layout/Card";

export default (_) => (
  <div id="app">
    <Card/>
    <First />
    <WithPrameter title="Aqui vai o titulo " subtitle="Aqui vai o subtitulo" />
    <Fragment />
    <Aleatory min={0} max={99}/>
  </div>
);
