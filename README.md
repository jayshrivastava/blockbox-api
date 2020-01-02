# Blockbox Movie Recommender Web :crystal_ball:

https://blockbox-web.herokuapp.com/

## API Repository
The machine learning used to power this app is all located in this repo. 

## Frontend Repository
The front end code made in React is all located in the blockbox-web repo which can be found at https://github.com/jayshrivastava/blockbox-web.

## Overview

This was created to demonstrate how retail insights, such as product recommendations, can be generated through simple machine learning algorithms. All ML algorithms are written in pure TypeScript and find recommendations based on anonymous ratings data. The app allows users to rate movies and generate recommendations for themselves.

Recommendations are generated using collaborative filtering. First, users are compared by cosine similarity (comparing the vectors of movie ratings by angle). Then, users are recommended items based on what similar users rated or 'watched'. Each relevant movie that may be of interest to user A is given a score based on how similar user A is to other users and how those users rated said movies. From there, the top scoring movies are recommended to user A.

For more info, see [this guide](https://www.analyticsvidhya.com/blog/2018/06/comprehensive-guide-recommendation-engine-python/ "How to Build a Recommendations Engine"). The models used to build this app follow the same idea, but with a few tweaks.

## Dataset

The initial ratings/movies data is from the [MovieLens Latest Dataset](https://grouplens.org/datasets/movielens/latest/ "MovieLens Latest Dataset") with movies dated from 1990 to 09/2018. The exact seed data can be found in the [blockbox-infra repository](https://github.com/jayshrivastava/blockbox-infra "blockbox-infra repository") which also contains the script to seed the blockbox Mongo DB. 

As users rate movies, their data is also streamed in real time to MongoDB, so the dataset is consistently updated.

Also [here](https://datascience.stackexchange.com/questions/10844/benchmark-datasets-for-collaborative-filtering) are some good collaborative filtering datasets.

## Dependencies

Node v 12.4.0
Yarn v 1.16.0

## Scripts

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn start`

Runs the app in the development mode.<br>
