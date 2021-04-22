import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UpdateFormPane from "../components/updates/UpdateFormPane";

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

// [x] turn pane into dedicated component
// [ ] build out form
// [ ] send submitted form data to ClientDetail component
// [ ] add to ClientDetail state
// [ ] reset form

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

  return (
    <div>
      <UpdateFormPane
        isOpen={isPaneOpen}
        handleClose={() => setIsPaneOpen(false)}
      />
      <a onClick={() => setIsPaneOpen(true)}>New Update</a>
      {updateRenderer}
    </div>
  );
};

export default ClientDetail;
