export default function SetRandomColor() {
  return "#" + Math.floor(Math.random() * 16777216).toString(16);
}
