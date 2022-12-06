import { View } from "./View";
import { SignUpForm } from "./SignUpForm/signUpForm";

export const SignUpView = ({ formProps }) => {
    return(
        <View>
            <SignUpForm
            {...formProps}
            clasname="max-w-lg mx-auto h-full flex flex-col justify-content"/>
        </View>
    );
}