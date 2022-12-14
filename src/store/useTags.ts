import create from "zustand";

interface TagsProps {
  tag: String;
  setTag: (tag: String) => void;
}

export const useTags = create<TagsProps>((set) => ({
  tag: "Tous",
  setTag: (tag: String) => set(() => ({ tag })),
}));
