import React from 'react';
import ProductCard from './ProductCard';

const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <h2>{user.name}'s Profile</h2>
      <p>Joined: {user.joinDate}</p>
      <p>Rating: {user.rating}</p>
      
      <div className="grid">
        <h3>Listed Items</h3>
        <div className="items-grid">
          {user.listedItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <h3>Sold Items</h3>
        <div className="sold-items-grid">
          {user.soldItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;