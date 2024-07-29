"use client"

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input"

function Input({ placeholders, handleChange, onSubmit }) {
  return (
    <div className="flex flex-col justify-center  items-center px-4">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

    </div>
  )
}

export default Input