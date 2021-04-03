import React from 'react';
import PropTypes from 'prop-types';

export default function SayHello({ firstName, lastName }) {
  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
}

// add plugin PropTypes to react to check for all Props being passed

// const PropTypes = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== 'string') {
//       return new Error(`
//       Hey, the component ${componentName} needs the props ${propName} to be a string, but you passed a ${typeof props[
//         propName
//       ]}
//       `);
//     }
//   },
// };

// to remove PropTypes code from production use Babel plugin transform react remove prop types

SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
