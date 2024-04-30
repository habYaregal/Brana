import Footer from "../Footer";
import Header from "../Header";
import {Outlet} from "react-router-dom";

function Home(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Home;