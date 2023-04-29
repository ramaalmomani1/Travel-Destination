import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

import data from "../../data/ db.json"
// const data = require ("../../data/ db.json")




function home() {
    console.log(data)
    return (
        <>
            <Header />
            <Tours data={data} />
            <Footer />
        </>
    )
}
export default home;

