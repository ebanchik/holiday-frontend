export function HolidaysShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateHoliday(props.holiday.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Holiday information</h1>
      <p>Name: {props.holiday.name}</p>
      <p>Url: {props.holiday.date}</p>
      <p>Width: {props.holiday.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.holiday.name} name="name" type="text" />
        </div>
        <br/>
        <div>
          Date: <input defaultValue={props.holiday.date} name="date" type="text" />
        </div>
        <br/>
        <div>
          Description: <input defaultValue={props.holiday.description} name="description" type="text" />
        </div>
      </form>
    </div>
  );
}
