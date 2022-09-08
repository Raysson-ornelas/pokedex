import React, { ReactNode } from "react";
import { Container } from "./core";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
