import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import ExpediteHero from "../images/expedite/smartphone-expedite-b.png";
// Project Images

import Type from "../images/expedite/type-poppins.png";
import Typeography from "../images/expedite/components.png";
import Store from "../images/expedite/store.jpg";

function Expedite() {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-screen">
        <div className="paragraph x-2 py-2 text-lg">🥸</div>
        <img
          className="object-contain h-full w-full mx-auto ratio-square bg-sky-600"
          src={ExpediteHero}
          alt="ExpediteImage"
        />
      </div>
      {/* Hero Project Info */}
      <div className="w-full py-24 bg-sky-600">
        <div className="container mx-auto grid gap-y-3 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
          <div className="col-span-4  text-white flex flex-col justify-end">
            <div className="flex items-center gap-x-2">
              <div className="paragraph  opacity-80 text-white">Role</div>
              <div className="paragraph  text-white">UX/UI</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="paragraph  opacity-80 text-white">Platform</div>
              <div className="paragraph  text-white">Mobile</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="paragraph  opacity-80 text-white">Timeline</div>
              <div className="paragraph  text-white">
                2022, April to Current
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="paragraph  opacity-80 text-white">Team</div>
              <div className="paragraph  text-white">Myself</div>
            </div>
          </div>
          {/* Hero Project Description */}
          <div className="col-span-4 flex flex-col gap-y-6">
            <div className="h2 text-white">
              <span className="opacity-80">
                I'm working as the sole designer on the{" "}
              </span>{" "}
              <span className="font-semibold">Expedite</span>{" "}
              <span className="opacity-80">
                product for Dynamics CXS. I'm working to redesign their previous
                interface to simplify user journeys, introduce new features &
                establish a brand identity for their products.
              </span>
            </div>
            <div className="h4  text-white">
              <span className="opacity-80">
                Expedite works to connect floor employees with warehouse
                employees in retail stores. It communicates with the warehouse
                to ready a product for customer pickup. It seamlessly manages
                the communication between pickup and customer via SMS.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Text */}

      <div className="w-full px-2 py-12 bg-slate-50 ">
        {/* Container for Gray BKG */}
        <div className="container mx-auto max-w-5xl">
          {/* Responsive Container */}
          <div className="grid grid-col-2 gap-24 justify-center items-center  auto-cols-fr">
            {/* Grid Whole Container */}
            <div className="sm:col-span-2">
              <div className="h3 mb-2">
                Streamlining the pickup-in-store process
              </div>
              <div className="paragraph ">
                Expedite organizes the complex systems behind the
                pickup-in-store process. The mobile application manages the
                communication between customer facing and warehouse employees in
                retail stores at each step in the process.
              </div>
            </div>

            <div className="sm:hidden"></div>
            <img
              className="h-auto w-full sm:col-span-2"
              src={Store}
              alt="BeaconsImage"
            />
            <div className="sm:col-span-2">
              <div className="h3 mb-2">Customer Profile</div>
              <div className="paragraph ">
                A goal we had was to add new features to the expedite flow,
                specifically the customer profile. The customer profile was made
                to vastly improve customer satisfaction during the customer
                journey. The customer profile needed to be integrated with the
                already complex CXP user journey for customer facing employees.
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2">Readying for Soft Launch</div>
              <div className="paragraph ">
                Another goal while working on Expedite was readying the product
                for soft launch. This meant that speed was the name of the game.
                For this reason, we needed a design system to aid in the
                consistency and speed for designing and developing pages.
              </div>
            </div>

            <div className="sm:hidden"></div>
            <img
              className="h-auto w-full sm:col-span-2"
              src={Typeography}
              alt="BeaconsImage"
            />

            <div className="sm:col-span-2">
              <div className="h3 mb-2">Improving Typographic Hierarchy</div>
              <div className="paragraph ">
                Building type styles to be used across all the expedite
                application was a design challenge I faced. The amount of
                information needed to pack into the small components made the
                texts styles more extensive, and required more attention to
                hierarchy.
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2">Making a Consistent Design Language</div>
              <div className="paragraph ">
                The main purpose of the design system, in the case of expedite,
                was to create consistency across multiple applications. Working
                with already existing brand colors, I was able to build a
                solidified and documented design system.
              </div>
            </div>

            <div className="sm:hidden"></div>

            <div className="paragraph sm:col-span-2">
              <div className="bg-[#F7F9FA] w-96 h-96 ratio-square rounded-full border sm:w-full sm:h-24">
                100
              </div>
            </div>
            <div className="paragraph sm:col-span-2">
              <div className="bg-[#C2C7CA] w-96 h-96 ratio-square rounded-full  sm:w-full sm:h-24">
                400
              </div>
            </div>
            <div className="paragraph sm:col-span-2">
              <div className="bg-[#1A262C] w-96 h-96 ratio-square rounded-full  sm:w-full sm:h-24">
                800
              </div>
            </div>
            <div className="paragraph sm:col-span-2">
              <div className="bg-[#CFFF00] w-96 h-96 ratio-square rounded-full  sm:w-full sm:h-24">
                Secondary
              </div>
            </div>
            <div className="col-span-2 paragraph sm:col-span-2">
              <div className="bg-blue-500 w-auto h-96 ratio-square rounded-full  sm:w-full sm:h-24">
                Primary
              </div>
            </div>

            <div className="col-span-2">
              <img className="h-auto w-full" src={Type} alt="ExpediteImage" />
            </div>
            <div className="sm:col-span-2">
              <div className="h3 mb-2">More Coming Soon!</div>
              <div className="paragraph ">
                This product is still the process of being worked on! I'm
                excited to show updates on this project as it gets further in
                its development.
              </div>
            </div>

            {/* End - Project Text */}
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Expedite;
