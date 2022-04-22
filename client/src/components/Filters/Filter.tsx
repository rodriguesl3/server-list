import React, { Suspense, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useDebounce } from "../../hooks/useDebounce";
import {
  filterPageSizeAtom,
  filterQueryAtom,
  filterTypeAtom,
} from "../../store/servers/filter";
import { Pagination } from "../Paginations/Pagination";
import {
  FilterContainer,
  FilterOptions,
  StyledFixedBar,
  StyledInput,
  StyledSearchBox,
  StyledSelectOptions,
} from "./Filter.style";

import MagGlass from "../../asset/magnifying-glass.svg";

export function Filter() {
  const [filterType, setFilterType] = useRecoilState(filterTypeAtom);
  const [pageSize, setPageSize] = useRecoilState(filterPageSizeAtom);
  const [term, setTerm] = useState("");
  const setFilterQuery = useSetRecoilState(filterQueryAtom);

  const debounceValue = useDebounce(term, 500);

  useEffect(() => {
    setFilterQuery(debounceValue);
  }, [setFilterQuery, debounceValue]);

  return (
    <StyledFixedBar>
      <FilterContainer>
        <StyledSearchBox>
          <StyledInput
            type="search"
            name="filter"
            placeholder="e.g. Amsterdam or HP Intel Xeon"
            value={term}
            onChange={(ev) => setTerm(ev.target.value)}
          />
          <img src={MagGlass} alt="Search icon" />
        </StyledSearchBox>
        <FilterOptions>
          <label htmlFor="filter-type">Filter Type:</label>
          <StyledSelectOptions
            name="filter-type"
            onChange={(ev) => setFilterType(ev.target.value)}
            data-testId="filter-type"
          >
            <option selected={filterType === "name"} value="name">
              name
            </option>
            <option selected={filterType === "location"} value="location">
              location
            </option>
            <option selected={filterType === "all"} value="all">
              all
            </option>
          </StyledSelectOptions>

          <label htmlFor="page-size">Items:</label>
          <StyledSelectOptions
            name="page-size"
            onChange={(ev) => setPageSize(+ev.target.value)}
            data-testId="page-size"
          >
            <option selected={pageSize === 50} value={50}>
              50
            </option>
            <option selected={pageSize === 100} value={100}>
              100
            </option>
            <option selected={pageSize === 200} value={200}>
              200
            </option>
          </StyledSelectOptions>
        </FilterOptions>
      </FilterContainer>
      <Suspense fallback={<div>loading...</div>}>
        <Pagination />
      </Suspense>
    </StyledFixedBar>
  );
}
