import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import interceptResponse from "../functions/intercept-response";
import authService from "../../../auth-service";
import { ls } from "../../../../tools";
import { apiConfig } from "../../../../constant/config";
import { TMethods } from "../constants";

export default function createCustomizedRequest(method:TMethods, api: string, config: AxiosRequestConfig) {
	const { headers, data } = config || {};

	const axiosInstance: AxiosInstance = axios.create({
		method,
		data,
		baseURL: process.env.REACT_APP_SITE_URL,
		url: api,
		timeout: (apiConfig.timeout),
  		// signal:AbortSignal.timeout(1),
		validateStatus: () => true,
		headers: {
			...headers,
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "JWT " + (authService.token || ls.get("siteToken")),
		},
	});

	interceptResponse(axiosInstance);

	return axiosInstance[method](api, data || null);
}
