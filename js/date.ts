export default class Dates {
    onlyDate: Date;
    /**
     *  get now time or anything time
     *  @return timeStamp
     * * */
    getTimeStamp( time : any ){
        console.log( time );
        let d:any = new Date( time );
        let d1:string = <string> d;
        
        return Date.parse( d1 );
    }
    /**
     *  格式化时间
     *  @return 固定格式时间 
     * * */
    getFormatTime( time: any, format ='yyyy-MM-dd h:m:s') {
        let _this =this;
        let nowDate = new Date( time );
        let date = {
            "M+" : nowDate.getMonth() + 1,
            "d+" : nowDate.getDate(),
            "h+" : nowDate.getHours(),
            "m+" : nowDate.getMinutes(),
            "S+" : nowDate.getSeconds(),
            "q+" : Math.floor((nowDate.getMonth() + 3) / 3),
            "s+" : nowDate.getMilliseconds(),
        }
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, ( nowDate.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
        }
        return format;
    }
}
