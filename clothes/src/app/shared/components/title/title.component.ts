import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  title = input<string>();
  section = input<string>();
}
