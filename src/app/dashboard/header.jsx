export default function Header() {
  return (
    <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto self-end mt-9 text-3xl font-bold tracking-tighter leading-10 text-stone-950 max-md:max-w-full">
        Hi,User! <span className="font-medium">Welcome Back </span>
      </div>
      <div className="flex gap-3 items-stretch self-start px-7 py-4 text-sm tracking-tight leading-7 rounded-xl border border-solid border-black border-opacity-10 text-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto my-auto">Search destination</div>
      </div>
    </div>
  );
}
