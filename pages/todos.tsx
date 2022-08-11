import { GetStaticProps } from "next";

interface data {
  id: number;
  title: string;
}

interface Props {
  todos: data[];
}

export async function getStaticProps<GetStaticProps>() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();

  return {
    props: { todos },
  };
}
export default function Todos({ todos }: Props) {
  return (
    <>
      <h1 className="text-center text-lg m-2">Tarefas para fazer</h1>
      <div className="w-96 text-center">
        <ul className="list-none">
          {todos.map((todo) => (
            <li className="border-b border-gray-600 p-1" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
