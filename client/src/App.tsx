import React, { Suspense } from "react";

import { Filter } from "./components/Filters/Filter";
import { Servers } from "./components/Servers/Servers";

function App() {
  return (
    <div className="App">
      <main>
        <Filter />
        <Suspense fallback={<div>Loading...</div>}>
          <Servers />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
