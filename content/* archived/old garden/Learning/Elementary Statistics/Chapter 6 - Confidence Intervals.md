---
tags: 
date: 2025-06-20T15:36:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
# 6.1 - Confidence Intervals for the Mean ($\sigma$ known)
## Point Estimate for Population $\mu$
- A single value estimate for a population parameter
- The most unbiased point estimate of the population mean $\mu$ is the sample mean $\bar{x}$

>A researcher is collecting data about a college athletic conference and its student-athletes. A random sample of 40 student-athletes is selected and their numbers of hours spent on required athletic activities for one week are recorded. Find a point estimate for the population mean $\mu$, the mean number of hours spent on required athletic activities by all student-athletes in the conference.

$$\bar{x}=\frac{\sum x}{n}=\frac{797}{40} \approx 19.9$$

- The point estimate for the mean number of hours spent on required athletic activities by all student-athletes in the conference is about 19.9 hours.
## Interval Estimate
- An interval, or range of values, used to estimate a population parameter
- Before finding a margin of error for an interval estimate, first determine how confident you need to be that your interval estimate contains the population mean $\mu$
## Level of Confidence, $c$
- The probability that the interval estimate contains the population parameter, assuming that the estimation process is repeated a large number of times.
## Critical Values
- **Critical values** are values that separate sample statistics that are probable from sample statistics that are improbable, or unusual
![[Screenshot 2025-06-21 at 19.06.59.png]]

| If $c=90\%$             |                                      |
| ----------------------- | ------------------------------------ |
| $c=0.90$                | Area in blue region                  |
| $1-c=0.10$              | Area in yellow regions               |
| $\frac{1}{2}(1-c)=0.05$ | Area in one tail                     |
| $-z_{c}=-1.645$         | Critical value separating left tail  |
| $z_{c}=1.645$           | Critical value separating right tail |
- If the level of confidence is 90%, this means that we are 90% confident that the interval contains the population mean $\mu$.
## Sampling Error
- The difference between the point estimate and the actual population parameter value
- For $\mu$
	- the sampling error is the difference: $\bar{x}-\mu$
	- $\mu$ is generally unknown
	- $\bar{x}$ varies from sample to sample
## Margin of Error
- Sometimes called the maximum error of estimate or error tolerance.  
- The greatest possible distance between the point estimate and the value of the parameter it is estimating. Denoted by $E$.

$$E=z_{c}\sigma_{\bar{x}}=\frac{z_{c}\sigma}{\sqrt{ n }}$$
1. The sample is random
2. Population is normally distributed or $n\geq 30$

>Use the data in Example 1 and a 95% confidence level to find the margin of error for the mean number of hours spent on required athletic activities by all student-athletes in the conference. Assume the population standard deviation is 2.4 hours.

- Because $\sigma$ is known ($\sigma=2.4$), the sample is random, and $n=40 \geq 30$, use the formula for $E$ given
- The $z$-score that corresponds to a 95% confidence level is 1.96. This implies that 95% of the area under the standard normal curve falls within 1.96 standard deviations of the mean.

$$E=\frac{z_{c}\sigma}{\sqrt{ n }}=1.96\cdot \frac{2.4}{\sqrt{ 40 }} \approx 0.743$$
- You are 95% confident that the margin of error for the population mean is about 0.7 hours.

## Confidence Intervals for the Population Mean
- **A $c$-confidence interval for the population mean, $\mu$** $$\bar{x}-E<\mu<\bar{x}+E, \text{ where }E=\frac{z_{c}\sigma}{\sqrt{ n }}$$
- The probability that the confidence interval contains $\mu$ is $c$, assuming that the estimation process is repeated a large number of times.
## Constructing Confidence Intervals for $\mu$, ($\sigma$ known)

| In Words                                                                                                      | In Symbols                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Verify that $\sigma$ known, sample is random, and either the population is normally distributed or $n\geq 30$ |                                                                                                  |
| Find the sample statistics $n$ and $\bar{x}$                                                                  | $\bar{x}=\frac{\sum x}{n}$                                                                       |
| Find the critical value, $z_{c}$, that corresponds to the given level of confidence                           | Use a table                                                                                      |
| Find the margin of error, $E$                                                                                 | $E=\frac{z_{c}\sigma}{\sqrt{ n }}$                                                               |
| Find the left and right endpoints and form the confidence interval                                            | Left endpoint: $\bar{x}-E$<br>Right endpoint: $\bar{x}+E$<br>Interval: $\bar{x}-E<\mu<\bar{x}+E$ |

>Use the data in Example 1 to construct a 95% confidence interval for the mean number of hours spent on required athletic activities by all student-athletes in the conference.
- $\bar{x} \approx 19.9 \text{ and }E \approx 0.7$
$$19.2<\mu<20.6$$
- With 95% confidence, you can say that the population mean number of hours spent on required athletic activities is between 19.2 and 20.6 hours.

>Use the data in Example 1 and technology to construct a 99% confidence interval for the mean number of hours spent on required athletic activities by all student-athletes in the conference
- From the displays, a 99% confidence interval for$\mu$ is (18.9, 20.9). Note that this interval is rounded to the same number of decimals places as the sample mean.  
- With 99% confidence, you can say that the population mean number of hours spent on required athletic activities is between 18.9 and 20.9 hours.

>A college admissions director wishes to estimate the mean age of all students currently enrolled. In a random sample of 20 students, the mean age is found to be 22.9 years. From past studies, the standard deviation is known to be 1.5 years, and the population is normally distributed. Construct a 90% confidence interval of the population mean age.

$$n=20, \bar{x}=22.9,\sigma=1.5,z_{c}=1.645$$

$$E=\frac{z_{c}\sigma}{\sqrt{ n }}=1.645\cdot \frac{1.5}{\sqrt{ 20 }} \approx 0.6$$

$$22.3<\mu<23.5$$
- With 90% confidence, you can say that the mean age of all the students is between 22.3 and 23.5 years.
- μ is a fixed number. It is either in the confidence interval or not.  
	- **Incorrect**: “There is a 90% probability that the actual mean is in the interval (22.3, 23.5).”  
	- **Correct**: “If a large number of samples is collected and a confidence interval is created for each sample, approximately 90% of these intervals will contain μ.

## Finding a Minimum Sample Size to Estimate $\mu$
- Given a $c$-confidence level and a margin of error,$E$, the minimum sample size, $n$, needed to estimate this population mean, $\mu$, is: $$n=\left( \frac{z_{c}\sigma}{E} \right)^2$$
- If n is not a whole number, then round n up to the next whole number.  
- If $\sigma$ is unknown, you can estimate it using $s$ provided you have a preliminary sample with at least 30 members.

>The researcher in Example 1 wants to estimate the mean number of hours spent on required athletic activities by all student-athletes in the conference. How many student-athletes must be included in the sample to be 95% confident that the sample mean is within 0.6 hour of the population mean?

$$n=\left( \frac{z_{c}\sigma}{E} \right)^2=\left( \frac{1.96\cdot1.5}{0.6} \right)^2=24.01 \approx 25$$

# 6.2 Confidence Intervals for the Mean ($\sigma$ unknown)
## $t$-Distribution
- When the population standard deviation is unknown, the sample size is less than 30, and the random variable $x$ is approximately normally distributed, it follows a ***$t$-distribution***
- Critical values of $t$ are denoted by $t_{c}$
- **Properties**
	1. The mean, median, and mode of the t-distribution are equal to 0.  
	2. The t-distribution is bell shaped and symmetric about the mean.  
	3. The total area under a $t$-curve is 1.  
	4. The tails in the $t$-distribution are “thicker” than those in the standard normal distribution.  
	5. The standard deviation of the $t$-distribution varies with the sample size, but it is greater than 1.
	6. The $t$-distribution is a family of curves, each determined by a parameter called degrees of freedom. The **degrees of freedom** are the number of free choices left after a sample statistic such as $\bar{x}$ is calculated. When you use a $t$-distribution to estimate a population mean, the degrees of freedom are equal to one less than the sample size
		- $\text{d.f}=n-1$
	7. As the degrees of freedom increase, the $t$-distribution approaches the normal distribution. For 30 or more degrees of freedom, the $t$-distribution is close to the standard normal distribution

>Find the critical value tc for a 95% confidence when the sample size is 15.

 $$\text{d.f}=14 \text{ and }c=0.95\to t_{c}=2.145$$
 

## Constructing a Confidence Intervals for a Population Mean ($\sigma$ unknown)

| In Words                                                                                                          | In Symbols                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Verify that $\sigma$ is not known, the sample is random, and the population is normally distributed or $n\geq 30$ |                                                                                                  |
| Find the sample statistics $n$, $\bar{x}$, and $s$                                                                | $\bar{x}=\frac{\sum x}{n}, \ s=\sqrt{ \frac{\sum(x-\bar{x})^2}{n-1} }$                           |
| Identify the degrees of freedom, the level of confidence, $c$, and the critical value, $t_{c}$                    | $\text{d.f}=n-1$<br>Use a table for $t_{c}$                                                      |
| Find the margin of error, $E$                                                                                     | $E=\frac{t_{c}s}{\sqrt{ n }}$                                                                    |
| Find the left and right endpoints and form the confidence interval                                                | Left endpoint: $\bar{x}-E$<br>Right endpoint: $\bar{x}+E$<br>Interval: $\bar{x}-E<\mu<\bar{x}+E$ |
>You randomly select 16 coffee shops and measure the temperature of the coffee sold at each. The sample mean temperature is 162.0ºF with a sample standard deviation of 10.0ºF. Construct a 95% confidence interval for the population mean temperature of coffee sold. Assume the temperatures are approximately normally distributed.

$$\bar{x}=162,\ s=10,\, n=16,\ \text{d.f}=15,\ c=0.95,\ t_{c}=2.131$$

$$E=\frac{t_{c}s}{\sqrt{ n }}=\frac{2.131\cdot 10}{\sqrt{ 16 }}=5.3275$$

$$156.6725<\mu<167.3275$$

- With 95% confidence, you can say that the mean temperature of coffee sold is between 156.7ºF and 167.3ºF.
## Normal or $t$-Distribution?
![[Screenshot 2025-06-21 at 20.57.11.png]]
>You randomly select 25 newly constructed houses. The sample mean construction cost is $299,000 and the population standard deviation is $46,000. Assuming construction costs are normally distributed, should you use the normal distribution, the t-distribution, or neither to construct a 95% confidence interval for the population mean construction cost? Explain your reasoning.
- Normally distributed, $\sigma$ is known, use standard normal distribution
# 6.3 - Confidence Intervals for Population Proportions
## Population Proportion
- The probability of **success** in a single trial of a binomial experiment is $p$
## Point Estimate for $p$
- The **point estimate for $p$**, the population proportion of successes, is given by the proportion of successes in a sample and is denoted by: $$\hat{p}=\frac{x}{n}$$ where $x$ is the number of successes in the sample and $n$ is the sample size. The point estimate for the population proportion of failures is $\hat{q}=1-\hat{p}$. The symbols $\hat{p}$ and $\hat{q}$ are read as “p hat” and “q hat”
>In a survey of 540 U.S. adults, 378 said that they plan on traveling this summer. Find a point estimate for the population proportion of U.S. adults who plan on traveling this summer.

$$x=378,\ n=540$$

$$\hat{p}=\frac{x}{n}=\frac{378}{540}=0.7=70\%$$
## Confidence Intervals for a Population Proportion
- **A $c$-confidence interval for the population proportion $p$**: $$\hat{p}-E<p<\hat{p}+E,\ \text{where }E=z_{c}\sqrt{ \frac{\hat{p}\hat{q}}{n} }$$
- The probability that the confidence interval contains $p$ is $c$, assuming that the estimation process is repeated a large number of times


| In Words                                                                                          | In Symbols                                                                                     |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Identify the sample statistics $n$ and $x$                                                        |                                                                                                |
| Find the point estimate $\hat{p}$                                                                 | $\hat{p}=\frac{x}{n}$                                                                          |
| Verify that the sampling distribution of $\hat{p}$ can be approximated by the normal distribution | $n\hat{p}\geq 5,\ n\hat{q}\geq 5$                                                              |
| Find the critical value, $z_{c}$, that corresponds to the given level of confidence, $c$          | Use a table                                                                                    |
| Find the margin of error, $E$                                                                     | $E=z_{c}\sqrt{ \frac{\hat{p}\hat{q}}{n} }$                                                     |
| Find the left and right endpoints and form the confidence interval                                | Left endpoint: $\hat{p}-E$<br>Right endpoint: $\hat{p}+E$<br>Interval: $\hat{p}-E<p<\hat{p}+E$ |

>Use the data in Example 1 to construct a 95% confidence interval for the population proportion of U.S. adults who plan on traveling this summer.

$$\hat{p}=0.70,\ \hat{q}=0.30, \ n=540$$

$$n\hat{p}=378>5, \ n\hat{q}=162>5, \ z_{c}=1.96$$

$$E=z_{c}\sqrt{ \frac{\hat{p}\hat{q}}{n} }=1.96\sqrt{ \frac{(0.7)(0.3)}{540} } \approx 0.039$$

$$0.661<p<0.739$$

## Finding a Minimum Sample Size
- Given a $c$-confidence level and a margin of error, $E$, the minimum sample size $n$ needed to estimate $p$ is: $$n=\hat{p}\hat{q}\left( \frac{z_{c}}{E} \right)^2$$
- If $n$ is not a whole number, then round $n$ up to the next whole number
- This formula assumes you have an estimate for $\hat{p}$ and $\hat{q}$
	- If not, use $\hat{p}=0.5 \text{ and }\hat{q}=0.5$

>You are running a political campaign and wish to estimate, with 95% confidence, the proportion of registered voters who will vote for your candidate. Your estimate must be accurate within 3% of the true population. Find the minimum sample size needed when  
>1. no preliminary estimate is available.

$$\hat{p}=0.5, \ \hat{q}=0.5$$
$$z_{c}=1.96, \ E=0.03$$

$$n=\hat{p}\hat{q}\left( \frac{z_{c}}{E} \right)^2=(0.5)(0.5)\left( \frac{1.96}{0.03} \right)^2 \approx 1067.11\to 1068$$
---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 5 - Normal Probability Distributions]] — [[Chapter 7 - Hypothesis Testing with One Sample]]