import { forwardRef, useRef } from "react";
import InputLabel from "@/app/(nodashboard)/advanced/InputLabel";
import CheckBoxLabel from "@/app/(nodashboard)/advanced/CheckBoxLabel";
import SelectLabel from "@/app/(nodashboard)/advanced/SelectLabel";
import "./mydialog.css";
const SearchDialogue = forwardRef(function SearchDialogue(props, ref) {
  const form = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // check if checkbox is on transfer it to true
    const rooms = {
      roomOne: data.roomOne === "on",
      roomTwo: data.roomTwo === "on",
      roomThree: data.roomThree === "on",
      roomFour: data.roomFour === "on",
    };

    ref.current.close();
    const dataParam = { ...data, ...rooms };
    props.search(dataParam);
  };
  const handleClick = (e) => {
    e.preventDefault();
    ref.current.close();
  };

  return (
    <dialog className="top-0 container w-3/4 " id={`myDialog`} ref={ref}>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 text-lg "
      >
        <InputLabel
          id={"lowPrice"}
          label={"Low Price"}
          type={`number`}
          min={0}
          placeholder={`Input Low Price`}
        />
        <InputLabel
          id={"highPrice"}
          label={"High Price"}
          type={`number`}
          min={0}
          placeholder={`Input High Price`}
        />
        <InputLabel
          id={"town"}
          type={`text`}
          label={"Town"}
          placeholder={`Town Name`}
        />
        <SelectLabel id={"propertyType"} label={`Property Type`}></SelectLabel>
        <div className="flex justify-between">
          <label className=" grow">Flat Type</label>
          <div className="flex sm:w-4/5 justify-between">
            <CheckBoxLabel label={`One`} id={`roomOne`} />
            <CheckBoxLabel label={`Two`} id={`roomTwo`} />
            <CheckBoxLabel label={`Three`} id={`roomThree`} />
            <CheckBoxLabel label={`Four`} id={`roomFour`} />
          </div>
        </div>

        <button type="submit" className="bg-gray-800 text-white p-2 rounded-lg">
          Search
        </button>
        <button
          className={`bg-indigo-400 text-white p-2 rounded-lg`}
          onClick={handleClick}
        >
          Close
        </button>
      </form>
    </dialog>
  );
});

export default SearchDialogue;
