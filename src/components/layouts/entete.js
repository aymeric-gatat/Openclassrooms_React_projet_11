export default function Entete({ content, background }) {
  let style = {};
  if (background) {
    style = {
      background: `center/cover url(${background})`,
    };
  } else {
    style = {
      background: "#ffffff",
    };
  }

  return <header style={style}>{content ? <h1>{content}</h1> : ""}</header>;
}
