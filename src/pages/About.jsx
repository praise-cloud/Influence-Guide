// import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              About Our Company
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We are dedicated to helping you manage and grow your online
              presence with our comprehensive social media management services.
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Our Mission
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Empowering Your Online Presence
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Our mission is to provide top-notch social media management
              services that help businesses grow their online presence and
              engage with their audience effectively.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Our Vision
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Leading the Way in Social Media Management
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              We envision a world where businesses of all sizes can leverage the
              power of social media to achieve their goals and connect with
              their customers in meaningful ways.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Meet Our Team
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Dedicated Professionals
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Our team of experts is passionate about social media and committed
              to helping you succeed.
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://via.placeholder.com/150"
                alt="John Doe"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
                <p className="mt-2 text-sm text-gray-600">CEO & Founder</p>
                <p className="mt-4 text-base text-gray-600">
                  John is the visionary behind our company, leading the team
                  with passion and dedication.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://via.placeholder.com/150"
                alt="Jane Smith"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Jane Smith
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Chief Marketing Officer
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Jane is responsible for our marketing strategies and ensuring
                  our client success.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://via.placeholder.com/150"
                alt="Michael Johnson"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Michael Johnson
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Head of Development
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Michael leads our development team, ensuring our platform is
                  cutting-edge and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Our Services
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Comprehensive Social Media Management
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              We offer a range of services to help you manage and grow your
              social media presence.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <CloudArrowUpIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  Content Creation
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  We create engaging content tailored to your brand and
                  audience.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <LockClosedIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  Account Management
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  We manage your social media accounts to ensure consistent and
                  effective engagement.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <ArrowPathIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  Analytics and Reporting
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  We provide detailed analytics and reports to track your social
                  media performance.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FingerPrintIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  Strategy Development
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  We develop customized social media strategies to help you
                  achieve your goals.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
