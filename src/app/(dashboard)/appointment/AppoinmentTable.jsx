import { Button } from "@/components/ui/button";

export default function AppoinmentTable({
  appointments,
  Action,
  actionName,
  cancel,
}) {
  const renderDate = (date) => {
    let d = new Date(date);
    return d.toDateString();
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Contact Person</th>
          <th>Contact Number</th>
          <th>Date</th>
          <th>Status</th>
          {actionName && <th>{actionName}</th>}
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment) => (
          <tr key={appointment.id}>
            <td>{appointment.contactCustomerName}</td>
            <td>{appointment.contactNumber}</td>
            <td>{renderDate(appointment.date)}</td>
            <td>{appointment.status}</td>

            {actionName && (
              <td>
                <Button
                  className={
                    appointment.status === "accepted" ? "bg-gray-400" : ""
                  }
                  disabled={appointment.status === "accepted"}
                  onClick={() => Action(appointment.id)}
                >
                  {actionName}
                </Button>
              </td>
            )}
            <td>
              <Button onClick={() => cancel(appointment.id)}>{`Cancel`}</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
