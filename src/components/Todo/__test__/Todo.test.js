import {render, screen, fireEvent} from "@testing-library/react";
import Todo from "../Todo";
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i});

    tasks.forEach((task) => {
        fireEvent.change(inputElement, {
            target: {
                value: task
            }
        });
        fireEvent.click(buttonElement);
    })
}

describe("Todo", () => {
    it("should render input Todo component", async () => {
        render(<MockTodo/>);
        const todo = screen.getByTestId("todo");
        expect(todo).toBeInTheDocument();
    })

    it("should render the same text passed into title prop", async () => {
        render(<MockTodo/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", {name: /Add/i});

        fireEvent.change(inputElement, {
            target: {
                value: "Go Grocery Shopping"
            }
        });
        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    })

    it("should render correct amount of tasks", async () => {
        render(<MockTodo/>);
        addTask(["Buy some food", "Walk the dog", "Read a book"]);

        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3)
    })

    it("task should not have completed class when initially rendered", async () => {
        render(<MockTodo/>);
        addTask(["Buy some food"]);

        const divElement = screen.getByText(/Buy some food/i);
        expect(divElement).not.toHaveClass("todo-item-active")
    })

    it("task should have completed class when clicked", async () => {
        render(<MockTodo/>);
        addTask(["Buy some food"]);

        const divElement = screen.getByText(/Buy some food/i);
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })

})