import React from "react";
import Profile from "../components/Profile/Profile";
import styled from "@emotion/styled";

const ProfilePageGlobal = styled.div`
  background-color: rgb(10, 20, 100);
`;

function profile() {
  return (
    <ProfilePageGlobal>
      <Profile />
    </ProfilePageGlobal>
  );
}

export default profile;
