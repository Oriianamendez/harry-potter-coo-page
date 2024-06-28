import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h1>Harry Potter Geek Page</h1>
    <div class="card">
      <button id="nameButton" type="button">Character</button>
      <p class="information"></p>
    </div>
  </div>
`;

const fetchCharacter = async () => {
  const res = await fetch(
    'https://potterapi-fedeperin.vercel.app/en/characters'
  );
  const Character = await res.json();
  const info = document.querySelector<HTMLButtonElement>('.information');
  info.innerHTML = Character[0].fullName;
};
fetch('https://potterapi-fedeperin.vercel.app/en/characters')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

const nameButton = document.querySelector<HTMLButtonElement>('#nameButton')!;
nameButton.addEventListener('click', (event) => {
  event.preventDefault;
  fetchCharacter();
});
