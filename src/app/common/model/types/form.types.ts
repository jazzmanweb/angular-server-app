import {FormItemModel} from '../models/form-item.model';
import {FormArrayModel} from '../models/form-array.model';
import {FormGroupModel} from '../models/form-group.model';
import { FormHiddenModel } from '../models/form-hidden.model';

export type FormItemType = FormHiddenModel<any> | FormItemModel<any> | FormArrayModel<any> | FormGroupModel<any>;

export type KeyMap<T> = Map<string, T>;
export type FormGroupControls = KeyMap<FormItemModel<any>>;

export type FormGroupBuild = KeyMap<FormItemModel<any> | KeyMap<FormGroupControls>>;
