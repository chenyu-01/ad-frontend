import UserIcon from "./icons/usericon";
import SettingsIcon from "./icons/settings";
import HomeIcon from "./icons/home";
export default function Nav() {
  return (
    <div className="flex flex-col items-stretch py-11 text-base font-semibold tracking-tight bg-white basis-0">
      <div className="flex gap-4 justify-between items-stretch self-start px-5 mt-28 whitespace-nowrap text-stone-950 max-md:mt-10">
        <div className="flex flex-col w-1 h-6 bg-green-700 rounded-2xl" />
        <HomeIcon />
        <div className="flex-auto my-auto">Dashboard</div>
      </div>

      <div className="flex flex-col items-center px-10 mt-12 font-medium text-stone-300 max-md:px-5 max-md:mt-10">
        <div className="flex gap-4 justify-between items-stretch self-stretch whitespace-nowrap">
          <UserIcon />
          <div className="flex-auto my-auto">Profile</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10">
          <SettingsIcon />
          <div className="flex-auto my-auto">Settings</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/89fcc01356529ac2391ad18aaec9fb55f79ec0bf538fe534cbc99fe4bf1c5782?"
            className="object-center w-6 aspect-square fill-black fill-opacity-0"
          />
          <div className="flex-auto">Message</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10 flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87312eb2a3eade9e4bbb94b8d6fff264f0b6294acc086d35a8484ca80e905672?"
            className="object-center w-6 aspect-square fill-black fill-opacity-0"
          />
          <div className="flex-auto">MySelections</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch mt-12 max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3347dcb221679c2670e3d1e2b3c01385a0649b4d0a1e696e1201d37bf5ebaf50?"
            className="object-center w-6 aspect-square fill-black fill-opacity-0"
          />
          <div className="flex-auto">Support</div>
        </div>
      </div>

      <div className="mt-10 h-px bg-stone-300 bg-opacity-20 w-[196px]" />
      <div className="flex gap-4 items-stretch self-center px-5 mt-80 text-red-500 whitespace-nowrap max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e712466f04a9d9c1a038c4022b40471094342dc6a23c1bbfafea5afcdf0a549?"
          className="object-center w-6 aspect-square"
        />
        <div className="">Logout</div>
      </div>
    </div>
  );
}
