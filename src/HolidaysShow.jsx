export function HolidaysShow(props) {
  return (
    <div>
      <h1>Holiday information</h1>
      <p>Name: {props.holiday.name}</p>
      <p>Url: {props.holiday.date}</p>
      <p>Width: {props.holiday.description}</p>
    </div>
  );
}