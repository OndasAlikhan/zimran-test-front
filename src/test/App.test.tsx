import App from "@/App";
import { render, screen } from "@/test-utils";

describe("App test", () => {
  it("the header is visible", () => {
    render(<App />);
    expect(screen.getByText("CloudMix")).toBeVisible();
  });

  //   it("should increment count on click", async () => {
  //     render(<App />);
  //     userEvent.click(screen.getByRole("button"));
  //     expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  //   });

  it("uses flexbox in App header", async () => {
    render(<App />);
    const element = screen.getByTestId("header");
    expect(element.className).toContain("flex");
    expect(getComputedStyle(element).display).toEqual("flex");
  });
});
