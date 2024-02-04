import React, { useState } from 'react';
import LocationInputPage from './LocationInputPage'; // Import the new component

const DateInputPage = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
  
    const handleDayChange = (event) => {
      setDay(event.target.value);
    };
  
    const handleMonthChange = (event) => {
      setMonth(event.target.value);
    };
  
    const handleYearChange = (event) => {
      setYear(event.target.value);
    };

    const [showLocationPage, setShowLocationPage] = useState(false);

    const handleNextPage = () => {
      // Show the LocationInputPage when the user clicks the arrow button
      setShowLocationPage(true);
    };
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'lightblue', // Adjust the background color as needed
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1,
                transform: 'translateX(-100%)',  // Start with left positioning for slide-in effect
                animation: 'fadeInSlideIn 1s forwards',  // Combined animation animation: 'slideInLeft 1s forwards',
            }}
        >
            <h2 style={{ color: 'white', fontSize: '2em' }}>
                Why just soon? Let's plan a date! Right here, right now! 
            </h2>
            {/* Add your date input fields or any other content for the new page */}



      {/* Input boxes for day, month, and year */}
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <input
          type="text"
          value={day}
          onChange={handleDayChange}
          style={inputBoxStyle}
          placeholder="DD"
        />
        <input
          type="text"
          value={month}
          onChange={handleMonthChange}
          style={inputBoxStyle}
          placeholder="MM"
        />
        <input
          type="text"
          value={year}
          onChange={handleYearChange}
          style={inputBoxStyle}
          placeholder="YYYY"
        />
      </div>
      <button
        onClick={handleNextPage}
        style={{
          backgroundColor: 'lightcyan',
          color: 'gray',
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

      {showLocationPage && <LocationInputPage onBack={() => setShowLocationPage(false)} />}

            <style jsx>{`
                @keyframes fadeInSlideIn {
                    from {
                    opacity: 0;
                    transform: translateX(-100%);
                    }
                    to {
                    opacity: 1;
                    transform: translateX(0);
                    }
                }
            `}</style>

        </div>
    );
};

const inputBoxStyle = {
    width: '80px',
    height: '50px',
    border: '2px solid white',
    borderRadius: '10px',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1em',
    color: 'grey',
    padding: '5px',
    textAlign: 'center',  // Center the text within the input box
  };
  
  
export default DateInputPage;
