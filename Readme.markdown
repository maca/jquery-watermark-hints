# jquery-watermark-hints

Simple jQuery plugin to provide watermark hints and suggestions for text input fields and text areas.

Example:

    &lt;input id=&quot;phone&quot; name=&quot;phone&quot; type=&quot;text&quot; value=&quot;value for name&quot;/&gt;
  
    &lt;script type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;
      $(&quot;#phone&quot;).hint('+52 (55) 56581591')
    &lt;/script&gt;
  

Hint text will appear in the field when is blank and will not be sent when submitting the form.