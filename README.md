# MonteCarlo

THE MATH

Monte-Carlo Method of estimating Pi:

The Monte-Carlo method is a simulation which tries to estimate the value of pi. In our setting we have a circle inside of the given Math-squares exhibit in the MoMath museum. The circle fits inside the square in sucha way that it's an incircle (all sides of the square are tangents to the circle).

In the Monte-carlo method, we generate randon points inside the grid  and estimate the area of the circle, in the following manner,

Area of Circle = (Number of points inside the circle (red points))/(Total number of points inside the grid) X (Area of the Grid)

Estimate of Pi: 4X (Area of circle)/(Area of Sqaure)

<img src="https://github.com/DaenerysT/MonteCarlo/blob/master/Fig.png"/>

THE SUBMISSION

Our submission introduces Monte Carlo methods by allowing children to dynamically estimate the value of Pi. Children can see a large circle inside of a square, and a basic equation (shown on the grid) with the results being calculated in real time. 

When a child steps on a square, ten points randomly light up inside the square. It is possible to step on a square more than once and generate more points. The square accumulates data points for a set period of time before it resets. As more data points accumulates, theoretically the estimation of Pi improves. 

Concepts include Monte Carlo methods, Pi, randomness, and data quality (if a user steps on the same square over and over, they may generate a lot of data points but an inaccurate estimation).

The ideal audience would be children who have already been introduced to the concept of Pi, because our exercise only touches upon the concept of Pi. However, we believe that the game could be engaging for all ages. 

Below, we give an example of how the game and the concept might be explained to children: 

 Pi is an important concept for many mathematical formulas, and continues to fascinate people today. It is possible to estimate Pi using the area of a circle, the area of a square, and a Monte Carlo Method.

[Equation for Pi here] 

Monte Carlo Methods use *random sampling* to solve problems. We can estimate Pi by dividing the area of a circle by the area of the square, and we will estimate the areas by using random points. The more random points we have, the better our estimation will be. 

Can you run around the square and see if you can generate enough points to estimate Pi? 
What happens if you try to step as “randomly” as you can? 
What happens if you put all the points in the same spot? 

Monte Carlo Methods have been used in biology, medicine, public policy, law, and many other fields!

The US Coast Guard actually used a Monte Carlo method to come up with a search and rescue strategy. Imagine a boat gets in trouble. You knew where it was this morning, but you don’t know where it is now. Tide, wind, and other factors may cause a boat to drift one way or the other. How do you figure out the best places to search?

Using Monte Carlo methods, you can generate thousands of random values for tide and wind and come up with a guess of where the boat is most *likely* to be. 
