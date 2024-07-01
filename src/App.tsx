import './App.css'
import { Route, Routes} from "react-router-dom";
import CharacterGalleryPage from "./CharacterGalleryPage.tsx";
import WelcomePage from "./WelcomePage.tsx";
import Navigation from "./Navigation.tsx";
import {useEffect} from "react";


export default function App() {

    useEffect(() => {
        document.title = "My first React Routing"
    }, []);

    return (
        <>
            <header>
                <Navigation/>
            </header>
            <Routes>
                <Route path={"/characters"} element={<CharacterGalleryPage/>}/>
                <Route path={"/"} element={<WelcomePage/>}/>
            </Routes>


        </>
    );
}
