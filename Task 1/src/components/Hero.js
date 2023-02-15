import React from "react";
import styled from "styled-components";

const Hero = ({ post }) => {
  const hotelName = post[0].data.hotelName;
  const desc = post[0].data.desc;
  console.log(desc);

  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>{hotelName}</h1>
        <p>{desc}</p>
      </article>
      <article className="img-container">
        <img
          src="https://www.gettingstamped.com/wp-content/uploads/2016/07/Maldives-Pictures-How-to-Maldives-photo-guide-Drone-Photography-couple-holding-hands-1.jpg"
          alt="nice table"
          className="main-img"
        />
        <img
          src="https://the-travelcenter.com/wp-content/uploads/2020/07/106616793-1594805802117gettyimages-900809876-scaled.jpg"
          alt="person working"
          className="accent-img"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: #87ceeb;
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
