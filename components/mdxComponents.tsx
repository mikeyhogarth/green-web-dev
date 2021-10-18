import { FaLink } from "react-icons/fa";

const components = {
  blockquote: function blockQuote(props: any) {
    return <aside {...props} />;
  },
  h2: (props: any) => LinkifiedHeader("h2", props),
};

export default components;

function LinkifiedHeader(HeadingComponent: any, props: any) {
  if (typeof props.children !== "string")
    return <HeadingComponent {...props} />;

  const text = props.children;
  const snakified = text.toLowerCase().replace(/ /g, "-");
  const uri = `#${encodeURIComponent(snakified)}`;
  return (
    <>
      <HeadingComponent {...props} id={snakified}>
        {text}
        <a href={uri} aria-hidden>
          <FaLink className="ml-2 " style={{ fontSize: ".5em" }} aria-hidden />
        </a>
      </HeadingComponent>
    </>
  );
}
