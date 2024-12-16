export default function NewProject() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 bg-black text-white flex flex-col p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Planlet</h1>
           <hr className="border-gray-600 mb-6" />
          <button className="text-left mb-4 hover:text-gray-300">+ New project</button>
          <button className="text-left hover:text-gray-300">◉ Projects</button>
        </div>
  
        {/* Main Content */}
        <div className="w-full md:w-4/5 bg-gradient-to-br from-green-900 to-blue-900 text-white p-6 sm:p-8">
          {/* Page Header */}
          <div className="mb-20">
            <button className="text-2xl mb-4">&larr; New project</button>
            <h2 className="text-sm sm:text-lg font-semibold mt-9 mb-2 text-center md:text-left">
              Elaborate on the primary emphasis, unique attributes, and creative strategies of your enterprise.
            </h2>
          </div>
  
          {/* Form Grid */}
          <div className="grid grid-cols-1 ml-16 md:grid-cols-2  gap-6">
            {/* Business Type */}
            <div>
              <label className="block mb-1 text-gray-300">Business Type</label>
              <textarea
                rows="2"
                className="w-2/3 bg-gray-800 text-gray-300 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
            <div className="">
              <label className="block mb-1 text-gray-300">Business Type</label>
              <textarea
                rows="2"
                className="w-2/3 bg-gray-800 text-gray-300 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
  
            {/* Target Audience */}
            <div>
              <label className="block mb-1 text-gray-300">Target Audience</label>
              <textarea
                rows="2"
                className="w-2/3 bg-gray-800 text-gray-300 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block mb-1 text-gray-300">Goals</label>
              <textarea
                rows="2"
                className="w-2/3 bg-gray-800 text-gray-300 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
  
            {/* Special Events */}
            <div>
              <label className="block mb-1 text-gray-300">Special Events or Themes</label>
              <textarea
                rows="2"
                className="w-2/3 bg-gray-800 text-gray-300 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block mb-1 text-gray-300">Number of Posting Days per Month</label>
              <textarea
                rows="2"
                className="w-2/3 bg-gray-800 text-gray-300 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
          </div>
  
          {/* Footer Text */}
            <div className="mt-10 flex justify-center">
            <div className="bg-gray-800 text-gray-300 p-4 sm:p-6 rounded-md  w-full md:w-3/4 text-center shadow-md">
                <p className="text-sm sm:text-base">
                Describe your plan, and we’ll create the{" "}
                <span className="text-pink-400 font-semibold">perfect calendar for you.</span>
                </p>
            </div>
            </div>
        </div>
      </div>
    );
  }
  