# Event Delegation Off

Test project of 3000 buttons each with its own click handler. So, there are 3000 event listeners total.

## Demo

https://test-event-delegation-off.now.sh/

## Source Code

See full source code [here](https://github.com/thawsitt/test-event-delegation-off/blob/master/src/App.js).

```jsx
{ids.map((id) => (
  <FancyButton
    key={id}
    id={id}
    label={id}
    isSelected={selectedItems.has(id)}
    onClick={() => handleClick(id)}
  />
))}
```

## Event Delegation On

Compare to the version using event delegation here: https://github.com/thawsitt/test-event-delegation-on
