import { useFormik } from 'formik'
import { Link } from 'react-router-dom';

export const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        onsubmit: values => {
            console.log(values);
        },
    });

    return <div className="m-28 grid justify-center">

        <form onsubmit={formik.handleSubmit}>

        <div className='m-2'>
            <h4 className="text-center text-2xl m-2">Sign Up</h4>
            <p className='text-center'>Already have a Marvel account? <Link to='/signin' className='underline underline-offset-1 text-blue-500 '>Sign In</Link></p>
        </div>

        <div className="grid gap-3">

            <label>Email</label>
            <input id='Email' type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className="p-2 w-96 h-9 border-black border-2"/>

            <label>Username</label>
            <input id='Username' type="text" name="username" onChange={formik.handleChange}  value={formik.values.username} className="p-2 w-96 h-9 border-black border-2"/>

            <label>Password</label>
            <input id='Password' type="password" name="password" onChange={formik.handleChange}  value={formik.values.password} className="p-2 w-96 h-9 border-black border-2"/>

            <button type='submit' className="bg-red-700 h-10 rounded text-white">Sign Up</button>
           
        </div>
        </form>
    </div>
}