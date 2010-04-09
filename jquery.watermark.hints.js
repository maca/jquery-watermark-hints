// http://github.com/maca/jquery-watermark-hints

jQuery.fn.hint = function(text, color) {
  if(!color)
    color = "#aaa";
    
  return this.each(
    function(){
      var input        = jQuery(this);
      var defaultColor = input.css("color");

      var checkInput = function() {
        if(input.val() == '' || input.virgin){
          input.val(text).css("color", color).virgin = true;
        } else {
          input.css("color", defaultColor).virgin = false;
        }
      };
      
      var clearMessage = function() {
        if(input.virgin) 
          input.val('').css("color", defaultColor).virgin = false;
      };
      
      input.bind('blur change', checkInput);
      input.bind('click focus', clearMessage);
      checkInput();
      
      input.closest('form').bind('submit', clearMessage);
    }
  );
};
