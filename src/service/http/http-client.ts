import { AxiosRequestConfig } from "axios";
import { ApiUrl } from "./types";
import { METHODS, TMethods } from "./config/constants";
import createCustomizedRequest from "./config/functions/create-customized-request";
import { apiConfig } from "../../constant/config";



class HttpClinet {
    post:(<D, R>(api: ApiUrl, config?: Omit<AxiosRequestConfig, "data"> & D) => Promise<R>);
    get: (<R>(api: ApiUrl, config?: Omit<AxiosRequestConfig, "data">) => Promise<R>);

    constructor(){
        METHODS.forEach((method:TMethods)=>(this[method] = this.createAdvancedRequest.bind(this, method)));
    }

    protected createAdvancedRequest(method:TMethods, api: ApiUrl, config: AxiosRequestConfig) {
		return createCustomizedRequest(method, apiConfig.url[api], config);
	}
}

export default new HttpClinet();