# POC-NODE-22

#### Running package.json scripts

No need to use the following command `npm run watch`, you can use node directly:

```bash
$ node --run watch
```

It will run the watch script located in the `package.json`.

#### Watch Mode

Run the following command:

```bash
$ npm run watch
```

If you modify the `index.js` in the `watched` folder, the node will restart with the new code automatically.

#### Glob/GlobSync

No need to import the glob function from [Glob npm](https://www.npmjs.com/package/glob).
You can use it directly from node:fs directly. Run the following command and check the content of the file `index.js` in the directory `glob`.

```bash
$ npm run glob
```

#### Improve performance of AbortSignal creation


## Link

[Node 22](https://nodejs.org/en/blog/announcements/v22-release-announce#improve-performance-of-abortsignal-creation)
[AbortSignal Explanation deep](https://openjsf.org/blog/using-abortsignal-in-node-js)
