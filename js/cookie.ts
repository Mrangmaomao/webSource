export default class cookies {
    /**
     * 
     * @desc 根据name读取cookie
     * @param  {String} name 
     * @return {String}
     */
    getCookie( name:string ) {
        let arr = document.cookie.replace(/\s/g, "").split(';');
        for (let i = 0; i < arr.length; i++) {
            let tempArr = arr[i].split('=');
            if (tempArr[0] == name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    }
    /**
     * 
     * @desc  设置Cookie
     * @param {String} name 
     * @param {String} value 
     * @param {Number} days 
     */
    setCookie(name:string, value:string,  days = 1 ) {
        let date = new Date();
        date.setDate( date.getDate() + days );
        document.cookie = name + '=' + value + ';expires=' + date;
    }
    removeCookie( name:string ) {
        // 设置已过期，系统会立刻删除cookie
        this.setCookie(name, '1', -1);
    }
}
