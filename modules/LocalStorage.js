const storageKey = 'awesomeBooks';
const loadDataFromLocalStorage = () => {
  const dataLoaded = JSON.parse(localStorage.getItem(storageKey));
  if (dataLoaded == null) {
    return [];
  }
  return dataLoaded;
};

const saveDataToLocalStorage = (arrBooks) => {
  localStorage.setItem(storageKey, JSON.stringify(arrBooks));
};

export { loadDataFromLocalStorage, saveDataToLocalStorage };
