import ContactCSS from "/src/styles/Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ContactInfo from "../Components/ContactInfo"
import JoinInfo from "../Components/JoinInfo"
import Header from "../Components/Header"

function Contact( ){

    return(
        <>
    <Header/>
        <div className={ContactCSS["Container"]} >
            {true ? <ContactInfo/> :<JoinInfo/>}

            <div className={ContactCSS["Contacts"]}>
                <div className={`${ContactCSS.Contact} ${ContactCSS.Telephone}`}>
                <a href="tel: +27685238098"> <FontAwesomeIcon icon={faPhone} className={ContactCSS["Icon"]}  style={{color:"black"}}/> </a>
                <h1 className={ContactCSS["faLabel"]}>Phone Number</h1>
                <p className={ContactCSS["P-Info"]}>For immediate assistance, call us on <a href="tel: +27685238098" className={ContactCSS["Number"]} style={{color:"#4b4b4b"}}> 068 523 8098 </a>
                </p>
                </div>

                <div className={`${ContactCSS.Contact} ${ContactCSS.Whatsapp}`}>
                      <a href="https://wa.me/0817126984?text=Hey,I would like to enquire about your soccer training program." style={{color:"black" }}> <FontAwesomeIcon icon={faWhatsapp} className={ContactCSS["Icon"]} style={{color:"black"}}/></a>
                      <h1 className={ContactCSS["faLabel"]}>Whatsapp</h1>
                      <p className={ContactCSS["P-Info"]}>Contact us on WhatsApp <a href="https://wa.me/0817126984?text=Hey,I would like to enquire about your soccer training program." className={ContactCSS["Number"]} style={{color:"#4b4b4b"}}>081 712 6984</a></p>
                      </div>

                <div className={`${ContactCSS.Contact} ${ContactCSS.Instagram}`}>  
                   <a href="https://www.instagram.com/s.b_soccer_development/" style={{color:"black"}} > <FontAwesomeIcon icon={faInstagram} className={ContactCSS["Icon"]} style={{color:"black"}}/> </a>
                    <h1 className={ContactCSS["faLabel"]}>Instagram</h1>
                    <p className={ContactCSS["P-Info"]}>Join our Community on Instagram <a href="https://www.instagram.com/s.b_soccer_development/" className={ContactCSS["Instagram-link"]} style={{color:"#4b4b4b"}}> @s.b_soccer_development </a></p>
                    </div>
            </div>
            <div className={ContactCSS["Gallery"]} >
            <div className={ContactCSS["Image"]}> <img src="/Images/1.jpeg" alt=""/></div>
            <div className={ContactCSS["Image"]}> <img src="/Images/3.jpeg" alt=""/></div>
            <div className={ContactCSS["Image"]}> <img src="/Images/2.jpeg" alt=""/></div>
            </div>
        </div>
        </>
    )
}
export default Contact