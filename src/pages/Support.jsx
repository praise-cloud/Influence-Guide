import Sidebar from "../components/Sidebar";

const Support = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
          <p className="text-lg text-gray-600 text-center">
            Get support for any issues or questions you have.
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;
