import React from "react";
import { Link } from "react-router-dom";
import Review from "../Review/Review";
import LoadReviews from "./../Hooks/LoadReviews";
const Home = () => {
  const [reviews, setReviews] = LoadReviews();
  return (
    <div>
      {/* homepage banner section */}
      <div className="grid md:grid-cols-2">
        <div>
          <img
            src="https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa2e7e786/JBL_Charge4_Blue_Hero-1605x1605px.png"
            alt="speaker"
          />
        </div>
        <div className="flex justify-center items-center pl-6 md:p-0">
          <div className="">
            <h1 className="text-6xl font-mono font-bold text-blue-500">
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
      {/* homepage review section */}
      <div className="mb-5">
        <h1 className="text-center text-4xl font-medium">
          Customer Reviews ({reviews.length})
        </h1>
        <div className="grid md:grid-cols-3 gap-10 ml-7 md:p-10">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <span className="flex justify-center my-5 md:my-0">
          <Link
            to="/reviews"
            className="bg-indigo-300 font-medium text-white hover:bg-indigo-600 px-8 py-2 rounded-full"
          >
            See All Reviews
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
