interface data {
  id: number;
  name: string;
  url: string;
}

interface Props {
  pokemons: data[];
}

export default function Pokedex({ pokemons }: Props) {
  return (
    <div className="flex-col justify-center items-centers text-center">
      <h1 className="text-xl text-gray-300 m-4">Tarefas para fazer</h1>
      <ul className="list-none">
        {pokemons.map((pokemon) => (
          <li className="p-1" key={pokemon.id}>
            <a href={`/pokedex/${pokemon.id}`} className="underline ">
              {pokemon.name}
              {pokemon.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps<GetStaticProps>() {
  const maxPokemon = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const data = await fetch(`${api}/?limit=${maxPokemon}`);
  const pokemons = await data.json();

  pokemons.results.forEach((item: data, index: number) => {
    item.id = index + 1;
  });

  return {
    props: { pokemons: pokemons.results },
  };
}
