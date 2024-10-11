import { ViewElement } from "alphautils";
import { IViewElement } from "alphautils";
import { DataSources } from 'alphautils'
import { Ref } from "vue";
import { QForm } from "quasar";
export class FormViewElement extends ViewElement{
    
    private ref: Ref<QForm>;
    public datasource: DataSources;
    
    constructor(view: IViewElement, ref: Ref<QForm>){
        super(view);
        this.ref = ref;
        

    }
    //todo
    public Submit(){

    }

    public Clear(){
        console.log("clear got triggered!")
    }
    public ClearValidation(){

    }
    public Reset(){

    }
    public Validate(){

    }
    public SetData(){
        
    }
    public ResetValidation(){
        this.ref.value.resetValidation();
    }

    
}