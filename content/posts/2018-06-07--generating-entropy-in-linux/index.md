---
title: Generating Entropy in Linux
subTitle: A walkthrough on the available solutions for feeding the kernel with some entropy
category: Linux
cover: entropy-cover.jpg
status: "Done"
revision: 1
confidence: "Almost Certain"
importance: 6
---

In Linux, sometimes you may need to generate some entropy.

# Solutions

There are both *hardware* and *software* solutions:

- **Hardware solutions**: they can *generate more entropy per second*, but you need physical access
- **Software solutions**: they have less performance, but you just need `root` permissions (no physical access)

# Hardware solutions

Typically it's a USB device that *generates and streams some random numbers*.

One of such devices is [TrueRNG](http://ubld.it/products/truerng-hardware-random-number-generator) (price is approx: 50$).

# Software solutions

## RNGD

This program feeds random data from hardware device to kernel.

    rngd -r "/dev/urandom"

Here we have used `rngd` program ([man 8 rngd](http://linux.die.net/man/8/rngd) for more details).

This daemon feeds data from a random number generator to the kernel's random number entropy pool, after first checking the data to ensure that it is properly random.

## Audio Entropy Daemon

This program feeds the `/dev/random` device with entropy-data read from an audio device.

The audio-data is not copied as is but first *de-biased* and analysed to determine how much bits of entropy is in it.

The official website of the program is [here](https://www.vanheusden.com/aed).
