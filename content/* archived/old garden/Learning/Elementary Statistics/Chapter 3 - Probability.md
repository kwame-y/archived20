---
tags: 
date: 2025-06-13T01:10:00
title: 
subtitle: 
socialDescription: 
description: 
aliases:
---
# 3.1 - Basic Concepts of Probability & Counting
## Probability Experiments
- An action, or trial, through which specific results (counts, measurements, or responses) are obtained
- **Outcome**  
	- The result of a single trial in a probability experiment
- **Sample Space**  
	- The set of all possible outcomes of a probability experiment  
- **Event**  
	- Consists of one or more outcomes and is a subset of the sample space

>A survey consists of asking people for their blood types (O, A, B, and AB), including whether they are Rh-positive or Rh-negative. Determine the number of outcomes and identify the sample space.
- There are 8 different possible outcomes: $\{\text{O+, O-, A+, A-, B+, B-, AB+, AB-}\}$
## Simple Events
- A **Simple Event** consists of a single outcome
	- e.g. “Tossing heads and rolling a 3”
		- A = {H3}
- An event that consists of more than one outcome is not a simple event
	- e.g. “Tossing a heads and rolling an even number”
		- B = {H2, H4, H6}
## The Fundamental Counting Principle
- **The Fundamental Counting Principle** states that if one event can occur in $m$ ways and a second event can occur in $n$ ways, the number of ways the two events can occur in sequence is $m\cdot n$  
- Can be extended for any number of events occurring in sequence

>You are purchasing a new car. The possible manufacturers, car sizes, and colors are listed in the table. How many different ways can you select one manufacturer, one car size, and one color?

| Manufacturer | Car size | Color |
| ------------ | -------- | ----- |
| Ford         | Compact  | White |
| GM           | Midsize  | Red   |
| Honda        |          | Black |
|              |          | Green |
- There are 24 ways you can select a car. ($3\cdot 2\cdot 4=24$)
>The access code for a car’s security system consists of four digits. Each digit can be any number from 0 through 9
>How many access codes are possible when  
>1. each digit can be used only once and not repeated?  
>2. each digit can be repeated?  
>3. each digit can be repeated but the first digit cannot be 0 or 1?
- There are 5,040 codes possible when each digit can only be used once & not repeated ($10\cdot 9\cdot 8 \cdot 7 = 5040$)
- If each digit can be repeated, then there are 10,000 codes possible ($10^4=10 \cdot 10 \cdot 10 \cdot 10=10000$)
- If each digit can be repeated, but the first digit cannot be 0 or 1, there would be 8,000 codes possible ($8 \cdot 10 \cdot 10 \cdot 10 = 8000$)
## Types of Probability
### Classical (Theoritical) Probability
- Each outcome in a sample space is equally likely

$$P(E)=\frac{\text{Number of outcomes in event }E}{\text{Number of outcomes in sample space}}$$

>You roll a six-sided die. Find the probability of each event:
>	1. Event A: rolling a 3
>	2. Event B: rolling a 7
>	3. Event C: rolling a number less than 5
>Sample space: {1, 2, 3, 4, 5, 6}

- $P(\textit{rolling a }3)=\frac{1}{6}\approx 0.167$
- $P(\textit{rolling a }7)=\frac{0}{6}=0$
- $P(\textit{rolling a number less than }5=\frac{4}{6}\approx 0.667$

### Empirical (Statistical Probability)
- Based on observations obtained from probability experiments
- Relative frequency of an event

$$P(E)=\frac{\text{Frequency of event } E}{\text{Total frequency}}=\frac{f}{n}$$

$$n=\sum f$$

>A company is conducting a survey of randomly selected U.S. adults to determine how they read books during the past year, if at all. So far, 1502 adults have been surveyed. The pie chart shows the results. (Note that digital books include ebooks as well as audio books.) What is the probability that the next adult surveyed read only print books during the last year?

![[Chart Fri Jun 13 2025.png]]
- (409, 560, 108, 425)
- The probability that the next adult surveyed read only print books during last year is: $\frac{560}{1502} \approx 0.373$

>A company is conducting a survey of randomly selected individuals to determine the ages of a social media application. So far, 3000 users of the application have been surveyed. The frequency distribution shows the results. What is the probability that the next user surveyed is 25 to 34 years old?

| Ages  | Frequency, $f$ |
| ----- | -------------- |
| 13-17 | 84             |
| 18-24 | 459            |
| 25-34 | 765            |
| 35-44 | 546            |
| 45-54 | 432            |
| 55-64 | 369            |
| 65+   | 345            |
|       | $\sum f=3000$  |
- The probability that the next user surveyed is 25 to 35 years old is $\frac{765}{3000}=0.255$
### Subjective Probablity
- Intuition, educated guesses, and estimates
	- A doctor may feel a patient has a 90% chance of a full recovery
## Law of Large Numbers
- The **Law of Large Numbers** states that as an experiment is repeated over and over, the empirical probability of an event approaches the theoretical (actual) probability of the event
## Range of Probabilities Rule
- The probability of an event $E$ is between 0 and 1, includsive

$$0\leq P(E)\leq 1$$

## Complementary Events
- **Complement of event $E$**
	- The set of all outcomes in a sample space that are not included in event $E$
	- Denoted $E'$ (E prime)
	- $P(E)+P(E')=1$
	- $P(E)=1-P(E')$
	- $P(E')=1-P(E)$

>Find the probability of randomly selecting a social networking site user who is not 25 to 34 years old.

| Ages  | Frequency, $f$ |
| ----- | -------------- |
| 13-17 | 84             |
| 18-24 | 459            |
| 25-34 | 765            |
| 35-44 | 546            |
| 45-54 | 432            |
| 55-64 | 369            |
| 65+   | 345            |
|       | $\sum f=3000$  |
- The probability of randomly selecting a social networking site user who is not 25 to 34 years old is: $\frac{3000-765}{3000}=\frac{2235}{3000}=0.745$
# 3.2 - Conditional Probability & the Multiplication Rule
- **Conditional Probability** is the probability of an event occurring, given that another event has already occurred
- Denoted $P(B|A)$ (read “probability of $B$, given $A$“)

>Two cards are selected in sequence from a standard deck. Find the probability that the second card is a queen, given that the first card is a king. (Assume that the king is not replaced.)

- Because the first card is a king, which isn’t replaced, the remaining deck has 51 cards, 4 of which are queens

$$P(B|A)=P(2^{nd} \textit{ card is a Queen} |1^{st} \textit{card is a King})=\frac{4}{51} \approx 0.078$$

## Independent & Dependent Events
- **Independent events**  
	- The occurrence of one of the events does not affect the probability of the occurrence of the other event.  
	- P(B | A) = P(B) or P(A | B) = P(A)  
- Events that are not independent are ***dependent***.
## The Multiplication Rule
- The probability that two events $A$ and $B$ will occur in sequence is
	- $P(A\text{ and }B)=P(A)\cdot P(B|A)$
- For independent events the rule can be simplified to
	- $P(A\text{ and }B)=P(A)\cdot P(B)$
	- Can be extended for any number of independent events
>Two cards are selected, without replacing the first card, from a standard deck of 52 playing cards. Find the probability of selecting a king and then selecting a queen.

$$\frac{4}{52}\cdot \frac{4}{51} = \frac{16}{2652} \approx 0.006$$

>For anterior cruciate ligament (ACL) reconstructive surgery, the probability that the surgery is successful is 0.95. Find the probability that three ACL surgeries are successful.

$$(0.95)(0.95)(0.95) \approx 0.857$$

# 3.3 - The Addition Rule
>[!info] Mutually Exclusive Events
>- Two events $A$ and $B$ cannot occur at the same time
>- $A$ and $B$ have no outcomes in common

- **Addition rule for the probability of $A$ or $B$**
	- The probability that events $A$ or $B$ will occur is:
		- $P(A \text{ or }B) = P(A)+P(B)-P(A \text{ and }B)$
	- For mutually exclusive events A and B, the rule can be simplified to:
		- $P(A \text{ or }B) = P(A)+P(B)$
		- Can be extended to any number of mutually exclusive events

>You select a card from a standard deck. Find the probability that the card is a 4 or an ace.

$$P(4 \text{ or }ace) = P(4)+P(ace)$$

$$\frac{4}{52}+\frac{4}{52}=\frac{8}{52} \approx 0.154$$

>You roll a die. Find the probability of rolling a number less than 3 or rolling an odd number.
- These events are ***NOT*** mutually exclusive (1 is an outcome of both events)

$$P(less than 3 \text{ or }odd) = P(less than 3)+P(odd)-P(less than 3 \text{ and }odd)$$

$$\frac{2}{6}+\frac{3}{6}-\frac{1}{6}=\frac{4}{6} \approx 0.667$$

# 3.4 - Additional Topics in Probability & Counting
## Permutations
- An ordered arrangement of objects
- The number of different permutations of $n$ distinct objects is $n!$ (**$n$ factorial** )
	- $n= n\cdot(n-1)\cdot(n-2)\cdot(n-3)\cdot\cdot\cdot 3\cdot 2 \cdot 1$
	- $0! = 1$
	- $6! = 6\cdot 5\cdot 4\cdot 3\cdot 2\cdot 1=720$

>The objective of a 9 x 9 Sudoku number puzzle is to fill the grid so that each row, each column, and each 3 x 3 grid contain the digits 1 to 9. How many different ways can the first row of a blank 9 x 9 Sudoku grid be filled?

$$9! = 9\cdot8\cdot7\cdot6\cdot 5\cdot 4\cdot 3\cdot 2\cdot 1=362880$$

- **Permutation of $n$ objects taken $r$ at a time**
	- The number of different permutations of $n$ distinct objects taken $r$ at a time

$${}_{n}P_{r}=\frac{n!}{(n-r)!}, \text{ where } r\leq n$$

>Find the number of ways of forming four-digit codes in which no digit is repeated.
- We need to select 4 digits from a group of 10
- $n=10,r=4$


$${}_{10}P_{4}=\frac{10!}{(10-4)!}=\frac{10!}{6!}=\frac{10\cdot 9 \cdot 8 \cdot 7 \cdot \cancel{6!}}{\cancel{6!}}=5040$$
- There are 5040 ways

>Each year, 33 race cars start the Indianapolis 500. How many ways can the cars finish first, second, and third?
- We need to select 3 cars from a group of 33
- $n=33, r=3$

$${}_{33}P_{3}=\frac{33!}{(33-3)!}=\frac{33!}{30!}=\frac{33\cdot 32 \cdot 31 \cdot \cancel{30!}}{\cancel{30!}}=32736$$

## Distinguishable Permutations
- The number of distinguishable permutations of $n$ objects where $n_{1}$ are of one type, $n_{2}$ are of another type, and so on

$$\frac{n!}{n! \cdot n_{2}! \cdot n_{3}! \cdot \cdot \cdot n_{k}!}, \text{ where } n_{1}+n_{2}+n_{3}+\dots+n_{k}=n$$
>A building contractor is planning to develop a subdivision. The subdivision is to consist of 6 one-story houses, 4 two-story houses, and 2 split-level houses. In how many distinguishable ways can the houses be arranged?

- There are 12 total houses
- $n=12, n_{1}=6, n_{2}=4, n_{3}=2$

$$\frac{12!}{6!\cdot 4! \cdot 2!}=13860$$

## Combinations
- Combination of $n$ objects taken $r$ at a time
	- A selection of $r$ objects from a group of $n$ objects ***without regard to order***

$$_{n}C_{r}=\frac{n!}{(n-r)!r!}, \text{ where } r\leq n$$


>A state’s department of transportation plans to develop a new section of interstate highway and receives 16 bids for the project. The state plans to hire four of the bidding companies. How many different combinations of four companies can be selected from the 16 bidding companies?

- We need to select 4, from a group of 16
- $n=16, r=4$


$$_{16}C_{4}=\frac{16!}{(16-4)!4!}=\frac{16!}{12!4!}=1820$$


# Summary

| Principle                          | Description                                                                                                                                                       | Formula                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Fundamental Counting Principle** | If one event can occur in $m$ ways and a second event can occur in $n$ ways, then the number of ways the two events can occur in sequence is $m\cdot n$           | $m \cdot n$                                                        |
| **Permutations**                   | The number of permutations of $n$ distinct objects                                                                                                                | $n!$                                                               |
|                                    | The number of permutations of $n$ distinct objects taken $r$ at a time, where $r\leq n$                                                                           | ${}_{n}P_{r}=\frac{n!}{(n-r)!}$                                    |
|                                    | The number of distinguishable permutations of $n$ objects where $n_{1}$ are of one type, $n_{2}$ are of another type, so on:<br>$n_{1}+n_{2}+n_{3}+\dots+n_{k}=n$ | $\frac{n!}{n! \cdot n_{2}! \cdot n_{3}! \cdot \cdot \cdot n_{k}!}$ |
| **Combinations**                   |                                                                                                                                                                   |                                                                    |


>A student advisory board consists of 17 members. Three members serve as the board’s chair, secretary, and webmaster. Each member is equally likely to serve any of the positions. What is the probability of randomly selecting the three members who will be chosen for the board?

$$_{17}P_{3}=\frac{17!}{(17-3)!}=\frac{17!}{14!}=4080\to \frac{1}{4080} \approx 0.0002$$

---
[[* archived/old garden/Learning/Elementary Statistics/index|Elementary Statistics]] — [[Chapter 2 - Descriptive Statistics]] — [[Chapter 4 - Discrete Probability Distributions]]