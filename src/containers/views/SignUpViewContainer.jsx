import { HeaderNav } from "../../components/HeaderNav"
import { SignUpForm } from "../../components/SignUpForm/signUpForm"
import { useSignUpForm } from "../../components/SignUpForm/useSignUpForm"
import { SignUpView } from "../../components/SignUpView"

export const SignUpViewContainer = () => {

    const form = useSignUpForm({
        onSubmit: (values) => {
            console.log("sign in form values", values);
        }
    });


    return(
        <SignUpView formProps={form}/>
    )
    
}