import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpecialOffer.scss';

const SpecialOffer = ({ offers }) => {
  const navigate = useNavigate();

  const handleClick = (offer) => {
    navigate('/offer-details', { state: { offer } });
  };

  return (
    <div className="special-offer-container">
      <h2>Special Offers</h2>
      <div className="special-offer-list">
        {offers.map((offer, index) => (
          <div key={index} className="special-offer-item" onClick={() => handleClick(offer)}>
            <img src={offer.roomImages[0]} alt={offer.roomName} className="room-image" />
            <div className="offer-details">
              <h3>{offer.hotelName}</h3>
              <p className='city-name'>City: {offer.city}</p>
              <div className="room-info">
                <p className='room-into-name'>Room: {offer.roomName}</p>
                <p>Price: ${offer.roomPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
