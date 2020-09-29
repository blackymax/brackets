module.exports = function check(str, bracketsConfig) {
  let alpha = str;
  let beta
  
   for(let i = 0;i<bracketsConfig.length; i++){ 
       let vs=bracketsConfig[i].join('')
      beta = alpha.replace(vs,"")
      alpha = beta
   }
   if(alpha === ''){
      return true}
      else if(alpha===str){
       return false
      }else{
          return check(alpha,bracketsConfig)
      }
}
