import { Outlet, Link, useLocation } from "react-router-dom";
import Sections from "./Sections";

function Gener(){
    return(
        <>
            <Sections/>
            <Outlet/>
        </>
    )
}
export default Gener;