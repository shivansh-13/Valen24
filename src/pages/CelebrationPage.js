import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

const CelebrationPage = ({ onDone }) => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        // Trigger the confetti animation after a delay
        const timeoutId = setTimeout(() => {
            setShowConfetti(true);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                animation: 'fadeIn 1s forwards',
                overflow: 'hidden', // Hide overflow to prevent scrolling
            }}
        >
            {/* Confetti animation */}
            

            {/* Morphing "&" letter */}
            <div
                style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '5em',
                    fontWeight: 'bold',
                    color: 'black',
                    transform: 'scale(1.5)',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1, // Place it above the panes
                }}
            ><Confetti
                active={showConfetti}
                config={{
                    angle: 90,
                    spread: 360,
                    startVelocity: 65,
                    elementCount: 340,
                    decay: 0.7,
                }}
            />
                &
            </div>

<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    background: 'red',
    transform: 'translateY(100%)',
    animation: 'slideInFromBottom 1s forwards',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    paddingRight: '35px',
  }}
>
  <span style={{ color: 'white', textAlign: 'center',fontSize: '5em', fontWeight: 'bold', }}>You</span>
</div>

.
<div
  style={{
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '100%',
    background: 'white',
    transform: 'translateY(-100%)',
    animation: 'slideInFromTop 1s forwards',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'begin',
    paddingLeft: '35px',
  }}
>
  <span style={{ color: 'red', textAlign: 'center',fontSize: '5em', fontWeight: 'bold', }}>Me</span>
</div>

            {/* Display text */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '100%',
                    textAlign: 'center',
                    zIndex: 2, // Place it above the panes
                }}
            >
            </div>

            {/* CSS animations */}
            <style jsx>{`
        @keyframes slideInFromTop {
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          to {
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default CelebrationPage;
