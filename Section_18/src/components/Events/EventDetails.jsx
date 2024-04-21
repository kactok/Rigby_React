import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchEvent, deleteEvent } from "../../util/http.js";
import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const {
    mutate,
    isPending: isPendingError,
    isError: isErrorError,
    error: errorMessage,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.cancelQueries({ queryKey: ["events"], refetchType: "none" });
      navigate("/events");
    },
  });
  const { data, isPending, isError, error } = useQuery({
    queryKey: [`events`, id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  return (
    <>
      {isDeleting && (
        <Modal onClose={() => setIsDeleting(false)}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be undo.
          </p>
          <div className="form-actions">
            {!isPendingError && (
              <>
                <button
                  className="button-text"
                  onClick={() => setIsDeleting(false)}
                >
                  Cancel
                </button>
                <button
                  className="button"
                  onClick={() => {
                    mutate({ id });
                  }}
                >
                  Delete
                </button>
              </>
            )}
            {isPendingError && <p>Deleting event...</p>}
            {isErrorError && (
              <ErrorBlock
                text="Failed to delete event!"
                message={
                  errorMessage.info?.message || "Please try again later."
                }
              />
            )}
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && (
        <div id="event-details-content" className="center">
          <p>Fetching event data</p>
        </div>
      )}
      {isError && (
        <div id="event-details-content" className="center">
          <ErrorBlock
            title="Couldn't load details"
            message={error.info?.message || "Error while fetching data!"}
          />
        </div>
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={() => setIsDeleting(true)}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
