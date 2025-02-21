import missionImage from "../assets/images/About Image.jpeg";
const About = () => {
  return (
    <div>
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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl text-center">
            About Influencer Guide
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Influencer Guide is a comprehensive social media management platform
            designed to help you grow and manage your online presence
            effectively. Our mission is to provide you with the tools and
            insights you need to succeed in the digital world.
          </p>
        </div>
      </div>

      {/* Our Mission section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              At Influencer Guide, our mission is to empower businesses and
              individuals to harness the power of social media. We believe that
              with the right tools and strategies, anyone can build a strong
              online presence and achieve their goals.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-4 text-base text-gray-600">
                We are committed to staying ahead of the curve and continuously
                improving our platform to meet the evolving needs of our users.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Integrity</h3>
              <p className="mt-4 text-base text-gray-600">
                We believe in conducting our business with honesty and
                transparency, building trust with our users and partners.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Customer Success
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Our users' success is our success. We are dedicated to providing
                exceptional support and resources to help you achieve your
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-4 text-center text-lg leading-8 text-gray-600">
            Influencer Guide was founded with the vision of making social media
            management accessible and effective for everyone. Our journey began
            with a small team of passionate individuals who saw the potential of
            social media to transform businesses and lives. Today, we are proud
            to serve thousands of users worldwide, helping them navigate the
            complexities of the digital landscape.
          </p>
        </div>
      </div>

      {/* Contact Us section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-center text-lg leading-8 text-gray-600">
            Have questions or need assistance? Our team is here to help. Reach
            out to us at support@influencerguide.com or call us at (123)
            456-7890.
          </p>
        </div>
      </div>

      {/* Newsletter Sign-Up section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-center text-lg leading-8 text-gray-600">
            Subscribe to our newsletter to get the latest updates and insights.
          </p>
          <div className="mt-10 flex justify-center">
            <form className="w-full max-w-md">
              <div className="flex items-center border-b border-gray-300 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button
                  className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
