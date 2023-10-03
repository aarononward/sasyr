Remember to add an api_keys.py file to your local repository to use the player dataframe code
# Basketball Player and Position Clustering

## Overview
Welcome to the Basketball Player Analysis Web Application! This application provides an interactive platform to explore and analyze basketball player data. You can visualize player clusters, compare player positions, and view individual player profiles.

## Features

- **Cluster Visualization**: Explore player clusters and view radar charts highlighting cluster characteristics.
- **Position Analysis**: Compare player positions and their attributes using radar charts.
- **Player Profiles**: Access individual player profiles with detailed information.
- **K-Means Clustering Analysis**: Gain insights into player clusters obtained using K-Means Clustering. Explore how players are grouped based on their attributes and performance.

### Required Libraries and Dependencies
- import pandas as pd
- import hvplot.pandas
- from sklearn.cluster import KMeans
- from sklearn.decomposition import PCA
- from sklearn.preprocessing import StandardScaler
- import seaborn as sns
- import matplotlib.pyplot as plt
- import requests
- from pprint import pprint
- from config import api_key
- from flask import Flask, render_template, send_file
- from flask_cors import CORS

### Getting Started
To use this application locally, follow the installation and usage instructions below.

Installation:
- Clone this repository to your local machine using
`git clone https://github.com/aarononward/sasyr`
- Navigate to the project directory
`cd sasyr`
- Install the required python packages
### Usage
- Start the flask web application `Python flask_app.py`
- Access the web application in your browser by visiting [http://127.0.0.1:5000](http://127.0.0.1:5000)
- Use the dropdown menus to explore player clusters, positions, and individual player profiles.
  
### API Endpoints
The application provides the following endpoints to access JSON data:

- `/player_personal_data` :Player personal data
- `/cluster_stats` : Player cluster statistics
- `/pca_clusters`: Principal component analysis clustering 
- `/player_stats`: Player statistics
- `/position_stats`: Player positions statistics

### flask_app.py

We've set up important routes in our web app using Flask. '/cluster_stats,' '/player_stats,' and '/position_stats' provide access to basketball data. 'charts_page' renders our main page, 'index.html,' for user interaction. When you run the script, our app comes to life, making it easy to explore basketball player stats with radar charts and tables.

### index.html
The 'index.html' page is the heart of our web app. It offers interactive features like dropdown menus to select different datasets such as cluster statistics, player statistics, and position statistics. When you make your choices, the page dynamically generates radar charts that visually represent the data, providing insights into performance metrics for clusters, positions, or individual players. Additionally, there's a demographic table that displays comprehensive player information.

### app.js 

Our app.js is the backbone of our basketball player analysis web app. It handles tasks like fetching data, creating radar charts, and filling tables. We've kept it organized with functions like fetchPromise, clearDemoTable, clusterRenderer, positionRenderer, and playerRenderer for user-friendly chart selection. It also builds radar charts for clusters, positions, and players and populates demographic tables using 'demobuilder.' When you open the page, the 'init' function loads data, ensuring an interactive experience right away. In a nutshell, this JavaScript code powers our app, making basketball player analysis and visualization easy and engaging.

### 1-nba_players_df.ipynb
In this notebook, we accessed data about NBA players from an online source using an API. We specifically requested information about players from the USA and received it in a format called JSON. Then, we organized this data into a structured table, making sure the data types were correct. To handle columns with nested dictionaries, we've used functions to split and concatenate them. After some cleaning, we've converted date columns and adjusted height measurements. Lastly, we've saved the refined player data as a CSV file for further analysis. This Python script is an integral part of our data collection and preprocessing pipeline, laying the foundation for in-depth NBA player analysis.

### 2-NBA Player & Position Statistics DF.ipynb
 In this file, we first loaded a CSV file containing NBA player IDs. Then, we used an API to fetch detailed statistics for these players during the 2021 season. We combined this data into a structured DataFrame, cleaned it up, and calculated some additional stats like field goal percentage (fgp) and free throw percentage (ftp). After that, we grouped the data by player and saved the aggregated statistics in another CSV file.

 ### 3-K_means_clustering.ipynb

We start loding the dataset in the pandas dataframe and processed the data by removing irrelevant columns, and filtering players based on a minimum playing time criterion.  We performed the correlation analysis to help us understand relationships between statistics, and we retained only low-correlation features. Then we standardizeded data for fairness, followed by dimensionality reduction using Principal Component Analysis (PCA) to identify five principal components. Using the elbow method, we determined the optimal number of clusters for K-Means, leading to the clustering of players based on their PCA-transformed data. The code also includes visualization, such as a scatter plot of players grouped by clusters. Overall, this analysis offers valuable insights into player performance and results in the identification of player clusters, aiding decision-making in basketball-related contexts.

### 4-Final Datasets for Tableau.ipynb
Here, we've handled NBA player statistics data. Initially, We imported player details and PCA cluster information from CSV files. Afterward, we conducted data processing and aggregation to create comprehensive statistics for player clusters, positions, and individual players. These aggregated metrics were then saved as JSON files, making them easily accessible for our web application.

### Conclusion
This code performs a comprehensive analysis of basketball player statistics, including data preprocessing, correlation analysis, dimensionality reduction with PCA, and K-Means clustering. The key outcome is the identification of player clusters based on their statistical attributes, which can be valuable for various basketball-related insights and decision-making. 

### Summary
This project presents a user-friendly web application for exploring basketball player data. Users can visualize player clusters, compare player positions, and access player profiles. The application employs data preprocessing, PCA, and K-Means clustering to offer insights into player performance. It's a valuable tool for basketball enthusiasts and analysts. The project comprises several components, including data collection, web application development, and data analysis. Notably, K-Means clustering identifies player clusters based on statistical attributes. In conclusion, this project provides an interactive platform for gaining deeper insights into basketball player performance and making data-driven decisions
