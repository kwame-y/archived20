---
tags: 
date: 2025-06-06T09:27:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
>[!info] Important Symbols
> - $\sum$ → the sum of __
> - $\mu$ → population mean
> - $\bar{x}$ → sample mean
> - $\sigma$ → [[standard deviation]]
> - $N$ → number of items in the population
> - $n$ → number of items in the sample
> - $f$ → frequency
# 2.1 - Frequency Distributions and Their Graphs
## Frequency Distribution
- A **Frequency Distribution** is a table that shows **classes** or **intervals** of data with a count of the number of entries in each class
- The frequency, $f$, of a class is the number of data entries in that class
- Each class has a **lower class limit**, which is the least number that can belong to the class and an **upper class limit**, which is the greatest number that can belong to the class
- The **class width** is the distance between the lower (or upper) limits of consecutive classes
- The difference between maximum and minimum data entries is called the **range**

| Class   | Frequency, $f$ |
| ------- | -------------- |
| 1 - 5   | 5              |
| 6 - 10  | 8              |
| 11 - 15 | 6              |
| 16 - 20 | 8              |
| 21 - 25 | 5              |
| 26 - 30 | 4              |
- In this table, the lower class limits are 1, 6, 11, 16, etc. and the upper class limits are 5, 10, 15, 20, etc.
- The class width can be found by doing $6 - 1 = 5$ or $21 - 16 = 5$
- And lastly, the range can be found by $30 - 1 = 29$
## Constructing a Frequency Distribution
1. Decide on the number of classes
	- Usually between 5 and 20; otherwise, it may be difficult to detect any patterns
2. Find the class width
	- Determine the range of the data
	- Divide the range by the number of classes
	- Round up to the next convenient number
3. Find the class limits
	- You can use the minimum data entry as the lower limit of the first class
	- Find the remaining lower limits (add the class width to the lower limit of the preceding class)
	- Find the upper limit of the first class. Remember that classes cannot overlap
	- Find the remaining upper class limits
4. Make a tally mark for each data entry in the row of the appropriate class
5. Count the tally marks to find the total frequency $f$ for each class
### Example
The data set lists the cell phone screen times (in minutes) for 30 U.S. adults on a recent day. **Construct a frequency distribution that has seven classes.**

200 239 155 252 384 165 296 405 303 400  
307 241 256 315 330 317 352 266 276 345  
238 306 290 271 345 312 293 195 168 342 ^66ef00

1. Number of classes = 7 (given)
2. Find the class width $\frac{405 - 155}{7} = 35.7143\dots \sim 36$
3. Use 155 (minimum value) as the first lower class limit, then add the class width (36) to get the lower limit of the next class. The upper limit of the first class is 190 (one less than the lower limit of th second class), next add the class width (36) to get the upper limit of the next class

| Lower Limit | Upper Limit |
| ----------- | ----------- |
| 155         | 190         |
| 191         | 226         |
| 227         | 262         |
| 263         | 298         |
| 299         | 334         |
| 335         | 370         |
| 371         | 406         |
4. Make a tally mark for each data entry in the row of the appropriate class
5. Count the tally marks to find the total frequency $f$ for each class

| Class     | Tally           | Frequency, $f$ |
| --------- | --------------- | -------------- |
| 155 - 190 | \|\|\|          | 3              |
| 191 - 226 | \|\|            | 2              |
| 227 - 262 | \|\|\|\|\|      | 5              |
| 263 - 298 | \|\|\|\|\| \|   | 6              |
| 299 - 334 | \|\|\|\|\| \|\| | 7              |
| 335 - 370 | \|\|\|\|        | 4              |
| 371 - 406 | \|\|\|          | 3              |
|           |                 | $\sum f=30$    |

---
## Determining the Midpoint
$$\text{Midpoint of a class}=\frac{(\text{Lower class limit})+(\text{Upper class limit})}{2}$$

## Determining the Relative Frequency
- The Relative Frequency of a class is the portion / percentage of the data that falls in a particular class
- $$\text{relative frequency =}\frac{\text{class frequency}}{\text{Sample size}}=\frac{f}{n}$$
	- Note that $n=\sum f$
## Determining the Cumulative Frequency
- The Cumulative Frequency of a class is the sum of the frequency for that class and all previous classes
	- The cumulative frequency of the last class is equal to the sample size $n$

| Class     | Frequency, $f$ | Midpoint | Relative Frequency   | Cumulative Frequency |
| --------- | -------------- | -------- | -------------------- | -------------------- |
| 155 - 190 | 3              | 172.5    | 0.1                  | 3                    |
| 191 - 226 | 2              | 208.5    | 0.0667               | 5                    |
| 227 - 262 | 5              | 244.5    | 0.1667               | 10                   |
| 263 - 298 | 6              | 280.5    | 0.2                  | 16                   |
| 299 - 334 | 7              | 316.5    | 0.2333               | 23                   |
| 335 - 370 | 4              | 352.5    | 0.1333               | 27                   |
| 371 - 406 | 3              | 388.5    | 0.1                  | 30                   |
|           | $\sum f=30$    |          | $\sum \frac{f}{n}=1$ |                      |

- There are multiple patterns in the data set. For example, the most common range for the time is 299 to 334 minutes. Also, about half of the times are less than 299 minutes. 
---
## Graphs of Frequency Distributions
- A **Frequency Histogram** is a bar graph that represents the frequency distribution
- The horizontal scale is quantitative and measures the data values
- The vertical scale measures the frequencies of the classes
- Consecutive bars must touch
### Class Boundaries
- Because consecutive bars of a histogram must touch, bars must begin and end at class boundaries instead of class limits
- The numbers that separate classes *without* forming gaps between them
### Example
- First, we need to find the class boundaries
- The distance from the upper limit of the first class to the lower limit of the second class is 191 - 190 = 1
	- Half this distance is 0.5
- First class lower boundary = 155 - 0.5 = 154.5
- First class upper boundary = 190 + 0.5 = 190.5

| Class     | Class Boundaries | Frequency, $f$ |
| --------- | ---------------- | -------------- |
| 155 - 190 | 154.5 - 190.5    | 3              |
| 191 - 226 | 190.5 - 226.5    | 2              |
| 227 - 262 | 226.5 - 262.5    | 5              |
| 263 - 298 | 262.5 - 298.5    | 6              |
| 299 - 334 | 298.5 - 334.5    | 7              |
| 335 - 370 | 334.5 - 370.5    | 4              |
| 371 - 406 | 370.5 - 406.5    | 3              |

![[Chart Fri Jun 06 2025 2.png]]
(Pretend the x-axis is labeled “Times in minutes”)[^1]
(also pretend that the bars are touching)

### Frequency Polygon
- A frequency polygon is a line graph that emphasises the continuous change in frequencies
![[Chart Fri Jun 06 2025 3.png]]
(Pretend the x-axis is labeled “Times in minutes”)
- The graph should begin & end on the x-axis so we extend the left & right sides by one class width
### Relative Frequency Histogram
- Has the same shape & horizontal scale as the corresponding frequency histogram
- The vertical scale, however, measures the **relative** frequencies
![[Chart Fri Jun 06 2025 4.png]]
(Pretend the x-axis is labeled “Times in minutes”)[^1]
(also pretend that the bars are touching)
- From this graph, you can quickly see that 0.2, or 20%, of the adults screen times between 262.5 and 298.5 minutes.
### Cumulative Frequency Graph / Ogive
- An **Ogive** is a line graph that displays the cumulative frequency of each class at its upper class boundary
- The upper boundaries are marked on the horizontal axis
- The cumulative frequencies are marked on the vertical axis

| Upper Class Boundary | $f$ | Cumulative Frequency |
| -------------------- | --- | -------------------- |
| 190.5                | 3   | 3                    |
| 226.5                | 2   | 5                    |
| 262.5                | 5   | 10                   |
| 298.5                | 6   | 16                   |
| 334.5                | 7   | 23                   |
| 370.5                | 4   | 27                   |
| 406.5                | 3   | 30                   |
![[Chart Fri Jun 06 2025 5.png]]
(Pretend the x-axis is labeled “Times in minutes”)[^1]
- From the ogive, you can see that 10 adults had screen times of 262.5 minutes or less. Also, the greatest increase in cumulative frequency occurs between 298.5 minutes and 334.5 minutes.
---
# 2.2 - More Graphs and Displays
## Graphing Quantitative Data Sets
### Stem & Leaf Plot
- Each number is separated into a **stem** and a **leaf**
- Similar to a histogram
- Still contains original data values
- Provides an easy way to sort data

| Number of Text Messages Sent                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75, 49, 104, 59, 88, 123, 75, 109, 68, 81, 66, 80, 78, 69, 55, 75, 114, 98, 73, 18, 42, 84, 46, 52, 25, 25, 26, 33, 25, 20, 32, 24, 43, 17, 49, 27, 32, 29, 29, 40, 23, 33, 30, 41, 35, 38, 36, 54, 30, 148 |

- The data goes from a low of 17 to a high of 148
- Use the rightmost digit as the leaf
	- Ex. 76 = 7 | 6 & 104 = 10 | 4
- List the stems, 1-14, to the left
- For each entry, list a leaf to the right

| Number of Text Messages Sent |                              |
| ---------------------------- | ---------------------------- |
| 1                            | 7, 8                         |
| 2                            | 0, 3, 4, 5, 5, 5, 6, 7, 9, 9 |
| 3                            | 0, 0, 2, 2, 3, 3, 5, 6, 8    |
| 4                            | 0, 1, 2, 3, 6, 9, 9          |
| 5                            | 2, 4, 5, 9                   |
| 6                            | 6, 8, 9                      |
| 7                            | 3, 5, 5, 6, 8                |
| 8                            | 0, 1, 4, 8                   |
| 9                            | 8                            |
| 10                           | 4, 9                         |
| 11                           | 4                            |
| 12                           | 3                            |
| 13                           |                              |
| 14                           | 8                            |
- We can also make variations on this plot. For example, we could list each stem twice, use leaves 0-4 in the first stem and 5-9 in the second stem, to get a more details view on the info

| Number of Text Messages Sent |                     |
| ---------------------------- | ------------------- |
| 1                            |                     |
| 1                            | 7, 8                |
| 2                            | 0, 3, 4             |
| 2                            | 5, 5, 5, 6, 7, 9, 9 |
| 3                            | 0, 0, 2, 2, 3, 3    |
| 3                            | 5, 6, 8             |
| 4                            | 0, 1, 2, 3          |
| 4                            | 6, 9, 9             |
| 5                            | 2, 4                |
| 5                            | 5, 9                |
| 6                            |                     |
| 6                            | 6, 8, 9             |
| 7                            | 3                   |
| 7                            | 5, 5, 6, 8          |
| 8                            | 0, 1, 4             |
| 8                            | 8                   |
| 9                            |                     |
| 9                            | 8                   |
| 10                           | 4                   |
| 10                           | 9                   |
| 11                           | 4                   |
| 11                           |                     |
| 12                           | 3                   |
| 12                           |                     |
| 13                           |                     |
| 13                           |                     |
| 14                           |                     |
| 14                           | 8                   |
### Dot Plot
- In  a dot plot, each data entry is plotted, using a point, above a horizontal axis
![[TextMessageDotPlot.png]]
- From the dot plot, you can see that most entries occur between 20 and 80 and only 4 people sent more than 100 text messages. You can also see that 148 is an unusual data entry
### Pie Chart
- Pie charts provide a convenient way to present qualitative data as percents of a whole
- A circle is divided into sectors that represent cateogries
- The area of each sector is proportional to the frequency of each category

| Type of degree | Number (in thousands) |
| -------------- | --------------------- |
| Associate’s    | 1,037                 |
| Bachelor’s     | 2,013                 |
| Master’s       | 834                   |
| Doctoral       | 188                   |
- If you were to construct a pie chart without electronic help, you’d do math to make sure the central angle corresponds to each category
	- To find the central angle, multiply 360° by the category’s relative frequency
	- Ex. Associates → $360(0.255)\approx 91.8$

| Type of degree | $f$   | Relative Frequency | Angle  |
| -------------- | ----- | ------------------ | ------ |
| Associate’s    | 1,037 | 0.255              | 91.8°  |
| Bachelor’s     | 2,013 | 0.494              | 177.8° |
| Master’s       | 834   | 0.205              | 73.8°  |
| Doctoral       | 188   | 0.046              | 16.6°  |

![[Chart Fri Jun 06 2025 6.png]]
### Pareto Chart
- A vertical bar graph in which the height of each bar represents frequency or relative frequency
- The bars are positions in order of decreasing height, with the tallest bar positioned at the left
![[Chart Fri Jun 06 2025 7.png]]
- From the Pareto chart, you can see that the leading cause of death in the United States in 2019 was from heart disease. Also, heart disease and cancer caused more deaths than the other three causes combined.
---
## Graphing Paired Data Sets
### Paired Data Sets
- Each entry in one data set corresponds to one entry in a second data
- Graphed using a scatter plot
	- The ordered pairs are graphed as points in a coordinate plane
	- Used to show the relationship between two quantitative variables
### Time Series
- Data set is composed of quantitative entries taken at regular intervals over a period of time

| Year | Burglaries (in millions) |
| ---- | ------------------------ |
| 2009 | 2.2                      |
| 2010 | 2.17                     |
| 2011 | 2.19                     |
| 2012 | 2.11                     |
| 2013 | 1.93                     |
| 2014 | 1.71                     |
| 2015 | 1.59                     |
| 2016 | 1.52                     |
| 2017 | 1.4                      |
| 2018 | 1.24                     |
| 2019 | 1.12                     |
- Let the horizontal axis represent the years and let the vertical axis represent the number of motor vehicle burglaries (in millions)
- Then plot the paired data and connect them with line segments
![[Chart Fri Jun 06 2025 8.png]]

---
# 2.3 - Measures of Central Tendency
>[!question] What is a Measure of Central Tendency
> - A Measure of Central Tendency is a value that represents a typical, or central entry of a data set
> - Most common measures of central tendency include:
> 	- Mean
> 	- Median
> 	- Mode
## Mean (average)
- The sum of all the data entries divided by the number of entries
- **Sigma notation**: $\sum x = \text{add all of the data entries} (x) \text{ in the data set}$
- **Population mean**: $\mu=\frac{\sum x}{N}$
	- $N$ = number of items in the population
- **Sample mean**: $\bar{x}=\frac{\sum x}{n}$
	- $n$ = number of items in the sample
### Finding a Sample Mean
- Sample Data (lbs): 274 235 223 268 290 285 235
- The sum of the weights is 

 $$\sum x = 274 + 235 + 223 + 268 + 290 + 285 + 235 = 1810$$
- To find the mean weight, divide the sum of the weights by the number of adults in the sample $$\bar{x}=\frac{\sum x}{n}=\frac{1810}{7}\approx 258.6$$
- The mean weight of the adults is about 258.6 lbs.
## Median
- The value that lies in the middle of the data when the data set is **ordered**
- Measures the center of an ordered data set by dividing it into two equal parts
- If the data set has an:
	- **odd number of entries**: median is the middle data entry
	- **even number of entries**: median is the mean of the two middle data entries
### Finding the Median
- Sample Data (lbs): 274 235 223 268 290 285 235
- First order the data: 223 235 235 268 274 285 290
- There are seven entries, the median is the middle one, (the fourth one)
- The median weight of the adults is 268 lbs.
## Mode
- The data entry that occurs with the greatest frequency
- If no entry is repeated the data set has no mode
- If two entries occur with the same greatest frequency, each entry is a mode (bimodal)
- The mode of the previous data sample would be 235
## Comparing Mean, Median, & Mode
>The table shows the sample ages of students in a class. Find the mean, median, and mode of the ages. Are there any outliers? Which measure of central tendency best describes a typical entry of this data set?

| Ages in a Class                                                                |
| ------------------------------------------------------------------------------ |
| 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 23, 23, 23, 23, 24, 24, 65 |
- Mean: 

$$\bar{x}=\frac{\sum x}{n}=\frac{20+20+\dots+24+65}{20}\approx 23.8$$
- Median: 

$$\frac{21+22}{2}=21.5$$
- Mode: 20
- The mean takes every entry into account, but is influenced by the outlier of 65
- The median also takes every entry into account, and it’s not affect by the outlier
- In this case the mode exists, but doesn’t really represent a typical entry
## Weighted Mean
- The mean of a data set whose entries have varying weights
- The weighted mean is given by: 

$$\bar{x}=\frac{\sum xw}{\sum w}$$
	- $w$ is the weight of each entry $x$
### Finding a Weighted Mean
>Your[^2] grades from last semester are in the table. The grading system assigns points as follows: A = 4, B = 3, C = 2, D = 1, F = 0. Determine your grade point average (weighted mean).

| Final Grade | Credit Hours |
| ----------- | ------------ |
| C           | 3            |
| C           | 4            |
| D           | 1            |
| A           | 3            |
| C           | 2            |
| B           | 3            |
- Make a new table

| Points, $x$ | Credit hours, $w$ | $xw$                |
| ----------- | ----------------- | ------------------- |
| 2           | 3                 | 6                   |
| 2           | 4                 | 8                   |
| 1           | 1                 | 1                   |
| 4           | 3                 | 12                  |
| 2           | 2                 | 4                   |
| 3           | 3                 | 9                   |
|             | $\sum w=16$       | $\sum(x\cdot w)=40$ |
$$\bar{x}=\frac{\sum xw}{\sum w}=\frac{40}{16}=2.5$$
- Last semester, your[^2] grade point average was 2.5
## Mean of a Frequency Distribution
- Approximated by:

$$\bar{x}=\frac{\sum xf}{n}$$

$$n=\sum f$$

- Where $x$ and $f$ are midpoints and frequencies of a class, respectively

1. Find the midpoint of each class

$$x=\frac{(\text{Lower class limit})+(\text{Upper class limit})}{2}$$

2. Find the sum of the products of the midpoints and the frequencies

$$\sum xf$$

3. Find the sum of the frequencies

$$n=\sum f$$

4. Find the mean of the frequency distribution

$$\bar{x}=\frac{\sum xf}{n}$$

### Example
- Using our [[Chapter 2 - Descriptive Statistics#^66ef00|old dataset]]
>The frequency distribution shows the cell phone screen times (in minutes) for 30 U.S. adults on a recent day. Use the frequency distribution to estimate the mean screen time. Using the sample mean formula, the mean screen time is 285.5 minutes. Compare this with the estimated mean.

| Class midpoint, $x$ | Frequency, $f$ | $xf$          |
| ------------------- | -------------- | ------------- |
| 172.5               | 3              | 517.5         |
| 208.5               | 2              | 417           |
| 244.5               | 5              | 1222.5        |
| 280.5               | 6              | 1683          |
| 316.5               | 7              | 2215.5        |
| 352.5               | 4              | 1410          |
| 388.5               | 3              | 1165.5        |
|                     | $n=30$         | $\sum = 8631$ |
$$\bar{x}=\frac{\sum xf}{\sum n}=\frac{8631}{30}=287.7$$
- The mean screen time (based on the frequency distribution) is 287.7 minutes. This value is an estimate because **it is based on class midpoints** instead of the original data set.
## The Shape of Distributions
- **Symmetric Distribution**
	- A vertical line can be drawn through the middle of a graph of the distribution and the resulting halves are almost mirrors
- **Uniform**
	- It looks the same
- **Negative skew (left)**
- **Positive skew (right)**
---
# 2.4 - Measures of Variation
## Range
- **Range** is the difference between maximum and minimum data entries in the set
- The data must be quantitative
### Finding the Range
>Two corporations each hired 10 graduates. The starting salaries for each graduate are shown. Find the range of the starting salaries for Corporation A.


| Salary A (in thousands) | Salary B (in thousands) |
| ----------------------- | ----------------------- |
| 51                      | 50                      |
| 48                      | 33                      |
| 49                      | 51                      |
| 55                      | 60                      |
| 57                      | 59                      |
| 51                      | 42                      |
| 54                      | 51                      |
| 51                      | 39                      |
| 47                      | 62                      |
| 52                      | 68                      |
- 57 - 47 = 10
- The range of starting salaries for Corporation A is 10, or $10,000
## [[Variance|Variation]]
- Both data sets in the last example have a mean of 51.5, or $51,500, a median of 51, or $51,000, and a mode of 51, or $51,000. And yet the two sets differ significantly.  
- The difference is that the entries in the second set have greater variation. As you can see in the figures below, the starting salaries for Corporation B are more spread out than those for Corporation A.

![[Chart Sat Jun 07 2025.png]]

![[Chart Sat Jun 07 2025 1.png]]
## [[Deviation]], [[Variance]], and Standard Deviation
### Deviation
- **Deviation** is the difference between the data entry, $x$, and the mean of the data set
- Population data set:
	- Deviation of $x=x-\mu$
- Sample data set:
	- Deviation of $x=x-\bar{x}$
- Population Variance

$$\sigma^2=\frac{\sum(x-\mu)^2}{N}$$

- Population Standard Deviation

$$\sigma=\sqrt{ \sigma^2 }=\sqrt{ \frac{\sum(x-\mu)^2}{N} }$$

- The standard deviation measures the variation of the data set about the mean and has the same units of measure as the data set.  
- The standard deviation is always greater than or equal to 0. When $\sigma$ = 0, the data set has no variation and all entries have the same value. As the entries get farther from the mean (that is, more spread out), the value of $\sigma$ increases.
#### Finding Population Variance & Standard Deviation

| In Words                                                             | In Symbols                                |
| -------------------------------------------------------------------- | ----------------------------------------- |
| 1. Find the mean of the population data set                          | $\mu=\frac{\sum x}{N}$                    |
| 2. Find the deviation of each entry                                  | $x-\mu$                                   |
| 3. Square each deviation                                             | $(x-\mu)^2$                               |
| 4. Add to get the sum of squares                                     | $SS_{x}=\sum(x-\mu)^2$                    |
| 5. Divide by $N$ to get the **population variance**                  | $\sigma^2=\frac{\sum(x-\mu)^2}{N}$        |
| 6. Find the square root to get the **population standard deviation** | $\sigma=\sqrt{ \frac{\sum(x-\mu)^2}{N} }$ |
>Find the population variance and standard deviation of the starting salaries for Corporation A listed in the first example.

- For this data set, $N$ = 10, $\sum x=515$ 
- The mean is $\mu=\frac{515}{10}=51.5$
- Next, we determine the deviation for each data entry

| Salary (in thousands), $x$ | Deviation: $x-\mu$ |
| -------------------------- | ------------------ |
| 51                         | 51 - 51.5 = -0.5   |
| 48                         | 48 - 51.5 = -3.5   |
| 49                         | 49 - 51.5 = -2.5   |
| 55                         | 55 - 51.5 = 3.5    |
| 57                         | 57 - 51.5 = 5.5    |
| 51                         | 51 - 51.5 = -0.5   |
| 54                         | 54 - 51.5 = 2.5    |
| 51                         | 51 - 51.5 = -0.5   |
| 47                         | 47 - 51.5 = -4.5   |
| 52                         | 52 - 51.5 = 0.5    |
| $\sum x=515$               | $\sum(x-\mu)=0$    |
- Now we determine $\text{SS}_{x}$

| Salary (in thousands), $x$ | Deviation: $x-\mu$ | Squares: $(x-\mu)^2$ |
| -------------------------- | ------------------ | -------------------- |
| 51                         | 51 - 51.5 = -0.5   | 0.25                 |
| 48                         | 48 - 51.5 = -3.5   | 12.25                |
| 49                         | 49 - 51.5 = -2.5   | 6.25                 |
| 55                         | 55 - 51.5 = 3.5    | 12.25                |
| 57                         | 57 - 51.5 = 5.5    | 30.25                |
| 51                         | 51 - 51.5 = -0.5   | 0.25                 |
| 54                         | 54 - 51.5 = 2.5    | 6.25                 |
| 51                         | 51 - 51.5 = -0.5   | 0.25                 |
| 47                         | 47 - 51.5 = -4.5   | 20.25                |
| 52                         | 52 - 51.5 = 0.5    | 0.25                 |
| $\sum x=515$               | $\sum(x-\mu)=0$    | $\text{SS}_{x}=88.5$ |

- **Population Variance**

$$\sigma^2=\frac{\sum(x-\mu)^2}{N}=\frac{88.5}{10}=8.85$$

- **Population Standard Deviation**

$$\sigma=\sqrt{ \sigma^2 }=\sqrt{ \frac{88.5}{10} }\approx 3$$

- The population variance is about 8.9, and the population standard deviation is about 3.0, or $3,000.
---
- **Sample Variance**

$$s^2=\frac{\sum(x-\bar{x})^2}{n-1}$$

- **Sample Standard Deviation**

$$s=\sqrt{ s^2 } = \sqrt{ \frac{\sum(x-\bar{x})^2}{n-1} }$$
#### Finding the Sample Variance & Standard Deviation

| In Words                                                         | In Symbols                                 |
| ---------------------------------------------------------------- | ------------------------------------------ |
| 1. Find the mean of the sample data set                          | $\bar{x}=\frac{\sum x}{n}$                 |
| 2. Find the deviation of each entry                              | $x-\bar{x}$                                |
| 3. Square each deviation                                         | $(x-\bar{x})^2$                            |
| 4. Add to get the sum of squares                                 | $SS_{x}=\sum(x-\bar{x})^2$                 |
| 5. Divide by $n-1$ to get the **sample variance**                | $s^2=\frac{\sum(x-\bar{x})^2}{n-1}$        |
| 6. Find the square root to get the **sample standard deviation** | $s=\sqrt{ \frac{\sum(x-\bar{x})^2}{n-1} }$ |
>In a study of high school football players who sustained concussions, researchers placed the players in two groups. Players that recovered from their concussions in 14 days or less were placed in Group 1. Those that took more than 14 days were placed in Group 2. The recovery times (in days) for Group 1 are listed below. Find the sample variance and standard deviation of the recovery times. 
8 10 4 6 7 7 9 10 7 6 5 11

- First we find $\sum x$, then the deviation for each seta entry, and then the sum of squares


| Time, $x$   | Deviation, $x-\bar{x}$ | Squares, $(x-\bar{x})^2$ |
| ----------- | ---------------------- | ------------------------ |
| 8           | 0.5                    | 0.25                     |
| 10          | 2.5                    | 6.25                     |
| 4           | -3.5                   | 12.25                    |
| 6           | -1.5                   | 2.25                     |
| 7           | -0.5                   | 0.25                     |
| 7           | -0.5                   | 0.25                     |
| 9           | 1.5                    | 2.25                     |
| 10          | 2.5                    | 6.25                     |
| 7           | -0.5                   | 0.25                     |
| 6           | -1.5                   | 2.25                     |
| 5           | -2.5                   | 6.25                     |
| 11          | 3.5                    | 12.25                    |
| $\sum x=90$ | $\sum(x-\bar{x})=0$    | $\text{SS}_{x}=51$       |
- For this data set, $n=12$ and $\sum x = 90$, the mean is $\bar{x}=\frac{90}{12}=7.5$. To calculate $s^2$ and $s$, note that $n-1=12-1=11$ & $\text{SS}_{x}=51$
- **Sample Variance**

$$s^2=\frac{\sum(x-\bar{x})^2}{n-1} = \frac{51}{11}\approx 46$$

- **Sample Standard Deviation**

$$s=\sqrt{ s^2 } = \sqrt{ \frac{51}{11} } \approx 2.2$$
- The sample variance is about 4.6, and the sample standard deviation is about 2.2 days
### Interpreting Standard Deviation
- Standard deviation is a measure of the typical amount an entry deviates from the mean
- The more entries are spread out, the greater the standard deviation
- For data with a (symmetric) bell-shaped distribution, the standard deviation has the following characteristics:
	- About **68%** of the data lie within one standard deviation of the mean
	- About **95%** of the data lie within two standard deviations of the mean
	- About **99.7%** of the data lie within three standard deviations of the mean
![[Screenshot 2025-06-07 at 16.13.09.png]]
#### Using the Empirical Rule
>In a survey conducted by the National Center for Health Statistics, the sample mean height of women in the United States (ages 20-29) was 64.1 inches, with a sample standard deviation of 2.6 inches. Estimate the percent of the women whose heights are between 58.9 inches and 64.1 inches.

![[Screenshot 2025-06-07 at 16.15.31.png]]
- When you subtract two standard deviations from the mean height, you get:

$$\bar{x}-2s=64.1-2(2.6)=58.9$$

- Because 58.9 is two standard deviations below the mean height, the percent of the heights between 58.9 and 64.1 inches is about 13.59% + 34.13% = 47.72%
- So, about 47.72% of women are between 58.9 and 64.1 inches tall
## [[Chebychev’s Theorem]]
- The portion of any data set lying within $k$ standard deviations (k>1) of the mean is at least:

$$1-\frac{1}{k^2}$$
- $k=2$: In any data set, at least $1-\frac{1}{2^2}=\frac{3}{4}$, or 75% of the data lie within 2 standard deviations of the mean
- $k=3$: In any data set, at least $1-\frac{1}{3^2}=\frac{8}{9}$, or about 88.9% of the data lie within 3 standard deviations of the mean

>The age distributions for Georgia and Iowa are shown in the histograms. Apply Chebychev’s Theorem to the data for Georgia using k = 2. What can you conclude? Is an age of 90 unusual for a Georgia resident? Explain.


$\mu \approx 38.2$
$\sigma \approx 22.6$
![[Chart Sat Jun 07 2025 2.png]]
$k=2$: $\mu-2\sigma=38.2-2(22.6)=-7$ (use 0 since age can’t be negative)
$\mu-2\sigma=38.2+2(22.6)=83.4$

- You can say that at least 75% of the population of Georgia is between 0 and 83.4 years old. Also, an age of 90 lies more than two standard deviations from the mean. So, this age is unusual.
## Standard Deviation for Grouped Data
- **Sample standard deviation for a frequency distribution**

$$s=\sqrt{ \frac{\sum(x-\bar{x})^2f}{n-1} }$$
Where $n=\sum f$ (the number of entries in the data set)
- When a frequency distribution has classes, estimate the sample mean and standard deviation by using the midpoint of each class.
### Finding the Standard Deviation for Grouped Data
>You collect a random sample of the number of children per household in a region. Find the sample mean and the sample standard deviation of the data set

  
• First construct a frequency distribution.  

| $x$ | $f$          | $xf$          |
| --- | ------------ | ------------- |
| 0   | 10           | 0             |
| 1   | 19           | 19            |
| 2   | 7            | 14            |
| 3   | 7            | 21            |
| 4   | 2            | 8             |
| 5   | 1            | 5             |
| 6   | 4            | 24            |
|     | $\sum f =50$ | $\sum(xf)=91$ |

• Find the mean of the frequency distribution.

$$\bar{x}=\frac{\sum xf}{n}=\frac{91}{50} \approx 1.8$$

- The sample mean is about 1.8 children

- Now we determine the sum of squares

| $x$ | $f$ | $x-\bar{x}$ | $(x-\bar{x})^2$ | $(x-\bar{x})^2f$            |
| --- | --- | ----------- | --------------- | --------------------------- |
| 0   | 10  | -1.82       | 3.3124          | 33.124                      |
| 1   | 19  | -0.82       | 0.6724          | 12.7756                     |
| 2   | 7   | 0.18        | 0.0324          | 0.2268                      |
| 3   | 7   | 1.18        | 1.3924          | 9.7468                      |
| 4   | 2   | 2.18        | 4.7524          | 9.5048                      |
| 5   | 1   | 3.18        | 10.1124         | 10.1124                     |
| 6   | 4   | 4.18        | 17.4724         | 69.8896                     |
|     |     |             |                 | $\sum(x-\bar{x})^2f=145.38$ |
- Find the sample standard deviation

$$s=\sqrt{ \frac{\sum(x-\bar{x})^2f}{n-1} }=\sqrt{\frac{145.38}{49} }\approx 1.7$$

- The standard deviation is about 1.7 (2) children
### Using Midpoints of Classes
>The figure shows the price ranges (in thousands of dollars) and corresponding number of homes recently listed for sale in a mid- sized U.S. city. Make a frequency distribution for the data. Use the table to estimate the sample mean and the sample standard deviation of the data set.

![[Chart Sat Jun 07 2025 3.png]]
- First we create a frequency distribution to organize the data. Because the class of $500 thousand or more is open-ended, you must choose a value to represent the midpoint, such as 599.5 thousand.

| Class   | $x$   | $f$           | $xf$              |
| ------- | ----- | ------------- | ----------------- |
| 0-99    | 49.5  | 173           | 8563.5            |
| 100-199 | 149.5 | 129           | 19,285.5          |
| 200-299 | 249.5 | 39            | 9730.5            |
| 300-399 | 349.5 | 22            | 7689              |
| 400-499 | 449.5 | 8             | 3596              |
| 500+    | 599.5 | 19            | 11,390.5          |
|         |       | $\sum f =390$ | $\sum(xf)=60,255$ |

Sample Mean:

$$\bar{x}=\frac{\sum xf}{n}=\frac{60255}{390}=154.5$$


| $x$   | $f$ | $x-\bar{x}$ | $(x-\bar{x})^2$ | $(x-\bar{x})^2f$               |
| ----- | --- | ----------- | --------------- | ------------------------------ |
| 49.5  | 173 | -105        | 11,025          | 1,907,325                      |
| 149.5 | 129 | -5          | 25              | 3,225                          |
| 249.5 | 39  | 95          | 9025            | 351,975                        |
| 349.5 | 22  | 195         | 38,025          | 836,550                        |
| 449.5 | 8   | 295         | 87,025          | 696,200                        |
| 599.5 | 19  | 445         | 198,025         | 3,762,475                      |
|       |     |             |                 | $\sum(x-\bar{x})^2f=7,557,750$ |

- Sample Standard Deviation:

$$s=\sqrt{ \frac{(x-\bar{x})^2f}{n-1} }=\sqrt{ \frac{7557750}{389} } \approx 139.4$$


- An estimate for the sample mean is $154,500 per year, and an estimate for the sample standard deviation is $139,400 per year.
## Coefficient of Variation
- The Coefficient of Variation (CV) describes the standard deviation of a data set as a percent of the mean
- Population data set:


$$CV=\frac{\sigma}{\mu}\cdot100\%$$

- Sample data set:

$$CV=\frac{s}{\bar{x}}\cdot 100\%$$

>The table shows the population heights (in inches) and weights (in pounds) of the members of a basketball team. Find the coefficient of variation for the heights and the weighs. Then compare the results.


| Heights | Weights |
| ------- | ------- |
| 72      | 180     |
| 74      | 168     |
| 68      | 225     |
| 76      | 201     |
| 74      | 189     |
| 69      | 192     |
| 72      | 197     |
| 79      | 162     |
| 70      | 174     |
| 69      | 171     |
| 77      | 185     |
| 73      | 210     |
- Our sample mean of heights is 72.75 
- Our standard deviation of heights is 3.44
- Our sample mean of weights is 187.83
- Our standard deviation of weights is 18.47

$$CV_{\text{height}}\approx 4.72\%$$
$$CV_{\text{weight}}\approx 9.83\%$$


- The weights (9.83%) are more variable than the heights (4.72%).
---
# 2.5 - Measures of Position
## Quartiles
- **Fractiles** are umbers the divide an ordered data set into equal parts
- **Quartiles** approximately divide an ordered data set into four equal parts.
	- First quartile, $Q_{1}$: About one quarter of the data falls on or below $Q_{1}$
	- Second quartile, $Q_{2}$: About one half of the data fall on or below $Q_{2}$ (median)
	- Third quartile, $Q_{3}$: About three quarts of the data fall on or below $Q_{3}$
### Finding Quartiles
>The amounts of fuel (in gallons per year) that automobile commuters waste due to traffic congestion in the 15 largest U.S. urban areas (where the populations are over 3 million) are listed. Find the first, second, and third quartiles of the data set. What do you observe?

| Gal. per Year | Quartile |
| ------------- | -------- |
| 21            |          |
| 24            |          |
| 25            |          |
| 25            |          |
| ***26***      | $Q_{1}$  |
| 26            |          |
| 30            |          |
| ***31***      | $Q_{2}$  |
| 31            |          |
| 31            |          |
| 34            |          |
| ***35***      | $Q_{3}$  |
| 38            |          |
| 38            |          |
| 39            |          |
## Interquartile Range
- The **Interquartile Range** is a measure variation that gives the range of the middle portion (about half) of the data. 
- The difference between the third and first quartiles.  
- $\text{IQR} = Q_{3} – Q_{1}$
- It can also be used to identify outliers
	1. Find the first (Q1) and third (Q3) quartiles of the data set.  
	2. Find the interquartile range: IQR = Q3 − Q1.  
	3. Multiply IQR by 1.5: 1.5(IQR).  
	4. Subtract 1.5(IQR) from Q1. Any data entry less than Q1 − 1.5(IQR) is an outlier.  
	5. Add 1.5(IQR) to Q3. Any data entry greater than Q3 + 1.5(IQR) is an outlier.
- Lets say we have a Q1 of 47 and Q3 of 58.5, our IQR would be 11.5
- And if we apply what we said above  (47-1.5(IQR)), if there’s a data entry less than 29.75, it would be an outlier
- Q3+1.5(IQR) = 75.75, a data entry greater than 75.75 is an outlier
## The Standard Score
- The Standard ($z$) score represents the number of standard deviations a given value $x$ falls from the mean $\mu$.

$$z=\frac{\text{value-mean}}{\text{standard deviation}}=\frac{x-\mu}{\sigma}$$

>The mean speed of vehicles along a stretch of highway is 56 miles per hour with a standard deviation of 4 miles per hour. You measure the speeds of three cars traveling along this stretch of highway as 62 miles per hour, 47 miles per hour, and 56 miles per hour. Find the z-score that corresponds to each speed. Assume the distribution of the speeds is approximately bell-shaped


$$z=\frac{62-56}{4}=1.5$$
$$z=\frac{47-56}{4}=-2.25$$
$$z=\frac{56-56}{4}=0$$

- 62 miles per hour is 1.5 standard deviations above the mean; 47 miles per hour is 2.25 standard deviations below the mean; and 56 miles per hour is equal to the mean. 47 miles per hour is unusually slow, because its speed corresponds to a $z$-score

>The table shows the mean heights and standard deviations for a population of men and a population of women. Compare the z-scores for a 6-foot-tall man and a 6-foot-tall woman. Assume the distributions of the heights are approximately bell-shaped.
- 6ft=72 in

| Men’s Heights                                    | Women’s Heights                                    |
| ------------------------------------------------ | -------------------------------------------------- |
| $\mu=69.9 \text{ in.}$<br>$\sigma=3 \text{ in.}$ | $\mu=64.3 \text{ in.}$<br>$\sigma=2.6 \text{ in.}$ |
- **z-score for 6-foot-tall Men**

$$\frac{72-69.9}{3}=0.7$$

- **z-score for 6-foot-tall Women**

$$\frac{72-64.3}{2.6} \approx 2.962$$


- For men, being 6 ft. is a pretty typical height, but for women, being 6 ft. is unusally height (positive $z$)
- *The z-score for the 6-foot-tall man is within 1 standard deviation of the mean (69.9 inches). This is among the typical heights for a man. The z-score for the 6-foot-tall woman is about 3 standard deviations from the mean (64.3 inches). This is an unusual height for a woman.*
---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 1 – Introduction to Statistics]] — [[Chapter 3 - Probability]]


[^1]: Couldn’t figure out how to give the X-axis its own title in the plug-in i’m using to generate graphs, i’ll figure it out eventually

[^2]: definitely not mine
