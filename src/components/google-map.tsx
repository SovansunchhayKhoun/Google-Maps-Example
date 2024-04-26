import { Map, Marker } from "@vis.gl/react-google-maps"

type Props = {
  position: { lat: number, lng: number }
}

function GoogleMap({ position }: Props) {
  return (
    <Map
      style={{
        width: 800,
        height: 300
      }}
      defaultZoom={15}
      disableDefaultUI={true}
      gestureHandling={"greedy"}
    >
      <Marker position={position} />
    </Map>
  )
}

export default GoogleMap