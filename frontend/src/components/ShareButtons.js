import React from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ShareButtons({ quote, author }) {
  const text = `"${quote}" — ${author}`;

  return (
    <div className="share-buttons">
      <button className="whatsapp">
        <FaWhatsapp />
      </button>

      <button className="facebook">
        <FaFacebookF />
      </button>

      <button className="twitter">
        <FaXTwitter />
      </button>

      <button className="linkedin">
        <FaLinkedinIn />
      </button>
    </div>
  );
}

export default ShareButtons;