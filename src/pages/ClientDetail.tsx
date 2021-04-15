import React from "react";
import { useParams } from "react-router-dom";

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

  const updateRenderer = data.map((dateOfWorkPerformed: any) => (
    <div key={dateOfWorkPerformed.date}>
      {dateOfWorkPerformed.date}

      <div>
        {dateOfWorkPerformed.updates.map((update: { content: string }) => (
          <div key={update.content}>{update.content}</div>
        ))}
      </div>
    </div>
  ));

  return <div>{updateRenderer}</div>;
};

export default ClientDetail;
