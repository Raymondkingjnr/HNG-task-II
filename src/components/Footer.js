import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  const contact = [
    {
      id: 1,
      text: "condtion of use",
    },
    {
      id: 2,
      text: "Privacy & Policy",
    },
    {
      id: 3,
      text: "Press Room",
    },
  ];

  return (
    <footer>
      <div className="icons">
        <AiFillFacebook />
        <BsInstagram className="insta" />
        <AiOutlineTwitter />
        <AiFillYoutube />
      </div>
      <div className="polices">
        {contact.map((item, index) => {
          return (
            <a href="#" key={item.id} index={index}>
              {item.text}
            </a>
          );
        })}
      </div>
      <div className="copyright">
        <BiCopyright style={{ marginTop: "0.2rem" }} />
        <p>MovieBox By Nnaji Raymond</p>
      </div>
    </footer>
  );
};
