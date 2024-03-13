import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import { PlacesType } from "../assets/data/layers";

export function parsePlacesLayers(layers: Array<PlacesType>) {
  return layers.map((data) => {
    const attributes = {
      ObjectId: data.id,
      name: data.name
    };
  
    const geometry = new Point({
      longitude: data.longitude,
      latitude: data.latitude
    });
  
    const symbol = new SimpleMarkerSymbol({
      color: [226, 119, 40],
      outline: {
        color: [255, 255, 255],
        width: 2
      },
      // path: `../../public/icons/${data.type}.svg`
    });

    const popupTemplate = new PopupTemplate({
      title: "Must-Do Adventures",
      content: [{
        type: "fields",
        fieldInfos: [
          {
            fieldName: "name",
            label: "Name",
            visible: true
          },
          {
            fieldName: "type",
            label: "Type",
            visible: true
          }
        ]
      }]
    });
  
    return new Graphic({
      attributes,
      geometry,
      popupTemplate,
      symbol,
    });
  });
}
