export const updateData = (data, filterTerm) => {
  let filteredData;
  if (filterTerm === 'All') {
    filteredData = data;
  } else {
    filteredData = data.filter(d => d.status === filterTerm);
  }
  return {
    type: 'UPDATE_FILTERED_DATA',
    renderData: filteredData,
    filterStatus: filterTerm,
  };
};
