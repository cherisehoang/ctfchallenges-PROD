import React, { useState } from 'react';

interface SubmitButtonProps {
    answerCorrectness: boolean;
    onClick: () => void
  }

const SubmitButton: React.FC <SubmitButtonProps> = ({ onClick, answerCorrectness }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsTextVisible(true);
    if (answerCorrectness === true) {
      setMessage('You are correct! Well done.');
    } else {
      setMessage('You are incorrect. Try again!');
    }
  };

  return (
    <div>
      <button onClick={handleClick} type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
      {isTextVisible && <span>{message}</span>}
    </div>
  );
};

export default SubmitButton;
