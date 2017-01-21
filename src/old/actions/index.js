export const updateData = (data, filterTerm) => {
  const filteredData = data.filter(d => d.key === filterTerm)[0].values;
  return {
    type: 'UPDATE_FILTERED_DATA',
    renderData: filteredData,
    filterStatus: filterTerm,
  };
};

export const updateSelectedLang = (datum) => {
  return {
    type: 'UPDATE_SELECTED_LANG',
    selectedLang: datum,
  };
};
