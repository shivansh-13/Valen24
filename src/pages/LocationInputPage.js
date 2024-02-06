import React, { useState } from 'react';
import TimeInputPage from './TimeInputPage'; // Import the new component
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import 'dotenv/config';


const LocationInputPage = ({ google }) => {
    const [showTimeInputPage, setShowTimeInputPage] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [address, setAddress] = useState('');

    // Function to handle location selection from autocomplete
    const handleSelect = async (address) => {
        setAddress(address);
        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0]);
            setSelectedLocation(latLng);
        } catch (error) {
            console.error('Error', error);
        }
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
                You Decide!</h1>

                
                <div style={{display:'flex',flex:'row'}}>                
           

            {/* Display the autocomplete input */}
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search location',
                                style: {
                                    marginTop: '20px',
                                    padding: '10px',
                                    fontSize: '1em',
                                    borderRadius: '10px',
                                    color: 'grey',
                                },
                            })}
                        />
                                  
                                  <button
                onClick={() => setShowTimeInputPage(true)}
                style={{
                    backgroundColor: 'darkgrey',
                    color: 'white',
                    borderRadius: '100%',
                    paddingBottom: '10px',
                    marginLeft: '15px',
                    marginTop: '20px',
                    paddingTop: '10px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    cursor: 'pointer',
                    fontSize: '1em',
                }}
            >
                ➔
            </button>
                        <div>
                            {loading ? <div>Loading...</div> : null}

                            {suggestions.map((suggestion) => {
                                const style = {
                                    backgroundColor: suggestion.active ? '#41b6e6' : 'lightgreen',
                                    padding: '8px',
                                    borderRadius: '10px',
                                    color: 'grey',
                                };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
  
            </div>
            {/* Display the map */}
            <div style={{ width: '100%', height: '400px', marginTop: '20px', borderRadius: '10px' }}>
                <Map
                    google={google}
                    zoom={selectedLocation ? 14 : 5} // Adjust zoom level based on whether a location is selected
                    style={{ width: '25%', height: '25%', borderRadius: '10px',marginLeft:'auto',marginRight:'auto' }}
                    center={selectedLocation} // Center map on the selected location if available, otherwise use default location for Hyderabad
                >
                    {selectedLocation && (
                        <Marker position={selectedLocation} />
                    )}
                </Map>
            </div>
            {showTimeInputPage && <TimeInputPage onBack={() => setShowTimeInputPage(false)} />}
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY,
})(LocationInputPage);
