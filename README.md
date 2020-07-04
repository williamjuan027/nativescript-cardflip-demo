# Nativescript Card Flip

This app is a demonstration of how to create a card flip effect utilizing Nativescript's 3d rotation. [Here](https://nativescripting.com/posts/cardflip-animation-in-nativescript) is a more in depth explanation of how this was done.

![demo](https://github.com/williamjuan027/nativescript-cardflip-demo/blob/master/screenshots/screenshot.gif)

## Development
This app is built with the NativeScript CLI. Once you have the [CLI](https://docs.nativescript.org/start/quick-setup) installed, start by cloning the repo:  
```
git clone https://github.com/williamjuan027/nativescript-cardflip-demo
cd nativescript-cardflip-demo
```

From there you can use the `run` command to run the app on iOS:  
```
tns run ios
```

And the same command to run the app on Android:  
```
tns run android
```

**Note:** Cards are set up in the [`card`](https://github.com/williamjuan027/nativescript-cardflip-demo/blob/master/app/card/) directory with the the front and back components in their respective folders.

## Using the same Element for both sides of the card

In order to use the same component/image on both the front and back (backwards version of the component/image) to create an illusion of flipping between the front and back of a single 2d object, you will need to apply a transformation to the content of the back of the card to reverse it in either the x or y direction depending on the desired flip animation direction by setting either `scaleX` or `scaleY` to -1.

```html
<GridLayout #back>
  <GridLayout
      scaleX="-1"   <!-- ADD THIS (or scaleY="-1") -->
  >
    <!-- back side card contents -->
  </GridLayout>
</GridLayout>
```
