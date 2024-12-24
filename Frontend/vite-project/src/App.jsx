import Messagebox from "./component/Messagebox";
import { Routes, Route } from "react-router-dom";
import List from "./component/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Messagebox />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
