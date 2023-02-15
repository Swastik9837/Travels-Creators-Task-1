import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h5>Follow Us:</h5>
        <SocialLinks>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/">
            {" "}
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </SocialLinks>
      </div>
      <div>
        <h5>Links:</h5>
        <LinkList>
          <li>
            <a href="#">Travel Creators</a>
          </li>
          <li>
            <Link to="./about">About Us</Link>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </LinkList>
      </div>
      <div>
        <h5>Top Destinations:</h5>
        <LinkList>
          <li>
            <Link to="./about">Africa</Link>
          </li>
          <li>
            <a href="#">Indian Ocean</a>
          </li>
          <li>
            <a href="#">Europe</a>
          </li>
          <li>
            <a href="#">Asia</a>
          </li>
        </LinkList>
      </div>
      <div>
        <h5>Top Categories:</h5>
        <LinkList>
          <li>
            <a href="#">Safari &amp; Wildlife</a>
          </li>
          <li>
            <a href="#">Beaches &amp; Ocean</a>
          </li>
          <li>
            <a href="#">Adventure &amp; Sports</a>
          </li>
          <li>
            <a href="#">Backroads &amp; Byways</a>
          </li>
        </LinkList>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`

  height: 15rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: 	#A0522D;
  text-align: center;
  color: var(--clr-white);
  padding: 4rem;


  h5 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-
    text-transform: none;
    line-height: 1.25;
    
  }

  @media (min-width: 776px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    margin: 0 0.5rem;
    color: var(--clr-white);
    font-size: 1.5rem;
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-5);
    }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 0.5rem 0;
  }

  a {
    color: var(--clr-white);
    font-size: 1rem;
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-5);
      text-decoration: none;
    }

    &:visited {
      color: var(--clr-white);
    }
  }
`;
export default Footer;
