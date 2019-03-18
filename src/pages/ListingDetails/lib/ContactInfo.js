import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = (props) => {
  const { contact, formattedAddress } = props;
  return (
    <div className="contact-info">
      <div>
        <div>{formattedAddress[0]}</div>
        <div>{formattedAddress[1]}</div>
      </div>

      {contact && (
        <div>
          <div className="contact-info__phone">
            {contact.formattedPhone}
          </div>
          {contact.twitter && (
            <div className="contact-info__social">
              {`@${contact.twitter}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.object,
  formattedAddress: PropTypes.array.isRequired,
};

export default ContactInfo;
