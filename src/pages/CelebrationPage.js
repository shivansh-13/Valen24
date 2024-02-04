import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

const WhiteScreen = () => (
    <div
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3, // Place it above the panes
            animation: 'swipeInFromRight 2s forwards',

        }}
    >
        <div>
            <p className="fade-in-text" style={{ fontSize: '3em', margin: 0, color: 'black', fontWeight: 'bolder' }}>
                On 14 February
            </p>
            <p className="fade-in-text" style={{ fontSize: '3em', margin: 0, color: 'black', fontWeight: 'bolder' }}>
                5:00 pm
            </p>
            <p className="fade-in-text" style={{ fontSize: '3em', margin: 0, color: 'black', fontWeight: 'bolder' }}>
                at Hard Rock Cafe
            </p>
            <div className="fade-in-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src="/heart.gif"  // Replace with the actual path to your heart gif
                    alt="Heart"
                    width="100"
                    height="100"
                    style={{ margin: '20px', opacity: 0, animation: 'fadeIn 1s forwards' }}
                />
            </div>
        </div>
    </div>
);

const CelebrationPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [showWhiteScreen, setShowWhiteScreen] = useState(false);

    useEffect(() => {
        // Trigger the confetti animation after a delay
        const confettiTimeoutId = setTimeout(() => {
            setShowConfetti(true);
        }, 1000);

        // Automatically show the white screen after 2 seconds
        const whiteScreenTimeoutId = setTimeout(() => {
            setShowWhiteScreen(true);
        }, 2000);

        return () => {
            clearTimeout(confettiTimeoutId);
            clearTimeout(whiteScreenTimeoutId);
        };
    }, []);

    const handleCloseWhiteScreen = () => {
        setShowWhiteScreen(false);
    };

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
            {showWhiteScreen && <WhiteScreen onClose={handleCloseWhiteScreen} />}
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
            >
                <Confetti
                    active={showConfetti}
                    config={{
                        angle: 90,
                        spread: 360,
                        startVelocity: 65,
                        elementCount: 340,
                        decay: 0.8,
                    }}
                />
                &
            </div>

            {/* Left pane taking full height and sliding from bottom to top */}
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
                    justifyContent: 'flex-end', // Adjusted here
                    paddingRight: '35px',
                }}
            >
                <span style={{ color: 'white', textAlign: 'center', fontSize: '5em', fontWeight: 'bold' }}>You</span>
            </div>

            {/* Right pane taking full height and sliding from top to bottom */}
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
                    justifyContent: 'flex-start', // Adjusted here
                    paddingLeft: '35px',
                }}
            >
                <span style={{ color: 'red', textAlign: 'center', fontSize: '5em', fontWeight: 'bold' }}>Me</span>
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

            {/* White screen component */}


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

        @keyframes swipeInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
            <style jsx>{`
        @keyframes swipeInFromRight {
            from {
            transform: translateX(100%);
            }
            to {
            transform: translateX(0);
            }
        }

        @keyframes fadeIn {
            to {
            opacity: 1;
            }
        }

        .fade-in-text {
            opacity: 0;
            animation: fadeIn 1s forwards;
        }
`}</style>

        </div>
    );
};

export default CelebrationPage;
