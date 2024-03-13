import { useEffect, useRef } from "react";
import esriConfig from "@arcgis/core/config";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Legend from "@arcgis/core/widgets/Legend";
import MapView from "@arcgis/core/views/MapView";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import WebMap from "@arcgis/core/WebMap";

import "./App.css";
import layers from "../src/assets/data/layers";
import {parsePlacesLayers} from "../src/utils/index";

function App() {
  const mapDiv = useRef(null);
  esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

  useEffect(() => {
    if (mapDiv.current) {
      // initialize application
      const webmap = new WebMap({
        basemap: "arcgis-imagery",
      })
      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        zoom: 7,
        center: [-121.5692, 46.7328],
      })
      // defined and add widgets
      const bookmarks = new Bookmarks({
        view,
      });
      const bkExpand = new Expand({
        view,
        content: bookmarks,
        expanded: true,
      });
      const legend = new Legend({
        view,
      });
      const scaleBar = new ScaleBar({
        view,
      });
      view.ui.add(legend, "top-right");
      view.ui.add(bkExpand, "top-right");
      view.ui.add(scaleBar, "bottom-left");
      // add layers
      const places = layers.places;
      const parsedLayers = parsePlacesLayers(places);
      const graphicsLayer = new GraphicsLayer({
        graphics: [...parsedLayers],
      });
      webmap.layers.add(graphicsLayer);
    }
  }, [mapDiv]);

  return (
    <div className="mapDiv" ref={mapDiv}/>
  )
}

export default App;
