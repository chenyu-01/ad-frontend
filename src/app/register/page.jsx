"use client";
import React ,{useState}from "react";
import { useRouter} from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  // Function to handle form submission
  const router = useRouter();
  const [error, setError] = useState(null);
  const handleSubmit = async(event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = {
      role: event.target.elements.role.value,
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      repeatPassword: event.target.elements.repeatPassword.value,
      agreeTerms: event.target.elements.agreeTerms.checked,
    };

    const newData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      contactNumber: "123",
      role: "buyer",
      preferences: null
    };

    // check password and repeat password are same else error

    try {
      const response = await fetch("http://localhost:8080/api/customer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(formData),
        body: JSON.stringify(newData),
        credentials: "include"
      });
      if (response.ok) {
        router.push("/login");
      } else {
        const data = await response.json();
        if (data && data.message) {
          setError(data.message);
        } else {
          setError("Registeration failed");
        }
      }
    }
      catch (error) {
        console.error("Error:", error);
        setError("An error occurred while logging in");
      }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                    <h6 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h6>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Your Role</label>

                          <select name="role"  className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" >
                                  <option value="owner" className="flex items-center ml-3  truncate ">Owner</option>
                                  <option value="buyer" className="flex items-center ml-3  truncate ">Buyer</option>
                                  <option value="rentalseeker" className="flex items-center ml-3  truncate ">Rentalseeker</option>
                           </select>

                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          <input type="text" id="form3Example1c" name="name" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          <input type="email" id="form3Example3c" name="email" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Your Phone Number</label>
                          <input type="number" id="form3Example3c" name="contactNumber" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" name="password" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          <input type="password" id="form3Example4cd" name="repeatPassword" className="form-control" />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" name="agreeTerms" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" onClick={() => router.push("/dashboard")}
                        className="btn btn-primary">Register</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-5 order-lg-2 d-flex align-items-center">
                    <img src="house.jpg" className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}