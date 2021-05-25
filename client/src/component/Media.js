import React from "react";
import * as mediasoupClient from "mediasoup-client";

const Media = () => {
  const handlerName = mediasoupClient.detectDevice();

  if (handlerName) {
    console.log("detected handler: %s", handlerName);
  } else {
    console.warn("no suitable handler found for current browser/device");
  }

  let device;

  try {
    device = new mediasoupClient.Device();
  } catch (error) {
    if (error.name === "UnsupportedError")
      console.warn("browser not supported");
  }

  return (
    <div>
      <div>media</div>
      <div></div>
    </div>
  );
};

export default Media;
