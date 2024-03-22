// country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan"
];

// function to filter countries 
const autocomplete = input => {
  const inputValue = input.value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = ''; 

  const filteredCountries = countryList.filter(country => country.toLowerCase().startsWith(inputValue));
  filteredCountries.forEach(country => {
    const suggestion = document.createElement('div');
    suggestion.classList.add('suggestion');
    suggestion.textContent = country;
    suggestion.addEventListener('click', () => {
      input.value = country; 
      suggestions.innerHTML = ''; 
    });
    suggestions.appendChild(suggestion);
  });
};

// event listener 
document.getElementById('country').addEventListener('input', function() {
  autocomplete(this);
});