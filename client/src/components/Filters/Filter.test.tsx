import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import {
  filterPageSizeAtom,
  filterQueryAtom,
  filterTypeAtom,
} from "../../store/servers/filter";
import { RecoilObserver } from "../../testHelpers/RecoilObserver";
import { Filter } from "./Filter";

describe("Filters", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it("render default Filter", () => {
    render(
      <RecoilRoot>
        <Filter />
      </RecoilRoot>
    );

    expect(
      screen.getByPlaceholderText("e.g. Amsterdam or HP Intel Xeon")
    ).toBeInTheDocument();

    expect(screen.getByTestId("filter-type")).toBeInTheDocument();
    expect(screen.getByTestId("page-size")).toBeInTheDocument();
  });

  it("checks input onchange function", async () => {
    const onChange = jest.fn();
    render(
      <RecoilRoot>
        <Suspense fallback="loading">
          <RecoilObserver node={filterQueryAtom} onChange={onChange} />
          <Filter />
        </Suspense>
      </RecoilRoot>
    );

    fireEvent.change(
      screen.getByPlaceholderText("e.g. Amsterdam or HP Intel Xeon"),
      { target: { value: "some-info" } }
    );

    await waitFor(() => {
      expect(onChange).toBeCalledWith("some-info");
    });
  });

  it("checks filter type onchange function", () => {
    const onChange = jest.fn();
    render(
      <RecoilRoot>
        <RecoilObserver node={filterTypeAtom} onChange={onChange} />
        <Filter />
      </RecoilRoot>
    );

    userEvent.selectOptions(screen.getByTestId("filter-type"), "location");

    expect(onChange).toBeCalledWith("location");
  });

  it("checks page size onchange function", () => {
    const onChange = jest.fn();
    render(
      <RecoilRoot>
        <RecoilObserver node={filterPageSizeAtom} onChange={onChange} />
        <Filter />
      </RecoilRoot>
    );

    userEvent.selectOptions(screen.getByTestId("page-size"), "50");

    expect(onChange).toBeCalledWith(50);
  });
});
