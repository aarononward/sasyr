//create function to fetch JSON data
async function fetchPromise(url) {
  const [response] = await Promise.all([
    fetch(url),
  ]);
  const data = await response.json();
  return data;
  }

//Create a function to clear the Dempgraphic table
function clearDemoTable(){
    
    //Connect to the table container 
    let panel_body = document.getElementById('player-info');
    
    //Clear the table container
    panel_body.innerHTML = '';

};

//Create a functions to call the other functions if dropdown choice is changed
function clusterOptionChanged(goat){
  //Fill charts
  clusterRenderer(goat);
};

function positionOptionChanged(pig){
  //Fill charts
  positionRenderer(pig);
};
    
function playerOptionChanged(sheep){
  // console.warn("playerOptionChanged to ", sheep)
  //Clear the demo table
  clearDemoTable();

  //Fill charts
  playerRenderer(sheep);
    
  //Fill the demographics table
  demobuilder(sheep);
}

//create function to build position radar chart
function positionRadarBuilder(values,measures){
  
  //Match the chosen position to the position_name
  // let  x = position_list.filter(cat => cat.index == cow)[0];

  //Create the radar chart
  let radar = [{

    type: 'scatterpolar',

    //measure values
    r:values, 

    theta: measures,

    fill:'toself'
  }];

  //Create layout parameters
  let layout = {

    polar: {
      radialaxis:{
          visible: true,
          range: [0,1]
      }
    },
    showlegend: false   
  }

//Add the plot to the page
Plotly.newPlot("pos-radar",radar,layout);  
}
//create function to build player radar chart
function playerRadarBuilder(values,measures){
  
  //Match the chosen player to the player_id
  // let  x = position_list.filter(cat => cat.index == cow)[0];

  //Create the radar chart
  let radar = [{

    type: 'scatterpolar',

    //measure values
    r:values, 

    theta: measures,

    fill:'toself'
  }];

  //Create layout parameters
  let layout = {

    polar: {
      radialaxis:{
          visible: true,
          range: [0,1]
      }
    },
    showlegend: false   
  }

  //Add the plot to the page
  Plotly.newPlot("pla-radar",radar,layout);  
}

//create function to build cluster radar chart
function clusterRadarBuilder(values, measures) {
  
  //Match the chosen cluster to the cluster name
  // let  x = position_list.filter(cat => cat.index == cow)[0];

  //Create the radar chart
  let radar = [{

    type: 'scatterpolar',

    //measure values
    r:values, 

    theta: measures,

    fill:'toself'
  }];

  //Create layout parameters
  let layout = {

    polar: {
      radialaxis:{
          visible: true,
          range: [0,1]
      }
    },
    showlegend: false   
  }

//Add the plot to the page
Plotly.newPlot("clus-radar",radar,layout);  
}

function clusterRenderer(selectedValue) {
  //Fill cluster radar chart 

  //grab cluster_stats endpoint
  let cluster_url = "http://127.0.0.1:5000/cluster_stats"
  
  //create empty variable for cluster json data
  let cluster_data

  //create empty variable to store cluster values
  let cluster_values = []

  //create empty variable to store cluster measures
  let cluster_measures
  
  let cluster_data_keys
  //run fetchPromise() function to grab data and store it in cluster_data variable
  fetchPromise(cluster_url).then((cluster_json) => {
    cluster_data = cluster_json;
    cluster_data_keys = Object.keys(cluster_data);
    // console.warn("keys of cluster_data > ", cluster_data_keys);
    // console.warn("selectedValue > ", selectedValue);
    const isSelectedValue = (element) => element === selectedValue + "";

    let selectedValueIndex = cluster_data_keys.findIndex(isSelectedValue)
    // Loop through the outer dictionary
    for (const clusters in cluster_data) {
      
      //access inner dictionary
      if (cluster_data.hasOwnProperty(clusters)) {
        const innerDictionary =cluster_data[clusters];

        //add measure categories to cluster_measures variable
        cluster_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        //add values to cluster values array
        cluster_values.push(Object.values(innerDictionary))
      }   
    }
    
    // console.warn("cluster_values 1>", cluster_values)
    // console.warn("cluster_values[selectedValue] 2>", cluster_values[selectedValue])
    // console.warn("cluster_measures>", cluster_measures)
    // console.warn("selectedValueIndex>", selectedValueIndex)

    //build the cluster radar chart
    clusterRadarBuilder(cluster_values[selectedValueIndex], cluster_measures)        
  })
}

function positionRenderer(selectedValue) {
  //grab position_stats endpoint
  let position_url = "http://127.0.0.1:5000/position_stats"
  
  //create empty variable for position json data
  let position_data

  //create empty variable to store position values
  let position_values = []

  //create empty variable to store position measures
  let position_measures
  
  let position_data_keys
  
  //run fetchPromise() function to grab data and store it in position_data variable
  fetchPromise(position_url).then((position_json) => {
    position_data = position_json
    position_data_keys = Object.keys(position_data);
    // console.warn("keys of position_data > ", position_data_keys);
    // console.warn("selectedValue > ", selectedValue);
    const isSelectedValue = (element) => element === selectedValue + "";

    let selectedValueIndex = position_data_keys.findIndex(isSelectedValue)

    // Loop through the outer dictionary
    for (const positions in position_data) {

      //access inner dictionary
      if (position_data.hasOwnProperty(positions)) {
        const innerDictionary =position_json[positions];

        //collect column names
        position_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        //add postion values to position_values array
        position_values.push(Object.values(innerDictionary))
      }   
    }
    
    // console.warn("position_values 1>", position_values)
    // console.warn("position_values[selectedValue] 2>", position_values[selectedValue])
    // console.warn("position_measures>", position_measures)
    // console.warn("selectedValueIndex>", selectedValueIndex)
    //fill position radar chart
    positionRadarBuilder(position_values[selectedValueIndex],position_measures)        
  })
}

function playerRenderer(selectedValue) {
  //grab player_stats endpoint
  let player_url = "http://127.0.0.1:5000/player_stats"
  
  //create empty variable for player json data
  let player_data

  //create empty variable to store player values
  let player_values = []

  //create empty variable to store player measures
  let player_measures
  
  let player_data_keys
  //run fetchPromise() function to grab data and store it in player_data variable
  fetchPromise(player_url).then((player_json) => {
    player_data = player_json
    player_data_keys = Object.keys(player_data);
    // console.warn("keys of player_data > ", player_data_keys);
    // console.warn("selectedValue > ", selectedValue);
    const isSelectedValue = (element) => element === selectedValue + "";

    let selectedValueIndex = player_data_keys.findIndex(isSelectedValue)
    // Loop through the outer dictionary
    for (const player in player_data) {
    
      //access inner dictionary
      if (player_data.hasOwnProperty(player)) {
        const innerDictionary =player_data[player];
        
        //store measured values in player_measures array
        player_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        //store values in player_values array
        player_values.push(Object.values(innerDictionary))
      }   
    }

    // console.warn("player_values 1>", player_values)
    // console.warn("player_values[selectedValue] 2>", player_values[selectedValue])
    // console.warn("player_measures>", player_measures)
    // console.warn("selectedValueIndex>", selectedValueIndex)
  
    //call playerRadarBuilder function 
    playerRadarBuilder(player_values[selectedValueIndex],player_measures)        
  }) 
}

// Create a function to fill the Demographic table
function demobuilder(selectedValue){    
   //grab player_personal_data endpoint
  let player_personal_data_url = "http://127.0.0.1:5000/player_personal_data"
  
  //create empty variable for player_personal_ json data
  let player_personal_data

  //create empty variable to store player_personal_values
  let player_personal_values 

  //create empty variable to store player_personal_measures
  let player_personal_measures=[]
  
  //create a variable to hold the players
  let players =[]
  
  console.warn("demo builder > ", selectedValue)
  //run fetchPromise() function to grab data and store it in player_personal_data variable
  fetchPromise(player_personal_data_url).then((player_personal_json) => {
    player_personal_data = player_personal_json
    // console.warn("demo builder > selectedValue", )
    //create list of players from datasetselectedValue
    let player_id
    console.error("dood player_personal_data > ", player_personal_data)

    //split the key by ,
    let player = selectedValue.split(',')

    //single out the player_id
    player_id = player[0].replace('(','')
    console.warn("demo builder > selectedValue player id", player_id)
    console.error("doodlool player_personal_data > ", player_personal_data[player_id])

    let demoInfo = player_personal_data[player_id];
    //grabbing the keys as the player identifiers
    players.push(Object.keys(player_personal_json))
    // console.warn("players demo builder > players", players)
    //setting the player identifier to the id
    players = players[0]
    // console.warn("players demo builder > players[0]", players)

    // Loop through the outer dictionary
    for (const player in player_personal_json) {


      //access inner dictionary
      if (player_personal_json.hasOwnProperty(player)) {
        const innerDictionary =player_personal_json[player];

        //loop through the innerDictionary
         for (let i=0;i<innerDictionary.length;i++){

          //set the player value to each entry in the innerDictionary
          let player_value = innerDictionary[i]
          
          //check the player value output
          console.log(player_value[0])
          
        }
        //fill the player_personal_measures variable
        player_personal_measures= Array.from(new Set(Object.keys(innerDictionary)))

        //fill the player_personal_values variable
        player_personal_values= Array.from(new Set(Object.values(innerDictionary))) 

        // console.warn("player_personal_measures >", player_personal_measures)
        // console.warn("player_personal_values >", player_personal_values)
      }
    }   
      // //Match the chosen id to the sample id
      // let metasample = metadata.filter(sheep => sheep.id == goat)[0];
      
      //Put a table section into the HTML
      let table = document.createElement('table');
      
      //Create the tbody element to fill with the demo data
      let tbody = table.createTBody();
    
      // //Create a function to populate the table with the demo data
      // for (let key in innerDictionary){ 

      //     //Check for the keys in the metasample dictionary
      //     if (innerDictionary.hasOwnProperty(key)) {
      //       const player_val = innerDictionary[key];
              
              //Grab each value in the dictionary
              let key = player_personal_measures[player_id]
              let value = player_personal_values[player_id]
              
              //Create a row for the table
              let row = tbody.insertRow();

              //Connect to the first table cell
              let cell1 = row.insertCell(0);
              
              //Connect to the second table cell
              let cell2 = row.insertCell(1);
              
              //Connect to the third table cell
              let cell3 = row.insertCell(2)
              
              //Fill the first cell with a key
              cell1.textContent = key;
              
              //Fill the second cell with a semicolon
              cell2.textContent = " : "
              
              //Fill the third cell with the corresponding value
              cell3.textContent = value
              

            //}
          //}
      //Connect to the table container  
      let panel_body = document.getElementById('player-info');
      // https://stackoverflow.com/questions/2554149/how-can-i-change-div-content-with-javascript
      panel_body.innerHTML = `<p> active: ${demoInfo.active} </p><p> affiliation: ${demoInfo.affiliation} </p><p> college: ${demoInfo.college} </p>`+
    `<p> country: ${demoInfo.country} </p><p> date: ${demoInfo.date} </p><p> firstname
    : ${demoInfo.firstname} </p><p> height: ${demoInfo.height} </p><p> jersey: ${demoInfo.jersey} </p>
    <p> lastname: ${demoInfo.lastname} </p>
    <p> pos: ${demoInfo.pos} </p>
    <p> pounds: ${demoInfo.pounds} </p>
    <p> pro: ${demoInfo.pro} </p>
    <p> start: ${demoInfo.start} </p>`;
      //Add the table to the container
      // panel_body.appendChild(table);
  });
} 

// //Fill the page once it's open
function init() {
  
  //grab cluster_stats endpoint
  let cluster_url = "http://127.0.0.1:5000/cluster_stats"
  
  //create empty variable for cluster json data
  let cluster_data

  //create empty variable to store cluster values
  let cluster_values = []

  //create empty variable to store cluster measures
  let cluster_measures
  
  //run fetchPromise() function to grab data and store it in cluster_data variable
  fetchPromise(cluster_url).then((cluster_json) => {
    cluster_data = cluster_json
    
    // Loop through the outer dictionary
    for (const clusters in cluster_data) {
      
      //access inner dictionary
      if (cluster_data.hasOwnProperty(clusters)) {
        const innerDictionary =cluster_data[clusters];

        //add measure categories to cluster_measures variable
        cluster_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        //add values to cluster values array
        cluster_values.push(Object.values(innerDictionary))
      }   
    }
    
    //Connect to the dropdown menu
    let clusterDropdownMenu = d3.select("#clusterDataset");
    
    cluster_list = Array.from(new Set(Object.keys(cluster_json)))
  
    //Loop through the position types
    for (let i=0; i<cluster_list.length;i++){ 
      //Add an option to the table
      clusterDropdownMenu.append('option')
                
      //Add the position as an option
      .text(cluster_list[i]).property("value",cluster_list[i]);
    }

    clusterRenderer(cluster_list[0]);

  })

  //Fill position radar chart 

  //grab position_stats endpoint
  let position_url = "http://127.0.0.1:5000/position_stats"
  
  //create empty variable for position json data
  let position_data

  //create empty variable to store position values
  let position_values = []

  //create empty variable to store position measures
  let position_measures
  
  //run fetchPromise() function to grab data and store it in position_data variable
  fetchPromise(position_url).then((position_json) => {
    position_data = position_json
    
    // Loop through the outer dictionary
    for (const positions in position_data) {

      //access inner dictionary
      if (position_data.hasOwnProperty(positions)) {
        const innerDictionary =position_json[positions];

        //collect column names
        position_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        //add postion values to position_values array
        position_values.push(Object.values(innerDictionary))
      }   
    }
    
    //Connect to the dropdown menu
    let positionDropdownMenu = d3.select("#positionDataset");
    
    position_list = Array.from(new Set(Object.keys(position_json)))
  
    //Loop through the position types
    for (let i=0; i<position_list.length;i++){ 
      //Add an option to the table
      positionDropdownMenu.append('option')
                
      //Add the position as an option
      .text(position_list[i]).property("value",position_list[i]);
    }
    
    positionRenderer(position_list[0]);

  })

  
  //Fill player section
  //grab player_stats endpoint
  let player_url = "http://127.0.0.1:5000/player_stats"
  
  //create empty variable for player json data
  let player_data

  //create empty variable to store player values
  let player_values = []

  //create empty variable to store player measures
  let player_measures
  
  let first_selected_player
  //run fetchPromise() function to grab data and store it in player_data variable
  fetchPromise(player_url).then((player_json) => {
    player_data = player_json
    
    // Loop through the outer dictionary
    for (const player in player_data) {
    
      //access inner dictionary
      if (player_data.hasOwnProperty(player)) {
        const innerDictionary =player_data[player];
        
        //store measured values in player_measures array
        player_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        //store values in player_values array
        player_values.push(Object.values(innerDictionary))
      }   
    }
    
    //Connect to the dropdown menu
    let playerDropdownMenu = d3.select("#playerDataset");
    
    //create list of players from dataset
    let player_list = Array.from(new Set(Object.keys(player_json)))
    
    //loop through player_list
    for (let i=0; i<player_list.length; i++){
      
      //split the key by ,
      let player = player_list[i].split(',')

      //single out the player_id
      let player_id = player[0].replace('(','')

      //Add an option to the table
      playerDropdownMenu.append('option')
               
      //Add the player_id as an option
      .text(player).property("value",player);
    }
    playerRenderer(player_list[0])
    first_selected_player = player_list[0]
  }) 
  

  //Fill demo section
  //grab player_personal_data endpoint
  let player_personal_data_url = "http://127.0.0.1:5000/player_personal_data"
  
  //create empty variable for player_personal_ json data
  let player_personal_data

  //create empty variable to store player_personal_values
  let player_personal_values 

  //create empty variable to store player_personal_measures
  let player_personal_measures=[]
  
  //create a variable to hold the players
  let players =[]
  
  
  //run fetchPromise() function to grab data and store it in player_personal_data variable
  fetchPromise(player_personal_data_url).then((player_personal_json) => {
    player_personal_data = player_personal_json
    console.error("player_personal_data > ", player_personal_data)
    //grabbing the keys as the player identifiers
    players.push(Object.keys(player_personal_json))
    
    //setting the player identifier to the id
    players = players[0]

    // Loop through the outer dictionary
    for (const player in player_personal_json) {
      //access inner dictionary
      if (player_personal_json.hasOwnProperty(player)) {
        const innerDictionary =player_personal_json[player];

        //loop through the innerDictionary
         for (let i=0;i<innerDictionary.length;i++){

          //set the player value to each entry in the innerDictionary
          let player_value = innerDictionary[i]
          
          //check the player value output
          console.log("foobar > ", player_value[0])
          
        }
        //fill the player_personal_measures variable
        player_personal_measures= Array.from(new Set(Object.keys(innerDictionary)))

        //fill the player_personal_values variable
        player_personal_values= Array.from(new Set(Object.values(innerDictionary))) 
      }
    }
    //Fill the Demographic table
    demobuilder(first_selected_player);     
});
}
init()

// //Create the table creator function
//   function barbuilder(cow){ 
//     //Save the samples section of the json data   
//     let sample_clusters = data.sample_clusters;
    
//     //Match the chosen cluster to the cluster name
//     let sample_cluster = sample_clusters.filter(cat => cat.id == cow)[0];
    
    
//     //Save the sample_values list of each sample to a variable
//     // let cluster_values = sample.sample_values;
    
//     //Same the otu_ids list of each sample to a variable
//     // let otu_ids = sample.otu_ids

//     //Save the otu_labels list of sample to a variable
//     // let otu_labels = sample.otu_labels;
  
//     //Create the bar chart
// //     let bar = [{

//         //Use otu_ids as the x values for the bar chart.
//         x: sample_values.slice(0,10).reverse(),   
        
//         //Use sample_values as the y values for the bar chart.
//         y: otu_ids.slice(0,10).map(otu_ids => `OTU ${otu_ids}`).reverse(),
        
//         //Use otu_labels as the hovertext for the chart.
//         text : otu_labels,  
        
//         //set the type of chart to bar chart
//         orientation : 'h',

//         type : 'bar'
        

//         }]
    
    
//     //Add the plot to the page
//     Plotly.newPlot("bar",bar);  
//     });
 

//   // Loop through the outer dictionary
//   for (const column in y) {
//     if (y.hasOwnProperty(column )) {
//       const innerDictionary =y[column];
//       let column_names = [column];

//       // Loop through the inner dictionary
//       for (const position in innerDictionary) {
//         if (innerDictionary.hasOwnProperty(position)) {
//           const value = innerDictionary[position];
//           console.log(`Inner Key: ${position}}, Value: ${value}`);
//         }
//       }

