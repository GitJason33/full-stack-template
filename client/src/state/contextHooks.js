import { useContext } from "react";

import { ConfirmContext } from "./ConfirmState";



/** toggle the confirmation box using the global confirm state */
export const useConfirm = () => useContext(ConfirmContext);