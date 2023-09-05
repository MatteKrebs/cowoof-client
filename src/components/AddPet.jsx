import { useState } from "react";
//import { v4 as uuidv4 } from "uuidv4";
 
function AddPet(props) {

    const handleSubmit = (e) => {
        e.preventDefault();

        //const _id = uuidv4();

        const newPet = {
            petName,
            petAge,
            petAbout,
            petImage
        }

    }

    const [petName, setPetName] = useState("");
    const [petAge, setPetAge] = useState("");
    const [petAbout, setPetAbout] = useState(0);
    const [petImage, setPetImage] = useState("");
 
  return (
    <div className="AddMovie">
      <h4>Add a Woof</h4>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
            <input type="text" name="petName" value={petName} onChange={(e) => setPetName(e.target.value)}/>
            <br />
        <label>Age:</label>
            <input type="number" name="petAge" value={petAge} onChange={(e) => setPetAge(e.target.value)}/>
            <br />
        <label>Description:</label>
            <input type="text" name="petAbout" value={petAbout} onChange={(e) => setPetAbout(e.target.value)}/>
            <br />
        <label>Upload a photo:</label>
            <input type="file" name="petImage" value={petImage} onChange={(e) => setPetImage(e.target.value)}/>
      </form>
    </div>
  );
}
 
export default AddPet;