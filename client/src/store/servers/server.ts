import { atom, selector, selectorFamily } from "recoil";
import { AtomName } from "../../constant/AtomName";
import { ServerResponse } from "../types/Server";
import { filterPageSizeAtom, filterQueryAtom, filterTypeAtom } from "./filter";

export const serversAtom = atom<ServerResponse | undefined>({
  key: AtomName.Servers,
  default: undefined,
});

export const currentPageAtom = atom<number>({
  key: AtomName.CurrentPageAtom,
  default: 1,
});

export const buildUrl = (
  query: string,
  filterType: string,
  pageSize: number,
  currentPage: number
) => {
  let url = `http://localhost:8000/servers/${filterType}`;

  if (filterType === "all") {
    url += `?page=${currentPage}&total=${pageSize}&search=${query}`;
    return url;
  }

  if (!query) {
    return undefined;
  }

  return `${url}/${query}?page=${currentPage}&total=${pageSize}`;
};

export const serversSelectors = selectorFamily<ServerResponse, undefined>({
  key: AtomName.ServersSelector,
  get:
    () =>
    async ({ get }) => {
      const query = get(filterQueryAtom);
      const filterType = get(filterTypeAtom);
      const pageSize = get(filterPageSizeAtom);
      const currentPage = get(currentPageAtom);

      const url = buildUrl(query, filterType, pageSize, currentPage);

      if (!url) {
        return { servers: [], total: 0 };
      }

      const servers = await fetch(url).then((res) => res.json());
      return servers;
    },
});

export const paginationSelectors = selector<number>({
  key: AtomName.PaginateSelector,
  get: ({ get }) => {
    const pageSize = get(filterPageSizeAtom);
    const servers = get(serversSelectors(undefined));

    return Math.ceil(servers.total / pageSize);
  },
});
