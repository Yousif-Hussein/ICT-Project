import { useState } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { LoginValidation } from "../schemas/LoginValidation";
import Swal from 'sweetalert2'
function Login(){
    const [validationMessage, setValidationMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const{values,errors,validateForm, handleChange,touched,getFieldProps, handleSubmit,}= useFormik({
        initialValues:{
            email:"",
            firstName:"",
            lastName:"",
            phoneNumber:""
        },
        validationSchema:LoginValidation,
    })
    console.log(errors)
    const handleClick = () => {
        validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, reserve it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Confirmed",
                        text: "Your reservation has been confirmed check your email",
                        icon: "success"
                      });
                    }
                  });
          }
          else{
             alert("Please fill all the blanks")
          }
        })
    }
    const location = useLocation();
    const { date, diners, occasion, times } = location.state || {};
    return(
        <div className="Login">
            <main className="login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="firstname-div">
                        <label htmlFor="firstname" className="firstname-label">First Name</label>
                        <input id="firstname" type="text" placeholder="First Name" {...getFieldProps("firstName")} onChange={handleChange} className={errors.firstName && touched.firstName? "input-error":""}/>
                        {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                    </div>
                    <div className="lastname-div">
                        <label htmlFor="lastname" className="lastname-label">Last Name</label>
                        <input id="lastname" type="text" placeholder="Last Name" {...getFieldProps("lastName")} onChange={handleChange} className={errors.lastName && touched.lastName? "input-error":""} />
                        {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                    <div className="email-div">
                        <label htmlFor="email" className="email-label">Email</label>
                        <input id="email" type="email" placeholder="email@.com"{...getFieldProps("email")} onChange={handleChange} className={errors.email && touched.email? "input-error":""} />
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="num-div">
                        <label htmlFor="num" className="num-label">Phone Number</label>
                        <input id="num" type="tel" placeholder="Phone Number" {...getFieldProps("phoneNumber")} onChange={handleChange} className={errors.phoneNumber && touched.phoneNumber? "input-error":""}/>
                        {errors.phoneNumber && touched.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </div>
                    <div className="comm-div">
                        <label htmlFor="comm" className="comm-label">Special request</label>
                        <input id="comm" type="text" placeholder="Comment"/>
                    </div>
                    <div className="props">
                        <div className="props-2">
                            <p id="date-prop">{date}</p>
                            <p id="diner-prop">{diners}</p>
                            <p id="occ-prop">{occasion}</p>
                            <p id="time-prop">{times}</p>
                            <div id="seating">
                                <p id="indoorseating">Indoor Seating</p>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
            <div className="res-photos">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/94/78/e7/caption.jpg?w=300&h=300&s=1" height="160" width="190" alt="open area"/>
                <img src="https://www.heraldtribune.com/gcdn/authoring/2019/06/26/NSHT/ghows-LK-8c18d1ea-2228-1fe7-e053-0100007f4e92-7ed4c5c4.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp" height="160" width="190" alt="chef"/>
                <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/restaurantFood.088c3dd386b046ca6ce7.jpg" height="160" width="190" alt="food"/>
                <img src="https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg" height="160" width="190" alt="foo"/>
                <div className="button-res">
                    <button onClick={handleClick} className="xr">Reserve a Table</button>
                </div>
            </div>
        </div>
    )
}
export default Login;