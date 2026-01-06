---
tags: 
date: 2025-06-26T11:59:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
# 7.1 - Introduction to Hypothesis Testing
## Hypothesis Tests
- **Hypothesis Test**
	- A process that uses sample statistics to test a claim about the value of a population parameter
		- Consider a manufacturer that advertises its new hybrid car has a mean gas mileage of 50 miles per gallon. If you suspect that the mean mileage is not 50 miles per gallon, how could you show that the advertisement is false?
- **Statistical Hypothesis**
	- A statement about a population parameter
	- Carefully state a pair of hypotheses
		- One that represents the claim
		- The other, its complement
	- When one of these hypotheses is false, the other must be true
	- Either hypothesis—the **null hypothesis** or the **alternative hypothesis**—may represent the original claim
## Stating a Hypothesis
1. A **null hypothesis $H_{0}$** is a statistical hypothesis that contains a a statement of equality, such as $\leq,=,\geq$
2. The **alternative hypothesis $H_{a}$** is the complement of the null hypothesis. It is a statement of must be true if $H_{0}$ is false and it contains a statment of strict inequality, such as $>,\neq,<$
- To write the null and alternative hypotheses, translate the claim made about the population parameter from a verbal statement to a mathematical statement
- Then, write its complement:

$$
\left\{
\begin{array}{}
      H_{0}: & \mu\leq k \\
      H_{a}: & \mu>k \\
\end{array} 
\right.
$$

$$
\left\{
\begin{array}{}
      H_{0}: & \mu \geq k \\
      H_{a}: & \mu<k \\
\end{array} 
\right.
$$

$$
\left\{
\begin{array}{}
      H_{0}: & \mu = k \\
      H_{a}: & \mu\neq k \\
\end{array} 
\right.
$$

>Write each claim as a mathematical sentence. State the null and alternative hypotheses and identify which represents the claim.
1. A school publicizes that the proportion of its students who are involved in at least one extracurricular activity is 61%.

$$
\left\{
\begin{array}{}
      H_{0}: & p= 0.61 \\
      H_{a}: & p\neq 0.61 \\
\end{array} 
\right.
$$

2. A car dealership announces that the mean time for an oil change is less than 15 minutes.

$$
\left\{
\begin{array}{}
      H_{0}: & \mu\geq 15 \\
      H_{a}: & \mu< 15 \\
\end{array} 
\right.
$$

3. A company advertises that the mean life of its furnaces is more than 18 years.

$$
\left\{
\begin{array}{}
      H_{0}: & \mu\leq 18 \\
      H_{a}: & \mu> 18 \\
\end{array} 
\right.
$$
## Types of Errors
- No matter which hypothesis represents the claim, always begin the hypothesis test **assuming that the equality condition in the null hypothesis is true**
- So, when you perform a hypothesis test, one of two decisions will be made:
	1. reject the null hypothesis
	2. fail to reject the null hypothesis
- Because your decision is based on a sample, there is the possibility of making the wrong decision
![[Screenshot 2025-06-26 at 14.40.51.png]]
- A **type I error** occurs if the null hypothesis is rejected when it is true
- A **type II error** occurs if the null hypothesis is not rejected when it is false

>The USDA limit for salmonella contamination for ground beef is 7.5%. A meat inspector reports that the ground beef produced by a company exceeds the USDA limit. You perform a hypothesis test to determine whether the meat inspector’s claim is true. When will a type I or type II error occur? Which error is more serious?

$$
\left\{
\begin{array}{}
      H_{0}: & \mu\leq 7.5\% \\
      H_{a}: & p> 7.5\% \\
\end{array} 
\right.
$$

- A type I error is rejecting $H_{0}$ when it’s true
	- With a type I error, you might create a health scare and hurt the sales of ground beef producers who were actually meeting the USDA limits.
- A type II error is failing to reject $H_{0}$ when it’s false
	- With a type II error, you could be allowing ground beef that exceeded the USDA contamination limit to be sold to consumers.
- II is more serious

## Level of Significance
- Your maximum allowable probability of making a type I error
	- Denoted by $\alpha$
- By setting the level of significance at a small vlaue, you are saying that you want the probability of rejecting a true null hypothesis to be small
- The probability of a type II error is denoted by $\beta$

## Statistical Tests

| Population Parameter | Test Statistic | Standardized Test Statistic |
| -------------------- | -------------- | --------------------------- |
| $\mu$                | $\bar{x}$      | $z$<br>$t$                  |
| $p$                  | $\hat{p}$      | $z$                         |
| $\sigma^2$           | $s^2$          | $x^2$                       |

## P-values
- The probability, if the null hypothesis is true, of obtaining a sample statistic with a value as extreme or more extreme than the one determined from the sample data
## Nature of the Test
- Three types of hypothesis tests  
	- left-tailed test  
		- The alternative hypothesis, $H_{a}$, contains the less-than inequality symbol (<).
	- right-tailed test  
		- The alternative hypothesis, $H_{a}$, contains the greater-than inequality symbol (>).
	- two-tailed test  
		- The alternative hypothesis, $H_{a}$, contains the not-equal-to inequality symbol ($\neq$). Each tail has an area of $\frac{1}{2}P$
- The type of test depends on the region of the sampling distribution that favors a rejection of $H_{0}$.  
- This region is indicated by the alternative hypothesis.

>For each claim, state $H_{0}$ and $H_{a}$ in words and in symbols. Then determine whether the hypothesis test is a left-tailed, right-tailed, or two-tailed test.
1. A school publicizes that the proportion of its students who are involved in at least one extracurricular activity is 61%.

$$
\left\{
\begin{array}{}
      H_{0}: & p= 0.61 \\
      H_{a}: & p\neq 0.61 \\
\end{array} 
\right.
$$
	- Two-tailed
2. A car dealership announces that the mean time for an oil change is less than 15 minutes.

$$
\left\{
\begin{array}{}
      H_{0}: & \mu\geq 15 \\
      H_{a}: & \mu< 15 \\
\end{array} 
\right.
$$

	- Left-tailed

3. A company advertises that the mean life of its furnaces is more than 18 years.

$$
\left\{
\begin{array}{}
      H_{0}: & \mu\leq 18 \\
      H_{a}: & \mu> 18 \\
\end{array} 
\right.
$$

	- Right-tailed
## Making a Decision
- Compare the $P$-value with $\alpha$
	1. If $P\leq \alpha$, then reject $H_{0}$
	2. If $P>\alpha$, the fail to reject $H_{0}$

>You perform a hypothesis test for the following claim. How should you interpret your decision if you reject $H_{0}$? If you fail to reject $H_{0}$?  
1. $H_{0}$ (Claim): A school publicizes that the proportion of its students who are involved in at least one extracurricular activity is 61%
- If you reject H0 you should conclude “there is enough evidence to reject the school’s claim that the proportion of students who are involved in at least one extracurricular activity is 61%.”  
- If you fail to reject H0, you should conclude “there is not enough evidence to reject the school’s claim that the proportion of students who are involved in at least one extracurricular activity is 61%.”

## Steps
1. State the claim mathematically and verbally. Identify the null and alternative hypotheses.  
2. Specify the level of significance.  
3. Determine the standardized sampling distribution and draw its graph.  
4. Calculate the test statistic and its standardized value. Add it to your sketch
5. Find the $P$-value
6. Make a decision
7. Write a statment to interpret the decision in the context of the original claim
## Strats
- The strategy that you will use in hypothesis testing should depend on whether you are trying to support or reject a claim.  
- You cannot use a hypothesis test to support your claim when your claim is the null hypothesis.  
- As a researcher, to perform a hypothesis test where the possible outcome will support a claim, word the claim so it is the alternative hypothesis.  
- To perform a hypothesis test where the possible outcome will reject a claim, word it so the claim is the null hypothesis.

>A medical research team is investigating the benefits of a new surgical treatment. One of the claims is that the mean recovery time for patients after the new treatment is less than 96 hours.  
1. How would you write the null and alternative hypotheses when you are on the research team and want to support the claim? How should you interpret a decision that rejects the null hypothesis?

$$
\left\{
\begin{array}{l}
      H_{0}: & \mu\geq 96 \\
      H_{a}: & \mu< 96 \text{ (Claim) } \\
\end{array} 
\right.
$$

- If you reject H0, then you will support the claim that the mean recovery time is less than 96 hours

2. How would you write the null and alternative hypotheses when you are on an opposing team and want to reject the claim? How should you interpret a decision that rejects the null hypothesis?

$$
\left\{
\begin{array}{l}
      H_{0}: & \mu\leq 96 \text{ (Opposing Claim) } \\
      H_{a}: & \mu> 96  \\
\end{array} 
\right.
$$

- If you reject H0, then you will reject the claim that the mean recovery time is less than or equal to 96 hours.

# 7.2 - Hypothesis Testing for the Mean ($\sigma$ Known)
## Using $P$-values to Make a Decision
- To use a $P$-value to make a conclusion in a hypothesis test, compare the $P$-value with $\alpha$
	1. If $P\leq \alpha$, then reject $H_{0}$
	2. If $P>\alpha$, the fail to reject $H_{0}$

>The P-value for a hypothesis test is $P = 0.0237$.  
>1. What is your decision if the level of significance is $\alpha= 0.05$? 
>2. What is your decision if the level of significance is $\alpha = 0.01$

1. Because $0.0237<0.05$, you should **reject the null hypothesis**
2. Because $0.0237>0.01$, you should **fail to reject the null hypothesis**
## Finding the $P$-value for a Hypothesis Test
- After determining the hypothesis test’s standardized test statistic and the test statistic’s corresponding area, do one of the following to find the P-value.
	1. For a left-tailed test, $P=(\text{Area in the left tail})$
	2. For a right tailed test, $P=(\text{Area in the right tail})$
	3. For a two-tailed test, $P=2(\text{Area in the tail of a standardized test statistic})$

>Find the P-value for a left-tailed hypothesis test with a test statistic of $z = -2.23$. Decide whether to reject H0 when the level of significance is $\alpha=0.01$.

- $P=0.012874>0.01$, we fail to reject $H_{0}$

>Find the P-value for a two-tailed hypothesis test with a test statistic of $z = 2.14$. Decide whether to reject H0 when the level of significance is $α = 0.05$.

- $P=(0.016177\cdot 2)<0.05$, we reject $H_{0}$

## $z$-Test for a Mean, $\mu$
- The **$z$-test for a mean** is a statistical test for a population mean. The test statistic is the sample mean, $x$. The ***standardised test statistic*** is $z$:

$$z=\frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}$$


| In Words                                                                                                              | In Symbols                                        |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Verify that $\sigma$ is known, the sample is random, and either the population is normally distributed or $n\geq 30$. |                                                   |
| State the claim mathematically and verbally. Identify the null and alternative hypotheses.                            | $\text{State }H_{0} \text{ and } H_{a}$           |
| Specify the level of significance                                                                                     | $\text{Identify }\alpha$                          |
| Find the standardized test statistic                                                                                  | $z=\frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}$ |
| Find the area that corresponds to $z$                                                                                 |                                                   |
| Find the $P$-value                                                                                                    |                                                   |
| Make a decisions to reject or fail to reject the null hypothesis                                                      |                                                   |

>In auto racing, a pit stop is where a racing vehicle stops for new tires, fuel, repairs, and other mechanical adjustments. The efficiency of a pit crew that makes these adjustments can affect the outcome of a race. A pit crew claims that its mean pit stop time (for 4 new tires and fuel) is less than 13 seconds. A random sample of 32 pit stop times has a sample mean of 12.9 seconds. Assume the population standard deviation is 0.19 second. Is there enough evidence to support the claim at $\alpha = 0.01$? Use a P-value.

$$
\left\{
\begin{array}{l}
      H_{0}: & \mu\geq 13\\
      H_{a}: & \mu< 13 \text{ (Claim)}  \\
\end{array} 
\right.
$$

$$\alpha=0.01$$

$$z=\frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}=\frac{13-12.9}{\frac{0.19}{\sqrt{ 32 }}} \approx2.97729$$

$$z=2.97729\to P=0.0015$$

$$0.0015<0.01, \text{ Reject Null Hypothesis}$$

- There is enough evidence at the 1% level of significance to support the claim that the mean pit stop time is less than 13 seconds.

>According to a study of U.S. homes that use heating equipment, the mean indoor temperature at night during winter is 68.3°F. You think this information is incorrect. You randomly select 25 U.S. homes that use heating equipment in the winter and find that the mean indoor temperature at night is 67.2°F. From past studies, the population standard deviation is known to be 3.5°F and the population is normally distributed. Is there enough evidence to support your claim at $\alpha = 0.05$? Use a P-value.

$$
\left\{
\begin{array}{l}
      H_{0}: & \mu= 68.3\\
      H_{a}: & \mu\neq 68.3 \text{ (Claim)}  \\
\end{array} 
\right.
$$

$$\alpha=0.05$$

$$z=\frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}=\frac{67.2-68.3}{\frac{3.5}{\sqrt{ 25 }}} \approx-1.571429$$

$$z=-1.571429\to P=(0.058\cdot2)$$

$$(0.058\cdot 2)>0.05, \text{ Fail to Reject Null Hypothesis}$$

- There is not enough evidence at the 5% level of significance to support the claim that the mean indoor temperature at night during winter is different from 68.3°F for U.S. homes that use heating equipment.

## Rejection Regions & Critical Values
- The range of values for which the null hypothesis is not probable
- If a standardised test statistic falls in this region, the null hypothesis is rejected
- A **critical value**, $z_{0}$, separates the rejection region from the nonrejection region
- **Finding Critical Values in a Normal Distribution**
	1. Specify level of significance, $\alpha$
	2. Find the critical value(s), $z_{0}$. When the hypothesis test is:
		- Left-tailed, z-score of $\alpha$
		- Right-tailed, z-score of $1-\alpha$
		- Two-tailed, z-score of $\frac{1}{2}\alpha$ and $1-\frac{1}{2}\alpha$

## Decision Rule Based on Rejection
- To use a rejection region to conduct a hypothesis test, calculate the standardized test statistic, $z$. If the standardized test statistic
	1. Is in the rejection region, then reject $H_{0}$
	2. Is *not* in the rejection region, then fail to reject $H_{0}$


>Employees at a construction and mining company claim that the mean salary of the company’s mechanical engineers is less than that of one of its competitors, which is $95,600. A random sample of 20 of the company’s mechanical engineers has a mean salary of $93,300. Assume the population standard deviation is $9500 and the population is normally distributed. At $\alpha = 0.05$, test the employees’ claim.

$$
\left\{
\begin{array}{l}
      H_{0}: & \mu\geq95600\\
      H_{a}: & \mu<95600 \text{ (Claim)}  \\
\end{array} 
\right.
$$

$$z=\frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}=\frac{93300-95600}{\frac{9500}{\sqrt{ 20 }}} \approx-1.083$$

$$-1.083>-1.645, \text{ Fail to Reject the Null Hypothesis}$$
# 7.3
## Finding Critical Values in a $t$-distribution
- Use Chart

$$t=\frac{\bar{x}-\mu}{\frac{s}{\sqrt{ n }}}$$

>A used car dealer says that the mean listing price of used vehicles sold in the last 12 months is at least $23,500. You suspect this claim is incorrect and find that a random sample of 14 used vehicles sold in the last 12 months has a mean price of $21,558 and a standard deviation of $3350. Is there enough evidence to reject the dealer’s claim at α = 0.05? Assume the population is normally distributed.


$$
\left\{
\begin{array}{l}
      H_{0}: & \mu\geq23500 \text{ (Claim)}\\
      H_{a}: & \mu<23500 \\
\end{array} 
\right.
$$

$$t_{0}=-1.7709\to t<-1.7709 \text{ (Rejection Region)}$$

$$t=\frac{\bar{x}-\mu}{\frac{s}{\sqrt{ n }}}=\frac{21558-23500}{\frac{3350}{\sqrt{ 14 }}} \approx-2.169, \text{ Null Hypothesis Rejected}$$




# 7.4 
## $z$-Test for a Population Proportion
- A statistical test for a population proportion
- Can be used when a binomial distribution is given such that $np\geq {5}$ and $nq\geq 5$
- The **test statistic** is the sample proportion , $\hat{p}$
- The **standardised test statistic** is $z$

$$z=\frac{\hat{p}-\mu_{\hat{p}}}{\sigma_{\hat{p}}}=\frac{\hat{p}-p}{\sqrt{ \frac{pq}{n} }}$$


>A researcher claims that less than 69% of U.S. adults who use live television streaming platforms have upgraded to advertisement-free service tiers. In a random sample of 100 U.S. adults who use live television streaming platforms, 65% say they have upgraded to advertisement-free service tiers. At  $\alpha = 0.01$, is there enough evidence to support the researcher’s claim?

$$
\left\{
\begin{array}{l}
      H_{0}: & \mu \geq 0.69\\
      H_{a}: & \mu < 0.69 \text{ (Claim)}  \\
\end{array} 
\right.
$$

$$\alpha=0.01\to z_{0}=-2.33$$

$$\text{Rejection Region: } z<-2.33$$

$$\frac{0.65-0.69}{\sqrt{ \frac{(0.69)(0.31)}{100} }}\approx -0.865$$

$$-0.865>-2.33, \text{ Fail to Reject Null Hypothesis}$$

- There is not enough evidence at the 1% level of significance to support the claim that less than 69% of U.S. adults who use live television streaming platforms have upgraded to advertisement-free service tiers.

>A researcher claims that 26% of U.S. adults ages 22 to 59 who do not have a parent with a bachelor’s degree have completed a bachelor’s degree themselves. In a random sample of 7400 adults ages 22 to 59 who do not have a parent with a bachelor’s degree, 1984 say they have completed a bachelor’s degree themselves. At $\alpha = 0.10$, is there enough evidence to support the researcher’s claim?

$$
\left\{
\begin{array}{l}
      H_{0}: & p = 0.26\text{ (Claim)}\\
      H_{a}: & p \neq 0.26   \\
\end{array} 
\right.
$$

$$\alpha=0.1\to z_{0}=-1.645 \text{ and }1.645$$

$$\text{Rejection Region: }z<-1.645 \text{ and }z>1.645$$

$$\frac{0.268-0.26}{\sqrt{ \frac{(0.26)(0.74)}{7400} }}\approx 1.59$$

$$1.59<1.645, \ 1.59>-1.645, \text{ Fail to Reject Null Hypothesis}$$

- There is not enough evidence at the 10% level of significance to reject the claim that 26% of U.S. adults ages 22 to 59 who do not have a parent with a bachelor’s degree have completed a bachelor’s degree themselves.

---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 6 - Confidence Intervals]] — [[Chapter 9 - Correlation & Regression]]