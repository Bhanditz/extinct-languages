const PAD = 3;

export const NAME = 'BEESWARM';
export const SVG = {
  width: 800,
  height: 400,
  pad: PAD,
  Plot: {
    radius: 3,
    radiusBuffer: 2,
  },
};

export const statusColors = [
  { status: 'Vulnerable', color: '#fee5d9' },
  { status: 'Definitely endangered', color: '#fcae91' },
  { status: 'Critically endangered', color: '#fb6a4a' },
  { status: 'Severely endangered', color: '#de2d26' },
  { status: 'Extinct', color: '#a50f15' },
  { status: 'All', color: 'black' },
];
