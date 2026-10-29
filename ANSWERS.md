# 1. Practical task. Basics. Components


## 1. What is the default value of flexDirection in React Native? How is it different from CSS on the web?

The default value is column, so it aligns the children in a vertical way.
On the other hand, in CSS, when you use display: flex, CSS defaults it to 'row'.
Also, something I learned with this, is that in React Native, every 'View' Container is already a Flex Container, while in CSS you have to enable it manually.

## 2. What is the difference between justifyContent and alignItems?
The first one, justifyContent, it distributes the children along the main axis (which is set by flexDirection).
alignItems aligns them along the cross axis, the perpendicular one.
In a column, the main axis is vertical, and in a row it's horizontal, so the two properties swap directions

## 3. What does flex: 1 do inside a row? And on the outermost View of a screen?
It makes each child take the same space of the available width, which is why the three stats and buttons got the same size.
About the outermost view of a screen, It makes the view fill all the available space instead of shrinking to its content. 
This allows with justifyContent:center to center the card vertically.

## 4. What is the difference between resizeMode="cover" and resizeMode="contain"?
cover will scale the image uniformly and will maintain the aspect ratio to fill the whole container, but crops whatever overflows.
contain will scale the image so it fits completely inside the container, also keeping its ratio, which can leave empty space around it.

## 5. Why do we use StyleSheet.create instead of plain objects inside the JSX?
It helps to organize and reuse styles, defining the styles once outside the component, so the objects are not recreated on every render. It also improves code readability and gives better editor support (autocomplete and type checking), making components easier to maintain.

## 6. Why does a shadow written with shadowColor not appear on Android?
Because shadow* props (color, Offset, opacity, Radius)  are only in iOS, Android draws shadows using the elevation prop, that's why for the shadows of the card, we needed to use Platform.select  in order to apply each set on its own platform