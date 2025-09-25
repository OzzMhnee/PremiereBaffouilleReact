# Extraits de code REACT #

## LowerCase, Uppercase, Capitalize 
In the same order
```jsx
{MOT.toLowerCase()} // mot
{mot.toUpperCase()} // MOT
{mot.chatAt(0).toUpperCase() + mot.slide(1)} // Mot
// Pour capitalize une phrase, utlisation de split(' ')
//          foreach mot dans phrase : {mot.chatAt(0).toUpperCase() + mot.slide(1)}
//          join(" ")
```