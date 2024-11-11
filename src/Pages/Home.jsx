import About from "../Components/About"
import Header from "../Components/Header"
import Join from "../Components/Join"
import Qoute from "../Components/Quote"
function Home({display, setDisplay}){
    return(<>
    <Header/>
        <Join/>
        <Qoute/>
        <About display={display} setDisplay={setDisplay}/>
        </>
    )
}
export default Home