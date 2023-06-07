var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      new ol.layer.Tile({
        
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/retry/wms',
          params: {'LAYERS': '	retry:6-4-2023-1296624', 'TILED': true},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0
        })
      }),
      new ol.layer.Tile({
        
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/retry/wms',
          params: {'LAYERS': ' 	retry:india_country_boundary', 'TILED': true},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0
        })
      }),
      new ol.layer.Tile({
        
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/retry/wms',
          params: {'LAYERS': 'retry:6-5-2023-8700350', 'TILED': true},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0
        })
      }),
      new ol.layer.Tile({
        
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/retry/wms',
          params: {'LAYERS': 'retry:6-5-2023-8429511', 'TILED': true},
          serverType: 'geoserver',
          // Countries have transparency, so do not fade tiles:
          transition: 0
        })
      })
    
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })

    
   
  });

  var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode:'click',
    startActive:false,
    groupSelectStyle: 'children'
  });
  map.addControl(layerSwitcher);