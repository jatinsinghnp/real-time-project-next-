import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import EventList from "../../components/event/event-list";
import EventsSearch from "../../components/event/events-search";
function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
