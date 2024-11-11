import Header from "../Components/Header"
import TrainingCSS from "/src/styles/Training.module.css"

function Training(){
    return(
        <>
        <Header/>
        <div className={TrainingCSS["Container"]}>
            <header className={TrainingCSS["Header"]}>
                <h1>Our Training</h1>
            </header>
            <div className={TrainingCSS["Services"]}>
                <div className={TrainingCSS["Skills"]}>
                    <div className={TrainingCSS["Text"]}>
                        <h1 className={TrainingCSS["Text-Heading"]}>Ball and Technique Training</h1>
                        <p className={TrainingCSS["Text-Paragraph"]}>we prioritize both ball mastery and technical proficiency. Through drills and games, players develop their touch, control, and passing skills. We emphasize proper technique, ensuring a solid foundation for future success.</p>
                    </div>
                    <div className= {`${TrainingCSS.Image} ${TrainingCSS.One}`}>
                    </div>
                </div>
                <div className={TrainingCSS["Skills"]}>
                <div className={TrainingCSS["Text"]}>
                    <h1 className={TrainingCSS["Text-Heading"]}>Footwork Training</h1>
                    <p className={TrainingCSS["Text-Paragraph"]}>Our academy's footwork training focuses on agility, speed, and balance. We utilize drills that improve reaction time, foot speed, and coordination. These skills are crucial for players to navigate the field with confidence and precision.</p>
                </div>
                <div className={`${TrainingCSS.Image} ${TrainingCSS.Two}`}>
                </div>
                </div>
                <div className={TrainingCSS["Skills"]}>
                <div className={TrainingCSS["Text"]}>
                    <h1 className={TrainingCSS["Text-Heading"]}>1 on 1 Training</h1>
                    <p className={TrainingCSS["Text-Paragraph"]}>Our 1-on-1 training provides personalized attention and tailored instruction. We focus on individual strengths and weaknesses, developing specific skills and strategies. This dedicated approach helps players reach their full potential.</p>
                </div>
                <div className={`${TrainingCSS.Image} ${TrainingCSS.Three}`}>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Training