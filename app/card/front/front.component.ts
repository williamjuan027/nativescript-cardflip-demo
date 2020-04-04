import { Component, Input } from "@angular/core";

@Component({
    selector: "ns-card-front",
    moduleId: module.id,
    templateUrl: "./front.component.html",
    styleUrls: ["./front.component.css"]
})
export class FrontComponent {

  @Input() backgroundImg: string;
  @Input() tint: string;
  @Input() title: string;

}
