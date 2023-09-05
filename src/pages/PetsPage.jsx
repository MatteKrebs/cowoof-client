import { useState, useEffect } from "react";
import axios from "axios";
import PetList from "../components/PetList";
import AddPet from "../components/AddPet";



const PetsPage = () => {

    const [petsList, setPetsList] = useState([]); 

    useEffect(() => {
        axios.get("mongodb://localhost:27017")
        .then((response) => {
          console.log('response.data', response.data);
          setPetsList(response.data)
        })
        .catch(err => console.log(err))
    }, [] );

    return (
        <div>
            <h3>Pets List</h3>
            <AddPet />
            <PetList /> 
        </div>
       
    )
}

export default PetsPage;