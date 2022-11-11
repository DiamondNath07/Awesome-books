const storageKey = 'awesomeBooks';
   function loadDataFromLocalStorage() {
    const dataLoaded = JSON.parse(localStorage.getItem(storageKey));
    if (dataLoaded == null) {
      return [];
    } else {
      return dataLoaded;
    }
  }

  function saveDataToLocalStorage(arrBooks) {
    localStorage.setItem(storageKey, JSON.stringify(arrBooks));
  }

  export { loadDataFromLocalStorage, saveDataToLocalStorage}


