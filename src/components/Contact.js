import React from 'react';
import './Contact.css';

function Contact(props) {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={()=> props.setTrigger(false)} className="close-btn btn btn-outline-secondary">Close</button>
        {props.children}
      </div>
    </div>
  ) : "";
};

export default Contact;
