---
layout: post
title:  "Text Message Controlled Dog Treat Dispenser"
date:   2015-12-25 19:34:25
categories: side-project
tags:  mechanical electrical programming
image: /assets/article_images/2015-12-25-treat-dispenser/treat-dispenser-banner.jpg
image2: /assets/article_images/2015-12-25-treat-dispenser/treat-dispenser-banner.jpg
image-thumb: /assets/article_images/2015-12-25-treat-dispenser/treat-dispenser-banner.jpg
excerpt: This project was a Christmas present for my wife,  so she could send our dog Gus treats and check in on him while at work.
---


<iframe width="560" height="315" src="https://www.youtube.com/embed/wkbKYwNOw7A?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
*Video of the device in action*


## How It Works

- This project uses a phone number from Twilio. When a text message is received it triggers a webhook HTTP post to a python flask server that's running on a Raspberry Pi.
- The server checks the content of the message, if there are no specific commands it wiggles the servo motor a few times to make some noise and get the dogs attention.
- At this point the Camera takes a picture and starts uploading it to Dropbox, while the servo drives a piston to dispense a treat.
- After the Dropbox photo url is received, the picture is text messaged to the sender through the Twilio API.

![Everything laid out in SolidWorks](/assets/article_images/2015-12-25-treat-dispenser/complete-Box.gif)

![Field of view test, for when Gus is in his crate](/assets/article_images/2015-12-25-treat-dispenser/crate-setup.jpg)

![Treat dispenser in action](/assets/article_images/2015-12-25-treat-dispenser/dispenser-loop.gif)

![CNC machining the treat dispenser assembly out of Acetal Delrin](/assets/article_images/2015-12-25-treat-dispenser/delrin-magazine-machining.jpg)

![A prototype box was machined out of wood, the final product is white Delrin](/assets/article_images/2015-12-25-treat-dispenser/wooden-box-machining.jpg)

![All of the parts laid out](/assets/article_images/2015-12-25-treat-dispenser/parts-laid-out.jpg)

![The completed device](/assets/article_images/2015-12-25-treat-dispenser/treat-dispenser.jpg)

It has been working great. To the left of the camera there is a motion detector that is hooked up, but with no software running for it. While we're house training Gus he stays in his crate during the day, but when gets free range of the house during the day the motion sensor will be used to make sure that he's in front of the camera before it takes a photo.
