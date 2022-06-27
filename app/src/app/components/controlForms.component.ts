/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-controlForms',
  templateUrl: './controlForms.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class controlFormsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_4aX4sRMLYZIi1Dp1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4aX4sRMLYZIi1Dp1(bh) {
    try {
      bh = this.sd_qU5xSPz4Ptl7lRNJ(bh);
      //appendnew_next_sd_4aX4sRMLYZIi1Dp1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4aX4sRMLYZIi1Dp1');
    }
  }

  //appendnew_flow_controlFormsComponent_start

  sd_qU5xSPz4Ptl7lRNJ(bh) {
    try {
      this.page.personalDetailsLabel = [];
      this.page.personalDetails = {};
      this.page.form1 = undefined;
      bh = this.sd_ZS1bRlYMRrAw1yJg(bh);
      //appendnew_next_sd_qU5xSPz4Ptl7lRNJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qU5xSPz4Ptl7lRNJ');
    }
  }

  sd_ZS1bRlYMRrAw1yJg(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      this.page.validators = Validators;
      this.page.formGroup = FormGroup;
      bh = this.formBuilder(bh);
      //appendnew_next_sd_ZS1bRlYMRrAw1yJg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZS1bRlYMRrAw1yJg');
    }
  }

  formBuilder(bh) {
    try {
      const page = this.page;
      page.personalDetailsLabel = [
        { label: 'Firstname', value: 'Firstname', type: 'text' },
        { label: 'Lastname', value: 'Lastname', type: 'text' },
        { label: 'Phone Number', value: 'Phone Number', type: 'number' },
        { label: 'Email', value: 'Email', type: 'email' },
        { label: 'Nationality', value: 'Nationality', type: 'text' },
      ];

      // page.personalDetailsLabel=[
      //     {value:"Firstname",
      //     ngModel:"personalDetails.payload.firstname",
      //     typeOfInput:"text",
      //     error:""
      // },
      // {value:"Lastname",
      //     ngModel:"personalDetails.payload.lastname",
      //     typeOfInput:"text",
      //     error:""
      // },
      // {value:"Email",
      //     ngModel:"personalDetails.payload.email",
      //     typeOfInput:"text",
      //     error:""
      // },
      // {value:"Nationality",
      //     ngModel:"personalDetails.payload.nationality",
      //     typeOfInput:"text",
      //     error:""
      // },
      // {value:"Phone Number",
      //     ngModel:"personalDetails.payload.phonenumber",
      //     typeOfInput:"text",
      //     error:""
      // }]

      page.personalDetails = {
        formName: 'personalDetailsForm',
        payload: {
          firstname: '',
          lastname: '',
          email: '',
          nationality: '',
          phonenumber: '',
        },
      };
      console.log(this.page.personalDetails.payload);
      bh = this.mainForm(bh);
      //appendnew_next_formBuilder
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_orCq1umtJZERwtQk');
    }
  }

  mainForm(bh) {
    try {
      const page = this.page;
      page.form1 = page.fb.group({
        firstname: ['', page.validators.required],
        lastname: ['', page.validators.required],
        email: ['', page.validators.required],
        nationality: ['', page.validators.required],
        phonenumber: ['', page.validators.required],
      });

      //appendnew_next_mainForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AlGuzDwdowH8Oa9j');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_controlFormsComponent_Catch
}
