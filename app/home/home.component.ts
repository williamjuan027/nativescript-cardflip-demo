import { Component } from "@angular/core";
import { screen } from "tns-core-modules/platform";

import { CardConfig } from "../card/card-config";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {

    cards: CardConfig[] = [
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/random/400x400', tint: 'yellow', title: 'Mountains', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/random/400x400', tint: '#fff', title: 'Oceans', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/random/400x400', tint: '#fff', title: 'Beaches', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/random/400x400', tint: '#fff', title: 'Lakes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/random/400x400', tint: '#fff', title: 'City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ]

    constructor() {}

}
