// import React
import React from "react";
// helper functions to run tests
import { render, cleanup } from "@testing-library/react";
// component dependencies
import Application from "components/Application";

afterEach(cleanup);

// Test if Application renders //------------------------------
it("renders without crashing", () => {
  render(<Application />);
});
