class Computed {
    abs( x : number ) { // 求绝对值 @return number
        if ( x >= 0) {
            return x;
        } else {
            return -x;
        }
    }
    factorial( n : number ) { // 计算阶乘的函数
        let product = 1;
        while( n>1 ) {
            product *= n;
            n--;
        }
        return product;

    }
    /**
     *  @desc 
     * 
     * * */
    arrMax( arr ) : number{ // 数组最大数
        let n:any;
        let newMax:number = 0;
        if( arr.length ) {
            for( let i=0;i<arr.length;i++ ){
                let item:any = arr[i];
                if( isNaN(item )  ){
                    n = '这不是一个有效的数字数组';
                    return n;
                }
                else if ( typeof item == 'string') {
                    item = Number( item );
                }
                if ( item > newMax ) {
                    newMax = Math.max(item,newMax);
                }
            }
        }
        return newMax ;
    }
    arrMin( arr ) : number {
        let n:any;
        let newMin:number = arr[0];
        if( arr.length ) {
            for( let i=0;i<arr.length;i++ ){
                let item:any = arr[i];
                if( isNaN(item )  ){
                    n = '这不是一个有效的数字数组';
                    return n;
                }
                else if ( typeof item == 'string') {
                    item = Number( item );
                }
                if ( item < newMin ) {
                    newMin = item;
                }
            }

        }
        return newMin ;
    }
    max( ...arg ){
        console.log( arguments);
        // return Math.max( ...args );
    }

}
const computed = new Computed();
export default computed;