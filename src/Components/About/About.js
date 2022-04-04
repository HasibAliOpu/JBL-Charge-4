import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center ">
        <span className="border-b-2 border-red-500">Features</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-10 p-10 font-semibold">
        <div className="border-2 rounded-lg border-orange-300 p-3">
          <h1 className="text-center my-2 text-lg">
            <span className="border-b-2 border-orange-400 pb-1">
              Wireless Bluetooth Streaming
            </span>
          </h1>
          <p>
            Wirelessly connect up to 2 smartphones or tablets to the speaker and
            take turns enjoying powerful sound.
          </p>
        </div>
        <div className="border-2 rounded-lg border-blue-400 p-3">
          <h1 className="text-center my-2 text-lg">
            <span className="border-b-2 border-blue-400 pb-1">
              Up to 20 hours of playtime
            </span>
          </h1>
          <p>
            Built-in rechargeable Li-ion 7500mAH battery supports up to 20 hours
            of playtime and charges your device via USB port.
          </p>
        </div>
        <div className="border-2 rounded-lg border-orange-300 p-3">
          <h1 className="text-center my-2 text-lg">
            <span className="border-b-2 border-orange-400 pb-1">
              IPX7 waterproof
            </span>
          </h1>
          <p>
            Take Charge 4 to the beach or the pool without worrying about spills
            or even submersion in water.
          </p>
        </div>
        <div className="border-2 rounded-lg border-blue-400 p-3">
          <h1 className="text-center my-2 text-lg">
            <span className="border-b-2 border-blue-400 pb-1">
              JBL Connect+
            </span>
          </h1>
          <p>
            Amplify your listening experience to epic levels and rock the party
            perfectly by wirelessly connecting more than 100 JBL Connect+
            enabled speakers.
          </p>
        </div>
        <div className="border-2 rounded-lg border-orange-300 p-3">
          <h1 className="text-center my-2 text-lg">
            <span className="border-b-2 border-orange-400 pb-1">
              Durable fabric and rugged material
            </span>
          </h1>
          <p>
            The durable fabric material and rugged rubber housing allows your
            speaker to outlast all of your adventures.
          </p>
        </div>
        <div className="border-2 rounded-lg border-blue-400 p-3">
          <h1 className="text-center my-2 text-lg">
            <span className="border-b-2 border-blue-400 pb-1">
              JBL Bass Radiator
            </span>
          </h1>
          <p>
            Dual passive radiators deliver powerful, ear catching JBL sound that
            resonates loud and clear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
