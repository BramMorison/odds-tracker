import React from "react";

const GetDataButton = (props) => (
  <button 
        onClick={props.handleGetRequest}
        >
          GetData
        </button>
)

export default GetDataButton;