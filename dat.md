# Dat
From a variety of contributors.

http://dat-data.com
http://github.com/maxogden/dat


## Abstract
Dat is a version-controlled, distributed database. Dat is designed to provide data scientists with a common data exchange mechanism for emerging services and practices in the scientific community to collaborate and share research data, both internally and externally. Here, we outline the core infrastructure for Dat, which has been informed by key use cases in the scientific community. We hope this serves as a living document to help developers and data scientists in all stages of interaction with Dat -- from extending features to understanding use case trade offs.

## Introduction
We hope Dat will simplify enormously the process of duplicating and verifying novel research and associated discoveries. We've been working with scientists to arrive at key use cases that go unsolved across multiple scientific domains with varied technological expertise.

From day one, we architected Dat as a variety of open source modules that build upon and integrate with each other, encouraging contribution from an existing community of data engineers. You can find the current list of modules in the `package.json` of the [main repository](http://github.com/maxogden/dat).

## Data in Dat
### Datasets
A dataset in dat is

### Rows
Rows consist of key, value pairs.

### Immutability
Data in dat is immutable. That means that data is never deleted from dat. At this point, data could be removed from dat by changing the value of a row to `null`.

### Streaming

## Ecosystem
### Client libraries
### Pipelines

## Architecture
For each of the following sections, we should describe how dat's core and its underlying modules support the features listed.

### It's a Graph
Supports merging
TODO: HOW

Supports branches
TODO: how

### It's a Log
Supports checkout
TODO: HOW

Supports pull
TODO: how

## Performance

### Benchmarks
Here we should list some basic benchmarks (adding data locally, replication, exporting data).

### Room for improvement
Here we should talk about where there might be room for improvement.
