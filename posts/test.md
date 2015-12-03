# The problems with Git and Dropbox


### Frictionless
https://discuss.okfn.org/t/is-there-a-model-for-frictionless-science/1203

We've been flying through testing the beta and leaning on our friends in academia, government, and open source to come up with a roadmap for 1.0 launch. After six months of bug fixing, testing, and deploying dat in various contexts, we've finally come up with a new design that will address a larger body of concerns across all code and file sharing applications today.In coming versions, we are focusing more on **decentralized file sharing, versioning, and syncing**.

Our research first started with a series of interviews with researchers and data scientists using corporate filesharing services like Dropbox, Amazon S3, and Google Drive to share their data. We also studied version control tools like Git and those built on top of Git (like Git Annex). In our research, we found key design flaws in each of these tools when applied to data sharing:

DropBox (+ Box, S3, Google, etc):
- **Central point of failure.** Any files saved here may be subject to disappearing whenever the original host can no longer pay for the service. If someone rehosts the data,
- **Proprietary software.** Users are not free to read, modify, or redeploy the code on their own servers.
- **Ad-hoc versioning.** Versioning is either non-existant or

Git:

![https://imgs.xkcd.com/comics/git.png](https://imgs.xkcd.com/comics/git.png)
- **Merge conflicts.** Seen in a [recent XKCD](https://imgs.xkcd.com/comics/git.png), when a user encounters a merge conflict, the accepted solution amongst non-experts is to "move everything to another folder and start over."
- **Manually adding files.** Users can often forget to add a crucial file, leaving their collaborators with the infamous "I don't see that file... did you forget to add it?"
- **File sizes.** Git has trouble when files start getting bigger than 100MB.
