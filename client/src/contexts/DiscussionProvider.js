import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DiscussionContext from "./DiscussionContext";

export const DiscussionProvider = (props) => {
  const [post, setPost] = useState([]);

  const baseUrl = "http://localhost:3001/discussion/";

  useEffect(() => {
    async function fetchData() {
      await getAllPosts();
    }
    fetchData();
  }, []);

  function getAllPosts() {
    return axios.get(baseUrl).then((response) => setPost(response.data));
  }

  function getPost(postId) {
    return axios.get(baseUrl + postId).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function addPost(post) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myTaskToken")}`,
    };

    return axios
      .post(baseUrl, post, { headers: myHeaders })
      .then((response) => {
        getAllPosts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function editPost(postId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myTaskToken")}`,
    };
    return axios
      .put(baseUrl + postId, post, { headers: myHeaders })
      .then((response) => {
        getAllPosts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function deletePost(postId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myTaskToken")}`,
    };
    return axios
      .delete(baseUrl + postId, post, { headers: myHeaders })
      .then((response) => {
        getAllPosts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  return (
    <DiscussionContext.Provider
      value={{
        post,
        getPost,
        getAllPosts,
        addPost,
        editPost,
        deletePost,
      }}
    >
      {props.children}
    </DiscussionContext.Provider>
  );
};
