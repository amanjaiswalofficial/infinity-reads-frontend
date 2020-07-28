// Library imports
import React from "react"
import ReactDOM from "react-dom"
import { render,  cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"

// Custom imports
import NavBar from 'components/NavBar/navbar'

// Ensure each test case runs separately and cleans after it runs
afterEach(cleanup)

// Test case to ensure component created
it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<NavBar/>, div)
})
