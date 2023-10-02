import React, { useEffect, useState } from "react";
import { editPet, createPet, getPet } from "../services/pet.services";
import { useNavigate, useParams } from "react-router-dom";

function EditOrCreatePet() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petAbout, setPetAbout] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [petId] = useState(id);

  useEffect(() => {
    async function fetchPet() {
      try {
        const editablePet = await getPet(petId);
        setPetName(editablePet.petName);
        setPetAge(editablePet.petAge);
        setPetAbout(editablePet.petAbout);
        setPetImage(editablePet.petImage);
      } catch (error) {
        console.error("Error fetching pet:", error);
      }
    }

    if (petId) {
      fetchPet();
    }
  }, [petId]);

  const handleSubmitCreate = async (e) => {
    e.preventDefault();

    const newPet = {
      petName,
      petAge,
      petAbout,
      petImage,
    };

    try {
      const response = await createPet(newPet);
      console.log("Pet created successfully:", response.data);
      navigate('/profile')
    } catch (error) {
      console.error("Error creating pet:", error);
    }

    console.log("New Pet Data:", newPet);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const updatedPet = {
      petName,
      petAge,
      petAbout,
      petImage,
    };

    try {
      const response = await editPet(petId, updatedPet);
      console.log("Pet updated successfully:", response.data);
      navigate('/profile');
    } catch (error) {
      console.error("Error updating pet:", error);
    }

    console.log("Updated Pet Data:", updatedPet);
  }

  return (
    <div className="w-full max-w-md mx-auto bg-green-100 rounded-lg p-6">
      <h4 className="text-xl text-center font-semibold mb-4">{!petId ? "Add a Woof" : "Edit your Woof"}</h4>

      <form onSubmit={!petId ? handleSubmitCreate : handleSubmitEdit}>
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
            onChange={(e) => setPetImage(e.target.files[0])}
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

export default EditOrCreatePet;