
function Tour(props) {

    return (
        <>
            
        
                            <div className="Tour">

                               <p className="contName"> {props.name}</p>
                                <img className="contImg" src={props.image} alt={props.name} />
                                <hr className="ff"></hr>
                            </div>
                           
               
            
        </>
    )
}
export default Tour;