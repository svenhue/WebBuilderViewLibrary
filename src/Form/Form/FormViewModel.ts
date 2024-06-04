import { BaseViewModel, IDataAdapter, IViewConfiguration } from "alphautils";
import { provide} from "vue";
export class FormViewModel extends BaseViewModel{

    private selfId: number;
    sessioncontextid: number;
    dataAdapter: IDataAdapter
    constructor(config: IViewConfiguration){
        super(config.contextid);
        this.selfId = config.id;

        provide('form', this);

    }
    public SetValue(key: string, value: string | number | boolean){
        console.log(key, value)
        this.dataAdapter.UpdatePartial(this.selfId, {keyValuePairs: [{key: `content.${key}`, value: value}]}, this.sessioncontextid)
    }
}