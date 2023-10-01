import { ChatPage } from "@/modules/chat/pages/ChatPage/ChatPage";
import { render, screen } from "@/test-utils";

describe("ChatPage test", () => {
  it("the header is visible", async () => {
    render(<ChatPage />);
    expect(await screen.findByText(/Messages/i)).toBeInTheDocument();
  });

  //   it("should increment count on click", async () => {
  //     render(<ChatPage />);
  //     userEvent.click(screen.getByRole("button"));
  //     expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  //   });
});
