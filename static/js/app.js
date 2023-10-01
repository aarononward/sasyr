//Fetch JSON data



//create init function to load all json files
//make sure to console log values 
async function fetchPromise() {
      const [response] = await Promise.all([
        fetch(url),
      ]);
    const data = await response.json();
    return data;
}
  //Create the table creator function
    
    // function barbuilder(cow){ 
      // //Save the samples section of the json data   
      // let sample_cluster = data.sample_clusters;
    
      // //Match the chosen cluster to the cluster name
      // let sample_cluster = sample_clusters.filter(cat => cat.id == cow)[0];
    //Check for the keys in the metasample dictionary
//             for (let key in x){
//               if (i.hasOwnProperty(key)) {
                
//                  //Grab each value in the dictionary
//                  let value =i[key];
            
//       //Create the bar chart
//       let bar = [{

//         //Use otu_ids as the x values for the bar chart.
//         x: i[0],   
        
//         //Use sample_values as the y values for the bar chart.
//         y: otu_ids.slice(0,10).map(otu_ids => `OTU ${otu_ids}`).reverse(),
        
//         //Use otu_labels as the hovertext for the chart.
//         text : otu_labels,  
        
//         //set the type of chart to bar chart
//         orientation : 'h',

//         type : 'bar'
        

//       }]
    
    
//       //Add the plot to the page
//       Plotly.newPlot("bar",bar);  
    
//     };
//   }
//   // }
// })


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



// fetchPromise().then((position_data) => {
//   y = position_data
//   // console.log(y)
  
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


// //Create a function to clear the Dempgraphic table
function clearDemoTable(){
    
    //Connect to the table container 
    let panel_body = document.getElementById('player-info');
    
    //Clear the table container
    panel_body.innerHTML = '';

};

//Create a functions to call the other functions if dropdown choice is changed
function clusterOptionChanged(goat){
  //Fill charts
  clusterRadarBuilder(goat);
};

function positionOptionChanged(pig){
  //Fill charts
  positionRadarBuilder(pig);
};
    
function playerOptionChanged(sheep){
  //Clear the demo table
  clearDemoTable();

  //Fill charts
  playerRadarBuilder(sheep);
    
  //Fill the demographics table
  demobuilder(sheep);
}




  //create function to pull json data
  async function fetchPromise(url) {
    const [response] = await Promise.all([
      fetch(url),
    ]);
  const data = await response.json();
  return data;
  }
  
  // Create function to build radar charts
  // function radarbuilder(cow){
  //   //Match the chosen cluster to the cluster name
    
  // let  x = position.filter(cat => cat.position == cow)[0];   
  //   //Create the radar chart
  //   let radar = [{

  //     type: 'scatterpolar',

  //     //measure values
  //     r:values, 

  //     theta: measures,

  //     fill:'toself'
  //   }];

  //   //Create layout parameters
  //   let layout = {

  //     polar: {
  //       radialaxis:{
  //           visible: true,
  //           range: [0,1]
  //       }
  //     },
  //   showlegend: false   
  //   }

  //   //Add the plot to the page
  //   Plotly.newPlot("pos-radar",radar,layout);
  

  
  //   }




//create empty variable for position json data
let position=[]
//  Loop through the outer dictionary
for (const item in position) {
    if (item.hasOwnProperty(y)) {
      const innerDictionary =item[y];
      // let column_names = [column];

      // Loop through the inner dictionary
      for (const x in innerDictionary) {
        if (innerDictionary.hasOwnProperty(x)) {
          const value = innerDictionary[x];
          console.log(`Inner Key: ${x}}, Value: ${value}`);
        }
      }
    }}

let position_titles= Array.from(Object.values(position))
//console.log(position)



// //Fill the page once it's open
function init(){
  
  //Fill cluster radar chart 

  //grab cluster_stats endpoint
  let cluster_url = "http://127.0.0.1:5000/cluster_stats"
  
  //create empty variable for position json data
  let cluster_data

  //create empty variable to store position values
  let cluster_values = []

  //create empty variable to store position measures
  let cluster_measures
  
  //run fetchPromise() function to grab data and store it in position_data variable
  fetchPromise(cluster_url).then((cluster_json) => {
    cluster_data = cluster_json
    
    // Loop through the outer dictionary
    for (const clusters in cluster_data) {
      //grab the position titles from the position_json
      
      //access inner dictionary
      if (cluster_data.hasOwnProperty(clusters)) {
        const innerDictionary =cluster_data[clusters];

        cluster_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
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
    
    function clusterRadarBuilder(values,measures){
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
  clusterRadarBuilder(cluster_values[0],cluster_measures)        
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
    position.push(position_data)
    // Loop through the outer dictionary
    for (const positions in position_data) {

      //access inner dictionary
      if (position_data.hasOwnProperty(positions)) {
        const innerDictionary =position_json[positions];

        position_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
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
    
    function positionRadarBuilder(values,measures){
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
    Plotly.newPlot("pos-radar",radar,layout);  
  }
  positionRadarBuilder(position_values[0],position_measures)        
  })

  
  //Fill player section
  //grab position_stats endpoint
  let player_url = "http://127.0.0.1:5000/player_stats"
  
  //create empty variable for position json data
  let player_data

  //create empty variable to store position values
  let player_values = []

  //create empty variable to store position measures
  let player_measures
  
  //run fetchPromise() function to grab data and store it in position_data variable
  fetchPromise(player_url).then((player_json) => {
    player_data = player_json
    // Loop through the outer dictionary
    for (const player in player_data) {
      //grab the position titles from the position_json
      
      //access inner dictionary
      if (player_data.hasOwnProperty(player)) {
        const innerDictionary =player_data[player];

        player_measures=Array.from(new Set(Object.keys(innerDictionary)))
        
        player_values.push(Object.values(innerDictionary))
      }   
    }
    
    //Connect to the dropdown menu
    let playerDropdownMenu = d3.select("#playerDataset");
    
    player_list = Array.from(new Set(Object.keys(player_json)))
  
    //Loop through the position types
    for (let i=0; i<player_list.length;i++){ 
      //Add an option to the table
      playerDropdownMenu.append('option')
                
      //Add the position as an option
      .text(player_list[i]).property("value",player_list[i]);
    }
    
    function playerRadarBuilder(values,measures){
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
      Plotly.newPlot("pla-radar",radar,layout);  
    }
    
    playerRadarBuilder(player_values[0],player_measures)        

    //Create a function to fill the Demographic table
    //function demobuilder(goat){    
    
//     //Grab the json data
//     d3.json(url).then(function(data) {
        
//         //Save the Metadata array to a variable
//         let metadata = data.metadata;
        
//         //Match the chosen id to the sample id
//         let metasample = metadata.filter(sheep => sheep.id == goat)[0];
        
//         //Put a table section into the HTML
//         let table = document.createElement('table');
        
//         //Create the tbody element to fill with the demo data
//         let tbody = table.createTBody();
       
//         //Create a function to populate the table with the demo data
//         for (let key in metasample){ 

//             //Check for the keys in the metasample dictionary
//             if (metasample.hasOwnProperty(key)) {
                
//                 //Grab each value in the dictionary
//                 let value = metasample[key];

//                 //Create a row for the table
//                 let row = tbody.insertRow();

//                 //Connect to the first table cell
//                 let cell1 = row.insertCell(0);
                
//                 //Connect to the second table cell
//                 let cell2 = row.insertCell(1);
                
//                 //Connect to the third table cell
//                 let cell3 = row.insertCell(2)
                
//                 //Fill the first cell with a key
//                 cell1.textContent = key;
                
//                 //Fill the second cell with a semicolon
//                 cell2.textContent = " : "
                
//                 //Fill the third cell with the corresponding value
//                 cell3.textContent = value
//             }
//         //Connect to the table container  
//         let panel_body = document.getElementById('player-info');
        
//         //Add the table to the container
//         panel_body.appendChild(table);
//         };
           
        
//     });
        
        
// };
    //Fill the Demographic table
    //demobuilder(names[0]);
  }) 
}
init()