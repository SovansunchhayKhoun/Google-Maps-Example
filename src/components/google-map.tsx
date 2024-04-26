import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps"
import RouteSummary from "./route-summary"
import { IconMap2, IconUser } from "@tabler/icons-react"

type Props = {
  startPos: TPos
  endPos: TPos
  waypoints: Array<TPos>
}

function GoogleMap({ startPos, endPos, waypoints }: Props) {
  return (
    <Map
      mapId={crypto.randomUUID()}
      style={{
        width: 800,
        height: 600
      }}
      defaultZoom={15}
      disableDefaultUI={true}
      gestureHandling={"greedy"}
      defaultCenter={startPos}
    >
      <RouteSummary stopPoints={waypoints} origin={startPos} destination={endPos} />
      {/* <Marker position={startPos} /> */}

      <AdvancedMarker
        position={endPos}
        title={'Destination'}>
        <Pin
          borderColor={"none"}
          background={"#0054A6"}
          scale={1.4}>
          <IconMap2 color="white" />
        </Pin>
      </AdvancedMarker>
      <AdvancedMarker
        position={startPos}
        title={'Destination'}>
        <Pin
          borderColor={"none"}
          background={"#0054A6"}
          scale={1.4}>
          <IconUser color="white" />
        </Pin>
      </AdvancedMarker>
    </Map>
  )
}

export default GoogleMap