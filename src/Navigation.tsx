import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <>
            <div>
                <Link to={"/"}> WelcomePage </Link>
                <Link to={"/characters"}> Characters </Link>
            </div>
        </>
    )
}