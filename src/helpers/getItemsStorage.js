export const getItemsStorage = key => {
  let items = JSON.parse(localStorage.getItem(key));

  if (Array.isArray(items)) {
    return items;
  } else {
    return {msg: "Data doesn't exists on local storage"};
  }
}