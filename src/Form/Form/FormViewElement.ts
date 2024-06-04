import { ViewElement } from "alphautils";
import { IViewElement, UIActionFactory } from "alphautils";
import { DataSources } from 'alphautils'
import { Ref } from "vue";
import { QForm } from "quasar";
export class FormViewElement extends ViewElement{
    
    private ref: Ref<QForm>;
    public datasource: DataSources;
    private actionFactory: UIActionFactory;
    constructor(view: IViewElement, ref: Ref<QForm>){
        super(view);
        this.ref = ref;

        this.actionFactory =  (this as unknown as {GetService (string: string) : UIActionFactory}).GetService('UIActionFactory')

    }

    private SubmitForm(){

    }

    public ResetValidation(){
        this.ref.value.resetValidation();
    }

    
}