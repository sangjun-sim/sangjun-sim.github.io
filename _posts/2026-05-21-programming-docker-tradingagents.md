---
title: "Docker - TradingAgents"
date: 2026-05-20 15:00:00 +0900
categories: [Programming, Docker]
tags: [docker, llm]
math: true
toc: true
---

## Using TradingAgents with Local LLM

This note is a comprehensive guide for setting up the [TradingAgents framework](https://github.com/tauricresearch/tradingagents) with a local LLM engine inside a Docker environment on an Apple Silicon chip. Docker does not fully support GPU acceleration for Silicon chips (M*X*). Thus, one should host the local LLM on macOS and connect Docker to it. However, this note will explain how to set up the pure Docker container. It incorporates all technical issues, specific error codes, and workarounds.

The first thing one needs to do is to clone the repository into the local computer:

``` shell
$ git clone https://github.com/TauricResearch/TradingAgents.git
$ cd TradingAgents
```

Then, one should create the environmental settings file and add some options:

``` shell
$ cp .env.example .env
$ vi .env
# In order to use a local LLM, add the following options to the `.env` file:
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://ollama:11434/v1
OLLAMA_MODEL=llama3.1:8b
```

{: .prompt-info }
> We don't need to install `ollama` and LLM models on the local computer.

After that, one starts the backend services by using `docker compose`. This enables running multiple container applications:

``` shell
# Restart container
$ docker compose --profile ollama down
$ docker compose --profile ollama up -d
```

One can check how well they are running by:

``` shell
$ docker ps
```

Now, one can install an LLM model and execute `TradingAgents`:

``` shell
# Install LLM model
$ docker exec -it tradingagents-ollama-1 ollama run llama3.1:8b
# Check LLM model
$ docker exec -it tradingagents-ollama-1 ollama list
# Execute TradingAgents
$ docker exec -it tradingagents-tradingagents-ollama-1 tradingagents
```

If one does it correctly, one gets the following screen:

![main-page-tradingagents](assets/img/image-tradingagents.png)