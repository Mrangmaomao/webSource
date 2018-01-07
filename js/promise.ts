class Callback {
    promise( fn:Function ) {
        const pro = new Promise( function( resolve,reject ) {
            fn( resolve,reject );
        });
        return pro;
    }
}
let callFn = new Callback();
export default callFn;