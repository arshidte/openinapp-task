import React from "react";
import Sidebar from "../Components/Sidebar";
import DragAndDrop from "../Components/DragAndDrop";

const Home = () => {
  return (
    <div>
      <div className="md:flex">
        <Sidebar />

        <div className="main-content mt-9">
          <div className="justify-between hidden md:flex">
            <h1 className="text-2xl font-semibold">Upload CSV</h1>
            <div className="flex items-center gap-7">
              <svg
                width="18"
                height="23"
                viewBox="0 0 18 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 13.3255V9.20108C16 5.5011 13.815 2.38423 10.855 1.44687C10.562 0.59807 9.846 0 9 0C8.154 0 7.438 0.59807 7.145 1.44687C4.185 2.38538 2 5.5011 2 9.20108V13.3255L0.293001 15.2887C0.199958 15.3954 0.126171 15.5221 0.0758854 15.6617C0.0256001 15.8012 -0.000189449 15.9508 1.04767e-06 16.1019V18.4022C1.04767e-06 18.7072 0.105358 18.9997 0.292894 19.2154C0.480431 19.4311 0.734785 19.5523 1 19.5523H17C17.2652 19.5523 17.5196 19.4311 17.7071 19.2154C17.8946 18.9997 18 18.7072 18 18.4022V16.1019C18.0002 15.9508 17.9744 15.8012 17.9241 15.6617C17.8738 15.5221 17.8 15.3954 17.707 15.2887L16 13.3255ZM16 17.252H2V16.578L3.707 14.6148C3.80004 14.5081 3.87383 14.3814 3.92412 14.2419C3.9744 14.1023 4.00019 13.9527 4 13.8016V9.20108C4 6.03016 6.243 3.45041 9 3.45041C11.757 3.45041 14 6.03016 14 9.20108V13.8016C14 14.1076 14.105 14.3997 14.293 14.6148L16 16.578V17.252ZM9 23.0027C9.6193 23.0036 10.2235 22.7826 10.7285 22.3703C11.2335 21.9581 11.6143 21.3751 11.818 20.7024H6.182C6.38566 21.3751 6.76648 21.9581 7.27151 22.3703C7.77654 22.7826 8.3807 23.0036 9 23.0027Z"
                  fill="black"
                />
              </svg>
              <img src="images/person.png" alt="person" />
            </div>
          </div>
          <div className="h-[80vh] overflow-hidden md:flex justify-center items-center">
            <div className="bg-white p-5 rounded-md">
              <DragAndDrop />
            </div>
          </div>

          <div className="uploaded-table">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
