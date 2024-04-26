import { Map, Marker } from "@vis.gl/react-google-maps"

type Props = {
  position: { lat: number, lng: number }
}

function GoogleMap({ position }: Props) {
  return (
    <Map
      style={{
        width: 400,
        height: 400
      }}
      defaultZoom={15}
      center={position}
    >
      <Marker position={position} />
    </Map>
  )
}

export default GoogleMap