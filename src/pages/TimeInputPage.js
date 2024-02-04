import React, { useState } from 'react';
import CelebrationPage from './CelebrationPage';

const TimeInputPage = () => {
    const [time, setTime] = useState('');

    const handleTimeChange = (event) => {
        // Update the time state when the input value changes
        setTime(event.target.value);
    };
    const [showCelebration, setShowCelebration] = useState(false);

    const handleNext = () => {
      // Show the CelebrationPage when the next button is clicked
      setShowCelebration(true);
    };
  

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'lightyellow',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transform: 'translateX(-100%)',
                animation: 'fadeInSlideIn 1s forwards',
               
            }}
        >
            <h2 style={{  color: 'gray', fontSize: '2em' }}>
                Let me make it timeless for you!
            </h2>

            <h2 style={{  color: 'gray', fontSize: '1.5em' }}>
                Time to tick-tock your way into y(our) future!
            </h2>


            {/* Input field for time */}
            <input
                type="text"
                value={time}
                onChange={handleTimeChange}
                style={{
                    marginTop: '20px',
                    padding: '10px',
                    fontSize: '1.5em',
                    borderRadius: '10px',
                    textAlign: 'center',
                }}
                placeholder="When are we meeting?"
            />

            {/* Back button to return to the previous screen */}
            <button
                onClick={handleNext}
                style={{
                    backgroundColor: 'orange',
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
            {showCelebration && <CelebrationPage onDone={() => setShowCelebration(false)} />}
        </div>
    );
};

export default TimeInputPage;
