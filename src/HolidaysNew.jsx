export function HolidaysNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateHoliday(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Holiday</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Date: <input name="date" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Holiday</button>
      </form>
    </div>
  );
}
