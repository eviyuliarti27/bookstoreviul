import { createAction, props } from '@ngrx/store';

export const update = createAction('[Book Component] Update',props<any>());
export const reset = createAction('[Book Component] Reset');