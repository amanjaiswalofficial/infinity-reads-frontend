// Library imports
import React from "react"
import ReactDOM from "react-dom"
import { render,  cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"

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

// Test case to create and compare snapshot of poster component
// NOTE: Since we aren't applying any props or property to the component
// Hence no change can be tested, and kept only as reference for future
it("matches snapshot", () => {
    const tree = renderer.create(<Poster imageSrc={image}/>).toJSON()
    expect(tree).toMatchSnapshot()
})
