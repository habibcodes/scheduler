import React from "react";
// helper functions to run tests
import { render, cleanup } from "@testing-library/react";

// import Application from "components/Application";
import Appointment from "components/Appointment";

afterEach(cleanup);

// Test if Appointment renders//------------------------------
describe("Appointment", () => {

  it("renders without crashing", () => {
    render(<Appointment />);
  });
  
});