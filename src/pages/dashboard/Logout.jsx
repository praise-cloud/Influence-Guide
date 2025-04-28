import Sidebar from "../../components/dashboard/Sidebar";

const Logout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Logout</h1>
          <p className="text-lg text-gray-600 text-center">
            You have been logged out.
          </p>
        </div>
      </div>
    </>
  );
};

export default Logout;
