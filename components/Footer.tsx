import React from "react";
import styled from "@emotion/styled";

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

function Footer() {
  return <FooterGlobal>District Money</FooterGlobal>;
}

export default Footer;
