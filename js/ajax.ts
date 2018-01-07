import callFn from './promise';
const  {promise}  = callFn;
interface PARAM {
    type ? : any,
    data ? : Object,
    dataType? : any,
    header ? : String,
    url : any,
}
/**
 *  @desc 封装ajax
 *  @return ajax
 * 
 * * */
class Ajax {
    constructor (  ) {

    }
    init ( param: PARAM ) {
        let _this = this;
        let callback :Function;
        if ( ! Reflect.has( param, 'header' ) ) {
            param.header = 'application/x-www-form-urlencoded;charset=utf-8';
        }
        if ( ! Reflect.has( param, 'type' ) ) {
            param.type = 'POST';
        }
        if ( ! Reflect.has( param, 'dataType' ) ) {
            param.type = 'JSON';
        } 
        if ( param.dataType == 'jsonp' || param.dataType == 'JSONP' ) { // 解决跨域
            callback = function( resolve,reject ) {
                let JSONP = document.createElement('script');
                JSONP.type = "text/javascript";
                let jsonpFn = function( result ) {
                    if(result ) {
                        resolve( result );
                    } else {
                        reject( result );
                    }
                } 
                JSONP.src = `${param.url}?callback=jsonpFn`;
                document.getElementsByTagName("head")[0].appendChild(JSONP);

            }
            return promise( callback )
        }
        callback = function( resolve,reject,   ) {
            const clinet = new XMLHttpRequest();
            clinet.open( param.type ,  param.url );
            clinet.onreadystatechange = function( ) {
                if ( this.readyState != 4 ) return ;
                if ( this.status === 200 ) {
                    resolve( this. response );
                } else {
                    reject ( this.statusText);
                }
            };
            clinet.responseType = 'json';
            clinet.setRequestHeader('Accept',`application/json`);
            clinet.send();
        }
        return  promise( callback );
    }
}
const ajax = new Ajax();
export default ajax;