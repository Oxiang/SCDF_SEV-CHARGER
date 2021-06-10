# SCDF_SEV-CHARGER
For SCDF Hackathon 2021

## What does this repository contain?

Web Application that live streams the gas (CH4 levels) and temperature sensors value, the warning level, the video feed for IR and RBG as well as the location.

## How to use?

Pull over the entire repository, make a copy of the .env file and populate it with the Google API key. 

Subsequently, install all the packages and run start

Follow the steps written below
```shell
git clone https://github.com/Oxiang/SCDF_SEV-CHARGER.git

cd SCDF_SEV-CHARGER

cp .env.template .env

# Fill .env with Google API key

npm install

npm run start

```

## Architecture

The overall architecture is broken down into three different segments: Onsite, IBM cloud and SCDF.

![image-architecture](image/architecture.jpg)

### IBM Cloud Services

- IBM Watson for IoT data storage
- IBM Cloud Foundry to host the React Web Application for live-streaming
- IBM Cloud functions as a serverless backend to activate push notification
- IBM Push Notification to send messages to Response Team on high warning level

### SCDF Users

- Data Analyst working for SCDF are able to tap into the IoT data collected and perform data analytics. This give the team an understanding of the situation for all significant period
- In the Headquarters, SCDF staff are able to monitor and assess the onsite situation from their office and make appropriate decisions
- The Response Team are pre-empt for possible disaster situation and are notified instantly when the disaster strike

## Dashboard

![image-architecture](image/homepage.jpg)

## Livefeed

![image-architecture](image/livefeed.jpg)

## Map

![image-architecture](image/map.jpg)