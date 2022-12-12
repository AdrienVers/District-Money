import React from "react";
import styled from "@emotion/styled";

function Profile() {
  return (
    <ProfileGlobal>
      <div className="ProfileContainer">
        <h1>Bienvenue !</h1>
      </div>
    </ProfileGlobal>
  );
}

export default Profile;

const ProfileGlobal = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 20px;
  }

  .ProfileContainer {
    display: flex;
    width: 100%;
    padding: 20px 20px;
    background-color: white;
    flex-direction: column;

    h1 {
      font-weight: normal;
      margin: 0px 8px 25px 8px;
    }
  }
`;
