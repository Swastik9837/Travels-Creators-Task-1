import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our Community</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            deleniti doloremque mollitia molestiae cumque nam aperiam ut.
            Officia sapiente, harum ut asperiores, reprehenderit molestiae
            praesentium cupiditate ipsam vitae, expedita placeat officiis iste
            distinctio. Maxime delectus necessitatibus autem fugiat commodi.
            Ducimus quo non aut? Placeat hic atque accusamus at! Perspiciatis
            quae commodi, voluptatum maiores dolorum reiciendis molestiae?
            Ratione voluptatum debitis vel repellat beatae, officiis architecto
            dignissimos culpa, itaque odit, autem sapiente porro repudiandae!
            Enim dicta reiciendis ab temporibus eum error maiores dolores.
            Voluptas eveniet molestias possimus magni ab ipsum quas pariatur.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/mrgvblww"
            method="post"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 80vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
