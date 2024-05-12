
import { useNavigate} from "react-router-dom";
import {useFormik} from "formik"
import {ReservationValidation} from "../schemas/ReservationValidation";
import Login from "./Login";
function Reservation(){
    const navigate = useNavigate();
    const {values,errors,validateForm, handleChange,touched,getFieldProps, handleSubmit,}= useFormik({
        initialValues:{
            date:"",
            diners:"",
            occasion:"",
            times:"",
        },
        validationSchema:ReservationValidation,
    });
    console.log(errors)
    console.log(values)
    const handleClick = () => {
        validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            navigate('/login',{
                state:{
                    date: values.date,
                    diners: values.diners,
                    occasion: values.occasion,
                    times: values.times
                }
            })
          }
          else{
            alert(errors)
          }
        })
    }
    return(
        <div className="reservation">
            <main className="re">
                <h1 className="re-title">Reservations</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="radio">
                        <label className="ra" htmlFor="r-radio-1">
                            Indoor seating
                             <input type="radio" id="r-radio-1" name="radio" />
                        </label>
                        <label className="rd" htmlFor="rradio-2">
                            Outdoor seating
                            <input type="radio" id="rradio-2" name="radio" />
                        </label>
                    </div>
                    <div className="diners">
                        <label htmlFor="locations" className="no-diners"><p>Number of diners:</p></label>
                        <select id="locations" {...getFieldProps("diners")} onChange={handleChange} className={errors.diners && touched.diners? "input-error" : ""}>
                                <option value="" disabled selected>No. of Diners</option>
                                <option className="all-dates" value="1 Diner">1 Diner</option>
                                <option className="all-dates" value="2 Diner">2 Diners</option>
                                <option className="all-dates" value="3 Diner">3 Diners</option>
                                <option className="all-dates" value="4 Diner">4 Diners</option>
                                <option className="all-dates" value="5 Diner">5 Diners</option>
                                <option className="all-dates" value="6 Diner">6 Diners</option>
                                <option className="all-dates" value="7 Diner">7 Diners</option>
                                <option className="all-dates" value="8 Diner">8 Diners</option>
                                <option className="all-dates" value="9 Diner">9 Diners</option>
                                <option className="all-dates" value="10 Diner">10 Diners</option>
                        </select>
                        {errors.diners && touched.diners && <p className="error-2">{errors.diners}</p>}
                    </div>
                    <div className="Date">
                        <label htmlFor="date" className="da"><p>Date:</p></label>
                        <select id="date"  {...getFieldProps("date")} onChange={handleChange} className={errors.date && touched.date? "input-error" : ""}>
                                <option value="" disabled selected> Select Date</option>
                                <option className="all-dates" value="Today">Today</option>
                                <option className="all-dates" value="Tommorow">Tomorrow</option>
                                <option className="all-dates" value=" Day 2">2 days</option>
                                <option className="all-dates" value="Day 3">3 days</option>
                        </select>
                        {errors.date && touched.date && <p className="error">{errors.date}</p>}
                    </div>
                    <div className="occasions" >
                        <label className="no-occasion"><p>Occasion</p></label>
                        <select id="occas" {...getFieldProps("occasion")} onChange={handleChange} className={errors.occasion&& touched.occasion ? "input-error" : ""}>
                                <option value="" disabled selected>Occasion</option>
                                <option className="all-occ" value="Birthday">Birthday</option>
                                <option className="all-occ" value="Engagement">Engagement</option>
                                <option className="all-occ" value="Mariage">Mariage</option>
                        </select>
                        {errors.occasion && touched.occasion && <p className="error">{errors.occasion}</p>}
                    </div>
                    <div className="Times">
                        <label className="no-times"><p>Times</p></label>
                        <select id="select1"  {...getFieldProps("times")} onChange={handleChange} className={errors.times && touched.times ? "input-error" : ""}>
                                <option value="" disabled selected>Select Time</option>
                                <option className="all-times" value="5 pm">5:00 pm</option>
                                <option className="all-times" value="6 pm">6:00 pm</option>
                                <option className="all-times" value="7 pm">7:00 pm</option>
                                <option className="all-times" value="8 pm">8:00 pm</option>
                                <option className="all-times" value="9 pm">9:00 pm</option>
                                <option className="all-times" value="10 pm">10:00 pm</option>
                        </select>
                        {errors.times && touched.times && <p className="error-2">{errors.times}</p>}
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
export default Reservation;