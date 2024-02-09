export default function InputLabel({ children, id, label, ...props }) {
  return (
    <div className="flex justify-between ">
      <label htmlFor={id} className="whitespace-nowrap ">
        {label}
      </label>
      <input
        name={id}
        id={id}
        {...props}
        className="sm:w-4/5 rounded border-2 border-gray-300"
      >
        {children}
      </input>
    </div>
  );
}
