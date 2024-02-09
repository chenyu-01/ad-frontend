export default function SelectLabel({ children, id, label, ...props }) {
  return (
    <div className="flex justify-between ">
      <label htmlFor={id} className="whitespace-nowrap ">
        {label}
      </label>
      <select
        name={id}
        id={id}
        {...props}
        className="sm:w-4/5 rounded border-2 border-gray-300"
      >
        <Option value={`all`}></Option>
        <Option value={`rental`}></Option>
        <Option value={`sale`}></Option>
      </select>
    </div>
  );
}
function Option({ value }) {
  return <option value={value}>{value}</option>;
}
