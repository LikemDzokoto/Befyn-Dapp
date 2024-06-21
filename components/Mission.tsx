import React, { useState } from "react";

const Mission = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl xl:text-4xl font-pj">
            Experience the Future of Insurance with Us!
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Discover a new era of insurance that puts you first. Our innovative
            approach combines cutting-edge technology with a customer-centric
            mindset, ensuring a seamless and rewarding experience.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <img
              className="w-14 h-14 mx-auto opacity-70"
              src="/images/support.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Customizable Insurance Packages
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Enjoy flexibility like never before! Our insurance packages are
              tailored to your unique needs, providing comprehensive coverage
              that adapts to your lifestyle.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img
              className="w-14 h-14 mx-auto"
              src="/images/transparency.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Befyn Insurance Claim Score
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Say goodbye to uncertainty! Our proprietary Claim Score technology
              provides a clear and transparent assessment of your claims
              history, empowering you to make informed decisions.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img
              className="w-14 h-14 mx-auto opacity-[0.85]"
              src="/images/onboarding.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Unparalleled Transparency and Governance
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Trust is at the core of our business. We maintain the highest
              standards of transparency, accountability, and strict governance,
              ensuring your peace of mind.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <img
              className="w-14 h-14 mx-auto opacity-[0.85]"
              src="/images/product.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Rewards from Pool Stake
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Be part of a shared success! Our pool stake rewards program
              distributes a portion of the pool's returns to policyholders,
              giving you a tangible benefit for your loyalty.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img
              className="w-14 h-14 mx-auto"
              src="/images/quality.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Intuitive User Interface
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Experience the ease of our user-friendly platform, designed to
              simplify your insurance journey. Easily manage your policies,
              track claims, and access support – all in one place!
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img
              className="w-14 h-14 mx-auto opacity-90"
              src="/images/result.png"
              alt=""
            />
            <h3 className="mt-12 text-xl font-bold text-gray-800 font-pj">
              Efficient Claim Proving and Pool Management
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Our advanced technology streamlines the claims process, ensuring
              swift and accurate resolution. Plus, our expert pool management
              maximizes returns and minimizes risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mission;