import axiosClient from '../axiosclient';
export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
      .then(({ data }) => {
        commit('setSearchedMeals', data.meals);
      })
  }