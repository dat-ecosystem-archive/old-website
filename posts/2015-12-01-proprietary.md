# Proprietary services deemed harmful for open science.
by [Karissa McKelvey](http://karissa.github.io)

**Proprietary services such as Google, GitHub, Dropbox, PLOS, Figshare, and AWS provide data hosting at little-to-no charge. They pride themselves on the ease of sharing digital materials, positioning themselves as the most popular platforms for scientific collaboration. However, each falls victim to the plight of proprietary services -- when the money runs out, so does your data.**

Imagine a scenario thirty years in the future, when most of the world's scientific data has been hosted on Google. Imagine that something terrible happens, and the company stops hosting data. How many owners of those open data repositories will take the time to re-host their data? How many university-hosted GitHub's will quickly become unsustainable? How many papers will be referencing dead links? Who will provide a redirect service to those new repositories? I can imagine a variety of ways in which this scenario leads to a reproducibility nightmare.

It is expected that some, or most companies around today won't exist in fifty years. The average lifespan of a company has decreased from 67 years in the 1920s to just [15 years today](http://www.bbc.com/news/business-16611040). That means that if Newton published his Law of Gravitation on DropBox in 1666, someone would have had to move the digital copy anywhere from 11 to 33 times. Sound familiar? In practice, this is what actual libraries do. Although perhaps not good for business, copying is the only sure way to create redundancy in case of disaster (corporate or otherwise).

Copying paper, as in copying data, is relatively free at first, but becomes cumbersome at scale. Despite this, society spends a considerable amount of resources on copying paper records in literal [mountains made of iron](http://www.ironmountain.com/). For decades, people have been copying vital information onto microfilm, a hardy material that has a life expectancy of [a few hundred years](https://en.wikipedia.org/wiki/Microform). When data is copied, it has higher redundancy, increasing the chance that it will be around forever. Where is the equivalent for open data?

In this context, it seems to follow that *copying data* from a digital hosting service should not be prevented or require external tooling. If we want data to be around forever, it should be redundant. Unfortunately, many proprietary hosting services do the exact opposite because their business model depends upon it.

As open data publication becomes normalized, we need to concern ourselves heavily with the method -- and that's where tools like dat can come in. Dat is a decentralized publishing tool that is has been open source since day one. We have designed the tool explicitly with We're convinced that decentralized (read: redundant) open source tools are the right way forward to ensure longevity in data publishing. Scientists should use open data tools, like dat, that are **designed for editing, copying, re-hosting, and redistributing the data.** Proprietary, corporate tools with business models focusing on the current fiscal quarter simply do not have the incentive structures to build this technology on their own.

## But how did we get here in the first place?

Proprietary services use code that is closed source. Their business model depends heavily upon preventing users from running their own copy of the software and data. The service they offer is explicitly to enclose on, or privatize, the data hosting, so that users must depend upon them. However, universities and other organizations  often purchase private installations for GitHub, Dropbox, or Box. Even in this case, though, users may not copy, distribute, study, change, or improve the software without prior permission. This is how companies make their money in the long-run -- you're tied into their proprietary model. Their service is the fact that the code and data is proprietary.

Even if the hosting service prides itself on its ease of data transfer, it can still take tremendous effort to move data off of a proprietary service. Amazon encourages users by making it free to upload data to cloud storage, but it costs money every time it needs to be downloaded. Bandwidth can become an expensive cost, especially if we're talking about very large datasets (on the order of terrabytes). Who will pay for this data transfer cost? The individual researcher will unlikely have that money, and it is unsustainable to expect the funds to be around forever for this kind of bandwidth cost. Although unfortunate, this market landscape is not necessarily the fault of companies (a topic for a different blog post). We just need to create open source alternatives and teach libraries how to use them. And we are -- albeit still falling behind Silicon Valley's immense trove of resources.

## Start here: public knowledge is a commons, not for privatization

I want to be clear -- a service should not be considered harmful just because it is a business. I don't want to create a pitchfork movement against all business hosting services (free as in freedom, not beer). I simply want to point out that, in open scientific publishing, we need to start supporting and using services that are open source (non-proprietary). In other words, let's use internet infrastructure that doesn't rely on proprietary data hosting as a business model. Brewster Khale of the Internet Archive has called for an [internet that has openness 'locked' into how it works and operates](http://brewster.kahle.org/2015/08/11/locking-the-web-open-a-call-for-a-distributed-web-2/). We support this notion, hoping that we avoid a situation where published scientific data is lost forever. We have started by designing a publishing infrastructure that is copy- and edit-friendly from the beginning.

We have to start thinking about the data we publish as part of the public sphere. Libraries are, as they always have been, in the best position to be shepherds of the knowledge in the public sphere. As scientific publishing becomes more open, and more digital, we are losing one of the main tenants that libraries have always been tasked with -- the preservation of the knowledge commons, that is, the public knowledge of our society. Private interests have begun taking over this job, but they are incorrectly equipped and incentivized for this kind of work.

It is not surprising that this has happened, though, as business interests are able to secure more finances than libraries in the current economy. The good news is that digital scientific publishing is still young, and the lack of tooling, knowledge, and resources available in open source has improved steadily since I first heard of this problem in 2011, and hopefully only improve with time and effort. Let's start supporting libraries (as in institutions, not code) and help them power themselves with open source software that encourages redundancy through openness in hosting.

But, how will we foster this ecosystem? We can go a long way, I believe, by simply helping librarians achieve their goals. Libraries are best described as stewards of the knowledge commons [1], and their best work comes when they have the freedom to manage the flow of information. Academic journals, universities, and software foundations should start listening to trained digital librarians who have advocated for these open systems by supporting their creation and using them instead. Let's begin a movement against the use of proprietary services for data publishing, and instead advocate for open, redundant systems.

Karissa McKelvey<br>
Multiple hat wearer and Developer, Dat Project<br>
[http://karissa.github.io](http://karissa.github.io)<br>[@captainkmac on Twitter](http://twitter.com/captainkmac)

- [1] *If you want to read more about this topic, I highly recommend reading the work of the late Eleanor Ostrom and Charlotte Hess on commons management, [Understanding the Knowledge Commons](https://mitpress.mit.edu/books/understanding-knowledge-commons).*