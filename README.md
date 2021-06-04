# THREE Streamlines

[![npm version](https://badge.fury.io/js/three-streamlines.svg)](https://badge.fury.io/js/three-streamlines)

Visualise three dimensional vector fields in browser using stream lines.

![Image of 3D Streamlines](https://3dstreamlines.s3.eu-central-1.amazonaws.com/tornado.png)

Uses [ThreeJS](https://github.com/mrdoob/three.js/)/WebGL for 3D rendering.

Check out the examples:

- [Basic](https://jamesrunnalls.github.io/three-streamlines/example/basic/) ([source](https://github.com/jamesrunnalls/three-streamlines/blob/master/example/basic/index.html))
- [Viewer](https://3dstreamlines.com) ([source](https://github.com/JamesRunnalls/3dstreamlines-viewer))

## Quick start

```
import Streamlines from 'three-streamlines';
```

or

```
<script src="//unpkg.com/three-streamlines"></script>
```

then

```

const streamlines = new Streamlines(data, bounds, options);
scene.add(streamlines.object());
```

## API reference

### data

| Parameter    | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| u            | 3D array of x component of velocity, dims (y,x,z)                 |
| v            | 3D array of y component of velocity, dims (y,x,z)                 |
| w            | 3D array of z component of velocity, dims (y,x,z)                 |
| x (optional) | 1D array of x coordinates (not required if spacing in grid fixed) |
| y (optional) | 1D array of y coordinates (not required if spacing in grid fixed) |
| z (optional) | 1D array of z coordinates (not required if spacing in grid fixed) |

```
{
    "u": [
            [
                [...],
                ...,
                [...]
            ]
            ,...,
            [
                [...],
                ...,
                [...]
            ]
        ],
    "v": [
            [
                [...],
                ...,
                [...]
            ]
            ,...,
            [
                [...],
                ...,
                [...]
            ]
        ],
    "w": [
            [
                [...],
                ...,
                [...]
            ]
            ,...,
            [
                [...],
                ...,
                [...]
            ]
        ],
    "x": [...],
    "y": [...],
    "z": [...],
}
```

### bounds

| Parameter | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| xMin      | Min x coordinate (required if array of x coordinates not included) |
| xMax      | Max x coordinate (required if array of x coordinates not included) |
| yMin      | Min y coordinate (required if array of y coordinates not included) |
| yMax      | Max y coordinate (required if array of y coordinates not included) |
| zMin      | Min z coordinate (required if array of z coordinates not included) |
| zMax      | Max z coordinate (required if array of z coordinates not included) |

```
{
    "xMin": 0,
    "xMax": 1,
    "yMin": 0,
    "yMax": 1,
    "zMin": 0,
    "zMax": 1,
}
```

### options

| Option            | Description                                               | Default  |
| ----------------- | --------------------------------------------------------- | -------- |
| noParticles       | Number of streams to be plotted                           | 10000    |
| maxAge            | Maximum age (number of animation timesteps) of any stream | 200      |
| fadeOutPercentage | Percentage of stream to fade out                          | 0.1      |
| individualColors  | Number of individual colors in color ramp                 | 100      |
| velocityFactor    | Unitless velocity factor to speed up/ slow down streams   | 0.1      |
| min               | Minimum value for color range                             | Data min |
| max               | Maximum value for color range                             | Data max |
| nodata            | Custom no data value                                      | null     |
| colorSource       | Use velocity magnitude or use data.m as color             | false    |
| colors            | Color range                                               | {}       |

```
{
    "noParticles": 10000,
    "maxAge": 200,
    "fadeOutPercentage": 0.1,
    "individualColors": 100,
    "velocityFactor": 0.1,
    "min": 0,
    "max": 0.1,
    "nodata": null,
    "colorSource": false,
    "colors": [
      { color: "#000000", point: 0.0 },
      { color: "#550088", point: 0.14285714285714285 },
      { color: "#0000ff", point: 0.2857142857142857 },
      { color: "#00ffff", point: 0.42857142857142855 },
      { color: "#00ff00", point: 0.5714285714285714 },
      { color: "#ffff00", point: 0.7142857142857143 },
      { color: "#ff8c00", point: 0.8571428571428571 },
      { color: "#ff0000", point: 1.0 },
    ];
}
```
