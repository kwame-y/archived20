---
tags:
  - incomplete
date: 2025-06-14T11:48:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
# 4.1 - Probability Distributions
## Random Variables
- **Random Variable**
	- A random variable represents a numerical value associated with each outcome of a probability distribution
	- Denoted by $x$
	- Examples:
		- $x=$ Number of sales calls a salesperson makes in one day
		- $x$ = Hours spent on sales calls in one day
- **Discrete Random Variable**
	- Has a finite or countable number of possible outcomes that can be listed
	- Example:
		- $x=$ Number of sales calls a salesperson makes in one day
- **Continuous Random Variable**
	- Has an uncountable number of possible outcomes, represented by an interval on the number line
	- Example:
		- $x=$ Hours spent on sales calls in one day
## Discrete Probability Distributions
- Lists each possible value the random variable can assume, together with its probability
- Must satisfy the following conditions:

| In Words                                                                                    | In Symbols         |
| ------------------------------------------------------------------------------------------- | ------------------ |
| The probability of each value of the discrete random variable is between 0 an 1, inclusive. | $0\leq P(x)\leq 1$ |
| The sum of all the probabilities is 1.                                                      | $\sum P(x)=1$      |
>Let $x$ be a discrete random variable with possible outcomes $x_{1}, x_{2},\dots,x_{n}$
1. Make a frequency distribution for th epossible outcomes
2. Find the sum of the frequencies
3. Find the probability of each possible outcome by dividing its frequency by the sum of the frequencies
4. Check that each probability is between 0 and 1, inclusive, and that the sum of all the probabilities is 1
>An industrial psychologist administered a personality inventory test for passive-aggressive traits to 150 employees. Each individual was given a whole number score from 1 to 5, where 1 is extremely passive and 5 is extremely aggressive. A score of 3 indicated neither trait. The results are shown. Construct a probability distribution for the random variable $x$. Then graph the distribution using a histogram.

| Score, $x$ | Frequency, $f$ |
| ---------- | -------------- |
| 1          | 24             |
| 2          | 33             |
| 3          | 42             |
| 4          | 30             |
| 5          | 21             |
- Divide the frequency of each score by the total number of individuals in the study to find the probability for each value of the random variable

| $x$ | $P(x)$ |
| --- | ------ |
| 1   | 0.16   |
| 2   | 0.22   |
| 3   | 0.28   |
| 4   | 0.20   |
| 5   | 0.14   |
- This is a valid discrete probability distribution since:
	1. Each probability is between 0 and 1, inclusive, $0\leq P(x)\leq 1$
	2. The sum of the probabilities equals 1, $\sum P(x)=0.16+0.22+0.28+0.20+0.14=1$

![[Chart Sat Jun 14 2025.png]]
## Mean
- **Mean of a Discrete Probability Distribution**
	- $\mu=\sum xP(x)$
	- Each value of $x$ is multiplied by its corresponding probability and the products are added

>The probability distribution for the personality inventory test for passive-aggressive traits is given. Find the mean score.

| $x$ | $P(x)$ |
| --- | ------ |
| 1   | 0.16   |
| 2   | 0.22   |
| 3   | 0.28   |
| 4   | 0.20   |
| 5   | 0.14   |
$$\mu=\sum xP(x)=2.94$$


## Variance & Standard Deviation
- **Variance**


$$\sigma^2=\sum(x-\mu)^2P(x)$$



- **Standard Deviation**


$\sigma=\sqrt{ \sigma^2 }=\sqrt{ \sum(x-\mu)^2P(x) }$


| $x$ | $P(x)$ | $x-\mu$ | $(x-\mu)^2$ | $(x-\mu)^2P(x)$            |
| --- | ------ | ------- | ----------- | -------------------------- |
| 1   | 0.16   | -1.94   | 3.7636      | 0.602176                   |
| 2   | 0.22   | -0.94   | 0.8836      | 0.194392                   |
| 3   | 0.28   | 0.06    | 0.0036      | 0.001008                   |
| 4   | 0.20   | 1.06    | 1.1236      | 0.22472                    |
| 5   | 0.14   | 2.06    | 4.2436      | 0.594104                   |
|     |        |         |             | $\sum(x-\mu)^2P(x)=1.6164$ |


$$o^2=1.6164$$


$$\sigma=\sqrt{ \sigma^2 }=\sqrt{ 1.6164 } \approx 1.27 \approx 1.3$$


## Expected Value
- Equal to the mean of the random variable
- $E(x)=\mu=\sum xP(x)$

# 4.2 - Binomial Distributions
>[!info] Important Symbols
> - $n$ → The number of times a trial is repeated
> - $p$ → The probability of success in a single trial
> - $q$ → The probability of failure in a single trial $(q=1-p)$
> - $x$ → The random variable represents a count of the number of successes in $n$ trials: $x=0,1,2,3,\dots,n$
## Binomial Experiments
1. The experiment is repeated for a fixed number of trials, where each trial is independent of other trials
2. There are only two possible outcomes of interest for each trial. The outcomes can be classified as a success $(S)$ or as a failure $(F)$
3. The probability of a success, $P(S)$, is the same for each trial
4. The random variable $x$ counts the number of successful trials

>Decide whether each experiment is a binomial experiment. If it is, specify the values of $n$, $p$, and $q$, and list the possible values of the random variable $x$. If it is not, explain why. A certain surgical procedure has an 85% chance of success. A doctor performs the procedure on eight patients. The random variable represents the number of successful surgeries.
- $n=8$ (number of trials)
- $p=0.85$ (probability of success)
- $q=1-p=1-0.85=0.15$ (probability of failure)
- $x=0,1,2,3,4,5,6,7,8$ (number of successful surgeries)
## Binomial Probability Formula
- The probability of exactly $x$ successes in $n$ trials is:

$$P(x)=_{n}C_{x}=p^xq^{n-x}=\frac{n!}{(n-1)!x!}p^xq^{n-x}$$

- $n=$ number of trials
- $p=$ probability of success
- $q=1-p$ probability of failure
- $x=$ number of successes in $n$ trials
- Note: number of failures is $n-x$

>Rotator cuff surgery has a 90% chance of success. The surgery is performed on three patients. Find the probability of the surgery being successful on exactly two patients.

$$n=3,p=\frac{9}{10},q=\frac{1}{10}, \text{ and }x=2$$

$$P(2)=\frac{3!}{(3-2)!2!}\left( \frac{9}{10} \right)^2\left( \frac{1}{10} \right)^1$$

$$=3\left( \frac{81}{100} \right)\left( \frac{1}{10} \right)$$

$$=3\left( \frac{81}{1000} \right)$$

$$=0.243$$

>In a survey, U.S. adults were asked how often they go online. The results are shown in the figure. Six adults who participated in the survey are randomly selected and asked whether they go online several times a day. Construct a binomial probability distribution for the number who respond that they go online several times a day.

[TBA]

## Mean, Variance, & Standard Deviation

- Mean: $\mu=np$
- Variance: $\sigma^2=npq$
- Standard Deviation: $\sigma=\sqrt{ npq }$



---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 3 - Probability]] — [[Chapter 5 - Normal Probability Distributions]]