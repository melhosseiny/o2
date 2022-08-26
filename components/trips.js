import Trip from "/components/trip.js";
import Loader from "/components/loader.js";

const TRIPS_URL_BASE = "https://co2.deno.dev/rand_trips";

export default function Trips() {
  const [pending, setPending] = React.useState(true);
  const [trips, setTrips] = React.useState();

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const n = searchParams.get('n');
    const q = n ? `/?n=${n}` : '';
    // fetch trips
    async function fetchTrips() {
      setPending(true);
      try {
        const response = await fetch(`${TRIPS_URL_BASE}${q}`);
        const trips = await response.json();
        setTrips(trips);
      } catch(err) {
        console.error(err);
      } finally {
        setPending(false);
      }
    }
    fetchTrips();
  }, []);

  if (pending) {
    return e(Loader);
  }

  return trips && e("div", { className },
    trips.map(trip => e(Trip, { key: trip.title, ...trip }))
  );
}

const className = emotion.css`
  --row-height: 166.22px;

  display: grid;
  min-width: 100%;
  gap: 20px;
  grid-auto-flow: dense;
  grid-auto-rows: var(--row-height);
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 60em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 30em) {
    grid-template-columns: 1fr;
  }

  > * {
    box-sizing: border-box;
    min-width: 0;
    grid-column: auto / span 1;
    height: var(--row-height);
  }
`
