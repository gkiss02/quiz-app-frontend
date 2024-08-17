import { useState } from "react";
import Input from "../Components/Input/Input";
import FormContainer from "../UI/FromContainer";
import styles from './ResetPassword.module.css';
import BlueButton from "../UI/BlueButton";

function ResetPassword() {
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    function resetPassword() {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Call API to reset password
    }

    return (
        <FormContainer>
            <div className={styles['text-container']}>
                <h1>Reset Password</h1>
                <p>Type your new password below</p>
            </div>
            <div className={styles['input-container']}>
                <Input
                    type="password"
                    placeholder="New Password"
                    setValue={setPassword}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    setValue={setConfirmPassword}
                />
            </div>
            <BlueButton onClick={resetPassword} isBig={true}>Reset Password</BlueButton>
        </FormContainer>
    );
}

export default ResetPassword;