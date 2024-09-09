export default function Avatar({ host }) {
  return (
    <div className="avatar">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}
