import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

interface IUpdateFormPaneProps {
  isOpen: boolean;
  handleClose: () => void;
}
const UpdateFormPane = (props: IUpdateFormPaneProps) => {
  const { isOpen, handleClose } = props;
  const [content, setContent] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    alert(content);
  };

  return (
    <SlidingPane
      className="some-custom-class"
      overlayClassName="some-custom-overlay-class"
      isOpen={isOpen}
      title={content ? content : "Placeholder"}
      subtitle="Optional subtitle."
      onRequestClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <input
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </SlidingPane>
  );
};

export default UpdateFormPane;
