---
layout: post
title:  "Parametric 3D-Printed Phone Mounting System"
date:   2016-07-08 22:00:00
categories: side-project
tags:  mechanical 3d-printing design
image: /assets/article_images/2016-07-08-parametric-3d-printed-phone-mounting-system/mount-in-car.jpg
image2: /assets/article_images/2016-07-08-parametric-3d-printed-phone-mounting-system/mount-in-car.jpg
image-thumb: /assets/article_images/2016-07-08-parametric-3d-printed-phone-mounting-system/mount-in-car.jpg
excerpt: Made from parts I had around the house, measures hues on LCD screens with 97% accuracy.
---
3D-printing is becoming cheaper and more accessible every year, with the community growing quickly there is an ever expanding library of printable models available for download. But when it comes to designing custom parts there is still a steep learning curve and a considerable amount of time required.

Disney Research published a paper called [AutoConnect: Computational Design of 3D-Printable Connectors](https://www.disneyresearch.com/publication/autoconnect/), which is about software that automates the process creating models to connect objects together.

![Disney Autoconnet Examples](/assets/article_images/2016-07-08-parametric-3d-printed-phone-mounting-system/disney-research-autoconnectors-stacked.jpg)

The software takes an input of two models, allows you to orient them relative to each other, then generates a part to connect them.  **The results are impressive but unfortunately the software has not been made available.**

Out of the handful of examples that they showed I thought the cellphone car mount was the most useful and something that most people would have a use for. So, I decided to create a parameterized model to generate custom mounts based on the measured dimensions of a phone and mounting edge.




<br><br><br><br><br><br>










Last Friday I took apart my old Spyder2 monitor colorimeter to see how it worked.  Apparently it uses 7 colored filters with a light sensor behind each one,  by comparing the amount of light absorbed by each filter it can determine the color on screen.  I was fascinated by how it worked so I decided to take a shot at making my own.

<iframe width="560" height="315" src="https://www.youtube.com/embed/laYNx_acj_0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
*Here's a peak at the finished product*

##Constraints:
- Only use components from around the house
- Finish it in roughly a weekend
- Ideally small enough to be hand held

##The Sensor
First I tackled the most import part, the sensor. I had some color gels used for camera lighting, I chose to use red, green, and blue (the additive primary colors) for even coverage across the color spectrum.

![Red, Green, and Blue Filters](/assets/article_images/2016-02-10-colorimeter/color-filters.jpg)

Unfortunately I only had one photo resistor so I used a servo to take measurements through each filter.

![Color plate, with the filters spaced 45º apart](/assets/article_images/2016-02-10-colorimeter/color-plate.jpg)

![Sensor Assembly](/assets/article_images/2016-02-10-colorimeter/colorimeter-sensor-explosion.jpg)

![Sensor Motion Simulation](/assets/article_images/2016-02-10-colorimeter/Sensor-Motion-Simulation.gif)


##Calibration
After assembling the sensor and the next step was to collect test data for calibration.  An Arduino was used to collect the analog light measurements form the photo resistor and to control the servo motor. I limited the scope to measuring hue, there are 1560 hues in the 24 bit RGB color system, I wrote this [color picker web app](/color) in AngularJS, mounted the sensor onto a calibrated monitor, and setup a python script to iterate through the 1560 hues and record the readings.

![The sensor and monitor were set up in a bathroom (the darkest place in my house) to take calibration measurements with almost no ambient light.](/assets/article_images/2016-02-10-colorimeter/test-setup.jpg)

![Graph of Color Calibration Measurements](/assets/article_images/2016-02-10-colorimeter/colorimeter-calibration-data.jpg)

With a database of calibration measurements, we now have a set of known values to compare new measurements to in order to find the closest match.

##Finishing Touches
The last step was to create an interface and assemble all of the components into the case, for the "start button" I mounted the sensor on springs, with another spring and screw arranged so that a small amount of pressure on the front will make them touch and complete a circuit to trigger the measurement function.  An LCD screen displays the RGB and hex values of the measured color, and an RGB led lights up in the measured color.  After testing across 3 different screens that colorimeter is over 97% accurate.

![Everything all snug in the case.](/assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg)

![Completed colorimeter](/assets/article_images/2016-02-10-colorimeter/colorimeter.jpg)

![The Business End](/assets/article_images/2016-02-10-colorimeter/business-end.jpg)

![After measuring the color on a phone screen](/assets/article_images/2016-02-10-colorimeter/measure-phone-color.jpg)

##Colorimter Mark two
**update 3/7/16**

Even though the first version worked well, there was definitely some room for improvement, the most obvious improvement would be eliminating the moving parts and having a sensor dedicated to each filter, but I still only have one photo sensor so I'm sticking with the rule of just using parts that I already own.  

The focus focus of these improvement is to optimize the programming to eliminate unnecessary hardware.  The original program referenced the entire database of calibration measurements when determining new colors, the database alone was about 45kb.  So I did a polynomial regression analysis of the calibration measurements to establish a set of equations that can be used to determine colors.

![](/assets/article_images/2016-02-10-colorimeter/polynomial-regression-graph.png)

The data naturally split into three intervals each section spanning the range in which one of the primary color channels was at 100% or 255 in our 24 bit color system.  After finding the representative 3rd order polynomial equations we no longer need the Raspberry Pi computer to do heavy lifting with the database,  and the whole program will fit onto the 32kb of memory on the Arduino's ATmega328 micro controller.
![Looking roomy in there!](/assets/article_images/2016-02-10-colorimeter/colorimeter-mk2.jpg)

I rewrote the code to get everything running on the Arduino,  Also ditching the USB power bank for a simple 9v battery. Ditching the two most expensive components brings the total cost of materials to about $10, not including the case.  It also starts up much faster now, ready to measure within about 2 seconds of powering up.  The accuracy seems to be about the same as before,  but testing is required to compare.  I'm considering  making a new case for it, but if I do that I would probably want to get some more sensors to eliminate the need for the servo to make things more compact and reliable.  also I saw 16x2 LCD screens online with an RGB backlight so the function of these screen and led could possibly be combined.
