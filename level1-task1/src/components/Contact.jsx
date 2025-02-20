import React from "react";

export default function Contact() {

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  
  return (
      <div className="w-full px-5 pt-5 pb-10 flex justify-center">
        <div className="w-full h-60 bg-gray-900 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.8)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Sant+nagar,+Burari,+delhi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
      </div>
  );
}
