# Goals
## Explore
Explore and gain insight on the network through various visualisations & analysis.
## simulate
Adapt the network by updating quorumSets, adding/removing nodes, toggling nodes on/off and see the results live in the browser. 
## export
- quorum set configurations
- network simulation results

# Stellarbeat Architecture
Nodejs modules that can be reused on frontend and backend. This should provide us with a manageable/reusable codebase and allow us to simulate/process live in the browser and push heavier computations to the backend. 
## Modules
### domain
Domain classes like node, quorumset, network
### connector
General purpose library that connects the stellar-core and can issue commands
### crawler
Uses the connector to crawl the network
### stellarbeat backend (todo: open-source)
Initiates the crawler and augments the nodes with statistics (uptime,...) and other data like displayname, location,...
Provides persistent storage. Provides api
Exposes the nodes & analytic processes. e.g. 

`GET /nodes/{publicKey}`

`POST /compute/quorum-intersection`

### quorum monitor
This. Consumes the backend api

### stellarbeat frontend (todo: open-source)
Frontend that contains various visualisations and tools like quorum monitor, node map, node version pie chart,...

## Technology
### nodejs
https://nodejs.org/en/

### vuejs
https://vuejs.org/

### d3js
https://d3js.org/

### flow
https://flow.org/

## Install
`npm install`

`npm run flow:deps`

`npm run build`

`open web/index.html in browser`

babel polyfill needs to be loaded before you include the quorum-monitor code:
`    <script src="../node_modules/babel-polyfill/dist/polyfill.min.js"></script>
    <script src="../dist/quorum-monitor.js"></script>
`