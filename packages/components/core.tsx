import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type ContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const containerStyle = "container max-w-full px-4";
export const Container: FC<ContainerProps> = (props) => (
  <div {...props} className={containerStyle} />
);
