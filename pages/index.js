import { getFeaturedEvents } from "../dummy-data";
import Eventlist from "../components/event/event-list";
function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Eventlist items={featuredEvents} />
    </div>
  );
}
export default HomePage;
