import { SigninForm } from "./SignInForm/singInForm";
import { View } from "./View";

export const SignInView = ({ formProps }) => {
    return(
        <View>
            <SigninForm
            {...formProps}
            clasname="max-w-lg mx-auto h-full flex flex-col justify-content"/>
        </View>
    );
}