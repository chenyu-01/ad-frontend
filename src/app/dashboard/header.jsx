import "bootstrap/dist/css/bootstrap.min.css"
export default function Header() {
  return (
    <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto self-end mt-9 text-3xl font-bold tracking-tighter leading-10 text-stone-950 max-md:max-w-full">
        Hi,User! <span className="font-medium">Welcome Back </span>
      </div>
      <form>
        <input
        type="text"
        name="search"
        placeholder="Search here">
         </input>
      </form>
      <button type="button" class="btn btn-primary">Advanced Search</button> 
      </div>
  );
}
