import { useContext } from "react";

import { ConfirmContext } from "./state/ConfirmState";
import { LoadingContext } from "./state/LoadingState";
import { AlertContext } from "./state/AlertState";



/** toggle the confirmation box using the global confirm state */
export const useConfirm = () => useContext(ConfirmContext);


/** toggle the confirmation box using the global confirm state */
export const useAlert = () => useContext(AlertContext);


/** toggle loading screen using the global loading state */
export const useLoading = () => useContext(LoadingContext);