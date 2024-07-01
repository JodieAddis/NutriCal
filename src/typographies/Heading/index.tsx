interface HeadingsProps {
  kind: string;
  content: string;
  css: string;
  id?: string;
}

const Typographies = ({ kind, content, css, id }: HeadingsProps) => {
  switch (kind) {
    case "h1":
      return (
        <h1 className={css} id={id}>
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 className={css} id={id}>
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 className={css} id={id}>
          {content}
        </h3>
      );
  }
};

export default Typographies;
