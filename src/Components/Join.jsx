import JoinCSS from "/src/styles/Join.module.css"
import { Link } from "react-router-dom"

function Join(){
    return(
        <div className={JoinCSS["Main"]}>
            <div className={JoinCSS["Join"]}>
                <h1 className={`${JoinCSS.Text} ${JoinCSS.Heading}`}>Nurting Talent</h1>
                <p className={`${JoinCSS.Text} ${JoinCSS.Paragraph}`}>Our football academy nurtures talent through a holistic approach. We provide expert coaching, focusing on technical skills, tactical awareness, and physical conditioning. Our dedicated staff fosters a positive environment, encouraging teamwork, discipline, and sportsmanship. We offer individual attention, tailoring training plans to each player's strengths and weaknesses, helping them reach their full potential. </p>
                <Link to='/Contact'><button className={`${JoinCSS.Text} ${JoinCSS.Button}`}>Join Now </button></Link>
               
            </div>
        </div>
    )
}
export default Join