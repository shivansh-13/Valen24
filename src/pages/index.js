import { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';
import DateInputPage from './DateInputPage'; // Import the new component


const ValentinePage = () => {
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [persuadeText, setPersuadeText] = useState('');
  const [persuadeCount, setPersuadeCount] = useState(0);
  const [showNoButton, setShowNoButton] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [showInputPage, setShowInputPage] = useState(false); // State for the new input page

  const [showLeftConfetti, setShowLeftConfetti] = useState(false);

  useEffect(() => {
    if (showThanks) {
      setTimeout(() => setShowLeftConfetti(true), 200);
    }
  }, [showThanks]);
  

  const persuadeTexts = [
    'Are you sure? ',
    'You might regret it!',
    'Really? Think again!',
    'Come on, don\'t be shy! Give it a shot!',
    'Imagine all the fun we could have!',
    'I promise it will be worth it!',
    'Don\'t let this opportunity slip away!',
    'Just say yes! What do you have to lose?',
    'You don\'t want to miss out on this, trust me!',
    'I have made this especially for you!',
    'Say yes and let the magic begin!',
    'You\'re breaking my heart!',
    'I would be sad. Say yes!',
    'Last chance! Say yes and make my day!',
    'You are leaving me no choice! Say yes!'
  ];
  const handleClick = (answer) => {
    if (answer === 'No') {
      setYesButtonSize((prevSize) => prevSize + 0.4);
      setPersuadeText(persuadeTexts[persuadeCount]);
      setPersuadeCount((prevCount) => prevCount + 1);
      if (persuadeCount === persuadeTexts.length) {
        setShowNoButton(false);
      }
    } else {
      setYesButtonSize(1); // Reset button size when the user clicks "Yes"
      setPersuadeText('');
      setShowNoButton(false);
      // Trigger the "Thanks" animation
      setTimeout(() => setShowThanks(true), 100);
    }
  };
  const handleNextPage = () => {
    // Show the input page when the user clicks the arrow button
    setShowInputPage(true);
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'black', fontSize: '2em' }}>
        Will you be my valentine?
      </h1>
      <img
        src="/panda.gif"
        alt="Cute Panda"
        width="200"
        height="200"
        style={{ display: 'block', margin: 'auto' }}
      />

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handleClick('Yes')}
          style={{
            fontSize: `${yesButtonSize}em`,
            backgroundColor: 'green',
            color: 'white',
            transition: 'font-size 0.5s',
            borderRadius: '10px',
          }}
        >
          Yes
        </button>
        {showNoButton && (
          <button
            onClick={() => handleClick('No')}
            style={{ backgroundColor: 'red', color: 'white', borderRadius: '10px', }}
          >
            {persuadeText || 'No'}
          </button>
        )}
      </div>

      {showThanks && (

        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'lavender',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            animation: 'fadeIn 2s forwards',
          }}
        ><Confetti
            active={showLeftConfetti}
            config={{
              angle: 90,
              spread: 360,
              startVelocity: 45,
              elementCount: 240, // Adjust element count as needed
              decay: 0.7,
            }}
          />
          <Confetti
            active={showLeftConfetti}
            config={{
              angle: 180,
              spread: 360,
              startVelocity: 40,
              elementCount: 140, // Adjust element count as needed
              decay: 0.9,
            }}
          />
          <h2 style={{ color: 'darkslategray', fontSize: '2em' }}>
            Thanks for being my valentine! Will be seeing you soon! 🥰
          </h2>
          <button
            onClick={handleNextPage}
            style={{
              backgroundColor: 'violet',
              color: 'white',
              borderRadius: '100%',
              paddingBottom: '30px',
              marginTop: '15px',
              paddingTop: '30px',
              paddingRight: '40px',
              paddingLeft: '40px',
              cursor: 'pointer',
              fontSize: '2em',
            }}
          >
            ➔
          </button>
        </div>
      )}
      {showInputPage && <DateInputPage />} {/* Render the new input page component */}

      <div style={{ marginTop: 'auto', position: 'absolute', bottom: '0', width: '100%' }}>
        <p style={{ color: 'grey', fontSize: '15px' }}>
          Made by <a href="https://github.com/shivansh-13" style={{ color: 'grey', textDecoration: 'underline' }}>Shivansh S</a> with love 💜
        </p>
      </div>

      <style jsx>{`
        img {
          margin-top: 10px;
        }
        button {
          margin: 10px;
          padding: 10px;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ValentinePage;
