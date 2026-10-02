import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-my-squad',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, IgxButtonDirective],
  templateUrl: './my-squad.component.html',
  styleUrls: ['./my-squad.component.scss']
})
export class MySquadComponent {}
