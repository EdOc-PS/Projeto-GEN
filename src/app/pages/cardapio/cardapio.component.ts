import { Component } from '@angular/core';
import { HeaderCardapioComponent } from "./components-pages/header-cardapio/header-cardapio.component";
import { FooterCardapioComponent } from "./components-pages/footer-cardapio/footer-cardapio.component";
import { SectionHighlightComponent } from "./components-pages/section-highlight/section-highlight.component";
import { SectionFilterComponent } from "./components-pages/section-filter/section-filter.component";
import { SectionFoodsComponent } from "./components-pages/section-foods/section-foods.component";

@Component({
    selector: 'app-cardapio',
    standalone: true,
    templateUrl: './cardapio.component.html',
    styleUrls: ['./cardapio.component.css', './cardapio-media.component.css'],
    imports: [
    HeaderCardapioComponent, FooterCardapioComponent,SectionHighlightComponent,
    SectionFilterComponent, SectionFoodsComponent
  ]
})
export class CardapioComponent {

}
