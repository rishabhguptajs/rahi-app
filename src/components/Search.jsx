import React from "react";
const Search = () => {
  return (
    <>
      <div className="mt-5 mx-auto w-max bg-customgrey">
        <form className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
          <div className="flex items-center border-r-2 border-gray-300 pr-0">
            <span className="text-xl text-red-500">
              {/* <i className="ri-map-pin-line"></i>
              <i class="bi bi-chevron-compact-down"></i> */}
            </span>
            <div>
              <div className="flex ">
                <h6 className="mb-0 ">Location</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="Orange"
                  class="bi bi-chevron-compact-down self-center ml-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-customgrey text-sm font-medium text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center border-r-2 border-gray-300 pr-4">
            <span className="text-xl text-red-500">
            </span>
            <div>
              <h6 className="mb-0">Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                className="bg-customgrey border-none text-sm font-medium text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center pr-4">
            <span className="text-xl text-red-500">
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6 className="mb-0">Max People</h6>
              <input
                type="number"
                placeholder="0"
                className="bg-customgrey border-none text-sm font-medium text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <span
            className="text-lg p-2 bg-red-500 text-white rounded-lg cursor-pointer"
            // onClick={searchHandler}
          >
            <i className="ri-search-line"></i>
          </span>
        </form>
      </div>
    </>
  );
};

export default Search;
