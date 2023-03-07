function Note({ color, note }) {
  return (
    <div>
      <div style={{ backgroundColor: color, padding: 10, borderRadius: 10 }}>
        <h1>{note}</h1>
      </div>
    </div>
  );
}
export default Note;
