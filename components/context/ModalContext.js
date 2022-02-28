import React from "react";

const ModalContext = React.createContext({
  content: "",
  isShow: false,
  closeModal: () => {}
});

export default ModalContext;
