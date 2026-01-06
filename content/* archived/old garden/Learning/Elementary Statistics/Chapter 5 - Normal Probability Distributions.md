---
tags: 
date: 2025-06-18T13:01:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
# 5.1 - Introduction to Normal Distributions & the Standard Normal Distribution
## Properties of a Normal Distribution
- **Continuous Random Variable**
	- Has an infinite number of possible values that can be represented by an interval on the number line (the hours spent studying can be any number between 0 and 24 [23.1, 0.1111, 5.057])
- **Continuous Probability Distribution**
	- The probability distribution of a continuous random variable
- **Normal Distribution**
	- A continuous probability distribution for a random variable, $x$
	- The most important continuous probability distribution in statistics
	- The graph of a normal distribution is called the **normal curve**
	- In a normal distribution:
		1. The mean, median, and mode are equal
		2. The normal curve is bell-shaped and is symmetric about the mean
		3. The total area under the normal curve is equal to one
		4. The normal curve approaches, but never touches the $x$-axis as it extends farther and farther away from the mean
		5. Between $\mu-\sigma$ and $\mu+\sigma$ (in the center of the curve), the graph curves downward. The graph curves upward to the left of $\mu-\sigma$ and to the right of $\mu+\sigma$. The points at which the curve changes from curving upward to downward are called the **inflection points**
		![[normal-curve.jpg]]
## Probability Density Function (PDF)
- A discrete probability distribution can be graphed with a histogram
- For a continuous probability distribution, you can use a probability density function
- A probability density function has two requirements:
	1. The total area under the curve is equal to 1
	2. The function can never be negative
## Means & Standard Deviations
- A normal distribution can have any mean and any positive standard deviation
- The mean gives the location of the line of symmetry
- The standard deviation describes the spread of the data

>The scaled test scores for New York State Grade 6 Common Core Mathematics Test are normally distributed. The normal curve shown below represents this distribution. What is the mean test score? Estimate the standard deviation of this normal distribution.
![[Screenshot 2025-06-19 at 13.43.42.png]]
- The mean is about 600, with the standard deviation being about 20
- Using the Empirical Rule, you know that about 68% of the scores are between 580 and 620, about 95% of the scores are between 560 and 640, and about 99.7% of the scores are between 540 and 660
## The Standard Normal Distribution
- A normal distribution with a mean of 0 and a standard deviation of 1
- Any $x$-value can be transformed into a $z$-score by using the formula:

$$z=\frac{\text{Value}-\text{Mean}}{\text{Standard deviation}}=\frac{x-\mu}{\sigma}$$
- **Properties**
	1. The cumulative area is close to 0 for $z$-scores close to $z=-3.49$
	2. The cumulative area increases as the $z$-scores increase
	3. The cumulative area for $z=0$ is 0.5
	4. The cumulative area is close to 1 for $z$-scores close to $z=3.49$
### Finding Areas Under the Standard Normal Curve
1. Sketch the standard normal curve and shade the appropriate area under the curve
2. Find the area by following the directions for each case shown
	- To find the area to the *left* of $z$, find the area that corresponds to $z$ in the Standard Normal Table
	- The find the area of the *right* of $z$, use the Standard Normal Table to find the area that corresponds to $z$. Then subtract the area from 1
	- To find the area *between* two $z$-scores, find the area corresponding to each $z$-score in the Standard Normal Table. Then subtract the smaller area from the larger area
# 5.2 - Normal Distributions: Finding Probabilities
# Probability and Normal Distributions
- If a random variable $x$ is normally distributed, you can find the probability that $x$ will fall in a given interval by calculating the area under the normal curve for that interval.
- Consider a normal curve with $\mu=500$ and $\sigma=100$\
- The value of x one standard deviation above the mean is  $\mu+\sigma=500+100=600$
- Now consider the standard normal curve
- The value of z one standard deviation above the mean is $\mu+\sigma=0+1=1$
- The z-score of 1 corresponds to an x-value of 600, and areas are not changed with a transformation to a standard normal curve, the shaded areas at the right are equal


>A national study found that college students with jobs worked an average of 25 hours per week. The standard deviation is 11 hours. A college student with a job is selected at random. Find the probability that the student works for less than 5 hours per week. Assume that the lengths of time college students work are normally distributed and are represented by the variable x.

$$z=\frac{x-\mu}{\sigma}=\frac{5-25}{11}=-1.82$$
- The Standard Normal Table shows that $P(z<-1.82)=0.0344$
- So, 3.34% of college students with jobs worked for less than 5 hours per week.

>A survey indicates that for each trip to a supermarket, a shopper spends an average of 41 minutes with a standard deviation of 12 minutes in the store. The lengths of time spent in the store are normally distributed and are represented by the variable x. A shopper enters the store. (a) Find the probability that the shopper will be in the store for each interval of time listed below. (b) When 200 shoppers enter the store, how many shoppers would you expect to be in the store for each interval of time listed below?
>1. Between 20 & 50 minutes
>2. More than 35 minutes

$$\frac{20-41}{12}=-1.75$$
$$\frac{50-41}{12}=0.75$$

$$P(20<x<50)=P(-1.75<z<0.75)=0.7734-0.0401=0.7333$$

- When 200 shoppers enter the store you’d expect about $200(0.7333) \approx 147$ shoppers to be in the store between 20 and 50 minutes


$$\frac{35-41}{12}=-0.5$$

$$P(x>35)=P(z>-0.5)=1-0.3085=0.6915$$

- When 200 shoppers enter the store, you would expect $200(0.6915) \approx 138$ shoppers to be in the store more than 35 minutes.

>In the United States, the numbers of physicians involved in patient care per state are normally distributed, with a mean of 280 physicians per 100,000 resident population and a standard deviation of 78 physicians per 100,000 resident population. You randomly select a state. What is the probability that the state has fewer than 300 physicians per 100,000 resident population? Use technology to find the probability.

$$P(z\leq 300)=0.6012$$
- The probability that the state has fewer than 300 physicians per 100,000 resident population is about 60.1%
# 5.3 - Normal Distributions: Finding Values
- In this section, we will be given a probability and we will be asked to find the value of the random variable $x$.
## Finding a $z$-Score Given an Area
1. Find the $z$-score that corresponds to a cumulative area of 0.3632
	- Locate 0.3632 in the SNT (Standard Normal Table)
	- The values at the beginning of the corresponding row and at the top of the column give the $z$-score (-0.35)
2. Find the $z$-score that has 10.75% of the distribution’s area to its right
	- Because the area to the right is 0.1075, the cumulative area is $1-0.1075=0.8925$
	- Locate 0.8925 in the SNT
	- The values at the beginning of the corresponding row and at the top of the column give the $z$-score (1.24)
## Finding a z-Score Given a Percentile
1. $P_{5}$
	- The 5th percentile means we need to find the $z$-score corresponding to an area of 0.05
	- The areas closest to 0.05 in the table are 0.0495 ($z=-1.65$) and 0.0505 ($z=-1.64$), which 0.05 is halfway between, meaning the $z$-score is -1.645
2. $P_{50}$
	- The 50th percentile means we need to find the $z$-score corresponding to an area of 0.50
	- 0.5 in the SNT gives us a $z$-score of 0
3. $P_{90}$
	- The 90th percentile means we need to find the $z$-score corresponding to an area of 0.90
	- The closest we get to 0.9 in the SNT is 0.89973 (1.28)
## Transforming a $z$-Score to an $x$-Value
$$x=\mu+z\sigma$$

>A veterinarian records the weights of cats treated at a clinic. The weights are normally distributed, with a mean of 9 pounds and a standard deviation of 2 pounds. Find the weights x corresponding to each z-score. Interpret the results.
>1. $z=1.96$
>2. $z=-0.44$
>3. $z=0$

1. $x=9+1.96(2)=12.92$
2. $x=9+(-0.44)(2)=8.12$
3. $x=9+0(2)=9$
- From our solutions, you can see that 12.92 pounds is to the right of the mean, 8.12 pounds is to the left of the mean, and 9 pounds is equal to the mean.

>Scores for the California Peace Officer Standards and Training test are normally distributed, with a mean of 50 and a standard deviation of 10. An agency will only hire applicants with scores in the top 10%. What is the lowest score you can earn and still be eligible to be hired by the agency?

- Top 10% means 90th percentile, corresponding to an area of 0.9, the $z$-score close to this area is 1.28 

$$x=50+1.28(10)=62.8$$

- The lowest score you can ear and still be eligible is about 63

>In a randomly selected sample of U.S. adults ages 20 and over, the mean total cholesterol level is 190 milligrams per deciliter with a standard deviation of 40.9 milligrams per deciliter. Assume the total cholesterol levels are normally distributed. Find the highest total cholesterol level an adult aged 20 or over can have and still be in the bottom 1%.

- Bottom 1% = 1st percentile, corresponding to an area of 0.01, the $z$-score close to this area is -2.33

$$x=190+(-2.33)(40.9)=94.703$$

# 5.4 - Sampling Distributions & the Central Limit Theorem
## Sampling Distributions
- **Sampling distribution**
	- The probability distribution of a sample statistic that is formed when random samples of size $n$ are repeatedly taken from a population
	- If the sample statistic is the sample mean, then the distribution is the **Sampling distribution of sample means**
## Sampling Distribution of Sample Means
- In a population with mean, $\mu$, and standard deviation, $\sigma$, the sampling distribution consists of the values of the sample means, $\bar{x}_{1},\bar{x}_{2},\bar{x}_{3},\bar{x}_{4},\bar{x}_{5},\dots$
- **Properties**
	1. The mean of the sample means, $\mu_{\bar{x}}$, is equal to the population mean $\mu$, $$\mu_{\bar{x}}=\mu$$
	2. The standard deviation of the sample means, $\sigma_{\bar{x}}$, is equal to the population standard deviation, $\sigma$, divided by the square root of the sample size, $n$ $$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}$$
		- Called the **standard error of the mean**

>The number of times four people go grocery shopping in a month is given by the population values {1, 3, 5, 7}. A probability histogram for the data is shown. You randomly choose two of the four people, with replacement. List all possible samples of size $n = 2$ and calculate the mean of each. These means form the sampling distribution of the sample means. Find the mean, variance, and standard deviation of the sample means. Compare your results with the mean $\mu=4$, variance $\sigma^2 = 5$, and standard deviation $\sigma = \sqrt{ 5 } ≈ 2.2$ of the population.

- List all 16 samples of size 2 from the population and the mean of each sample.

| Sample | Sample mean, $\bar{x}$ |
| ------ | ---------------------- |
| 1,1    | 1                      |
| 1,3    | 2                      |
| 1,5    | 3                      |
| 1,7    | 4                      |
| 3,1    | 2                      |
| 3,3    | 3                      |
| 3,5    | 4                      |
| 3,7    | 5                      |
| 5,1    | 3                      |
| 5,3    | 4                      |
| 5,5    | 5                      |
| 5,7    | 6                      |
| 7,1    | 4                      |
| 7,3    | 5                      |
| 7,5    | 6                      |
| 7,7    | 7                      |

- Construct a probability distribution of the sample means. Then, you can graph the sampling distribution using a probability histogram.

| $\bar{x}$ | $f$ | Probability |
| --------- | --- | ----------- |
| 1         | 1   | 1/16        |
| 2         | 2   | 2/16        |
| 3         | 3   | 3/16        |
| 4         | 4   | 4/16        |
| 5         | 3   | 3/16        |
| 6         | 2   | 2/16        |
| 7         | 1   | 1/16        |

![[Chart Fri Jun 20 2025.png]]

$$\mu_{\bar{x}}=4$$
$$(\sigma_{\bar{x}})^2=\frac{5}{2}=2.5$$
$$\sigma_{\bar{x}}=\sqrt{ \frac{5}{2} }=\sqrt{ 2.5 }\approx 1.6$$
$$\mu_{\bar{x}}=\mu=4$$
$$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}=\frac{\sqrt{ 5 }}{\sqrt{ 2 }}\approx 1.6$$
## Central Limit Theorem
1. If the samples of size $n\geq 30$, are drawn from any population with mean = $\mu$ and standard deviation = $\sigma$, then the sampling distribution of the sample means approximates a normal distribution. The greater the sample size, the better the approximation
2. If the population itself is normally distributed, the sampling distribution of the sample means is normally distributed for ***any*** sample size $n$
- In either case, the sampling distribution of sample means has a mean equal to the population mean.
- The sampling distribution of sample means has a variance equal to $1/n$ times the variance of the population and a standard deviation equal to the population standard deviation divided by the square root of $n$

$$\sigma_{\bar{x}}^2=\frac{\sigma^2}{n}$$
$$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}$$

>A study analyzed the sleep habits of college students. The study found that the mean sleep time was 6.9 hours, with a standard deviation of 1.5 hours. Random samples of 100 sleep times are drawn from this population, and the mean of each sample is determined. Find the mean and standard deviation of the sampling distribution of sample means. Then sketch a graph of the sampling distribution.

$$\mu_{\bar{x}}=\mu=6.9$$
$$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}=\frac{1.5}{\sqrt{ 100 }}=0.15$$

- Since the sample size is greater than 30, the sampling distribution can be approximated by a normal distribution with a mean of 6.9 hours and a standard deviation of 0.15 hour.

>The training heart rates of all 20-years old athletes are normally distributed, with a mean of 135 beats per minute and standard deviation of 18 beats per minute. Random samples of size 4 are drawn from this population, and the mean of each sample is determined. Find the mean and standard error of the mean of the sampling distribution. Then sketch a graph of the sampling distribution of sample means.

$$\mu_{\bar{x}}=\mu=135$$
$$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}=\frac{18}{\sqrt{ 4 }}=9$$
## Probability and the Central Limit Theorem
- To transform $\bar{x}$ to a $z$-score

$$z=\frac{\text{Value}-\text{Mean}}{\text{ Standard Error}}=\frac{\bar{x}-\mu_{\bar{x}}}{\sigma_{\bar{x}}}=\frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}$$

>The figure shows the mean distances traveled by drivers each day. You randomly select 50 drivers ages 16 to 19. What is the probability that the mean distance traveled each day is between 19.4 and 22.5 miles? Assume  $\sigma=6.5$ miles

$$\mu_{\bar{x}}=\mu=20.7$$
$$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}=\frac{6.5}{\sqrt{ 50 }} \approx 0.9$$
$$z_{1}=\frac{19.4-20.7}{\frac{6.5}{\sqrt{ 50 }}} \approx -1.41$$
$$z_{2}=\frac{22.5-20.7}{\frac{6.5}{\sqrt{ 50 }}} \approx 1.96$$
$$P(19.4<\bar{x}<22.5)=P(-1.41<z<1.96)$$
$$=0.9750-0.0793=0.8957$$
- Of all samples of 50 drivers ages 16 to 19, about 89.57% will drive a mean distance each day between 19.4 and 22.5 miles, as shown in the graph. This implies that, assuming the value of $\mu$ = 20.7 is correct, about 10.43% of such sample means will lie outside the given interval.

>The mean room and board expense per year at four-year colleges is $11,806. You randomly select 9 four-year colleges. What is the probability that the mean room and board is less than $12,250? Assume that the room and board expenses are normally distributed with a standard deviation of $1650.

$$\mu_{\bar{x}}=\mu=11,806$$
$$\sigma_{\bar{x}}=\frac{\sigma}{\sqrt{ n }}=\frac{1650}{\sqrt{ 9 }}=550$$
$$z=\frac{12250-11806}{\frac{1650}{\sqrt{ 9 }}}\approx0.81$$
$$P(\bar{x}<12250)=P(z<0.81)=0.79103$$
- So, about 79% of such samples with n = 9 will have a mean less than $12,250 and about 29% of these sample means will be greater than $10,750.
>Some college students use credit cards to pay for school-related expenses. For this population, the amount paid is normally distributed, with a mean of $2172 and a standard deviation of $740
>1. What is the probability that a randomly selected college student, who uses a credit card to pay for school-related expenses, paid less than $1900?  
>2. You randomly select 25 college students who use credit cards to pay for school-related expenses. What is the probability that their mean amount paid is less than $1900?  
>3. Compare the probabilities from parts 1 and 2.
1. 
	- $$z=\frac{x-\mu}{\sigma}=\frac{1900-2172}{740}\approx -0.37$$
	- $$P(x<1900)=P(z<-0.37)=0.35569$$

2. 
	- $$z=\frac{\bar{x}-\mu}{\sigma_{\bar{x}}}=\frac{1900-2172}{\frac{740}{\sqrt{ 25 }}}=-1.84$$
	- $$P(\bar{x}<1900)=P(z<-1.84)=0.03288$$
3. Although there is about a 36% chance that a college student who uses a credit card to pay for school-related expenses will pay less than $1900, there is only about a 3% chance that the mean amount a sample of 25 college students will pay is less than $1900. Because there is only a 3% chance that the mean amount a sample of 25 college students will pay is less than $1900, this is an unusual event.
---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 4 - Discrete Probability Distributions]] — [[Chapter 6 - Confidence Intervals]]