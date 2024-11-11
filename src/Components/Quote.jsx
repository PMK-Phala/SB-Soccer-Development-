import  QuoteCSS from "/src/styles/Quote.module.css"

function Qoute (){
    return(
        <div className={QuoteCSS["Container"]}>
            <div className={QuoteCSS["Quote"]}>
                <h1 className={QuoteCSS["H1"]}>“All kids need is some encouragement, a glimmer of hope, and someone who has faith in them.”</h1>
                <p className={QuoteCSS["P"]}>-Sibusiso sibusiso, Founder of S.B Soccer Development</p>
                <img src="/Images/Face (1).png" alt="" className={QuoteCSS["Img"]}/>
            </div>
        </div>
    )
}
export default Qoute