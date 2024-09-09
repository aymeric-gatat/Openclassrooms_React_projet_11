export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <p key={tag} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}
