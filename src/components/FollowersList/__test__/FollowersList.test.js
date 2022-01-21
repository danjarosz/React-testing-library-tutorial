import {render, screen} from "@testing-library/react";
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    beforeEach(() => {
        console.log("Run before each test.")
    })

    beforeAll(() => {
        console.log("Run once before all tests")
    })

    afterEach(() => {
        console.log("Run after each test.")
    })

    afterAll(() => {
        console.log("Run once after all tests")
    })

    it("should render input FollowersList component", async () => {
        render(<MockFollowersList/>);
        const component = await screen.findByTestId("FollowersList");
        expect(component).toBeInTheDocument();
    })

    it("should render first follower item", async () => {
        render(<MockFollowersList/>);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
    })

    it("should render 5 follower items", async () => {
        render(<MockFollowersList/>);
        const followerDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElements.length).toBe(5);
    })
})