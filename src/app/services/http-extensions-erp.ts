import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler,Injectable  } from "@angular/core";
declare const ui: any;

export interface Params {
	[ key: string ]: any;
}
 
export interface GetOptions {
	url: string;
	params?: Params;
}
 
export interface ErrorResponse {
	id: string;
	code: string;
	message: string;
}

@Injectable({ providedIn: 'root' })

export class HttpExtensionsERP {

    private axiosClient: AxiosInstance;
	private errorHandler: ErrorHandler;

	constructor( private http: HttpClient,errorHandler: ErrorHandler ) {
 
		this.errorHandler = errorHandler;
 
		// The ApiClient wraps calls to the underlying Axios client.
		this.axiosClient = axios.create({
			timeout: 60000,
			headers: {
				"X-Initialized-At": Date.now().toString()
			}
		});
 
	}

	HttpOptionNoToken() {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
            })
        };
        return httpOptions;
    }

    // I perform a GET request with the given options.
	public async get<T>(url:string,params:any) : Promise<T> {
 
		try {
 
			let axiosResponse:any = await this.axiosClient.request<T>({
				method: "get",
				url: url,
				params: params
			});
 
			return await (axiosResponse.data);
 
		} catch ( error ) {
			
			return await (Promise.reject( this.normalizeError(url,"GET",error)));
		}
 
	}


	// I perform a GET request with the given options.
	public async post<T>(url:string,params:any) : Promise<T> {
 
		try {
			let axiosResponse:any = await this.axiosClient.request<T>({
				method: "post",
				url: url,
				params: params
			});
 
			return await (axiosResponse.data);
 
		} catch ( error ) {
			return await (Promise.reject( this.normalizeError(url,"POST",error)));
		}
 
	}

    // ---
	// PRIVATE METHODS.
	// ---
 
	// Errors can occur for a variety of reasons. I normalize the error response so that
	// the calling context can assume a standard error structure.
	private normalizeError(url:string,method:string, error: any )  {

 
		this.errorHandler.handleError(error);

		if(String(error).indexOf("404") > -1){
			ui.noti.e(url,method,String(error));
		}else if(String(error).indexOf("405") > -1){
			ui.noti.e(url,method,String(error));
		}else if(String(error).indexOf("timeout") > -1){
			ui.noti.e(url,method,String(error));
		}

		 
 
	}

}