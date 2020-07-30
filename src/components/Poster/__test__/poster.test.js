// Library imports
import React from "react"
import ReactDOM from "react-dom"
import { render,  cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

// Custom imports
import Poster from 'components/Poster/poster'
import image from 'assets/img/wallpaper.png'

// Ensure each test case runs separately and cleans after it runs
afterEach(cleanup)

// Test case to ensure component created
it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Poster imageSrc={image}/>, div)
})

// Test case to ensure image loaded successfully
it("renders with correct image", () => {
    const { getByTestId } = render(<Poster imageSrc={image}/>)
    expect(getByTestId("component-poster")).toHaveAttribute("src", image)
})
