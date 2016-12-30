const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FILTERED_DATA':
      return {
        ...state,
        dataRender: action.renderData,
        filterStatus: action.filterStatus,
      };
    default:
      return state;
  }
};

export default reducer;
