let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];


function createCountry({name,flag,population,region,capital}){
    const container = document.createElement("div");
    container.setAttribute("class","container");

    container.innerHTML=`
    <img class="flag" src=${flag} alt="Germany flag">
    <div class="info">
        <h3>${name}</h3>
        <p><span>Population:</span>${population}</p>
        <p><span>Region:</span>${region}</p>
        <p><span>Capital:</span>${capital}</p>
    </div>
    `;
    document.body.append(container);
}

// countriesInfo.forEach((country) => createCountry(country))
fetch("https://restcountries.com/v3.1/all")
.then((data)=> data.json())
.then((country)=> {
  country.forEach((country) => {
    const newCtry = {
          name : country.name.official,
          flag : country.flags.svg,
          population : country.population,
          region : country.region,
          capital : country.capital,
        };
    createCountry(newCtry);
  });
});
//  
//   createCountry(country))
// )