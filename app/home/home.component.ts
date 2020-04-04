import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements AfterViewInit {

    @ViewChild('front', { read: ElementRef, static: true }) front: ElementRef;
    @ViewChild('back', { read: ElementRef, static: true }) back: ElementRef;

    private isFront: boolean = true;
    private isAnimating: boolean = false;

    constructor() {
    }

    ngAfterViewInit(): void {
        this.back.nativeElement.rotateX = 180;
        this.back.nativeElement.translateY = -50;
        this.back.nativeElement.opacity = 0;
    }

    flip(): void {
        if (!this.isAnimating) {
            this.isAnimating = true;
            if (this.isFront) {
                this.flipToBack().then(() => this.isFront = false);
            } else {
                this.flipToFront().then(() => this.isFront = true);
            }
        }
    }

    flipToBack() {
        const animationDefinition = [
            {
                target: this.front.nativeElement,
                rotate: { x: -180, y: 0, z: 0 },
                translate: { x: 0, y: -50 },
                duration: 500
            },
            {
                target: this.back.nativeElement,
                rotate: { x: 0, y: 0, z: 0 },
                translate: { x: 0, y: 0 },
                duration: 500
            },
            {
                target: this.back.nativeElement,
                opacity: 1,
                delay: 250,
                duration: 1
            },
            {
                target: this.front.nativeElement,
                opacity: 0,
                delay: 250,
                duration: 1
            }
        ];
        const animation = new Animation(animationDefinition, false);
        return animation.play().then(() => this.isAnimating = false).catch(err => console.log('err', err));
    }

    flipToFront() {
        const animationDefinition = [
            {
                target: this.front.nativeElement,
                rotate: { x: 0, y: 0, z: 0 },
                translate: { x: 0, y: 0 },
                duration: 500
            },
            {
                target: this.back.nativeElement,
                rotate: { x: 180, y: 0, z: 0 },
                translate: { x: 0, y: - 50 },
                duration: 500
            },
            {
                target: this.back.nativeElement,
                opacity: 0,
                delay: 250,
                duration: 1
            },
            {
                target: this.front.nativeElement,
                opacity: 1,
                delay: 250,
                duration: 1
            }
        ];
        const animation = new Animation(animationDefinition, false);
        return animation.play().then(() => this.isAnimating = false).catch(err => console.log('err', err));
    }
}
