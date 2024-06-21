import Link from "next/link";
import React from "react";

function CharitySpotlight() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 font-pj">
              Unlock the Power of Collective Support
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
              {/* // */}
            </p>
          </div>

          <div className="relative mt-8 md:mt-16 md:order-2">
            <div className="absolute -inset-1">
              <div
                className="w-full h-full max-w-full opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 overflow-hidden border border-gray-200 divide-y divide-gray-200 md:max-w-none md:grid-cols-3 rounded-xl md:divide-x md:divide-y-0">
              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                  <div className="flex-1"></div>
                  <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                    Contribution
                  </p>
                  <p className="mt-1 text-base text-gray-600 font-pj">
                    Join the Strength of Community
                  </p>

                  <div className="mt-10">
                    <blockquote>
                      <p className="text-lg text-gray-900 font-pj">
                        By depositing monthly premiums, you become part of a
                        larger network that makes financial aid for illness
                        accessible and affordable for all.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                  <div className="flex-1"></div>

                  <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                    Claim
                  </p>
                  <p className="mt-1 text-base text-gray-600 font-pj">
                    Transparency and Fairness Guaranteed
                  </p>

                  <div className="mt-10">
                    <blockquote>
                      <p className="text-lg text-gray-900 font-pj">
                        Leveraging zk proofs attestations, we provide
                        tamper-proof validation of claims, ensuring that every
                        payout is accurate and trustworthy.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                  <div className="flex-1"></div>

                  <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                    Earn
                  </p>
                  <p className="mt-1 text-base text-gray-600 font-pj">
                    Grow Your Wealth with Our Staking
                  </p>

                  <div className="mt-10">
                    <blockquote>
                      <p className="text-lg text-gray-900 font-pj">
                        Not only do you get access to financial aid when you
                        need it, but you also earn yields on your deposited
                        premiums!
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharitySpotlight;