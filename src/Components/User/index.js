import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed";
import UserPhotoPost from "../User/UserPhotoPost";
import UserStats from "../User/UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
