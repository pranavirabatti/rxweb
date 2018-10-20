import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-upperCase-complete-validator',
    templateUrl: './upper-case-complete.component.html'
})
export class UpperCaseCompleteValidatorComponent implements OnInit {
    locationFormGroup: FormGroup
					
					
					
					
	    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
										countryName:['', RxwebValidators.upperCase()], 
													stateName:['', RxwebValidators.upperCase({conditionalExpression:(x,y) => x.countryName == "INDIA"  })], 
													cityName:['', RxwebValidators.upperCase({conditionalExpression:'x => x.countryName == "INDIA"' })], 
													colonyName:['', RxwebValidators.upperCase({message:'You can enter only upperCase letters.' })], 
								});
    }
}
