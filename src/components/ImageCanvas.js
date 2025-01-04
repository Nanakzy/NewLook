import React, { useEffect, useRef } from "react";

function ImageCanvas({ image, mode, background }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = URL.createObjectURL(image);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // Add enhancements here based on mode and background.
      };
    }
  }, [image, mode, background]);

  return <canvas ref={canvasRef}></canvas>;
}

export default ImageCanvas;
