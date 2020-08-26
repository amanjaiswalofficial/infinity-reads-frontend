// Library imports
import React from "react"
import { render,  cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

// Custom imports
import LandingPage from '../index'
import data from 'data/profile.json'
import Contributors from "containers/Contributors";

afterEach(() => {
    cleanup()
})

// test if all components rendered correctly as well
it("Landing page rendered correctly", () => {
    const {getByRole} = render(<LandingPage/>)
    expect(getByRole("main")).toHaveTextContent("Aman Jaiswal")
})

// test if all profile cards in Contributors rendered correctly
it("Contributors and ProfileCards rendered correctly", () => {
    const {getAllByTestId} = render(<LandingPage><Contributors data={data}/></LandingPage>)

    // check if all profile cards rendered with correct data
    for(var index=0; index<data.length; index++){

        let name = data[index].name
        let github = data[index].github
        let profileImage = data[index].profileImage

        expect(getAllByTestId("userName")[index]).toHaveTextContent(name)
        expect(getAllByTestId("githubURL")[index]).toHaveAttribute("href", github)
        expect(getAllByTestId("profileImage")[index]).toHaveAttribute("src", profileImage)
    }

})
