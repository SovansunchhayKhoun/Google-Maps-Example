import useRoutesApi from "../hooks/useRoutesApi";

type Props = {
  origin: TPos & { name?: string };
  destination: TPos & { name?: string }
  stopPoints: Array<TPos>
}

function RouteSummary({ origin, stopPoints, destination }: Props) {
  const {
    routes,
    setRouteIndex,
    selected,
    leg,
    loading
  } = useRoutesApi({
    origin,
    destination,
    stopPoints
  })

  if (loading) return (
    <>Loading...</>
  )

  if (!leg) return null

  return (
    <div className="directions">
      <h1>From {origin.name} to {destination.name}</h1>

      <h2>{selected.summary}</h2>

      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>

      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li className="" key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RouteSummary