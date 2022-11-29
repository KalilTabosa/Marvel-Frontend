import { HeaderNav } from "../../components/HeaderNav"
import { SignUpForm } from "../../components/SignUpForm/signUpForm"
import { View } from "../../components/View"
import { useSignUpForm } from "../../components/SignUpForm/useSignUpForm"

export const SignUpViewContainer = () => {

    const form = useSignUpForm({
        onSubmit: (values) => {
            console.log("sign in form values", values);
        }
    });


    return(
        <View>
        <HeaderNav />
        <SignUpForm  {...form} />
        </View>
    )
    
}