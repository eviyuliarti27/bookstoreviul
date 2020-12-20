import { createReducer, on } from '@ngrx/store';
import { initialBook, loadBookState, saveBookState } from './book-local';
import { update, reset } from './book.action';

export const initialState = loadBookState(); // menggambarkan jika si statenya 0

// action
const _bookReducer = createReducer(
  initialState,
  on(update, (state:any, prop) => { 
    saveBookState({ ...state, ...prop })
    return { ...state, ...prop }
  }),

  on(reset, (state) => {
    saveBookState(Object.assign({}, { ...initialBook }))
    return Object.assign({}, { ...initialBook });
})
);


// function reducer yg isinya ada state and action
export function bookReducer(state :any, action:any) {
  return _bookReducer(state, action);
}
