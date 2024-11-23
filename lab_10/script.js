function myFunction(game_names) {
  window.location.href = "index.html?games=" + game_names;
}

window.onload = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('games')
  console.log(id);
  document.getElementById(id).style.display = 'flex';
  document.getElementById('main').style.display = 'none';
}