
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "poolsPerPersonGemSimpcopy_1": {
            "type": "geojson",
            "data": json_poolsPerPersonGemSimpcopy_1
        }
                    ,
        "poolsPerPersonGemSimp_2": {
            "type": "geojson",
            "data": json_poolsPerPersonGemSimp_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_poolsPerPersonGemSimpcopy_1_0",
            "type": "fill",
            "source": "poolsPerPersonGemSimpcopy_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#5f5f5f'}
        }
,
        {
            "id": "lyr_poolsPerPersonGemSimp_2_0",
            "type": "fill",
            "source": "poolsPerPersonGemSimp_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'poolsPerPerson'], 0.0], ['<=', ['get', 'poolsPerPerson'], 0.00262]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.00262], ['<=', ['get', 'poolsPerPerson'], 0.007269]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.007269], ['<=', ['get', 'poolsPerPerson'], 0.013504]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.013504], ['<=', ['get', 'poolsPerPerson'], 0.021978]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.021978], ['<=', ['get', 'poolsPerPerson'], 0.034897]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.034897], ['<=', ['get', 'poolsPerPerson'], 0.054622]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.054622], ['<=', ['get', 'poolsPerPerson'], 0.078915]], 1.0, ['all', ['>', ['get', 'poolsPerPerson'], 0.078915], ['<=', ['get', 'poolsPerPerson'], 0.125977]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'poolsPerPerson'], 0.0], ['<=', ['get', 'poolsPerPerson'], 0.00262]], '#f7fbff', ['all', ['>', ['get', 'poolsPerPerson'], 0.00262], ['<=', ['get', 'poolsPerPerson'], 0.007269]], '#dce9f6', ['all', ['>', ['get', 'poolsPerPerson'], 0.007269], ['<=', ['get', 'poolsPerPerson'], 0.013504]], '#bed8ec', ['all', ['>', ['get', 'poolsPerPerson'], 0.013504], ['<=', ['get', 'poolsPerPerson'], 0.021978]], '#8fc2de', ['all', ['>', ['get', 'poolsPerPerson'], 0.021978], ['<=', ['get', 'poolsPerPerson'], 0.034897]], '#5ba3d0', ['all', ['>', ['get', 'poolsPerPerson'], 0.034897], ['<=', ['get', 'poolsPerPerson'], 0.054622]], '#3282be', ['all', ['>', ['get', 'poolsPerPerson'], 0.054622], ['<=', ['get', 'poolsPerPerson'], 0.078915]], '#115ca5', ['all', ['>', ['get', 'poolsPerPerson'], 0.078915], ['<=', ['get', 'poolsPerPerson'], 0.125977]], '#08306b', '#ffffff']}
        }
],
}