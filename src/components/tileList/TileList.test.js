import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { TileList } from "./TileList";

describe("TileList", () => {
    const items = [
        { name: "Item 1", description: "Description 1" },
        { name: "Item 2", description: "Description 2" },
        { name: "Item 3", description: "Description 3" }
    ];

    it("renders a div element with the id 'tileList'", () => {
        const { container } = render(<TileList items={items} />);
        expect(container.querySelector("#tileList")).toBeInTheDocument();
    });
});