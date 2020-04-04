import { Component, Input } from "@angular/core";

@Component({
    selector: "ns-card-back",
    moduleId: module.id,
    templateUrl: "./back.component.html",
    styleUrls: ["./back.component.css"]
})
export class BackComponent {

  @Input() description: string;

  constructor() {}

}
