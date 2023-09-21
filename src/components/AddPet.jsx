import React, { useState } from "react";
import { axiosInstance } from "../utilities/api";

function AddPet(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPet = {
      petName,
      petAge,
      petAbout,
      petImage,
    };

    axiosInstance.post("/pets", newPet)
      .then((response) => {
        console.log("Pet added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });

    console.log("New Pet Data:", newPet);
  };

  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petAbout, setPetAbout] = useState("");
  const [petImage, setPetImage] = useState("");

  return (
    <div className="w-full max-w-md mx-auto bg-green-100 rounded-lg p-6">
      <h4 className="text-xl text-center font-semibold mb-4">Add a Woof</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Age:</label>
          <input
            type="number"
            name="petAge"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description:</label>
          <input
            type="text"
            name="petAbout"
            value={petAbout}
            onChange={(e) => setPetAbout(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Upload a photo:</label>
          <input
            type="file"
            name="petImage"
            // value={petImage} // You don't need value for file input
            onChange={(e) => setPetImage(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPet;