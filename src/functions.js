export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const indexOfClosest = (num, arr) => {
  var index = 0;
  var diff = Math.abs(num - arr[0]);
  for (var val = 0; val < arr.length; val++) {
    var newdiff = Math.abs(num - arr[val]);
    if (newdiff < diff) {
      diff = newdiff;
      index = val;
    }
  }
  return index;
};

export const getBinaryColor = (value, min, max, colors) => {
  function trim(s) {
    return s.charAt(0) === "#" ? s.substring(1, 7) : s;
  }
  function convertToRGB(hex) {
    var color = [];
    color[0] = parseInt(trim(hex).substring(0, 2), 16);
    color[1] = parseInt(trim(hex).substring(2, 4), 16);
    color[2] = parseInt(trim(hex).substring(4, 6), 16);
    color[3] = 255;
    return color;
  }
  if (value === null || isNaN(value)) {
    return [255, 255, 255, 0];
  }
  if (value > max) {
    return convertToRGB(colors[colors.length - 1].color);
  }
  if (value < min) {
    return convertToRGB(colors[0].color);
  }
  var loc = (value - min) / (max - min);
  if (loc < 0 || loc > 1) {
    return [255, 255, 255, 0];
  } else {
    var index = 0;
    for (var i = 0; i < colors.length - 1; i++) {
      if (loc >= colors[i].point && loc <= colors[i + 1].point) {
        index = i;
      }
    }
    var color1 = convertToRGB(colors[index].color);
    var color2 = convertToRGB(colors[index + 1].color);

    var f =
      (loc - colors[index].point) /
      (colors[index + 1].point - colors[index].point);
    var rgb = [
      (color1[0] + (color2[0] - color1[0]) * f) / 255,
      (color1[1] + (color2[1] - color1[1]) * f) / 255,
      (color1[2] + (color2[2] - color1[2]) * f) / 255,
      1,
    ];

    return rgb;
  }
};

export const size = (a) => {
  var dim = [];
  var arr, len, index;
  for (;;) {
    arr = a.map((aa) => (Array.isArray(aa) ? aa.length : 0));
    len = Math.max(...arr);
    index = arr.indexOf(len);
    dim.push(a.length);
    if (len > 0) {
      a = a[index];
    } else {
      break;
    }
  }
  return dim;
};
