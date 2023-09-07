import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSizeEnum, ButtonThemeEnum } from '@components/button/button.enum';

@Component({
  selector: 'nm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() theme: ButtonThemeEnum = ButtonThemeEnum.Primary;
  @Input() size: ButtonSizeEnum = ButtonSizeEnum.Medium;
  @Input() disabled?: boolean;
  @Input() loading?: boolean;
  @Input() singleIcon?: boolean;

  @Output() btnClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let classes = ['nm-btn', `nm-btn_${this.theme}`, `nm-btn_${this.size}`];

    if (!!this.singleIcon) {
      classes = [...classes, 'nm-btn_single-icon'];
    }

    if (!!this.disabled) {
      classes = [...classes, 'nm-btn_disabled'];
    }

    if (!!this.loading) {
      classes = [...classes, 'nm-btn_loading'];
    }

    return classes;
  }
}


