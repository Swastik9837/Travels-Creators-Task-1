import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import BlogPostForm from "./components/BlogPostForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Home, Error, About } from "./pages";
import { db } from "./components/Firebase";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("blogPosts") // we connecting to firebase
      .orderBy("timestamp", "desc") //ab descending mai aayga
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [Home, BlogPostForm]);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <BlogPostForm />
        </Route>
        <Route exact path="/home">
          <Home post={post} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />{" "}
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
