
[![iOS Safari Extension Workflow](https://github.com/eefh/webtimemachine/actions/workflows/ios.yml/badge.svg?branch=feature%2Fchrome-history-extension)](https://github.com/eefh/webtimemachine/actions/workflows/ios.yml)

# The Web Time Machine
It's like a Time Machine for your browser. Search through everything you've seen and find that thing you don't know where you looked up

## Current architecture
We will start with a simple backend which stores the browser history that the client sends up. It will have a simple rest API 

### Current Milestones for MVP
- [x] Minimum web based Time Machine (just display the urls and dates with a basic client search)
- [x] Minimum IOS safari extension Sends date/time, web page content, urls (uses releases/tags to generate a release)

### TODO
- [ ] LLM the web time machine
- [ ] Add a crawler to the LLM to get more context
- [ ] chrome extension to send
- [ ] firefox
- [ ] ability to update in browser history
- [ ] expiration
- [ ] auto privacy filtering
