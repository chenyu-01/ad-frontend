export default function InputLabel({ children, id, ...props }) {
  return (
    <div className="flex justify-between ">
      <label htmlFor={id} className="whitespace-nowrap hidden sm:block">
        Low Price
      </label>
      <input name={id} id={id} {...props} className=" sm:w-4/5 ">
        {children}
      </input>
    </div>
  );
}
