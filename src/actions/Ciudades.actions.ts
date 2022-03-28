import { Dispatch } from "redux";
import { UiActionsEnum } from "../reducers/ui";


export const showLoading = (show: boolean) => ({
    type: UiActionsEnum.ShowLoading,
    payload: show
});

export const msgError = (error: boolean) => ({
    type: UiActionsEnum.uiSetError,
    payload: error
});