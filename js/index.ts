import cookie from './cookie';
import date from './date';
import computed from './computed';
import ajax from './ajax';
const weapons ={
    cookie,
    date,
    computed,
    ajax,

}
/**
 * 测试
 * * */
ajax.init({
    url: 'http://int.dpool.sina.com.cn/iplookup/iplookup.php',
    data: {},
    type: 'GET',
    dataType: 'JSONP'
})
.then( ( res )=> {
    console.log( res,111);
}).catch( ( err ) => {
    console.log( err );
}) 

export default weapons;

