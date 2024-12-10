import React, { useState } from "react";
import "./FeedbackWidget.css";

const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="cs-fb-widget">
      <div className="feedback_widget_button" onClick={toggleWidget}>
        <div className="widget-icon">
          <img src={isOpen ? "/closeicon.svg" : "/opencall.svg"} alt="Feedback" />
        </div>
      </div>
      {isOpen && (
        <div className="messangers-block">
          <a
            href="viber://chat?number=+491719437621"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/icon_viber.svg" alt="Viber" className="fb-icon-img" />
            Viber
          </a>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <img src="/icon_teleg.svg" alt="Telegram" className="fb-icon-img" />
            Telegram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+491719437621"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/icon_whatsapp.svg" alt="WhatsApp" className="fb-icon-img" />
            WhatsApp
          </a>
          <a
            href="mailto:rami.akhmad@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/icon_email.svg" alt="Email" className="fb-icon-img" />
            Send Email
          </a>
        </div>
      )}
    </div>
  );
};

export default FeedbackWidget;
