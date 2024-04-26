import GoogleMap from "./components/google-map";
import RouteSummary from "./components/route-summary";

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

function App() {
  const startPos = { index: 2, name: "CADT", lat: 11.653212086929589, lng: 104.9117854786715 }

  const texasPos = { index: 1, name: "Texas", lat: 11.553034545486167, lng: 104.92674642902927 }
  const morganPos = { index: 3, name: "Morgan Tower", lat: 11.55319663450739, lng: 104.94004725790204 }

  const endPos = { index: 4, name: "Mixue", lat: 11.561896733530633, lng: 104.92432909999361 }

  if (!API_KEY) return <>Please Input an API Key</>

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col">
        <GoogleMap position={startPos} />
      </div>
      <div className="flex gap-4">
        <div className="">
          <RouteSummary origin={startPos} destination={morganPos} />
        </div>
        <div className="">
          <RouteSummary origin={startPos} destination={texasPos} />
        </div>
        <div className="">
          <RouteSummary origin={startPos} destination={endPos} />
        </div>
      </div>
    </div>
  )
}

function ChooseNextLocation() {
  return (
    <>
      From
    </>
  )
}

export default App
