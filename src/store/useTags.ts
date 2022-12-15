import create from "zustand";

interface TagsProps {
  tag: String;
  setTag: (tag: String) => void;
  searchTerm: String;
  setSearchTerm: (searchTerm: String) => void;
}

export const useTags = create<TagsProps>((set) => ({
  tag: "Tous",
  setTag: (tag: String) => set(() => ({ tag })),
  searchTerm: "",
  setSearchTerm: (searchTerm: String) => set(() => ({ searchTerm })),
}));
