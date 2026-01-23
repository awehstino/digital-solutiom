import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="map-area position-relative z-1">
        <div className="container">
          <div className="comp-map style-two w-100 round-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.616999335651!2d3.427000975877835!3d6.442888324080173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3b5b48bb89%3A0x75f43565c348a60!2sHeritage%20Place!5e0!3m2!1sen!2sng!4v1716982055655!5m2!1sen!2sng"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
