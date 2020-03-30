---
toc: true
layout: post
- badges: true
- comments: true
description: You play a game of guessing the outcome of flipping two coins/frisbee. What should you guess?
categories: [markdown, game]
title: Odd or Even?
---

## Play the Game

You are playing in the finals of an ultimate game, and the wind is blowing hard. 10 Minutes before the game starts, captain of both finalist teams are inching towards each other, each holding a disc, and you are one of them. The team who wins the flip would get to start on the downwind side. Sam, the captain of the opposing team gives you the opportunity to call for the outcome of the flip. What would you call, EVENS or ODDS?

![Frisbee image](http://www.maikaisogawa.com/wp-content/uploads/2018/12/discs.jpg)

## HOW?

### The Probabilities

Let 

$p(Heads) = x$ 

be the probability of the getting a head in single disc flip. Then,

$p(Tails) = 1-x$ 

We find the probabilities of getting even and odds.

$$
\begin{align}
p(Evens) & = p(Heads)p(Heads) + p(Tails)p(Tails) \\
& = x^2 + (1-x)^2 \\
& = 2x^2 - 2x + 1
\end{align}
$$

$$
\begin{align}
p(Odds) & = p(Heads)p(Tails) + p(Tails)p(Heads) \\
& = 2 \times x(1-x) \\
& = 2x - 2x^2
\end{align}
$$

We find the difference in probability, i.e. 

$$
\begin{align}
p(Evens)-p(Odds) = 4x^2 - 4x + 1 = y
\end{align}
$$

### Visualizing it
Let's plot the graph of $ y = 4x^2 - 4x + 1 $
![]({{ site.baseurl }}/images/quadratic.png)

### What do we see
Given all probability $x$ from 0 to 1, $p(Evens)-p(Odds)$ is always greater than 0. In fact this is true for all $x \in \mathbb{R}$.

\begin{align}
p(Evens) \geqslant p(Odds)
\end{align}

## So?
The answer is apparent. If the chances of getting heads or tails is 0.5, calling even or odds does not matter.

However, our environment is imperfect, e.g. asymmetry of frisbee disc, wind condition. It is safe to assume $x$, will deviate from 0.5. 

Therefore, you'll be correct by calling **EVENS** at least half the time, if not more.