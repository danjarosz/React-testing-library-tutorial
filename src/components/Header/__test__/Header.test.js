import {render, screen} from '@testing-library/react';
import Header from "../Header";

describe("getBy methods", () => {
    it('should render same text passed into title prop (using getByText)', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });

    // it('should render same text passed into title prop (using getByRole)', () => {
    //     render(<Header title="My Header"/>);
    //     const headingElement = screen.getByRole("heading");
    //     expect(headingElement).toBeInTheDocument();
    // });

    it('should render same text passed into title prop (using getByRole)', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByRole("heading", {name: "My Header"});
        expect(headingElement).toBeInTheDocument();
    });

    // it('should render same text passed into title prop (using getByTitile)', () => {
    //     render(<Header title="My Header"/>);
    //     const headingElement = screen.getByTitle("Header");
    //     expect(headingElement).toBeInTheDocument();
    // });

    it('should render same text passed into title prop (using getByTestId)', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByTestId("header-1");
        expect(headingElement).toBeInTheDocument();
    });

    // it('should render same text passed into title prop (using getAllByRole)', () => {
    //     render(<Header title="My Header"/>);
    //     const headingElements = screen.getAllByRole("heading");
    //     expect(headingElements.length).toBe(2);
    // });
});

describe("findBy methods", () => {
    it('should render same text passed into title prop (using findByText)', async () => {
        render(<Header title="My Header"/>);
        const headingElement = await screen.findByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
});

describe("queryBy methods", () => {
    it('should not render same text passed into title prop (using queryByText)', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.queryByText(/dogs/i);
        expect(headingElement).not.toBeInTheDocument();
    });
});





