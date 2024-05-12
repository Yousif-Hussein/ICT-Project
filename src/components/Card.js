import React from "react";
import Swal from 'sweetalert2'
function Card({image, title, price, description, button}){
    const HandleOrder=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been submitted",
                icon: "success"
              });
            }
          });
    }
    return(
        <div className="card">
             <img className="c-image" src={image} width="100%" height="200" alt={title}/>
             <h2 className="c-title">{title}</h2>
             <h3 className="c-price">{price}</h3>
             <p className="c-des">{description}</p>
             <button className="c-button" onClick={HandleOrder}>{button}</button>
        </div>
    )

}
export default Card;