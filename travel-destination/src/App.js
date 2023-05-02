import Home from "../src/components/home/Home";
// import Header from "../src/components/header/Header";
// import Footer from "../src/components/footer/Footer";
// import Tours from "../src/components/tours/Tours";
// import Tour from "../src/components/tours/tour/Tour";
import {Route,Routes} from 'react-router-dom'
import TourDetails from '../src/components/TourDetails/TourDetails'

function App() {
  return (
  <>

  
  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/city/:id" element={<TourDetails/>}/>

    </Routes>
    
  </>
    
  );
}

export default App;
