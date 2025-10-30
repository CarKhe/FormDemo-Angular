import { Component } from '@angular/core';
import { GenericButton } from '../../shared/components/generic-button/generic-button';
import { MatDialog } from '@angular/material/dialog';
import { GenericModal } from '../../shared/components/generic-modal/generic-modal';
import { TablaUsuario } from '../tabla-usuario/tabla-usuario';

@Component({
  selector: 'app-modal-acciones',
  imports: [GenericButton],
  templateUrl: './modal-acciones.html',
  styleUrl: './modal-acciones.scss',
})
export class ModalAcciones {
  constructor(private dialog: MatDialog) {}

  abrirConfirmacion() {
    const dialogRef = this.dialog.open(GenericModal, {
      data: {
        title: '¿Eliminar usuario?',
        content: 'Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('✅ Usuario eliminado');
      } else {
        console.log('❌ Cancelado');
      }
    });
  }

  modalConComponene() {
    const dialogRef = this.dialog.open(GenericModal, {
      data: {
        title: '¿Eliminar usuario?',
        content: 'Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar',
        component: TablaUsuario  //Cualquier componente que se desee poner en el dialog
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('✅ Usuario eliminado');
      } else {
        console.log('❌ Cancelado');
      }
    });
  }
}
