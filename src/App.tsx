import './App.css'
import { Route, Routes} from "react-router-dom";
import CharacterGalleryPage from "./CharacterGalleryPage.tsx";
import WelcomePage from "./WelcomePage.tsx";
import Navigation from "./Navigation.tsx";
import {useEffect, useState} from "react";
import AddNewCharacter from "./components/AddNewCharacter.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {characters as chars} from "./Characters.ts";


export default function App() {

    useEffect(() => {
        document.title = "My first React Routing"
    }, []);

    const [characters, setCharacters] = useState<Character[]>(chars)

    const handleAddCharacter = (name: string, species: string, status: string) => {
        setCharacters([...characters, {
            name,
            id: 0,
            status,
            species,
            type: '',
            gender: '',
            origin: {
                name: '',
                url: ''
            },
            location: {
                name: '',
                url: ''
            },
            image: '',
            episode: [],
            url: '',
            created: ''
        }]);
    }


        return (
            <>
                <header>
                    <Navigation/>
                </header>
                <Routes>
                    <Route path={"/characters"} element={<CharacterGalleryPage characters={characters}/>}/>
                    <Route path={"/"} element={<WelcomePage/>}/>
                    <Route path={"/newcharacter"} element={<AddNewCharacter addChar={handleAddCharacter}/>}/>
                </Routes>
            </>
        );
    }

