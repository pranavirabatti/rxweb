import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,
} from '@rxweb/reactive-form-validators';

import { LoginInfo } from './login-info.model';

@Component({
    selector: 'app-password-dynamic',
    templateUrl: './password-dynamic.component.html'
})
export class PasswordDynamicComponent implements OnInit {

    loginInfoFormGroup: FormGroup
					
					
	    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let loginInfo = new LoginInfo();
        let formBuilderConfiguration = new FormBuilderConfiguration();
        formBuilderConfiguration.dynamicValidation = {
			
			newPassword : {
				password :  {validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true},} 
			},
						
			oldPassword : {
				password :  {validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true},message:'Password is not valid',} 
			},
			        };
		this.loginInfoFormGroup = this.formBuilder.formGroup(loginInfo,formBuilderConfiguration);
    }
}
