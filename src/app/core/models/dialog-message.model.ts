export interface IDialogMessage {

  showInfoMessage(message: string, onOkHandler?: () => void): void;

  showErrorMessage(message: string, onOkHandler?: () => void): void;

  showConfirmMessage(msg: string, onOkHandler: () => void, onCancelHandler?: () => void): void;

}
