import React from "react";
import html2canvas from "html2canvas";
import { FiShare2 } from "react-icons/fi";
import Loader from "./Loader";

const PredictionComponent = ({ prediction }) => {
  const handleShare = async () => {
    try {
      const canvas = await html2canvas(document.body);
      const imageBlob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );

      if (navigator.share) {
        const file = new File([imageBlob], "screenshot.png", {
          type: "image/png",
        });

        try {
          await navigator.share({
            title: "Prediction Result",
            text: "Check out this prediction result!",
            files: [file],
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        alert(
          "Sharing is not supported in your browser. Please use a compatible mobile device."
        );
      }
    } catch (error) {
      console.error("Screenshot capture failed:", error);
    }
  };

  return (
    <div>
      {prediction ? (
        <div className="bg-layer bg-opacity-80 flex justify-between items-center w-[70vw] md:w-[50vw] lg:w-[40vw] h-[8vh] px-4 mt-4 rounded-lg relative">
          <h1 className="text-xl md:text-2xl font-psemibold">
            <span
              className={`font-pbold ${
                prediction === "REAL" ? "text-green-500" : "text-red-500"
              }`}
            >
              {prediction}
            </span>
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-secondary text-white flex items-center justify-center px-4 hover:bg-opacity-70"
            >
              <FiShare2 className="mr-1" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PredictionComponent;
