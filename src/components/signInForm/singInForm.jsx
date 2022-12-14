import { useFormik } from "formik"
import { Field } from "../Field"

export const SigninForm = ({
 handleSubmit,
 handleChange,
 handleBlur,
 isSubmitting,
 values,
 errors,
}) => {
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit: values => {
            console.log(values);
        }
    })

    return( 
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto h-full flex flex-col justify-center">
        <h3 className="text-lg text-center">Sign in</h3>
        <div className="space-y-4">
          <Field
            label="Email"
            type="text"
            name="email"
            value={values.email}
            placeholder="your@email"
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.email}
          />
          <Field
            label="Password"
            type="password"
            name="password"
            value={values.password}
            placeholder="your password"
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.password}
          />
          <button
            type="submit"
            className="text-white bg-red-700 px-4 py-4 rounded-lg w-full"
          >
            Sign in
          </button>
        </div>
      </form>
    )
}