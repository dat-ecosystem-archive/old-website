# Announcing PublicBits: Breaking down open data silos
by [Karissa McKelvey](http://karissa.github.io), [Max Ogden](http://maxogden.com)

We're happy to announce a new $420,000 grant from the Knight Foundation for [PublicBits.org](http://publicbits.org). Our goal is to collect all of the world’s open data sources. We want to compile a dataset of datasets, and make them accessible through a free, decentralized, redundant, and open network, inspired by BitTorrent. The Knight funding will allow us to hire three and a half new team members for this new project, and we couldn't be more excited!

## Sue is a data analyst

Imagine you know a person named Sue, who is a data analyst. Her primary job is to convert *open data* into *actionable information*.

One day, she has an idea. She decides she wants to study water quality around the world. The first thing she must do is search for data on the internet that will be useful for her study. She goes to a data portal for a city, types in 'water,' and then scrolls through the datasets to find one that will work. She might have to do some filtering, craft a query, or create a script to get exactly the data she wants. She then might have to do some transformations to get it in the right format.

She needs to repeat this process for another hundred data portals. To make matters worse, each one will have slightly different parameters, or take a long time to download.

## Data silo nightmare

It is clear that it is difficult to turn open data into actionable information. Sue must have to spend countless hours searching, collecting, and combining data from different places until she gets the dataset she needs. Managing downloaded and constantly changing open data from the Internet today is largely done by hand, which is time consuming and error-prone. Sue might spend many hours a week simply searching for, managing, tracking, and downloading data -- if the data is still available for download!

We've talked to hundreds of data scientists and data analysts who have this problem. They all agree that open data does not mean easy data. We've found the obstacle in journalism, non-profit organizations, private enterprise, universities, government agencies, and NGOs. Through these relationships, we have identified discovery and distribution of data as a significant pain point that spans the open data landscape.

## The solution

We plan to build a search engine for open data called PublicBits.org. PublicBits.org will crawl data sources, turn them into Dat repositories, and create a 'dataset of datasets' that can be searched on a centralized service. The closest analog to Dat is BitTorrent, but BitTorrent was designed with piracy in mind and lacks features such as file versioning, real time updating content, and web browser support.

Each time PublicBits.org finds a data source and generates a Dat repository, it creates a cryptographic hash, like a fingerprint, that uniquely identifies the data. For example, the data fingerprint for the CFPB's open complaint database might be '6c53f0cf72a1c5d884b4c161dd066af33f1b2c65f1baaf58cc6d61d7faac4364' on January 28th. Lets say, perhaps on Feb 1st, there are 300 new complaints published by the CFPB. The crawler will go to the url and generate the fingerprint, finding something different -- say, 'b1f0e4e604246709bb9db06a50b5abade9bf3a556f5796e2a22365a200b33059'. The history for the dataset, then, might look like this:

CFPB complaint dataset
----------------------
| 1/28/16 | 6c53f0cf72a1c5d884b4c161dd066af33f1b2c65f1baaf58cc6d61d7faac4364
| 1/29/16 | 6c53f0cf72a1c5d884b4c161dd066af33f1b2c65f1baaf58cc6d61d7faac4364
| 1/30/16 | 6c53f0cf72a1c5d884b4c161dd066af33f1b2c65f1baaf58cc6d61d7faac4364
| 1/31/16 | 6c53f0cf72a1c5d884b4c161dd066af33f1b2c65f1baaf58cc6d61d7faac4364
| 2/01/16 |
b1f0e4e604246709bb9db06a50b5abade9bf3a556f5796e2a22365a200b33059
----------------------

If the fingerprint is different, then we download that data, store it, and add it to the list. This allows people to reference data back in time, by simply supplying the fingerprint id. It also means that we can reduce the amount of data we store by never storing duplicate data ([this works like rsync by using rabin fingerprinting](http://github.com/maxogden/rabin)).

So when Sue has her idea, she can go to PublicBits.org, search for 'water', and filter by metadata associated with the Data Package. She could decide to download hundreds of different datasets at once. When she downloads the datasets, they will be tracked by a local desktop application that will organize and catalogue them associated with her user account. When PublicBits.org scrapes the data and finds that it is new, the Dat will be updated, and Sue will be notified that the data has updated. This makes it easy for Sue to keep her analyses up-to-date and accurate.

We will build open source data harvesters for popular data portals. We will also encourage users to submit their own harvesters, or publish their data portal to PublicBits through plugins and extensions. These harvesters will be focused on collecting and normalizing datasets into `Dat` data packages. We want to focus on the process of *standardization,* and plan on using an existing open standard such as OKF's Data Packages to describe the dataset metadata.

## A New Design for Data Distribution

The most common data distribution strategy in use today is built on 20 year-old technology, relying on manual downloads through single points of failure such as as FTP and HTTP, resulting in messages like ‘Sorry, the server is down for maintenance.’ Our approach, inspired by BitTorrent but adapted to work for open data, is to build a smarter network that increases availability of data by connecting people who want to download open data to those who already have it. After users download data, they will be able to offer their unused bandwidth to mirror (or upload) their previously downloaded datasets as a public service. Therefore, if the original source (e.g., http://data.gov) goes offline, the data will still be downloadable.

This Knight funding would support open source development for the PublicBits Catalog online search service, the PublicBits Desktop Application, and connectors to the large variety of data portals and other sources. Sources could range from popular data portals like Data.gov, World Bank, Socrata, CKAN instances to more niche sources like FiveThirtyEight, or the US Census Bureau. 

## The Challenge

We’re focused on pushing the boundaries of what’s possible in order to keep knowledge freely accessible. It will be a challenge to find the right team and execute the plan within the allotted time for the grant. The design must also contend with a scale of data that could potentially be very large, diverse and complicated. We need to make sure users will not get overwhelmed by the amount of data, and that we can return relevant results.
