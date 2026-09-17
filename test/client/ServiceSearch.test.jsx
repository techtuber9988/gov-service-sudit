import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServiceSearch } from "../../client/src/components/ServiceSearch.jsx";

const mockService = {
  id: "svc-001",
  name: "eSanjeevani - National Telemedicine Service",
  description: "Consult a doctor remotely.",
  url: "https://www.india.gov.in/services/details/esanjeevani",
  thumbnail: "https://via.placeholder.com/64",
  thumbnailAlt: "Icon for Telemedicine service",
};

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ count: 1, results: [mockService] }),
  });
});

describe("ServiceSearch accessibility contract", () => {
  it("labels the search input so it has an accessible name (fixes WEB-005 pattern)", () => {
    render(<ServiceSearch />);
    expect(
      screen.getByLabelText(/search by service name or keyword/i)
    ).toBeInTheDocument();
  });

  it("provides descriptive alt text for result images, not a placeholder like 'Loading...' (fixes WEB-001)", async () => {
    render(<ServiceSearch />);
    const image = await screen.findByAltText(mockService.thumbnailAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockService.thumbnail);
  });

  it("puts the section under a single h2, not a duplicated/ambiguous heading (fixes WEB-004)", () => {
    render(<ServiceSearch />);
    expect(
      screen.getByRole("heading", { level: 2, name: /search public services/i })
    ).toBeInTheDocument();
  });

  it("gives each result link a destination-specific accessible name, not a bare 'View All' (fixes WEB-003)", async () => {
    render(<ServiceSearch />);
    const link = await screen.findByRole("link", {
      name: `View details for ${mockService.name}`,
    });
    expect(link).toHaveAttribute("href", mockService.url);
  });
});
