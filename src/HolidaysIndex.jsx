export function HolidaysIndex(props) {
  return (
    <div>
      <h1>All Holidays</h1>
      {props.holidays.map((holiday) => (
        <div key={holiday.id}>
          <h2>{holiday.name}</h2>
          <p>{holiday.date}</p>
          <p>{holiday.description}</p>
        </div>
      ))}
    </div>
  );
}

