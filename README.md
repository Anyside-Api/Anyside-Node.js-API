# Anyside Node.js API

Welcome to the Anyside Node.js API!<br />
[Python API](https://github.com/Anyside-Api/Anyside-Python-API)

In order to use the Anyside API you will need an API key. You can get your API key by creating an account on [anyside.com](https://anyside.com/).

## Installation

### Package manager

To install the Node.js API and get started you can simply npm install anyside into your project.

```ssh
$ npm install anyside
```

Using yarn:

```ssh
$ yarn add anyside
```

Using pnpm:

```ssh
$ pnpm add anyside
```

Once the package is installed, you can import the library using `import` or `require` approach:

```javascript
import Anyside from "anyside";

let anyside = new Anyside("YOUR API KEY");
```

If you use `require` for importing, **only default export is available**:

```javascript
const Anyside = require("anyside");

let anyside = new Anyside("YOUR API KEY");
```

For cases where something went wrong when trying to import a module into a custom or legacy environment,
you can try importing the module package directly:

```javascript
const Anyside = require("node_modules/anyside/anyside.js"); // node commonJS bundle (ES2017)
```

### CDN

Using jsDelivr CDN (ES5 UMD browser module):

```html
<script
  src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"
  type="module"
></script>
<script src="https://cdn.jsdelivr.net/npm/anyside@1.0.17/anyside.js"></script>
```

Using unpkg CDN:

```html
<script
  src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"
  type="module"
></script>
<script src="https://unpkg.com/anyside@1.0.17/anyside.js"></script>
```

## Example Query Domain

When making a request must pass a anyside domain name.

Response will contain wallest connected with anyside

```javascript
const Anyside = require('anyside');

let anyside  = new Anyside('YOUR API KEY');

(async () => {
    let response = await anyside.queryDomain('QUERY DOMAIN NAME Eg. John.any');
    console.log(response)
})();


"""
#Response Example:
{'Bitcoin': [{'address': '0xBTC-SOMESTUFF', 'name': 'Bitcoin'}],
 'Solana': [{'address': '0x...', 'name': 'Solana'}]}
"""
```

## Example Wallet lookup

When making a request must pass a vaild wallet address.

Response will contain anyside domain

```javascript
const {Anyside} = require('anyside');

let anyside  = new Anyside('YOUR API KEY');

(async () => {
    let response = await anyside.lookupWallet('WALLET ADDRESS');
    console.log(response)
})();

"""
#Response Example:
{'domain': 'John.any'}
"""
```

Please subscribe on [Anyside](https://anyside.com/) to receive project updates.
You can aslo follow us on [Twitter](https://twitter.com/AnysideNames) and [Discord](https://discord.com/invite/MKDBhDEtUn).
