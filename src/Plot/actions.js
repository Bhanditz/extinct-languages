export const updateSelectedLang = (name) => {
  return {
    type: 'UPDATE_SELECTED_LANG',
    selectedLang: name,
  };
};

export const updateStatusFilter = (status, checkArr) => {
  let newArr;
  const checkSet = new Set(checkArr);
  // TODO clean up this mess
  if (status === 'All') {
    newArr = ['Vulnerable', 'Definitely endangered', 'Critically endangered', 'Severely endangered', 'Extinct'];
  } else {
    if (checkArr.length === 5) {
      newArr = [status];
    } else {
      const containsStatus = checkSet.has(status);
      if (containsStatus) {
        newArr = checkArr.filter(d => d !== status);
      } else {
        newArr = checkArr.slice();
        newArr.push(status);
      }
    }
  }
  return {
    type: 'UPDATE_FILTERED_DATA',
    showStatus: newArr,
  };
};
