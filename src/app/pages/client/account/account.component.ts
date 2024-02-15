import { Component } from '@angular/core';
import { FooterAccountComponent } from "../components-client/footer-account/footer-account.component";
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-account',
    standalone: true,
    templateUrl: './account.component.html',
    styleUrl: './account.component.css',
    imports: [FooterAccountComponent, RouterOutlet]
})
export class AccountComponent {

}
