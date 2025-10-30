import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export type SnackbarType = 'success' | 'error' | 'info' | 'warning';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackBar = inject(MatSnackBar);

   show(message: string, type: SnackbarType = 'info', duration: number = 3000) {
    const panelClass = this.getPanelClass(type);

    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  private getPanelClass(type: SnackbarType): string[] {
    switch (type) {
      case 'success': return ['snackbar-success'];
      case 'error':   return ['snackbar-error'];
      case 'warning': return ['snackbar-warning'];
      default:        return ['snackbar-info'];
    }
  }
}
