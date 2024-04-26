import GoogleMap from "./components/maps";

function App() {
  const texasPos = { lat: 11.553034545486167, lng: 104.92674642902927 }
  const cadtPos = { lat: 11.653212086929589, lng: 104.9117854786715 }
  const morganPos = { lat: 11.55319663450739, lng: 104.94004725790204 }

  return (
    <div className="text-red-300">
      <GoogleMap position={texasPos} />
      <GoogleMap position={cadtPos} />
      <GoogleMap position={morganPos} />
    </div>
  )
}

export default App
