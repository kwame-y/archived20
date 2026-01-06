---
tags: 
date: 2025-06-28T13:20:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
# 9.1
## Correlation
- A relationship between two variables
- The data can be represented by ordered $(x,y)$
	- $x$ is indepedent
	- $y$ is dependent
- In a scatter plot, the ordered pairs $(x,y)$ are graphed as points in a coordinate plane
- The independent variable is measured on the horizontal axis, and the dependent variable is measured on the vertical axis
- A scatter plot can be sued to determine whether a linear correlation exists
## Correlation Coefficient
- A measure of the strength and the direction of a linear relationship between two variables
- The symbol, $r$, represents the sample correlation coefficient
- A formula for $r$ is: $$r=\frac{n\sum xy-\left( \sum x\right)\left( \sum y \right)}{\sqrt{ n\sum x^2-\left( \sum x \right)^2 }\sqrt{ n\sum y^2 -\left( \sum y \right)^2}}$$
- The population correlation coefficient is represented by $\rho$
- The range coefficient is -1 to 1
## Using a Table to Test a Population Correlation Coefficient, $\rho$
- Once you have calculated $r$, the sample correlation coefficient, you will want to determine whether there is enough evidence to decide that the population correlation coefficient, $\rho$, is significant
- Use a table
- If $|r|$ is greater than the critical value, there is enough evidence to decide that the correlation coefficient, $\rho$, is significant
- Determine whether $\rho$ is significant for five pairs of data $(n=5)$ at a level of significance of $\alpha=0.01$
- If $|r|>0.959$, the correlation is significant
## Hypothesis Testing for a Population Correlation Coefficient
- A hypothesis test can also be used to determine whether the sample correlation coefficient $r$ provides enough evidence to conclude that the population correlation coefficient $ρ$ is significant at a specified level of significance.  
- A hypothesis test can be one-tailed or two-tailed
	- Left-tailed: $$
\left\{
\begin{array}{l}
      H_{0}: & \rho\geq 0\text{ (no significant negative correlation)} \\
      H_{a}: & \rho<0\text{ (significant negative correlation)} \\
\end{array} 
\right.$$
	- Right-tailed: $$
\left\{
\begin{array}{l}
      H_{0}: & \rho\leq 0\text{ (no significant negative correlation)} \\
      H_{a}: & \rho>0\text{ (significant negative correlation)} \\
\end{array} 
\right.$$
	- Two-tailed: $$\left\{
\begin{array}{l}
      H_{0}: & \rho= 0\text{ (no significant negative correlation)} \\
      H_{a}: & \rho\neq0\text{ (significant negative correlation)} \\
\end{array} 
\right.$$
## The $t$-Test for the Correlation Coefficient
- A **$t$-test** can be used to test whether the correlation between two variables is significant. The **test statistic** is $r$ and the **standardised test statistic**,$$t=\frac{r}{\sigma_{r}}=\frac{r}{\sqrt{ \frac{1-r^2}{n-2} }}$$follows a $t$-distribution with $\text{d.f}=n-2$ degrees of freedom, where $n$ is the number of pairs of data

>Previously we used 10 pairs of data to find r ≈ 0.874. Test the significance of this correlation coefficient. Use $\alpha = 0.05$.

$$\left\{
\begin{array}{l}
      H_{0}: & \rho= 0\text{ (no significant negative correlation)} \\
      H_{a}: & \rho\neq0\text{ (significant negative correlation)} \\
\end{array} 
\right.$$

- Because there are 10 pairs of data in the sample, there are $10-2=8$ degrees of freedom. Because the test is a two-tailed, $\alpha=0.05$, and $\text{d.f.}=8$, the critical values are $t_{0}=-2.306 \text{ and } 2.306$. The rejection regions are $t<-2.306 \text{ and } t>2.306$

$$t=\frac{r}{\sqrt{ \frac{1-r^2}{n-2} }}=\frac{0.874}{\sqrt{ \frac{1-(0.874)^2}{10-2} }} \approx 5.087$$

- Because t is in the rejection region, you reject the null hypothesis. There is enough evidence at the 5% level of significance to conclude that there is a significant linear correlation between gross domestic products and carbon dioxide emissions.
# 9.2
## Regression Lines
- After verifying that the linear correlation between two variables is significant, the next step is to determine the equation of the line that best models the data
- This line is called a **regression line,** and its equation can be used to predict the value of $y$ for a given value of $x$
- **Line of Best Fit**
	- The line for which the sum of the squares of the residuals is a minimum: $$\sum d_{i}^2$$
	- The equation of a regression line for an independent variable, $x$, and a dependent variable, $y$, is: $$\hat{y}=mx+b$$ where $\hat{y}$ is the predicted $y$-value for a given $x$-value. The slope, $m$, and the $y$-intercept, $b$, are given by:$$m= \frac{n\sum xy-\left( \sum x \right)\left( \sum y \right)}{n\sum x^2-\left( \sum x \right)^2}, \ b=\bar{y}-m\bar{x}=\frac{\sum y}{n}-m\frac{\sum x}{n}$$ where $\bar{y}$ and $\bar{x}$ is the mean of the y & x values in the data set, and $n$ is the number of pairs of data
## Residuals
- For each data point, $d_{i}$ represents the difference between the observed $y$-value and the predicted $y$-value for a given $x$-value
- These differences are called **residuals** and can be positive, negative, or zero

---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 7 - Hypothesis Testing with One Sample]] — [[Chapter 1 – Introduction to Statistics]]]