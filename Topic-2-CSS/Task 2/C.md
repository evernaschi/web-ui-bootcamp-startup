# Task 2 Exercise C
How could you add weight to the global font definition to win over the classes added by point 3?

*Using  attribute selector which gives the rule a higher specificity*
```css
html [class] {
   font-size: 30px; 
}
```
Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to change the background to green without changing the inline style. How could you accomplish this?

*Using !important to override the declaration*
```css
.oh-no-inline-styles {
  background-color: green !important;
}
```