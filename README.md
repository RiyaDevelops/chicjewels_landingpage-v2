# chicjewels_landingpage
# eccomerce landing page 

# Questions 
 # could you have mulitple instances of a same js libary (exmaple: A11y slider that im using ) ? 
# How do I so this 
# Image potion of her section (fix design and layout)
# change width of images, when scren is shrinin i want the space in betwwen the grid (gap) to stay the same 
# clamp (see smallwe font size on font screen )
# kepp banne rpotioned to top of screen as header scrolls 


### Notes


- banner [.banner]:

  - removed opacity from banner
  - centered text horizontally and vertically with flexbox

- products [.product__img]:

  - reduced the scale of the product image on hover [.product__img:hover]
  - moved the transition from the hover state to the initial state [.product__img]

- slider:
  - appended number (2) to the prev & next buttons to differentiate the best sellers from the testimonials [.prev-arrow-2, .next-arrow-2]
  - appended number to slider to differentiate the best sellers from the testimonials [.slider-2]
  - applied same css styles to the slider-2 as the slider
  - created a new instance of slider in the JavaScript and renamed it slider2. This new instance is for the testimonials section. The slider2 instance is a copy of the slider instance with the exception of the slider variable name being changed to slider2. The slider buttons and slider container were also updated to reflect the new slider2 instance.



# Resources 
# blob maker 
# https://9elements.github.io/fancy-border-radius/#9.85.93.7--. 
# https://squoosh.app/ ---- images

# HOW TO know what is the right adding to use if you are going based ona  design file 

# fix carousel for best sellers 