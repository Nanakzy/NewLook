import React from "react";

function Controls({ setImage, setMode, setBackground }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="controls">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div>
        <label>Color Mode:</label>
        <select onChange={(e) => setMode(e.target.value)}>
          <option>Original</option>
          <option>Vintage</option>
          <option>Black & White</option>
        </select>
      </div>
      <div>
        <label>Background:</label>
        <select onChange={(e) => setBackground(e.target.value)}>
          <option>None</option>
          <option>Blur</option>
          <option>White</option>
        </select>
      </div>
    </div>
  );
}

export default Controls;
