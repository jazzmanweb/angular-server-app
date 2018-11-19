import {Action} from '@ngrx/store';

export interface ActionInterface<T = undefined> extends Action {
    payload?: T;
}
