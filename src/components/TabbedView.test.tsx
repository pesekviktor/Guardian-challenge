import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TabbedView } from "./TabbedView";

describe("TabbedViewTest", () => {
  it("MatchSnapshot", () => {
    const { container } = render(
      <TabbedView
        tabs={[
          { tabLabel: "FirstHeader", renderTab: () => "FirstCmp" },
          { tabLabel: "SecondHeader", renderTab: () => "SecondCmp" },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders and selects first component by default", () => {
    render(
      <TabbedView
        tabs={[
          { tabLabel: "FirstHeader", renderTab: () => "FirstCmp" },
          { tabLabel: "SecondHeader", renderTab: () => "SecondCmp" },
        ]}
      />
    );
    const linkElement = screen.getByText(/FirstCmp/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Selects the second tab on header click", () => {
    render(
      <TabbedView
        tabs={[
          { tabLabel: "FirstHeader", renderTab: () => "FirstCmp" },
          { tabLabel: "SecondHeader", renderTab: () => "SecondCmp" },
        ]}
      />
    );
    const linkElement = screen.getByText(/FirstHeader/i);
    fireEvent.click(linkElement);
    expect(screen.getByText(/FirstCmp/i)).toBeInTheDocument();
  });
});
