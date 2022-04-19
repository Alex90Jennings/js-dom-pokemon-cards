console.log(data);

const cardListUL = document.getElementById("card-list");
for (let i = 0; i < data.length; i++) {
  const pokemon = data[i];

  const cardLI = document.createElement("li");
  cardLI.setAttribute("class", "card");
  cardListUL.append(cardLI);

  const cardH2 = document.createElement("h2");
  cardH2.innerHTML = pokemon.name;
  cardLI.append(cardH2);

  const cardIMG = document.createElement("img");
  cardIMG.setAttribute("class", "card--img");
  cardIMG.width = "256";
  cardIMG.src = pokemon.sprites.other["official-artwork"].front_default;
  cardLI.append(cardIMG);

  const statsUL = document.createElement("ul");
  statsUL.setAttribute("class", "card--text");
  cardLI.append(statsUL);

  const statsArray = pokemon.stats;
  for (let j = 0; j < statsArray.length; j++) {
    const statLI = document.createElement("li");
    statLI.innerHTML = statsArray[j].stat.name + ": " + statsArray[j].base_stat;
    statsUL.append(statLI);
  }
}
console.log(data[0]);
