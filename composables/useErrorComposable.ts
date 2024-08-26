import { useErrorStore } from "~/store/errorStore";

export const useErrorComposable = () => {
  const { warningData, triggerWarningModal, closeWarningModal } =
    useErrorStore();

  return {
    warningData,
    triggerWarningModal,
    closeWarningModal,
  };
};
