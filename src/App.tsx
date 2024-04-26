import GoogleMap from "./components/google-map";

const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

function App() {
  const locations = [
    { name: "CADT", lat: 11.653212086929589, lng: 104.9117854786715 }, // start pos
    { name: "Texas", lat: 11.553034545486167, lng: 104.92674642902927 }, // seller
    { name: "Morgan Tower", lat: 11.55319663450739, lng: 104.94004725790204 }, // seller
    { name: "Mixue", lat: 11.561896733530633, lng: 104.92432909999361 } // destination pos
  ]

  if (!API_KEY) return <>Please input a Google Map API Key</>

  return (
    <div className="flex flex-col gap-4 items-center">
      <GoogleMap startPos={locations[0]} waypoints={[locations[1], locations[2]]} endPos={locations[locations.length - 1]} />
    </div>
  )
}

export default App
