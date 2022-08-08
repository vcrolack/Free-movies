// key is the key that found on local storage and item is the element that we want to save on local storage
export const SaveStorage = (key, item) => {

  // get elements already on storage
  let items = JSON.parse(localStorage.getItem(key));
  console.log(items)

  // verify length
  if(Array.isArray(items)) {
    // save new item 
    items.push(item);
  } else {
    // create new array with movies
    items =[item];
  }

  // save on local storage
  localStorage.setItem(key, JSON.stringify(items));

  // return object
  return item;
};