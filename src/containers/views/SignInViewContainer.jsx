import { SigninForm } from "../../components/signInForm/singInForm"
import { HeaderNav } from "../../components/HeaderNav"
import { View } from "../../components/View"
import { useSignInForm } from "../../components/signInForm/useSignInForm"

export const SignInViewContainer = () => {

    const form = useSignInForm({
        onSubmit: (values) => {
            console.log("sign in form values", values);
        }
    });
    
    return(
        <View>
            <SigninForm {...form} />
            <HeaderNav />
        </View>
        

    )
}