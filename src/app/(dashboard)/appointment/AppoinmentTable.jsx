import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppoinmentTable({
  appointments,
  Action,
  actionName,
  cancel,
  forOwner,
}) {
  let contactNumber = [];
  let contactCustomerName = [];
  if (forOwner === true) {
    appointments.forEach((appointment) => {
      contactNumber.push(appointment.requestNumber);
      contactCustomerName.push(appointment.requestCustomerName);
    });
  } else {
    appointments.forEach((appointment) => {
      contactNumber.push(appointment.contactNumber);
      contactCustomerName.push(appointment.contactCustomerName);
    });
  }
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
          <th>Property</th>
          <th>Detail</th>
          {actionName && <th>{actionName}</th>}
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={appointment.id}>
            <td>{contactCustomerName[index]}</td>
            <td>{contactNumber[index]}</td>
            <td>{renderDate(appointment.date)}</td>
            <td>{appointment.status}</td>
            <td>{appointment.propertyName}</td>
            <td>
              <Link
                href={`/details/${appointment.propertyId}`}
                className="flex"
              >
                <Button>Detail</Button>
              </Link>
            </td>
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
