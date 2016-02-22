---
layout: post
title:  "Handheld Wireless Colorimeter"
date:   2016-02-10 14:34:25
categories: side-project
tags:  mechanical electrical programming
image: /assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg
image2: /assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg
image-thumb: /assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg
excerpt: Made from parts I had around the house, measures hues on LCD screens with 97% accuracy.
---
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
After assembling the sensor and the next step was to collect test data for calibration.  An Arduino was used to collect the analong light measurements form the photo resistor and to control the servo. I limited scope to measuring hue, there are 1560 hues in the 24 bit RGB color system, I wrote this [color picker web app](/color) in AngularJS, mounted the sensor onto a calibrated monitor, and setup a python script to iterate through the 1560 hues and record the readings.

![The sensor and monitor were set up in a bathroom (the darkest place in my house) to take calibration measurements with almost no ambient light.](/assets/article_images/2016-02-10-colorimeter/test-setup.jpg)

![Graph of Color Calibration Measurements](/assets/article_images/2016-02-10-colorimeter/colorimeter-calibration-data.jpg)

With a database of calibration measurements, we now have a set of known values to compare new measurements too.  

##Finishing Touches
The last step was to create an interface and assemble all of the components into the case, for the "start button" I mounted the sensor on springs, with another spring and screw arranged so that a small amount of pressure on the front will make them touch and complete a circuit to trigger the measurement function.  An LCD screen displays the RGB and hex values of the measured color, and an RGB led lights up in the measured color.  After testing across 3 different screens that colorimeter is over 97% accurate.

![Everything all snug in the case.](/assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg)

![Completed colorimeter](/assets/article_images/2016-02-10-colorimeter/colorimeter.jpg)

![The Business End](/assets/article_images/2016-02-10-colorimeter/business-end.jpg)

![After measuring the color on a phone screen](/assets/article_images/2016-02-10-colorimeter/measure-phone-color.jpg)
