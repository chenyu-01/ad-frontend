export default function CheckBoxLabel({ children, id, label, ...props }) {
  return (
    <>
      <input type="checkbox" name={id} id={id} {...props} />
      <label className="grow" htmlFor={id}>
        {label}
      </label>
    </>
  );
}
