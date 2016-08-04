# dat website

### run locally

```
npm install
npm start
```

### add a post

Create a `.md` file in `posts/`.

Create an entry in `posts.js`.

Find it at `/blog/<name>`.

When you're ready to publish it, add a `date`. Posts without a `date` are not public.

### deploy

push `master` to github then run:

```
npm run deploy
```
