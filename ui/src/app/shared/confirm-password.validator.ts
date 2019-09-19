import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordEditValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('editPassWord').value;

       let confirmPassword = control.get('editrePassWord').value;

        if(password != confirmPassword) {
            control.get('editrePassWord').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}

export class ConfirmPasswordAddValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('addPassWord').value;
 
        let confirmPassword = control.get('addrePassWord').value;
 
         if(password != confirmPassword) {
             control.get('addrePassWord').setErrors( {ConfirmPassword: true} );
         } else {
             return null
         }
     }
}