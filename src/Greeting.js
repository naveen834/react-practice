import React, { useState } from 'react';

export default function Greeting() {
  const [name, setName] = useState('');
  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Please Type your Name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </form>
      {name ? <strong>{name}</strong> : <h2>Please enter your name</h2>}
    </>
  );
}
