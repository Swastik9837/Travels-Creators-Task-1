import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { db, storage } from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const BlogPostForm = () => {
  const [hotelName, setHotelName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [activities, setActivities] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new blog post object
    const newBlogPost = {
      hotelName: hotelName,
      firstName: firstName,
      country: country,
      activities: activities,
      desc: desc,
      imageUrl: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection("blogPosts")
      .add(newBlogPost)
      .then((docRef) => {
        setHotelName("");
        setFirstName("");
        setCountry("");
        setActivities("");
        setDesc("");
        setImage(null);
        setImageUrl("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    const file = e.target.files[0];

    const storageRef = storage.ref("images/" + file.name);

    storageRef.put(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        setImageUrl(url);
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Hotel Name"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextArea
        placeholder="Hotel Description eg (location, rating, service etc)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Country Visited"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <TextArea
        placeholder="Activities eg(Your experiences, beachView excitement etc)"
        value={activities}
        onChange={(e) => setActivities(e.target.value)}
      />
      <Input type="file" onChange={handleSubmit} />

      <Link to="/home">
        <Button type="submit">Submit</Button>
      </Link>
    </Form>
  );
};

export default BlogPostForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
