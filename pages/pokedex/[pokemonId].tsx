import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  todoId: string;
}

interface Props {
  todo: data;
}

interface data {
  id: string;
  title: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { todoId } = context.params as IParams;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );

  const todo = await data.json();

  return { props: { todo } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const paths = data.map((todo: data) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });
  return { paths, fallback: false };
};

export default function Todo({ todo }: Props) {
  return (
    <div className="grid justify-center place-items-center">
      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>{todo.title}</h3>
    </div>
  );
}
