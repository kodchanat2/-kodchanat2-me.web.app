export const state = () => ({
  darkMode: true,
});

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode;
  },
};
