export const getRandomColor = () => {
  const colors = [
    "hsl(216, 85%, 34%)", // primary
    "hsl(207, 89%, 86%)", // secondary
    "hsl(207, 90%, 61%)", // accent
    "hsl(205, 87%, 94%)", // muted
  ];

  const directions = [
    "to right",
    "to left",
    "to bottom",
    "to top",
    "to bottom right",
    "to bottom left",
    "to top right",
    "to top left",
  ];

  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  const direction = directions[Math.floor(Math.random() * directions.length)];

  return `linear-gradient(${direction}, ${color1}, ${color2})`;
};
