import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
const HomePage = ({ post, index }) => {
  return (
    <main>
      <Hero post={post} />
      <FeaturedProducts post={post} />
      <Services post={post} />
      <Contact />
    </main>
  );
};

export default HomePage;
