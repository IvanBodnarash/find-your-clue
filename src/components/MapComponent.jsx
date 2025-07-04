import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapUpdater from "../utils/MapUpdater";

export default function MapComponent({ enteredCoordinates }) {
  const rightPosition = [48.264, 25.999];
  // const position = [51.505, -0.09];
  return (
    <div className="p-8">
      {/* <h3 className="text-center mb-4"></h3> */}
      <MapContainer
        center={rightPosition}
        zoom={2}
        style={{ height: "500px", width: "100%", margin: "auto" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={rightPosition}>
          <Popup>
            <a target="_blank" href="https://maps.app.goo.gl/ZmGAT4YEHyVZuMHg9">See you here</a>
          </Popup>
        </Marker>
        <MapUpdater coordinates={rightPosition} />
      </MapContainer>
    </div>
  );
}
