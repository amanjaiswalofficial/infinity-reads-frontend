// Library imports
import React from "react"
import { render,  cleanup } from "@testing-library/react"

// Custom imports
import NavBar from 'components/NavBar/navbar'


afterEach(() => {
    cleanup()
})

// Sample test case to test if component rendered correctly
it("Should ensure Navbar rendered correctly", () => {
    render(<NavBar/>)
})
