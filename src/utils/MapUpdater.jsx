import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapUpdater({ coordinates }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coordinates);
  }, [coordinates]);
  return null;
}
