Remember to add an api_keys.py file to your local repository to use the player dataframe code

# Basketball Player Performance Analysis

## Overview

In this code, we perform a data analysis and clustering of basketball player statistics using Python. The dataset used is named "Player_Stats_Aggregate.csv." The main steps involved in this analysis include data preprocessing, correlation analysis, dimensionality reduction using Principal Component Analysis (PCA), and clustering using K-Means.
### Import required libraries and dependencies
- import pandas as pd
- import hvplot.pandas
- from sklearn.cluster import KMeans
- from sklearn.decomposition import PCA
- from sklearn.preprocessing import StandardScaler
- import seaborn as sns
- import matplotlib.pyplot as plt

### Steps taken:

1. Data Preprocessing: The initial dataset is loaded into a Pandas DataFrame, and some data cleaning steps are performed. We remove irrelevant columns and rows with missing values. Additionally, we filter the dataset to include only players who have played a minimum of 500 minutes.

2. Correlation Analysis: We calculate and visualize the correlation matrix of the remaining features, which helps us understand the relationships between different player statistics. We then dropped highly correlated columns and kept the low correlation ensuring that it's ready for analysis.
`corr_matrix = player_data_df.corr()`
`plt.figure(figsize=(20,15))`
`sns.heatmap(corr_matrix, annot=True)`
 
3. Standardization: By standardizing the data, we made sure that each metric contributed equally to the analysis. This not only improved the fairness of our clustering but also made the results more interpretable. We used this block of code to standarized the table
   `player_scaled = StandardScaler().fit_transform()` 
  
4. Principal Component Analysis (PCA): We apply PCA to reduce the dimensionality of the data. Five principal components are retained, and the variance explained by each component is analyzed. A DataFrame is created to show the weights assigned to each original variable for each principal component

5. Elbow Method: To determine the optimal number of clusters for K-Means, we use the elbow method. We calculate the inertia (within-cluster sum of squares) for different values of k (number of clusters) and plot an elbow curve to identify the "elbow point," which indicates the optimal k value.
   `k_model = KMeans(n_clusters=i, random_state=0)`
   `k_model.fit(player_data_pca)`
   `inertia.append(k_model.inertia_)`
6. K-Means Clustering: Based on the optimal k value, we perform K-Means clustering on the PCA-transformed data. Players are assigned to one of the clusters.
`players_cluster = model.predict(player_data_pca)`
7. Visualization: We create a scatter plot of the first two principal components, color-coding the data points by cluster. This visualization helps us understand how players are grouped based on their statistics.
`df_player_data_pca_predictions.hvplot.scatter(
    x="PC1",
    y="PC2",
    by="PlayerCluster",
    hover_cols = "player_id"
)`

### Conclusion:
- The analysis successfully reduced the dimensionality of the data using PCA, identifying five principal components.
- K-Means clustering was applied to group players based on their PCA-transformed features, resulting in five distinct clusters.
- The scatter plot visually demonstrates the clustering of players based on their statistical profiles.

### Summary:
This code performs a comprehensive analysis of basketball player statistics, including data preprocessing, correlation analysis, dimensionality reduction with PCA, and K-Means clustering. The key outcome is the identification of player clusters based on their statistical attributes, which can be valuable for various basketball-related insights and decision-making. The results are summarized in the clustering visualization and the saved CSV file "player_pca_clusters.csv," which contains player IDs along with their corresponding cluster assignments.
