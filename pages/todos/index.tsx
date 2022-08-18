import { GetStaticProps } from "next";
import Link from "next/link";

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
    <div className="flex-col justify-center items-centers text-center">
      <h1 className="text-xl text-gray-300 m-4">Tarefas para fazer</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li className="p-1" key={todo.id}>
            <a href={`/todos/${todo.id}`} className="underline ">
              {todo.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
