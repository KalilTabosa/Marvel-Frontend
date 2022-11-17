import { Link } from "react-router-dom"
import { useFormik } from "formik"

export const SigninForm = () => {

    

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });


    return( 
        <div className="m-44 grid justify-center">
            <form onSubmit={formik.handleSubmit}>
                <div>    
                    <h4 className="text-center text-2xl">Sign In</h4>
                    <p className="text-center">don't have a marvel account? <Link to='/signup' className="underline underline-offset-1 text-blue-500">Sign Up</Link></p>
                </div>

                <div className="grid gap-3">
                    <label>Email</label>
                    <input id="Email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className="p-2 w-96 h-9 border-black border-2"/>

                    <label>Password</label>
                    <input id="Password" type="password" name="password" onChange={formik.handleChange} value={formik.values.password} className="p-2 w-96 h-9 border-black border-2"/>

                    <button type="submit" className="bg-red-700 h-10 rounded text-white">Sign In</button>
                </div>
            </form>
        </div>
    )
}