//jshint esversion:6
// getdate() is not used here because it will give the output not required
exports.getdate= function(){
let today = new Date();
    
   let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
   };
   return today.toLocaleDateString("en-US",options);
   
}
exports.getday= function(){
   let today = new Date();
       
      let options = {
       weekday:"long",
      };
      return today.toLocaleDateString("en-US",options);
   
   }
   