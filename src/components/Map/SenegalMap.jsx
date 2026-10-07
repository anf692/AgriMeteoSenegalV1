import { senegalPaths } from "../../data/senegalPaths";
import "./SenegalMap.css";

// Position des noms (centroïde de chaque tracé, ajusté à la main si besoin)
const labelPositions = {
  kedougou: [810, 620],
  tambacounda: [682, 456],
  kolda: [505, 593],
  sedhiou: [333, 612],
  ziguinchor: [218, 613],
  "saint-louis": [409, 106],
  matam: [605, 269],
  kaffrine: [391, 415],
  kaolack: [280, 454],
  fatick: [218, 372],
  louga: [341, 229],
  thies: [165, 300],
  dakar: [80, 334],
  diourbel: [262, 327],
};

function Map({ selectedRegion, onSelectRegion }) {
  return (
    <>
    <svg viewBox="0 0 1000 736" className="senegal-map">
      {senegalPaths.map((region) => (
        <path
          key={region.id}
          id={region.id}
          d={region.d}
          className={
            selectedRegion === region.id
              ? "region selected"
              : "region"
          }
          onClick={() => onSelectRegion(region.id)}
        />
      ))}

      {/* Noms des régions, dessinés après les tracés pour rester au-dessus */}
      {senegalPaths.map((region) => {
        const [x, y] = labelPositions[region.id];
        return (
          <text
            key={`label-${region.id}`}
            x={x}
            y={y}
            className={
              selectedRegion === region.id
                ? "region-label selected"
                : "region-label"
            }
          >
            {region.name}
          </text>
        );
      })}
    </svg>
    </>
  );
}

export default Map;
