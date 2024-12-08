document.addEventListener("DOMContentLoaded", () => {
  const filterb = document.querySelectorAll(".filbutton");
  const clear = document.getElementById("clear");
  const jobCards = document.querySelectorAll(".vacancy");

  let activfil = {
    language: [],
    level: [],
    role: []
  };

  filterb.forEach(button => {
    button.addEventListener("click", () => {
      const filtyp = button.dataset.type;
      const filtval = button.dataset.value;

      if (activfil[filtyp].includes(filtval)) {
        activfil[filtyp] = activfil[filtyp].filter(value => value !== filtval);
        button.classList.remove("active");
      } else {
        activfil[filtyp].push(filtval);
        button.classList.add("active");
      }

      filterJobs();
    });
  });

  clear.addEventListener("click", () => {
    activfil = { language: [], level: [], role: [] };
    filterb.forEach(button => button.classList.remove("active"));
    filterJobs();
  });

  function filterJobs() {
    jobCards.forEach(card => {
      const cardlan = card.dataset.languages.split(",");
      const cardlev = card.dataset.level;
      const cardrol = card.dataset.role;

      const matchlan = activfil.language.length === 0 || 
        activfil.language.every(lang => cardlan.includes(lang));
      const matchlev = activfil.level.length === 0 || activfil.level.includes(cardlev);
      const matchrol = activfil.role.length === 0 || activfil.role.includes(cardrol);

      if (matchlan && matchlev && matchrol) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});