interface ButtonProps {
  content: string;
  css: string;
  type: "reset" | "submit" | "button";
  onclick?: () => void;
}

const Component = ({ content, css, type, onclick }: ButtonProps) => {
  return (
    <>
      <button className={css} type={type} onClick={onclick}>
        {content}
      </button>
    </>
  );
};

export default Component;
