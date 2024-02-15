import { Component } from '@angular/core';
import { AccountComponent } from "../account.component";

@Component({
    selector: 'app-singup',
    standalone: true,
    templateUrl: './singup.component.html',
    styleUrl: './singup.component.css',
    imports: [AccountComponent]
})
export class SingupComponent {

}
