import AboutCss from "/src/styles/About.module.css"

function About(){

    return(
        <div className={AboutCss["Container"]}>
            <div className={AboutCss["About-One"]}>
            <h1 className={AboutCss["HOne"]} >About Us</h1>
            </div>
            <div className={AboutCss["Picture"]}>
                <img src="/Images/8.jpeg" alt="" className={AboutCss["Img"]} />
            </div>
            <div className={AboutCss["About"]}>
                <h1 className={AboutCss["H1"]} >About Us</h1>
                <p className={AboutCss["P"]}> We offer comprehensive training programs for players of all ages and skill levels, focusing on technical proficiency, tactical understanding, and physical fitness. Our experienced coaches are committed to fostering a positive learning environment where teamwork, sportsmanship, and discipline are paramount. We strive to create a space where every player feels valued, supported, and empowered to reach their full potential.</p> 
            </div>
        </div>
    )
}
export default About