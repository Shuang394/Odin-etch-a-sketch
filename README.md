# Odin-etch-a-sketch
Odin Project's etch a sketch

# Mistakes I made:

1. When linking the html to my script, I did not user "defer". This resulted in my Script getting executed before my html loads, which results in type (null) errors, as querySelection will fail to find the html elements. 

