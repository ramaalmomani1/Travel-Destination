import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from '../../data/ db.json'

export default function TourDetails() {
    const [showMore, setShowMore] = useState(false);
    let { id } = useParams();
    let dataFilter= data.filter(dis=> dis.id=== id)
    return (
        <>
        <Header/>

       <div className="TourDetails">
            <h2 className="name">{dataFilter[0].name}</h2>
            <img className="image" src={dataFilter[0].image} alt="img"/>
      <h4 className='information'>
        {showMore ? dataFilter[0].info : `${dataFilter[0].info.substring(0, 250)}`}
        <br/>
        <button className="button" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
        
        </button>
        </h4>
            <h3 className="price">Trip price= {dataFilter[0].price}$</h3>
        </div>

        <Footer/>
      </>
    )
  }