//Fetch JSON data

//create init function to load all json files
//make sure to console log values 

let url = 'http://127.0.0.1:5000/api/v1.0/pca_clusters'


async function fetchPromise() {
    const [response] = await Promise.all([
      fetch(url),
    ]);
    const data = await response.json();
    return data;
}
let pca_clusters = fetchPromise().then((pca_clusters) => console.log(pca_clusters.PC1))

// console.log(pca_clusters)
// for (let i = 0; i<pca_clusters.length; i++) {
//     let column = pca_clusters.key
//     console.log(i)
// }

// 

//  let pca_clusters = d3.json(url).then((response) => response)
// //  .then((user) => {
// //    return user.pca_clusters;
// //  });
//.then(function(response) {return response}).then()
// console.log(pca_clusters) 
// console.log(typeof pca_clusters)
// console.log(pca_clusters.data)
// .then(console.log(response))
//     let  = getDataByFuelType(data);
// })
// console.log(pca_table)

// let cluster_table = d3.csv("/Data/Cluster_Stats_Aggregate_Norm.csv");
// let position_table = d3.csv("/Data/Player_Stats_Aggregate_Norm.csv"); 
// let player_table = d3.csv("/Data/Position_Stats_Aggregate_Norm.csv");  


// //Create the table creator function
// function barbuilder(cow){
    
//     //Pull the json file
//     d3.json(url).then(function(data) {
    
//     //Save the samples section of the json data   
//     let samples = data.samples;
    
//     //Match the chosen id to the sample id
//     let sample = samples.filter(cat => cat.id == cow)[0];
    
//     //Save the sample_values list of each sample to a variable
//     let sample_values = sample.sample_values;
    
//     //Same the otu_ids list of each sample to a variable
//     let otu_ids = sample.otu_ids

//     //Save the otu_labels list of sample to a variable
//     let otu_labels = sample.otu_labels;
    
//     //Create the bar chart
//     let bar = [{

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

// function radarbuilder(cow){    
    
//     d3.json(url).then(function(data) {
    
//         //Create the radar chart
//         let radar = [{
        
//             type: 'scatterpolar',
        
//             //measure values
//             r:[], 
        
//             theta: ['points', 'tpp',
//             'offReb', 'defReb', 'assists', 'pFouls', 'steals',
//             'turnovers', 'blocks', 'fgp', 'ftp'],
        
//             fill:'toself'
//         }];

//         //Create layout parameters
//         let layout = {
        
//             polar: {
//                 radialaxis:{
//                     visible: true,
//                     range: [0,1]
//                 }
//             },
//             showlegend: false   
//         }
    
//         //Add the plot to the page
//         Plotly.newPlot("radar",radar,layout);
    
//     });
// };

// //Create a function to clear the Dempgraphic table
// function clearDemoTable(){
    
//     //Connect to the table container 
//     let panel_body = document.getElementById('player-info');
    
//     //Clear the table container
//     panel_body.innerHTML = '';

// };

// //Create a function to fill the Demographic table
// function demobuilder(goat){    
    
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

// //Create a function to call the other functions if the chosen id is changed
// function optionChanged(pig){
    
//     //Clear the demo table
//     clearDemoTable(pig);

//     //Fill charts
//     chartbuilder(pig);
    
//     //Fill the demographics table
//     demobuilder(pig);
    
// };

// //Fill the page once it's open
// function init(){
    
//     //Connect to the dropdown menu
//     let dropdownMenu = d3.select("#selDataset");

//     //Grab the json data   
//     d3.json(url).then(function(data) {

//             //Grabs the is from the Names array
//             let names = data.names;
            
//             //Loop through the names array
//             for (let i=0; i<names.length;i++){
                
//                 //Add an option to the table
//                 dropdownMenu.append('option')
                
//                 //Add the id as an option
//                 .text(names[i]).property("value",names[i]);
//             }
            
//             //Build the charts
//             chartbuilder(names[0]);
            
//             //Fill the Demographic table
//             demobuilder(names[0]);
//         }      
//     )};

//     };
// init()