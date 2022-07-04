import { Constants } from 'src/app/shared/constants';
import { map, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Injectable, OnDestroy } from '@angular/core';
import { IDialogMessage } from '../models/dialog-message.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { merge, Observable } from 'rxjs';
import { DialogMessageModalComponent } from '../components/dialog-message-modal/dialog-message-modal.component';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class MatDialogModalService implements IDialogMessage, OnDestroy {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnDestroy() { }

  showMatDialogModal(component: ComponentType<any>, config?: MatDialogConfig<any>): Observable<any> {
    const dialogRef = this.dialog.open(component, { ...config });
    return dialogRef.afterClosed();
  }

  showInfoMessage(message: string, onOkHandler?: () => void): void {
    this.showMatDialogModal(DialogMessageModalComponent, {
      data: {
        titleText: 'Info',
        titleIcon: 'info',
        titleClass: 'info',
        messageText: message,
        onOkHandler: onOkHandler
      },
      width: Constants.modalWith
    })
  }

  showErrorMessage(message: string, onOkHandler: () => void): void {
    this.showMatDialogModal(DialogMessageModalComponent, {
      data: {
        titleText: 'Error',
        titleIcon: '',
        titleClass: 'error',
        messageText: message,
      },
      width: Constants.modalWith
    })
  }

  showConfirmMessage(
    message: string,
    onOkHandler: () => void,
    onCancelHandler = () => { }
  ): void {
    this.showMatDialogModal(DialogMessageModalComponent, {
      data: {
        titleText: 'Confirmation',
        titleIcon: 'info',
        titleClass: 'confirm',
        messageText: message,
        onOkHandler: onOkHandler,
        showCancelBtn: onCancelHandler
      },
      width: Constants.modalWith
    }).subscribe((res) => {
      if (res === 1) {
        onOkHandler();
      } else {
        onCancelHandler();
      }
    });
  }
}

