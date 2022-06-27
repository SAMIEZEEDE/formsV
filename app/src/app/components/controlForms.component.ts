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
  Validators,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  FormBuilder,
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

  submit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      this.sd_DOjGzTqYj5jIUf2B(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9U0NPSnyvSXR4o43');
    }
  }

  //appendnew_flow_controlFormsComponent_start

  sd_qU5xSPz4Ptl7lRNJ(bh) {
    try {
      this.page.personalDetailsLabel = [];
      this.page.personalDetails = {};
      this.page.myForms = undefined;
      bh = this.sd_ZS1bRlYMRrAw1yJg(bh);
      //appendnew_next_sd_qU5xSPz4Ptl7lRNJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qU5xSPz4Ptl7lRNJ');
    }
  }

  sd_ZS1bRlYMRrAw1yJg(bh) {
    try {
      this.page.validators = Validators;
      this.page.fb = FormGroup;
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
        { label: 'Firstname', value: 'firstname', type: 'text' },
        { label: 'Lastname', value: 'lastname', type: 'text' },
        { label: 'Phone Number', value: 'Phonenumber', type: 'number' },
        { label: 'Email', value: 'email', type: 'email' },
        { label: 'Nationality', value: 'nationality', type: 'text' },
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

      // page.personalDetails={
      //     formName:'personalDetailsForm',
      //     payload:{
      //     firstname:"",
      //     lastname:"",
      //     email:"",
      //     nationality:"",
      //     phonenumber:"",
      //     }
      // }
      // console.log(this.page.personalDetails.payload)
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
      page.myForms = new page.fb({
        firstname: new FormControl('', page.validators.required),
        lastname: new FormControl('', page.validators.required),
        email: new FormControl('', page.validators.required),
        nationality: new FormControl('', page.validators.required),
        Phonenumber: new FormControl('', page.validators.required),
      });

      //appendnew_next_mainForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AlGuzDwdowH8Oa9j');
    }
  }

  sd_DOjGzTqYj5jIUf2B(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.myForms);
      //appendnew_next_sd_DOjGzTqYj5jIUf2B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DOjGzTqYj5jIUf2B');
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
