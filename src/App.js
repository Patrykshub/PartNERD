import React, { useState } from "react";

import StarsBackground from "./stars-background";
import Header from "./components/header/Header";
import Modal from "./components/Modal.js/Modal";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  }

  const hideModalHandler = () => {
    setModalIsShown(false);
  }

  return (
    <React.Fragment>
      <StarsBackground />
      {modalIsShown && <Modal onHideModal={hideModalHandler} />}
      <Header onShowModal={showModalHandler} />
    </React.Fragment>
  );
}

export default App;
