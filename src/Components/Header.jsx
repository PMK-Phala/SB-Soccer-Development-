import HeaderCSS  from "/src/styles/Header.module.css"
import { Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Header(){

    const [display, setDisplay] = useState(true)

    const onDisplay=()=>{
        setDisplay(!display)
    }

    return(
        <>
        <header className={HeaderCSS["Container"]}>
        <Link to='/' className={HeaderCSS["Logo"]}>
            <img src="/public/Images/Logo.png" alt="" className={HeaderCSS["Logo-Img"]}/>
            <div className={HeaderCSS["Brand"]}>
                <h1 className={`${HeaderCSS.Text} ${HeaderCSS.Sb}`}>S.B</h1>
                <h1 className={`${HeaderCSS.Text} ${HeaderCSS.Soccer}`}>Soccer</h1>
                <h1 className={`${HeaderCSS.Text} ${HeaderCSS.Development}`}>Development</h1>
            </div>
        </Link>

        {display? <div className={HeaderCSS["LittleNav"]}>
        <FontAwesomeIcon icon={faBars} className={HeaderCSS["BurgerBar"]} onClick={onDisplay}/>
        </div>: "" }

        <div className={HeaderCSS["Nav"]}>
            <Link to='/' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Home}` }> Home</h1></Link>
            <Link to='/Training' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Training}`}>Our Training</h1></Link>
            <Link to='/Contact' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Contact}`} >Contact Us</h1></Link>
            <Link to='/Join' className={HeaderCSS["Option"]}><button className={`${HeaderCSS.Content} ${HeaderCSS.Academy}`} > Join The Academy </button></Link>
        </div>

        {display? "" : <div className={HeaderCSS["ShortNav"]}>
         <div className={HeaderCSS["Close"]}>
            <FontAwesomeIcon icon={faX} className={HeaderCSS["X"]} onClick={onDisplay}/>
            </div> 
        <Link to='/' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Home}` }> Home</h1></Link>
            <Link to='/Training' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Training}`}>Our Training</h1></Link>
            <Link to='/Contact' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Contact}`} >Contact Us</h1></Link>
            <Link to='/Join' className={HeaderCSS["Option"]}><button className={`${HeaderCSS.Content} ${HeaderCSS.Academy}`}> Join The Academy </button></Link>
        </div> }
        </header>

        </>
    )
}
export default Header