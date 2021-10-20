/*
--------------------------------------------------------------------------------------------------------------
THIS CODEBUNK IS READ-ONLY. FOLLOW THESE STEPS TO COMPLETE THE EXERCISE:

1. To the right of this codebunk page there is a side menu. Hover over the menu and click on "Fork" to fork this codebunk. You will have a new URL to work with and share with us when done.
2. Click "Run" to execute the code. Make changes as needed and continue testing your code.
3. You may share your solution by email (link to code bunk solution or copy and paste of code).

--------------------------------------------------------------------------------------------------------------

The code below prints the latest deployment environment from a mixed type data array.

1. Also print the timestamp along with the environment
2. Also print the environment and timestamp of the SECOND LATEST deployment
3. Also print the environment and timestamp of the LATEST BUILD
4. Create a second data set without any builds, then create a third data set without any deployments. Resolve any errors so that your code will work whether or not there are any builds or deployments.

--------------------------------------------------------------------------------------------------------------
LIBS INCLUDED: underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
--------------------------------------------------------------------------------------------------------------

*/

const data = [
  {
    id: "1593ih93d",
    type: "Deployment",
    environment: "Test",
    timestamp: 1609966400000,
    duration: 913800
  },
  {
    id: "9582iy01n",
    type: "Deployment",
    environment: "Production",
    timestamp: 1609549261000,
    duration: 1434180
  },
  {
    id:"aoi932e09ur",
    type: "Build",
    environment: "playying",
    //timeStamp: 1609462861000,
    timestamp: 16094628610000,
    duration: 1321672
  }
  ]

  // Created combined function for Deployment and Build.

  function getLatestDeploymentandBuild(selection) {
      
    if (selection === "Deployment"){
        const deployments = data.filter(x => x.type === "Deployment")
        deployments.sort((a,b) => {
        return b.timestamp - a.timestamp
        })
        return deployments
        }
      
    else if(selection === "Build"){
        const build = data.filter(x => x.type === "Build")
        build.sort((a,b) => {
        return b.timestamp - a.timestamp
        })
        return build
        }
  }

try{
    
    console.log("Latest deployment : Environment: ", getLatestDeploymentandBuild('Deployment')[0].environment , "Timestamp: " , getLatestDeploymentandBuild('Deployment')[0].timestamp )
  
     console.log("Second Latest deployment : Environment: ", getLatestDeploymentandBuild('Deployment')[1].environment , "Timestamp: " , getLatestDeploymentandBuild('Deployment')[1].timestamp )
 
   console.log("Latest Build : Environment: " , getLatestDeploymentandBuild('Build')[0].environment , "Timestamp:" , getLatestDeploymentandBuild('Build')[0].timestamp )

}

catch (error) {
    console.log("Based upon the Data Array either Deployment or Build not found in Data Array. So no output")
    
}
    
    
  
