import { useFormik } from "formik";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone_number: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      full_name: yup
        .string()
        .max(20, "Max Character is 20")
        .required("Full Name is Required."),
      email: yup
        .string()
        .email("Please use a correct email")
        .required("Email is Required."),
      phone_number: yup.string().required("Phone number is Required."),
      password: yup.string().required("Password is Required."),
    }),
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        await axios.get("http://localhost:5000/user", {
          ...values,
          user_uniqueid: nanoid(5),
          refferal_code: nanoid(10),
          points: 0,
          user_type: "user",
        });
        navigate("/login2");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <Navbar />
      <form style={{}} onSubmit={formik.handleSubmit}>
        <span>Register your Account</span>
        <p style={{}}>Full Name</p>
        <input
          type="text"
          style={{}}
          name="full_name"
          onChange={formik.handleChange}
        />
        <p style={{ margin: 0, color: "red" }}>{formik.errors.full_name}</p>

        <p style={{}}>Email</p>
        <input
          type="text"
          style={{}}
          name="email"
          onChange={formik.handleChange}
        />
        <p style={{ margin: 0, color: "red" }}>{formik.errors.email}</p>

        <p style={{}}>Phone Number</p>
        <input
          type="text"
          style={{}}
          name="phone_number"
          onChange={formik.handleChange}
        />
        <p style={{ margin: 0, color: "red" }}>{formik.errors.phone_number}</p>

        <p style={{}}>Password</p>
        <input
          type="password"
          style={{}}
          name="password"
          onChange={formik.handleChange}
        />
        <p style={{ margin: 0, color: "red" }}>{formik.errors.password}</p>

        <button style={{}}>
            Sign Up
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
