import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
const Nav = () => {
  const { openSidebar } = useProductsContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              style={{ height: "80px", width: "100px" }}
              src="https://www.designhill.com/design-blog/wp-content/uploads/2018/01/4-min-2.jpg"
              alt=""
            />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {/* <li>
            <a href="https://travelcreators.com/">Visit Travel Creators</a>
          </li> */}
          <li>
            <Link to="/signup" className="login">
              signup
            </Link>
          </li>
          <li>
            <Link to="/login" className="login">
              login
            </Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 80%;
    margin: 0 auto;
    max-width: var(--max-width);
    position: fixed;
    margin-left: 20px;
    padding-left: 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .nav-header {
    display: flex;
    align-items: center;
    padding-left: 40px;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .login {
      color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
