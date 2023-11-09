import React, { useState } from 'react';

interface HintButtonProps {
    hintText: string;
}

const HintButton: React.FC <HintButtonProps> = ({ hintText }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button onClick={handleClick} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center mr-2 mb-2">Hint</button>
      {isTextVisible && <span>{hintText}</span>}
    </div>
  );
};

export default HintButton;