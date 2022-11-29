import React from "react";
import styled from "@emotion/styled";

function Footer() {
  return <FooterGlobal>District Money</FooterGlobal>;
  // contact
}

export default Footer;

const FooterGlobal = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 1.2rem;
  bottom: 0;
`;

