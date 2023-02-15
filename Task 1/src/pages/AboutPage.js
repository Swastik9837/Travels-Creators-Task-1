import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";


const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Travel-Images.jpg"
          alt="nice desk"
        />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam rem
            rerum voluptas eius pariatur culpa similique in placeat expedita,
            neque facere perspiciatis iusto! Laudantium odit quisquam,
            repudiandae ex eveniet itaque accusantium! Tempore doloremque
            possimus eos distinctio laudantium, qui veniam explicabo nihil,
            quaerat dolores quos eius iure nostrum facilis neque debitis.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
