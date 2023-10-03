import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Tile } from "./Tile";

describe("Tile", () => {
    const name = "Tile Name";
    const description = {
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3"
    };

    it("renders the tile name", () => {
        const { getByText } = render(<Tile name={name} description={description} />);
        expect(getByText(name)).toBeInTheDocument();
    });

    it("renders the tile values", () => {
        const { getByText } = render(<Tile name={name} description={description} />);
        Object.values(description).forEach((value) => {
            expect(getByText(value)).toBeInTheDocument();
        });
    });
});