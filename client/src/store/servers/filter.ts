import { atom } from "recoil";
import { AtomName } from "../../constant/AtomName";

export const filterTypeAtom = atom<string>({
  key: AtomName.FilterType,
  default: "all",
});

export const filterQueryAtom = atom<string>({
  key: AtomName.FilterQuery,
  default: "",
});

export const filterPageSizeAtom = atom<number>({
  key: AtomName.FilterPageSize,
  default: 50,
});
