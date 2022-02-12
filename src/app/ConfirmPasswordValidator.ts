import { AbstractControl } from "@angular/forms";

export function ConfirmPasswordValidator(control:AbstractControl){
    const password = control.get('password')
    const ConfirmPassword = control.get('confirmPassword')

    if(password?.pristine || ConfirmPassword?.pristine){
        return null
    }

    return password && ConfirmPassword && password.value !== ConfirmPassword.value ? {'mismatch' : true} : null;
}