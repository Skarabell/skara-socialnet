import React from "react";
import ProfileStatus from "./ProfileStatus";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("SUBSCRIBE TO BASIC");
    });

test("(testing the wrong way!)", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span).not.toBeNull();
});
    test("(input must off!)", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
});