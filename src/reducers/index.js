const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FILTERED_DATA':
      return {
        ...state,
        dataRender: action.renderData,
        filterStatus: action.filterStatus,
      };
    case 'UPDATE_SELECTED_LANG':
      return {
        ...state,
        selectedLang: action.selectedLang,
      };
    default:
      return state;
  }
};

export default reducer;
