export default function setRandomName() {
  const randomNames = [
    "Peter Benjamin Parker",
    "Anthony Edward Stark",
    "Robert Bruce Banner",
    "Steven Grant Rogers",
    "Nicholas Joseph Fury",
    "Natalia Alianovna Romanoff",
    "Clinton Francis Barton",
    "Wanda Maximoff",
    "James Buchanan Barnes",
    "T'Challa",
    "Shuri",
    "Jessica Campbell Jones",
    "Carl Lucas",
    "Patricia Walker",
  ];
  const names = randomNames[Math.floor(Math.random() * randomNames.length)];
  return names;
}
