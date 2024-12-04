import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RegisterFN } from "../../api/services/api_helpers";

// import

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      lastname: "",
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6).max(36),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // 1. const response = await RegisterFN({
        //   name: values.name, 
        //   lastname: values.lastname, 
        //   email: values.email, 
        //   password: values.password
        // })
        // 2. const body = {
        //   name: values.name, 
        //   lastname: values.lastname, 
        //   email: values.email, 
        //   password: values.password
        // }
        const response = await RegisterFN({...values})
        if(response.success){
          const token = response.token || "your-auth-token"; // Use real token from API
          localStorage.setItem("token", token);

          resetForm()
          navigate('/', {replace: true})
        }
      } catch (error) {
        console.log('register')
        alert('Öňden hasabyňyz bar!')
      }
    },
  });

  return (
    <div className="bg-blue-950 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-blue-100 shadow-md">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Agza boluň!!
            </h2>
            <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Ady</label>
                <div className="relative flex items-center">
                  <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Adyňyzy giriziň"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Familýasy
                </label>
                <div className="relative flex items-center">
                  <input
                    autoComplete="off"
                    type="text"
                    name="lastname"
                    value={formik.values.lastname}
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Familýaňyzy giriziň"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  E-poçta
                </label>
                <div className="relative flex items-center">
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="E-poçta giriziň"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                Parol
                </label>
                <div className="relative flex items-center">
                  <input
                    autoComplete="off"
                    name="password"
                    value={formik.values.password}
                    type="password"
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Paroly giriziň"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <a href="/login" 
                 className="text-blue-500 ml-44">
                  Eýýäm giriş etdiňizmi ? Giriş
                </a>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Giriş
                </button>
                {formik.errors.name || formik.errors.lastname || formik.errors.email || formik.errors.password ? (
                  <p className="text-red-600 text-center">{formik.errors.name || formik.errors.lastname || formik.errors.email || formik.errors.password}</p>
                ): ''}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
