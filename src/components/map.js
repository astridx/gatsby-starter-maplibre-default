import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

import { siteMetadata } from "../../gatsby-config"

const Map = ({ zoom, center, minZoom, maxZoom }) => {
  const { mapboxToken, maptilerToken } = siteMetadata

  // this ref holds the map DOM node so that we can pass it into MapLibre GL
  const mapNode = useRef(null)

  // this ref holds the map object once we have instantiated it, so that we
  // can use it in other hooks
  const mapRef = useRef(null)

  useEffect(() => {
    let mapCenter = center
    let mapZoom = zoom

    // todo Token must be set before constructing map

    const map = new maplibregl.Map({
      container: mapNode.current,
      style:
        `https://api.maptiler.com/maps/streets/style.json?key=` + maptilerToken,
      center: mapCenter,
      zoom: mapZoom,
      minZoom,
      maxZoom,
    })
    mapRef.current = map
    // window.map = map // todo for easier debugging and querying via console

    map.on("load", () => {})

    return () => {
      map.remove()
    }
  }, [])
  return <div ref={mapNode} style={{ width: "100vh", height: "100vh" }} />
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
}

Map.defaultProps = {
  center: [0, 0],
  zoom: 0,
  minZoom: 0,
}

export default Map
