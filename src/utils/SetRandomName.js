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
    "James Howlett",
    "Wade Wilson",
    "Carol Susan Jane Danvers",
    "Thor Odinson",
    "Reed Richards",
    "Janet van Dyne",
    "Henry Jonathan Pym",
    "Pietro Maximoff",
    "Victor Shade",
    "Dane Whitman",
    "Henry McCoy",
    "Samuel Thomas Wilson",
    "Jennifer Walters",
    "Monica Rambeau",
    "James Rupert Rhodes",
    "Scott Lang",
    "Amadeus Cho",
    "Cassandra Lang",
    "Jessica Drew",
    "Sharon Carter",
    "Stephen Vincent Strange",
    "Thaddeus E. Ross",
    "Matthew Murdock",
    "Brian Braddock",
    "Eugene Thompson",
    "Anna Marie",
    "Victor Creed",
    "Miles Morales",
    "Johnny Storm",
    "Melissa Gold",
    "Nathan Summers",
    "Nadia van Dyne",
    "Robert Maverick",
    "Robbie Reyes",
    "Kate Bishop",
    "Gwen Poole",
    "Francis Castle",
    "Eddie Brock",
    "Loki Laufeyson",
    "Whitney Frost",
    "Marrina Smallwood",
    "Walter Lawson",
    "Rita DeMara",
    "Ramone Watts",
    "Johnny Watts",
    "Tilda Johnson",
    "Emily Guerrero",
    "Melissa Gold",
    "Jane Foster",
    "Kamala Khan",
    "William Kaplan",
    "Doreen Green",
    "Medusalith Amaquelin Boltagon",
  ];
  const names = randomNames[Math.floor(Math.random() * randomNames.length)];
  return names;
}
