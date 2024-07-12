import { createStore } from 'redux';

const namesReducer = (state = JSON.parse(localStorage.getItem('names')) || [], action) => {
  if (action.type === 'ADD_NAME') {
    return [...state, action.payload];
  }
  return state;
};

const store = createStore(namesReducer);

store.subscribe(() => {
  localStorage.setItem('names', JSON.stringify(store.getState()));
});

export default store;
// import { createStore } from 'redux';

// const initialState = JSON.parse(localStorage.getItem('names')) || [];

// const namesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_NAME':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const store = createStore(namesReducer);


// store.subscribe(() => {
//   localStorage.setItem('names', JSON.stringify(store.getState()));
// });

// export default store;