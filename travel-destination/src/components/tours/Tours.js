import Tour from "./tour/Tour";
import component from "../../data/ db.json"
import { Link } from "react-router-dom";

function Tours() {

    return (
        <>
        {
            component.map(item => {
                    return (
                        <Link to={`/city/${item.id} `}> 
                        
                        <Tour name={item.name} image={item.image} keys={item.id} />
                        
                        </Link>
      
           
                    )})
                    }
        </>
    )
}
export default Tours;

