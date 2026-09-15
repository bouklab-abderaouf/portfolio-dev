import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import ContactForm from "./ContactForm";

const originalFetch = global.fetch;
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  global.fetch = originalFetch;
  jest.useRealTimers();
});

function fillForm() {
  fireEvent.change(screen.getByLabelText(/Your name/), {
    target: { value: "Alex Morgan" },
  });
  fireEvent.change(screen.getByLabelText(/Email address/), {
    target: { value: "alex@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/What’s it about/), {
    target: { value: "Engineering opportunity" },
  });
  fireEvent.change(screen.getByLabelText(/Your message/), {
    target: { value: "I would like to discuss an engineering role." },
  });
}

test("sends the visitor's details and resets only after confirmed success", async () => {
  let finish;
  global.fetch.mockReturnValue(
    new Promise((resolve) => {
      finish = resolve;
    }),
  );
  render(<ContactForm />);
  fillForm();
  const form = screen.getByRole("form", { name: "Send a message" });
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
  expect(screen.getByLabelText(/Your message/)).toBeDisabled();
  const [url, options] = global.fetch.mock.calls[0];
  expect(url).toBe("https://api.web3forms.com/submit");
  expect(options.method).toBe("POST");
  expect(JSON.parse(options.body)).toMatchObject({
    access_key: expect.any(String),
    name: "Alex Morgan",
    email: "alex@example.com",
    subject: "Engineering opportunity",
    message: "I would like to discuss an engineering role.",
  });
  await act(async () => {
    finish({ ok: true, json: async () => ({ success: true }) });
  });
  expect(screen.getByRole("status")).toHaveTextContent("Message sent.");
  expect(screen.getByLabelText(/Your message/)).toHaveValue("");
  expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
});

test.each([
  [
    "HTTP failure",
    () =>
      Promise.resolve({ ok: false, json: async () => ({ success: false }) }),
  ],
  [
    "service rejection",
    () => Promise.resolve({ ok: true, json: async () => ({ success: false }) }),
  ],
  ["network failure", () => Promise.reject(new Error("offline"))],
  [
    "invalid response",
    () =>
      Promise.resolve({
        ok: true,
        json: async () => {
          throw new Error("invalid JSON");
        },
      }),
  ],
])("keeps the message available after %s", async (_, response) => {
  global.fetch.mockImplementation(response);
  render(<ContactForm />);
  fillForm();
  fireEvent.submit(screen.getByRole("form", { name: "Send a message" }));
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled(),
  );
  expect(screen.getByLabelText(/Your message/)).toHaveValue(
    "I would like to discuss an engineering role.",
  );
  expect(screen.getByRole("status")).not.toHaveTextContent("Message sent.");
  expect(screen.getByRole("status").textContent).toMatch(/kept|still here/);
});

test("rejects blank and whitespace-only required fields before making a request", () => {
  render(<ContactForm />);
  fireEvent.submit(screen.getByRole("form", { name: "Send a message" }));
  expect(global.fetch).not.toHaveBeenCalled();
  fillForm();
  fireEvent.input(screen.getByLabelText(/Your name/), {
    target: { value: "   " },
  });
  fireEvent.submit(screen.getByRole("form", { name: "Send a message" }));
  expect(global.fetch).not.toHaveBeenCalled();
});

test("times out a stalled request without losing the draft or leaving the form locked", async () => {
  jest.useFakeTimers();
  global.fetch.mockImplementation(
    (_, { signal }) =>
      new Promise((resolve, reject) => {
        signal.addEventListener("abort", () =>
          reject(new DOMException("Aborted", "AbortError")),
        );
      }),
  );
  render(<ContactForm />);
  fillForm();
  fireEvent.submit(screen.getByRole("form", { name: "Send a message" }));
  await act(async () => {
    jest.advanceTimersByTime(20000);
  });
  expect(screen.getByRole("status")).toHaveTextContent(
    "couldn’t confirm delivery",
  );
  expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  expect(screen.getByLabelText(/Your message/)).toHaveValue(
    "I would like to discuss an engineering role.",
  );
});
