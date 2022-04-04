import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div>
          <img
            src="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa2e7e786/JBL_Charge4_Blue_Hero-1605x1605px.png?sw=800&sh=800"
            alt="speaker"
          />
        </div>
        <div className="flex justify-center items-center pl-6 md:p-0">
          <div className="">
            <h1 className="text-5xl font-mono font-bold text-blue-500">
              HEAR SOUND <br />{" "}
              <span className="text-yellow-400">ALL AROUND.</span>
            </h1>
            <br />
            <p
              className="px-8 font-medium border-l-4 border-amber-400"
              title="Introducing the JBL Charge 4 portable Bluetooth speaker with full-spectrum, powerful sound and a built-in power bank to charge your devices. It features a proprietary developed driver and two JBL bass radiators that intensify sound with strong deep bass. Its high-capacity 7500mAh rechargeable Li-ion battery provides up to 20 hours of playtime. The speaker carries a convenient USB charge out to quickly charge your devices, such as your smartphone, so you will never run out of power again. The Charge 4 features a rugged design, IPX7 waterproof rated exterior and comes in a suite of cool colors. Together with JBL Connect+ it can wirelessly link more than 100 JBL Connect+ enabled speakers to elevate your listening experience."
            >
              Introducing the JBL Charge 4 portable Bluetooth speaker with
              full-spectrum, powerful sound and a built-in power bank to charge
              your devices. It features a proprietary developed driver and two
              JBL bass radiators that intensify sound with strong deep bass. Its
              high-capacity 7500mAh rechargeable Li-ion battery provides up to
              20 hours of playtime...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
