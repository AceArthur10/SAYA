function Billing() {
  const fake = {
    usageID: 101,
    Duration: 9,
    Event_Flow_Rate: 4.08,
    Volume: 36.75,
    Time_of_day: "AM",
    Meter_Number: "V5701802123",
    Meter_Local_Time: "2022-06-01 00:00:00",
    Flow_Type: "NormalFlow",
    Date: 1,
    Day_of_week: 2,
    charge: 69.01,
  };

  let name = "Johnny Mountain";
  let payment = fake["charge"];
  let vol = fake["Volume"];

  return (
    <div className="billing">
      <table>
        <tr>
          <th>UsageID</th>
          <th>Volume</th>
          <th>Payment Due</th>
        </tr>
        <tr>
          <td>poop</td>
          <td>fdfdfd</td>
          <td>{fake.Volume}</td>
        </tr>
      </table>
    </div>
  );
}

export default Billing;
