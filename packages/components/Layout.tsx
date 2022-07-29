import React, { ReactNode } from "react";
import { Container } from "./core";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <NavBar />
      <Container>
        <div className="grid gap-12 py-12">{children}</div>
      </Container>
    </>
  );
}

export default Layout;
