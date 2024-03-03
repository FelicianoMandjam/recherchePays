const apiKey = "lxYSuK6G2uzeV0H3ZvWRze2yfFPGfBdEimNHcth5";

// const url = `${apiUrl}?apikey=${apiKey}`;

/////////////////////////////////////////////////////
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const section = document.querySelector(".info");
const form = document.querySelector("form");

form.addEventListener("submit", function () {
  //   const pay = "all";
  const pay = input.value;
  const alerte = document.querySelector(".alerte");

  console.log(alerte);

  // const finalURL = `https://countryapi.io/api/name/${pay}?apikey=${apiKey}`
  const finalURL = `https://restcountries.com/v3.1/name/${pay}`;
  // console.log(finalURL)
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital);
      console.log(data[0].continents);
      console.log(data[0].flags);

      const capital = data[0].capital;
      const continents = data[0].continents;
      const flag = data[0].flags.svg;

      section.innerHTML = `<ul class="list-group">
          <li class="list-group-item text-center"> Capital : ${capital}</li> 
          <li class="list-group-item text-center"> Continant : ${continents}</li> 
          <li class="list-group-item text-center"> Drapeau : <img src="${flag}"/> </li> 
       </ul>`;
    });

  if (this.checkValidity) {
    alerte.style.display = "none";
  } else {
    // Le formulaire n'est pas valide, prendre une autre action si nécessaire
    console.log("Le formulaire n'est pas valide.");
}
  event.preventDefault();
});
