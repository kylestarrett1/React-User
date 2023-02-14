import React from 'react';

import UserForm from '../Users/UserForm';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <UserForm />
    </div>
  );
};

export default Card;
