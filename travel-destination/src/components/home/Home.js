import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
// import Tour from "../tours/tour/Tour";
// import {Route,Routes} from 'react-router-dom'
// import TourDetails from '../TourDetails/TourDetails'
// import Home from './Home.js'
// import data from "../../data/ db.json"
// const data = require ("../../data/ db.json")




function Home() {

    return (
        <>
            <Header />
            <Tours />
            <Footer />
        </>
    )
}
export default Home;

