import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.css'
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent {

}