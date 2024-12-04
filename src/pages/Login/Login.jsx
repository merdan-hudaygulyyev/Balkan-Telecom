import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginFN } from "../../api/services/api_helpers";
import { useNavigate } from "react-router-dom";

// import

const Login = () => {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required().min(6).max(36),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await LoginFN({...values})
        if(response.success) {
          const token = response.token || "your-auth-token"; // Use real token from API
          localStorage.setItem("token", token);

          resetForm() 
          navigate('/dashboard', {replace: true})
        }
      } catch (error) {
        alert('Registrasiya bolmadynyz!!!!')
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
                  />
                </div>
                <a href="/register" 
                 className="text-blue-500 ml-36">
                  Öňden giriş yokmy? Giriş ediň
                </a>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Giriş
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
