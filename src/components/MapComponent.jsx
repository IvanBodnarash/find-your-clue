import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapUpdater from "../utils/MapUpdater";
import myMarkerIcon from "/marker.png";

const customIcon = new L.Icon({
  iconUrl: myMarkerIcon,
  iconSize: [40, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -35],
});

export default function MapComponent() {
  const rightPosition = [48.2647, 25.9992];
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
        <Marker position={rightPosition} icon={customIcon}>
          <Popup>
            <a target="_blank" href="https://maps.app.goo.gl/ZmGAT4YEHyVZuMHg9">
              See you here <br /> 21.07 21:00PM
            </a>
          </Popup>
        </Marker>
        <MapUpdater coordinates={rightPosition} />
      </MapContainer>
    </div>
  );
}
