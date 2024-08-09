import React from "react";

export default function About() {
  return (
    <div className="w3-container mb-5" id="about">
      <h3 className="mb-4 w3-center w3-xlarge">
        <b>ABOUT THE PROJECT</b>
      </h3>
      <p className="w3-center w3-xlarge">
        <b>The project have use cases for</b>
      </p>
      <div
        className="w3-row-padding w3-center py-10"
        style={{ marginTop: "64px", backgroundColor: "white" }}
      >
        <div
          className=" w3-half mb-2 px-2 py-3 border-success"
          style={{ border: "1px solid black", borderRadius: "5%" }}
        >
          <i className="fa-solid fa-people-group w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">
            <b>Organizations</b>
          </p>
          <p>
            This system can significantly enhance the hiring process for
            organizations by providing objective and consistent evaluations of
            candidate confidence, thereby reducing biases and improving the
            selection of the most suitable candidates.
          </p>
        </div>
        <div
          className="w3-half px-2 py-3 border-primary"
          style={{ border: "1px solid black", borderRadius: "5%" }}
        >
          <i className="fa-solid fa-person w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">
            <b>Candidates Appearing For Interview</b>
          </p>
          <p>
            Additionally, candidates can use this tool to gauge their confidence
            levels before actual interviews, allowing them to identify areas for
            improvement and better prepare for their interactions with potential
            employers.
          </p>
        </div>
      </div>
    </div>
  );
}
