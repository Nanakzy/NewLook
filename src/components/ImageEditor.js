import React, { useState } from "react";
import ImageCanvas from "./ImageCanvas";
import Controls from "./Controls";

function ImageEditor() {
  const [image, setImage] = useState(null);
  const [mode, setMode] = useState("Original");
  const [background, setBackground] = useState("None");

  return (
    <div>
      <ImageCanvas image={image} mode={mode} background={background} />
      <Controls
        setImage={setImage}
        setMode={setMode}
        setBackground={setBackground}
      />
    </div>
  );
}

export default ImageEditor;
