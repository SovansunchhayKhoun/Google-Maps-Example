import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

type Props = {
  origin: TPos
  destination: TPos
  stopPoints: Array<TPos>
}

function convertWaypoint(sellerLocations: Array<TPos>) {
  const waypoints: Array<google.maps.DirectionsWaypoint> = []

  sellerLocations.forEach(location => {
    waypoints.push({
      location,
      stopover: true
    })
  })

  return waypoints
}

function useRoutesApi({
  origin, destination, stopPoints
}: Props) {
  const map = useMap()
  const routesLibrary = useMapsLibrary('routes')
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  const [loading, setLoading] = useState(false)

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map, origin, AudioDestinationNode]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    setLoading(true)
    directionsService
      .route({
        origin,
        waypoints: convertWaypoint(stopPoints),
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true
      })
      .then(response => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      }).finally(() => {
        setLoading(false)
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer, origin, destination]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);


  return {
    loading,
    directionsRenderer,
    directionsService,
    routes,
    routeIndex,
    selected,
    setRouteIndex,
    leg
  }
}

export default useRoutesApi