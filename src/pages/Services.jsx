// import React from "react";
import services from "../constant/services";

const Services = () => {
  return (
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
            We offer a range of services to help you manage and grow your social
            media presence.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-lg font-medium text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
