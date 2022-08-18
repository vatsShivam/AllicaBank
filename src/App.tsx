import { Routes, Route} from "react-router-dom";

import ListView  from "./ListView";
import  Details  from "./Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
