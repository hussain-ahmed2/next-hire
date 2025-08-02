import { create } from "zustand";

type State = {
	isOpen: boolean;
};

type Actions = {
	open: () => void;
	close: () => void;
	toggle: () => void;
};

const useAdminDashboardStore = create<State & Actions>((set) => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useAdminDashboardStore;
