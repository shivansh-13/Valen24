'use client'
import React, { useState } from 'react';
import TimeInputPage from './TimeInputPage'; // Import the new component
import 'leaflet/dist/leaflet.css';
import 'dotenv/config';


const LocationInputPage = () => {
    const [showTimeInputPage, setShowTimeInputPage] = useState(false);

    const [location, setLocation] = useState('');

    const handleLocationSubmit = () => {
        // You can add validation here if needed
        localStorage.setItem('selectedLocation', location);
        setShowTimeInputPage(true);
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                marginTop: 'auto',
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
                Perfect!
                <br />
            </h2>
            <h2 style={{ color: 'white', fontSize: '1.5em' }}>
                The date is fixed! Let's fix the place?
                <br />
                A Cafe, a Park, or a Movie?
            </h2>
            <h1
                style={{
                    color: 'white',
                    fontSize: '2em',
                }}
            >
                You Decide!
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{
                        padding: '10px',
                        fontSize: '1.2em',
                        borderRadius: '5px',
                        border: 'none',
                        width: '300px'
                    }}
                />
                <button
                    onClick={handleLocationSubmit}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1.2em',
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Next
                </button>
            </div>
            {showTimeInputPage && <TimeInputPage onBack={() => setShowTimeInputPage(false)} />}
        </div>
    );
};
export default LocationInputPage;
