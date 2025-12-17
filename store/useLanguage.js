import { create } from "zustand";

const useLanguage = create((set, get) => ({
    isArabic: false,

    toggleLanguage: () => {
        console.log(get());
        set((state) => ({ isArabic: !state.isArabic }));
    },
}));

export default useLanguage;
