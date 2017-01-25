# Learning to use WebRTC

Start by generating key/cert pairs for HTTPS server:
+ openssl genrsa -out key.pem 2048
+ openssl req -new -key key.pem -out csr.pem
+ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
+ rm csr.pem

Run:
`npm init`
`npm install --save webrtc-adapter`

The following comes directly from the [webrtc-adapter github repo](https://github.com/webrtc/adapter):
> In node_modules/webrtc-adapter/out/ folder you will find 4 files:
>
> + adapter.js - includes all the shims and is visible in the browser under the global adapter object (window.adapter).
> + adapter_no_edge.js - same as above but does not include the Microsoft Edge (ORTC) shim.
> + adapter_no_edge_no_global.js - same as above but is not exposed/visible in the browser (you cannot call/interact with the shims in the browser).
> + adapter_no_global.js - same as adapter.js but is not exposed/visible in the browser (you cannot call/interact with the shims in the browser).
> **Include the file that suits your need in your project.**

i.e. copy the file: `node_modules/webrtc-adapter/out/adapter.js` to `public/adapter.js`

Start an https server in your `server.js` file
