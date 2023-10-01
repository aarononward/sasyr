from flask import Flask, render_template, send_file
from flask_cors import CORS


# Flask Setup
#################################################
app = Flask(__name__)
## https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
CORS(app)

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    return(
        f"JSON file Dowload Routes:<br/>"
        f"/player_personal_data<br/>"
        f"/cluster_stats<br/>"
        f"/pca_clusters<br/>"
        f"/player_stats<br/>"
        f"/position_stats<br/>"
        f"<br/>"
        f"Data Display Route:<br/>"
        f"/charts_page"
    )
@app.route("/player_personal_data")
def player_personal_data():
    return send_file('static/data/player_personal_data_t.json')

@app.route("/pca_clusters")
def pca_clusters():
    return send_file('static/data/player_pca_clusters')


@app.route("/cluster_stats")
def cluster_stats():
    return send_file('static/data/Cluster_Stats_Aggregate_Norm')


@app.route("/player_stats")
def player_stats():
    return send_file('static/data/Player_Stats_Aggregate_Norm')

@app.route("/position_stats")
def position_stats():
    return send_file('static/data/Position_Stats_Aggregate_Norm')

@app.route("/charts_page")
def charts_page():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)