import React from 'react';

const Advertisement = () => {
  // Hardcoded product information
  const product = {
    name: "Valentines Day Gift Basket | Stuffed Animal Plush Dog Puppy | Hersheys Kisses Milk Chocolate Box | V-Day Gift Bag & Card Tag |",
    image: "https://m.media-amazon.com/images/I/81+VLnWFQcL._SL1500_.jpg",
    ratings: 4.5,
    numberOfRatings: 30,
  };

  const renderStarRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.ratings);
    const hasHalfStar = product.ratings % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star${i}`} style={{ fontSize: '15px' }} className="material-icons">star</i>); // Material Icons star icon
    }

    if (hasHalfStar) {
      stars.push(<i key="half" style={{ fontSize: '15px' }} className="material-icons">star_half</i>); // Material Icons half star icon
    }

    const emptyStars = 5 - Math.ceil(product.ratings);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty${i}`} style={{ fontSize: '15px' }} className="material-icons">star_border</i>); // Material Icons empty star icon
    }

    return stars;
  };

  return (
    <div style={{ width: '260px', backgroundColor: '#f0f0f0', padding: '12px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
      {/* Product image */}
      <img src={product.image} alt={product.name} style={{ width: '90px', height: '90px', borderRadius: '5px', marginRight: '10px' }} />
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', fontSize: '10px', marginBottom: '5px' }}>{product.name}</p>
        <div style={{ marginBottom: '5px' }}>
          {/* Star ratings */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '3px', color: '#FFD700', fontSize: '10px' }}>{renderStarRating()}</div>
            <span style={{ marginLeft: '5px', fontSize: '8px' }}>({product.numberOfRatings} ratings)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
