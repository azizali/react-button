# Configurable Button

Create a `Button` component

1. Button component takes three props
    - `to` destination the button will take you to
    - `type` type of element, button, input, anchor link
    - `value` text to show for the button
1. Depending on the props passed, the `Button` component will render appropriate button

1. Extra credit: Pass `class props` to style the button as well

## Example Input and Output
```
<Button
  to="https://google.com"
  type="anchor"
  value="Go To google"
/>

<a href="https://google.com">Go To Google</a>

---
<Button
  type="input"
  value="Go To google"
/>
<input type="button" value="Go To Google" />

---
<Button
  type="button"
  value="Go To google"
/>

<button>Go To Google</button>
```
