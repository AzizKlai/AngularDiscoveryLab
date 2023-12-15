import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Observable, combineLatest, map, timer } from "rxjs";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent {
  @Input() time = 1000;
  @Input() size = 150;

  slider$: Observable<string>;
  images$: Observable<any>;
  constructor(private http: HttpClient) {
       this.images$ = this.http.get("https://jsonplaceholder.typicode.com/photos");
    this.slider$ = combineLatest([timer(0, this.time), this.images$]).pipe(
      map(([index, images]) => images[index % images.length].url)
    );
  }
}
