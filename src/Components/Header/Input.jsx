import React from "react";

function Input() {
  return (
    <div>
      <div className="search_input">
        <form>
          <input type="text" placeholder="Esya ve ya xıdmet axtarısı" />
          <button className="search_btn">
            <svg
              height="15"
              viewBox="0 0 15 15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g  fill="#8D94AD" >
                <path
                  d="M14.772 13.663L11.074 9.95c.95-1.092 1.472-2.464 1.472-3.894C12.546 2.716 9.732 0 6.273 0 2.814 0 0 2.717 0 6.056c0 3.34 2.814 6.056 6.273 6.056 1.298 0 2.536-.378 3.594-1.095l3.726 3.74c.155.157.365.243.59.243.212 0 .413-.078.566-.22.325-.302.336-.803.023-1.117zM6.272 1.58c2.558 0 4.637 2.008 4.637 4.476 0 2.469-2.08 4.477-4.636 4.477-2.557 0-4.637-2.008-4.637-4.477 0-2.468 2.08-4.476 4.637-4.476z"
                  transform="translate(-25 -158) translate(15 146) translate(10 12)"
                ></path>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
