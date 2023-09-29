from flask import Flask, render_template, send_file


# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    return(
        f"Available Routes:<br/>"
        f"/api/v1.0/cluster_stats<br/>"
        f"/api/v1.0/pca_clusters<br/>"
        f"/api/v1.0/player_stats<br/>"
        f"/api/v1.0/position_stats<br/>"
        f"/api/v1.0/charts_page"
    )

@app.route("/api/v1.0/pca_clusters")
def pca_clusters():
    return send_file('static/data/player_pca_clusters')


@app.route("/api/v1.0/cluster_stats")
def cluster_stats():
    return send_file('static/data/Cluster_Stats_Aggregate_Norm')


@app.route("/api/v1.0/player_stats")
def player_stats():
    return send_file('Player_Stats_Aggregate_Norm')

@app.route("/api/v1.0/position_stats")
def position_stats():
    return send_file('Position_Stats_Aggregate_Norm')

@app.route("/api/v1.0/charts_page")
def charts_page():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)