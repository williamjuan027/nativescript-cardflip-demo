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
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/400x400/?chicago', tint: '#5A85A3', title: 'Chicago', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/400x400/?seattle', tint: '#5A85A3', title: 'Seattle', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/400x400/?newyork', tint: '#5A85A3', title: 'New York', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/400x400/?miami', tint: '#5A85A3', title: 'Miami', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { width: screen.mainScreen.widthDIPs, height: screen.mainScreen.widthDIPs, backgroundImage: 'https://source.unsplash.com/400x400/?boston', tint: '#5A85A3', title: 'Boston', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ];

}
