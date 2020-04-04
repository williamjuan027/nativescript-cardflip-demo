import { Component, AfterViewInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
import { AnimationCurve } from "tns-core-modules/ui/enums";

import { CardConfig } from "./card-config";

const ANIMATION_DURATION = 700;

@Component({
    selector: "ns-card",
    moduleId: module.id,
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})
export class CardComponent implements AfterViewInit {

    @Input() config: CardConfig[];

    @ViewChild('front', { read: ElementRef, static: true }) front: ElementRef;
    @ViewChild('back', { read: ElementRef, static: true }) back: ElementRef;

    private isFront: boolean = true;
    private isAnimating: boolean = false;

    constructor() {}

    ngAfterViewInit(): void {
        this.initializeCards();
    }

    flip(): void {
        if (!this.isAnimating) {
            this.isAnimating = true;
            if (this.isFront) {
                this.getFlipToBackAnimation().play().then(() => {
                  this.isFront = false;
                  this.isAnimating = false;
                }).catch(err => {
                  console.log('err', err);
                  this.initializeCards();
                  this.isAnimating = false;
                });
            } else {
              this.getFlipToFrontAnimation().play().then(() => {
                this.isFront = true;
                this.isAnimating = false;
              }).catch(err => {
                console.log('err', err);
                this.initializeCards();
                this.isAnimating = false;
              });
            }
        }
    }

    private getFlipToBackAnimation(animationDuration: number = ANIMATION_DURATION): Animation {
        const animationDefinition: AnimationDefinition[] = [
            {
                target: this.front.nativeElement,
                rotate: { x: -180, y: 0, z: 0 },
                duration: animationDuration,
                curve: AnimationCurve.easeInOut
            },
            {
                target: this.back.nativeElement,
                rotate: { x: 0, y: 0, z: 0 },
                translate: { x: 0, y: 0 },
                duration: animationDuration,
                curve: AnimationCurve.easeInOut
            },
            {
                target: this.back.nativeElement,
                opacity: 1,
                delay: animationDuration / 2,
                duration: 1
            },
            {
                target: this.front.nativeElement,
                opacity: 0,
                delay: animationDuration / 2,
                duration: 1
            }
        ];
        return new Animation(animationDefinition, false);
    }

    private getFlipToFrontAnimation(animationDuration: number = ANIMATION_DURATION): Animation {
        const animationDefinition: AnimationDefinition[] = [
            {
                target: this.front.nativeElement,
                rotate: { x: 0, y: 0, z: 0 },
                duration: animationDuration,
                curve: AnimationCurve.easeInOut
            },
            {
                target: this.back.nativeElement,
                rotate: { x: 180, y: 0, z: 0 },
                duration: animationDuration,
                curve: AnimationCurve.easeInOut
            },
            {
                target: this.back.nativeElement,
                opacity: 0,
                delay: animationDuration / 2,
                duration: 1
            },
            {
                target: this.front.nativeElement,
                opacity: 1,
                delay: animationDuration / 2,
                duration: 1
            }
        ];
        return new Animation(animationDefinition, false);
    }

    private initializeCards(): void {
      this.back.nativeElement.rotateX = 180;
      this.back.nativeElement.opacity = 0;
    }

}
