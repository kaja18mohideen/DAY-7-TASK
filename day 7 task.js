//FIRST FETCH TO THE  API FORMATE


fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => {

// 1. Get all the countries from Asia continent/region using Filter function
        const asianCountries = countries.filter(country => country.region === "Asia");
        console.log("Asian Countries:", asianCountries);

 // 2. Get all the countries with a population of less than 2 lakhs using Filter function
        const smallPopulationCountries = countries.filter(country => country.population < 200000);
        console.log("Countries with less than 2 lakh population:", smallPopulationCountries);

//3. Print the following details: name, capital, flag using forEach function
        countries.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital[0]}, Flag: ${country.flags[0]}`);
        });

// 4. Print the total population of countries using reduce function
        const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
        console.log("Total Population:", totalPopulation);

// 5. Print the country that uses US dollars as currency
        const usdCountries = countries.filter(country => {
            const currencies = Object.values(country.currencies);
            return currencies.some(currency => currency.code === "USD");
        });
        console.log("Countries that use USD:", usdCountries);

    })
   

