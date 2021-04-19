import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const data = [
  {
    date: "2021-04-15",
    updates: [
      { content: "Created new react site" },
      { content: "Created an API with auth" },
      { content: "Implemented auth engine" },
      { content: "Prepped deployment guide" },
    ],
  },
  {
    date: "2021-04-14",
    updates: [
      { content: "Built out custom styles for front end" },
      { content: "Added SMS messaging" },
      { content: "Built new client CORS rules" },
    ],
  },
];

const ClientDetail = () => {
  const { id }: { id: string } = useParams();
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    setUpdates(data);
  }, []);

  const updateRenderer = updates.map((dateOfWorkPerformed: any) => (
    <div key={dateOfWorkPerformed.date}>
      {dateOfWorkPerformed.date}

      <div>
        {dateOfWorkPerformed.updates.map((update: { content: string }) => (
          <div key={update.content}>{update.content}</div>
        ))}
      </div>
    </div>
  ));

  const formPane = (
    <SlidingPane
      className="some-custom-class"
      overlayClassName="some-custom-overlay-class"
      isOpen={isPaneOpen}
      title="Hey, it is optional pane title.  I can be React component too."
      subtitle="Optional subtitle."
      onRequestClose={() => {
        setIsPaneOpen(!isPaneOpen);
      }}
    >
      <div>And I am pane content. BTW, what rocks?</div>
      <br />
    </SlidingPane>
  );

  return (
    <div>
      {formPane}
      <a onClick={() => setIsPaneOpen(true)}>New Update</a>
      {updateRenderer}
    </div>
  );
};

export default ClientDetail;
