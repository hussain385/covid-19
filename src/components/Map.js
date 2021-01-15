import React from 'react';
import"./map.css";
import { MapContainer as LeafletMap , TileLayer } from 'react-leaflet';
import { showDataonMap } from './util';

function Map({center, zoom, countries, casesType}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* /*loop through  countries and draw circles*/}
                {showDataonMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map
