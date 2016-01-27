# Announcing PublicBits: Breaking down open data silos
by [Karissa McKelvey](http://karissa.github.io), [Max Ogden](http://maxogden.com)

We're happy to announce new funding from the Knight Foundation for [PublicBits.org](http://publicbits.org). Our goal is to collect all of the world’s open data and make it accessible through a free, decentralized, redundant, and open network.

## Hey, Sue!

Imagine you know a person named Sue, who is a data analyst. Her primary job is to convert *open data* into *actionable information*.

One day, she has an idea. She decides she wants to study water quality around the world. The first thing she must do is search for data on the internet that will be useful for her study. She goes to a data portal for a city, types in 'water,' and then scrolls through the datasets to find one that will work. She might have to do some filtering, craft a query, or create a script to get exactly the data she wants. She then might have to do some transformations to get it in the right format.

She needs to repeat this process for another hundred data portals. To make matters worse, each one will have slightly different parameters, or take a long time to download.

## Data silo nightmare

It is clear that it is difficult to turn open data into actionable information. Sue must have to spend countless hours searching, collecting, and combining data from different places until she gets the dataset she needs. Managing downloaded and constantly changing open data from the Internet today is largely done by hand, which is time consuming and error-prone. Sue might spend many hours a week simply searching for, managing, tracking, and downloading data -- if the data is still available for download!


We've talked to hundreds of data scientists and data analysts who have this problem. They all agree that open data does not mean easy data. We've found the obstacle in journalism, non-profit organizations, private enterprise, universities, government agencies, and NGOs. Through these relationships, we have identified discovery and distribution of data as a significant pain point that spans the open data landscape.

## The solution

We plan to build a search engine for open data called PublicBits.org. PublicBits.org will crawl data sources and make them available via a centralized data repository.

So when Sue has her idea, she can go to PublicBits.org, search for 'water', and filter by metadata associated with the Data Package. She could decide to download hundreds of different datasets at once. When she downloads the datasets, they will be tracked by a local desktop application that will organize and catalogue them associated with her user account. When PublicBits.org scrapes the data and finds that it is new, the user will be notified to update the data. This makes it easy for Sue to keep her analyses up-to-date and accurate.

We will build open source data harvesters for popular data portals. We will also encourage users to submit their own harvesters, or publish their data portal to PublicBits through plugins and extensions. These harvesters will be focused on collecting and normalizing datasets into `Dat` data packages. We want to focus on the process of *standardization,* and plan on using an existing open standard such as OKF's Data Packages to describe the dataset metadata.

## A New Design for Data Distribution

The most common data distribution strategy in use today is built on 20 year-old technology, relying on manual downloads through single points of failure such as as FTP and HTTP, resulting in messages like ‘Sorry, the server is down for maintenance.’ Our approach, inspired by BitTorrent but adapted to work for open data, is to build a smarter network that increases availability of data by connecting people who want to download open data to those who already have it. After users download data, they will be able to offer their unused bandwidth to mirror (or upload) their previously downloaded datasets as a public service. Therefore, if the original source (e.g., http://data.gov) goes offline, the data will still be downloadable.

This Knight funding would support open source development for the PublicBits Catalog online search service, the PublicBits Desktop Application, and connectors to the large variety of data portals and other sources. Sources could range from popular data portals like Data.gov, World Bank, Socrata, CKAN instances to more niche sources like FiveThirtyEight, or the US Census Bureau. 

## The Challenge

We’re focused on pushing the boundaries of what’s possible in order to keep knowledge freely accessible. The Knight funding will allow us to hire three and a half new team members. It will be a challenge to find the right team and execute the plan within the allotted time for the grant. The design must also contend with a scale of data that could potentially be very large, diverse and complicated. We need to make sure users will not get overwhelmed by the amount of data, and that we can return relevant results.
