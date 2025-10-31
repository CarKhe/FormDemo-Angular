import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-generic-button',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './generic-button.html',
  styleUrl: './generic-button.scss',
})
export class GenericButton {
  @Input() label: string = '';
  @Input() color: 'primary' | 'secondary' | 'info' | 'warning' | undefined;
  @Input() type:
    | 'basic'
    | 'elevated'
    | 'outlined'
    | 'filled'
    | 'tonal'
    | 'icon'
    | 'fab'
    | 'mini-fab'
    | 'fab-extended' = 'basic';
  @Input() icon?: string;
  @Input() disabled: boolean = false;
  @Input() emmit: boolean = true;

  @Output() click = new EventEmitter<void>();

  onClick(emmit:boolean) {
    if(emmit) this.click.emit();
  }
}
