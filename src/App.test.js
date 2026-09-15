import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
  HTMLMediaElement.prototype.pause = jest.fn();
  HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue();
});

test("the product switch reveals its system while preserving context and stopping playback", () => {
  render(<App />);
  const title = screen.getByText("AI jewelry generation");
  fireEvent.click(screen.getByRole("button", { name: "Under the hood" }));
  expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
  expect(
    screen.getByRole("button", { name: "Under the hood" }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("Generation request")).toBeVisible();
  expect(title).toBeVisible();
  expect(
    screen.getByLabelText("AI jewelry generation recorded demo"),
  ).not.toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "In use" }));
  const video = screen.getByLabelText("AI jewelry generation recorded demo");
  expect(video).toBeVisible();
  expect(video).toHaveAttribute("autoplay");
  expect(video).toHaveAttribute("loop");
  expect(video).not.toHaveAttribute("controls");
  expect(video.muted).toBe(true);
  expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
  expect(screen.queryByText("Generation request")).not.toBeInTheDocument();
});

test("a case study opens with the relevant evidence and restores focus when closed", () => {
  render(<App />);
  const trigger = screen.getByRole("button", {
    name: "Read Production AI pipelines case study",
  });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = screen.getByRole("dialog");
  expect(
    within(dialog).getByRole("heading", { name: "Reported results" }),
  ).toBeVisible();
  expect(
    within(dialog).getByRole("link", { name: /Open architecture dossier/ }),
  ).toHaveAttribute("href", "/production-ai-architecture.pdf");
  expect(document.body.style.overflow).toBe("hidden");
  fireEvent.click(
    within(dialog).getByRole("button", { name: "Close case study" }),
  );
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe("");
  expect(trigger).toHaveFocus();
});

test("the archive recording can be revealed and closed", () => {
  render(<App />);
  fireEvent.click(
    screen.getByRole("button", { name: /Watch the original demo/ }),
  );
  expect(
    screen.getByLabelText("Cryptocurrency visualizer recorded demo"),
  ).toHaveAttribute("controls");
  fireEvent.click(screen.getByRole("button", { name: /Close the recording/ }));
  expect(
    screen.queryByLabelText("Cryptocurrency visualizer recorded demo"),
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Download my résumé" }),
  ).toHaveAttribute("download");
});
