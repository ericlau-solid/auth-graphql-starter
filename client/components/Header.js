import React from 'react';
import { graphql } from 'react-apollo';
import { currentUser } from '../queries';

const Header = ({ data }) => {
  const { currentUser } = data;
  if (currentUser && currentUser.id) {
    return (
      <div>
        Logged in as {currentUser.email}
      </div>
    )
  }

  return (
    <div>
      Not logged in
    </div>
  );
};

export default graphql(currentUser)(Header);