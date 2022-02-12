import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

// export function forbiddenNameValidator(control:AbstractControl){
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? {'forbiddenName' : {value:control.value}}: null;
// }

export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{

  return function(control:AbstractControl){
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName' : {value:control.value}}: null;
    }
}
