const paramIsError = ( param ) => { (typeof param === 'object' && (param.type === 'error' || param.type === 'Error' || param.type === 'ERROR')) }
const paramIsValid = ( param ) => { (!param || param === null || param === undefined || param === '') }

const buildPromise = ( param ) => {

  new Promise( ( resolve, reject ) => {
  
    return ( param instanceof Error ) ? reject( param )
    : ( paramIsError( param ) || paramIsValid( param ) ) 
    ?  reject( new Error( param.message || 'Erro interno!' ) )
    : resolve( param );

  });
}

module.exports = buildPromise;
