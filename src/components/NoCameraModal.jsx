import React, { useState } from "react";

const NoCameraModal = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = () => {
    closeModal(selectedOption);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">No problem!</h1>
        <p className="mb-4">Can you tell us what you plan to use to capture your space?</p>
        <form>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="I plan to hire someone to capture for me"
                checked={selectedOption === "I plan to hire someone to capture for me"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              I plan to hire someone to capture for me
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="I already have a camera"
                checked={selectedOption === "I already have a camera"}
                onChange={handleOptionChange}
                className="mr-2"
              />
              I already have a camera
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="I will use my smartphone to capture. Text me a link to download the CloudPano 360 Camera App, 'Virtual Tour Creator'."
                checked={selectedOption === "I will use my smartphone to capture. Text me a link to download the CloudPano 360 Camera App, 'Virtual Tour Creator'."}
                onChange={handleOptionChange}
                className="mr-2"
              />
              I will use my smartphone to capture. Text me a link to download the CloudPano 360 Camera App, "Virtual Tour Creator".
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => closeModal(null)}
              className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoCameraModal;
