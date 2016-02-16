---
layout: post
title:  "Handheld Wireless Colorimeter"
date:   2016-02-10 14:34:25
categories: side_project mechanical electrical programming
tags:
image: /assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg
image2: /assets/article_images/2016-02-10-colorimeter/colorimeter-innards.jpg
---
Last Friday I took apart my old Spyder2 monitor colorimeter to see how it works.  Apparently it uses 7 colored filters with a light sensor behind each one,  by comparing the amount of light absorbed by each filter it can determine the color on screen.  I was fascinated by how it worked so I decided to take a shot at making my own.



##Constraints:
- Only use components from around the house
- Finish it in roughly a weekend
- Ideally small enough to be hand held

##The sensor
First I tackled the most import part, the sensor. I had some color gels used for camera lighting, I chose to use red, green, and blue (the additive primary colors) for even coverage of the color spectrum.

![Red, Green, and Blue Filters](/assets/article_images/2016-02-10-colorimeter/color-filters.jpg)

Unfortunately I only had one photo resistor so a servo was used to take measurements through each filter.

![Color plate, with the filters spaced 45º apart](/assets/article_images/2016-02-10-colorimeter/color-plate.jpg)

![Sensor Asembly](/assets/article_images/2016-02-10-colorimeter/colorimeter-sensor-explosion.jpg)

![Sensor Motion Simulation](/assets/article_images/2016-02-10-colorimeter/Sensor-Motion-Simulation.gif)


##Calibration

After assembling the sensor and the next step was to collect test data for calibration.  An Arduino was used to collect the analong light measurements form the photo resistor and to control the servo. I limited scope to measuring hue, there are 1560 hues in the 24 bit RGB color system, I wrote this [color picker web app](/color) in AngularJS, mounted the sensor onto a calibrated monitor, and setup a python script to iterate through the 1560 hues and record the readings.

![Graph of Color Calibration Measurements](/assets/article_images/2016-02-10-colorimeter/colorimeter-calibration-data.jpg)
