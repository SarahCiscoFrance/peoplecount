# TooManyPeopleCount

![Image description](https://i.ibb.co/rkN0TqZ/Capture-d-e-cran-2020-05-20-a-20-57-34.png)

### What is it ?
Webex Room device people counter - alerts when room is too full and also display (4 seconds after the alert is triggered) a web page that you can set in the macro (see **How to use it** part below)

This is a proof of concept using the Webex video endpoint peoplecount function to alert when more than a given number of people in view. The alert will also work when the board is in half-wake state. Technically you could show the number of people detected but I chose not to do that in the alert.

### How to use it
- Macro code speaks for itself: 
set **maxPeople** to room capacity, **alertDuration** to number of seconds the alert is shown and **OPTION** to set alert type choose ``1`` if you want to active the digital signage mode (in order to display the web page you set in the **url**) or ``2`` if you just want to display simple alert without the web page.

- For the macro to work, set PeopleCountOutOfCall and PeoplePresenceDetector to TRUE in Setup->Configuration->RoomAnalytics.

### Clone project

``` bash
# clone the project
git clone https://github.com/SarahCiscoFrance/peoplecount.git
```

### Installation
Open a web browser pointing to the IP address of your room device, and sign in to the web interface (you will need a user account with 'administrator' role), and navigate to **Integration > Macro Editor**
![Image description](https://i.ibb.co/FYZR4HR/Capture-d-e-cran-2020-05-20-a-17-56-17.png)

Then import peoplecount.js activate it and save.
![Image description](https://i.ibb.co/jGTqxMz/Capture-d-e-cran-2020-05-20-a-18-15-18.png)

