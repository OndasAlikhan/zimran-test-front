import { store } from "@/store";
import { RenderOptions, cleanup, render } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { afterEach } from "vitest";

type Props = {
  children: ReactNode;
};

afterEach(() => {
  cleanup();
});

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
