import React, { useEffect, useRef, useCallback } from "react";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import ModalWithForm from "./components/ModalWithForm";
import styled from "styled-components";

import Header from "./components/Header";

const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const modalref = useRef();

  function handleSetFirstOpen() {
    setFirstOpen(true);
  }

  function handleSetFirstClose() {
    setFirstOpen(false);
  }

  function closeOnOverlay(e) {
    if (modalref.current === e.target) setFirstOpen(false);
  }

  const closeOnEsc = useCallback(
    (e) => {
      if (e.key === "Escape" && firstOpen) {
        setFirstOpen(false);
        console.log("key pressed => " + e.key);
      }
    },
    [setFirstOpen, firstOpen]
  );

  function handleFormSubmit({ companyName, email, description, call }) {
    console.table([companyName, email, description, call]);
  }

  useEffect(() => {
    document.addEventListener("keydown", closeOnEsc);
    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [closeOnEsc]);

  return (
    <div className="root">
      <div className="root__container">
        <Header onCtaClick={handleSetFirstOpen}/>

        <Main onCtaClick={handleSetFirstOpen} />

        <Footer />
        {firstOpen ? (
          <ModalOverlay
            onMouseDown={closeOnOverlay}
            ref={modalref}
            data-aos="zoom-out"
            data-aos-duration="400"
          >
            <ModalWithForm
              isOpen={handleSetFirstOpen}
              isClose={handleSetFirstClose}
              setFirstOpen={handleSetFirstClose}
              firstOpen={firstOpen}
              onSubmit={handleFormSubmit}
            />
          </ModalOverlay>
        ) : null}
      </div>
    </div>
  );
}

export default App;
