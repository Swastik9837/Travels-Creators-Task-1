import React from "react";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { storage } from "./Firebase";
import firebase from "firebase/compat/app";

const FeaturedProducts = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   const imageRef = storage.ref().child("images");

  //   imageRef
  //     .getDownloadURL()
  //     .then((url) => {
  //       setImageUrl(url);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    const storage = firebase.storage();
    const imagesRef = storage.ref().child("images");
    imagesRef
      .listAll()
      .then((res) => {
        const promises = res.items.map((item) => item.getDownloadURL());

        Promise.all(promises)
          .then((urls) => {
            setImageUrls(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Blogger's Pic </h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
       
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
