import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
  
const App = () => {
  return (
  <>
    <Header />
    <Cards />
    <Routes>
      <Route path="/" element={Cards}></Route>
      <Route path="/cart" element={CardDetails}></Route>
    </Routes>
  </>
  );
};

export default App;
