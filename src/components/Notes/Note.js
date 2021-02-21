const Note = ({ note }) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <div>
      <h3>{`${month}/${date}/${year}`}</h3>
      <h1>{note}</h1>
      <button>edit</button>
      <button>delete</button>
    </div>
  );
};

export default Note;
