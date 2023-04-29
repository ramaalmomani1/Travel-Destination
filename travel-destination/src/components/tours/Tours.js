function Tours(props) {
    return (
        <>
            {
                props.data.map(item => {
                    return (
                        <section>
                            <div>{item.name}   <img src={item.image} alt={item.name} />  </div>

                           

                        </section>


                    )
                }
                )
            }
        </>
    )
}
export default Tours;