import React from 'react';
import Confetti from 'react-dom-confetti';

const LocationInputPage = ({ onBack }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgreen',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transform: 'translateX(-100%)',
        animation: 'fadeInSlideIn 1s forwards',
      }}
    >
       <h2 style={{ color: 'white', fontSize: '2em' }}>
        Perfect
        <br/>
        </h2>
      <h2 style={{ color: 'white', fontSize: '1.5em' }}>
      The date is fixed! Let's fix the place?
        <br/>
        A Cafe, a Park, or a Movie?
       
      </h2>
      <h1
        style={{
          color: 'white',
          fontSize: '2em',
        }}
        > 
        You Decide!</h1>
      <Confetti
        active={true}
        config={{
          angle: 90,
          spread: 360,
          startVelocity: 45,
          elementCount: 140,
          decay: 0.7,
        }}
      />
      {/* Add your search bar and map components here */}
      {/* For demonstration purposes, let's use a simple search input */}
      <input
        type="text"
        placeholder="Search location"
        style={{
          marginTop: '20px',
          padding: '10px',
          fontSize: '1em',
          borderRadius: '10px',
        }}
      />     

      {/* Back button to return to the previous screen */}
      <button
        onClick={onBack}
        style={{
          backgroundColor: 'violet',
          color: 'white',
          borderRadius: '100%',
          padding: '40px',
          marginTop: '15px',
          cursor: 'pointer',
        }}
      >
        ⬅
      </button>
    </div>
  );
};

export default LocationInputPage;
