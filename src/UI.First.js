import React from 'react';
import SayHello from './ValidComp';
// export const Ui = React.createElement('div', null, 'Hello Child');
export const Ui = ({ user }) => {
  const Message = (props) => <div>{props.msg}</div>;
  return (
    <div>
      <Message msg={`${user[0]}`} />
      {Message({ msg: `${user[1]}` })}
      <Message msg={'Hello'} />
      <strong> World</strong>
      <SayHello firstName="Naveen" />
    </div>
  );
};
// above is JSX syntax and is understood by Babel
// anything put inside curly braces is a javascript expression and whatever that expression evaluates to is our value,
// Props declared after certain props can be overRidden
// Calling Capital letter HTML-like tags in JSX will call React.createElement
