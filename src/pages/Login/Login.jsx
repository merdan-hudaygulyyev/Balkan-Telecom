import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import * as Yup from 'yup'

const Login = () => {
    const navigate = useNavigate()
  
    const formik = useFormik({
      initialValues: {
        username: "", 
        password: ""
      }, 
      validationSchema: Yup.object({
        username: Yup.string().required(), 
        password: Yup.string().required()
      }), 
      onSubmit: async (values, {resetForm}) => {
        console.log("values", values)
        navigate('/', {replace: true})
      }
    })

  return (
    <div className="bg-slate-950 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-gradient-to-t  from-slate-100 to-slate-300 shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Agza boluň</h2>
            <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Username</label>
                <div className="relative flex items-center">
                  <input name="username" 
                  value={formik.values.username} 
                  type="text" required 
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                  placeholder="Enter username" 
                  onChange={formik.handleChange}/>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input 
                  name="password" 
                  value={formik.values.password}
                  type="password" required 
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                  placeholder="Enter password" 
                  onChange={formik.handleChange}/>
                </div>
              </div>

              <div className="!mt-8">
                <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
