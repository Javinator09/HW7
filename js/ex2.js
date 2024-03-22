// character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return [];
  }
};

// function to populate the house dropdown list
const populateHouseDropdown = () => {
  const houseDropdown = document.getElementById('house');
  houses.forEach(house => {
    const option = document.createElement('option');
    option.value = house.code;
    option.textContent = house.name;
    houseDropdown.appendChild(option);
  });
};

// function to update the character list based on the selected house
const updateCharacterList = () => {
  const houseDropdown = document.getElementById('house');
  const selectedHouseCode = houseDropdown.value;
  const characters = getCharacters(selectedHouseCode);
  const charactersList = document.getElementById('characters');
  charactersList.innerHTML = '';
  characters.forEach(character => {
    const listItem = document.createElement('li');
    listItem.textContent = character;
    charactersList.appendChild(listItem);
  });
};

// event listener for house dropdown change
document.getElementById('house').addEventListener('change', updateCharacterList);

// populate the house dropdown list during page load
populateHouseDropdown();