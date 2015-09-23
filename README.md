# getControlPoints

Barebones method for deriving control points given start, end, and base.
An implementation of http://scaledinnovation.com/analytics/splines/aboutSplines.html

## `getControlPoints`

Get control points for a bezier curve, given start and end locations
and a base for the curve shape.
thanks to http://scaledinnovation.com/analytics/splines/aboutSplines.html

### Parameters

* `a` **`Array<number>`** start point
* `b` **`Array<number>`** end point
* `base` **`number`**


### Examples

```js
getControlPoints([0, 0], [10, 10], 1.5);
```
