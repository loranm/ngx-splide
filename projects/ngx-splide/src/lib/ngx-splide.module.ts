import { NgModule } from "@angular/core";
import { NgxSplideComponent } from "./ngx-splide.component";
import { NgxSplideSlideComponent } from "./ngx-splide-slide.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [NgxSplideComponent, NgxSplideSlideComponent],
    exports: [NgxSplideComponent, NgxSplideSlideComponent],
})
export class NgxSplideModule {}
