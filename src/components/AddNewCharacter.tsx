import {FormEvent, useState} from "react";

type AddNewCharacterprops = {
    addChar:(name:string,species:string,status:string)=> void
}

export default function AddNewCharacter(props:Readonly<AddNewCharacterprops>){

    const [name, setName] = useState<string>("")
    const [species, setSpecies] = useState<string>("")
    const [status, setStatus] = useState<string>("alive")

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        alert("A Character was submitted: "+name);
        props.addChar(name,species,status)
        console.log(name,species,status)
        setName("");
        setSpecies("");
        setStatus("alive");
        }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type={"text"} placeholder={"Enter Firstname"}
                           value={name} onChange={(e) => setName((e.target.value))}/>
                </label>
                <label>
                    Species:
                    <input type={"text"} placeholder={"Enter Species"}
                           value={species} onChange={(e) => setSpecies((e.target.value))}/>
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus((e.target.value))}>
                    <option value={"alive"}>Alive</option>
                    <option value={"dead"}>Dead</option>
                    <option value={"unknown"}>Unknown</option>
                        </select>
                </label>
                <button>Submit</button>

            </form>
        </>
    )
}