// components/FormInput.jsx
const FormInput = ({ name, value, type = "text", label }) => {
  if (type === "date" && value) {
    const dateArray = value;
    const dateString = `${dateArray[0]}-${dateArray[1].toString().padStart(2, "0")}-${dateArray[2].toString().padStart(2, "0")}`;
    value = dateString;
  }
  return (
    <div className="flex justify-between items-center container mx-auto mt-2">
      <label
        htmlFor={name}
        className="block text-xl font-medium text-gray-700"
      >{`${label}:`}</label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={value}
        className="w-2/3 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl sm:leading-6"
      />
    </div>
  );
};

export default FormInput;
