import React from "react";
import { StockViewer } from "../../components/StockViewer/StockViewer";
import { HistoricalViewer } from "../../components/HistoricalViewer/HistoricalViewer";

const App = () => {
  return (
    <main>
      <StockViewer />
      <HistoricalViewer />
    </main>
  );
};

export default App;
