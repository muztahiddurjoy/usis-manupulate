


function getLetterGrade(cgpa) {
    
    if (cgpa==4.00) return "A";
    if (cgpa<4.00&&cgpa>3.70) return "A-";
    if (cgpa<3.70&&cgpa>3.33) return "B+";
    if (cgpa<3.33&&cgpa>3.00) return "B";
    // if (percentage >= 70) return "B-";
    // if (percentage >= 65) return "C+";
    // if (percentage >= 60) return "C";
    // if (percentage >= 57) return "C-";
    // if (percentage >= 55) return "D+";
    // if (percentage >= 52) return "D";
    // if (percentage >= 50) return "D-";
    // return "F";
  }


const hidePrintButton = () =>{
   
        if(document.readyState!=="loading"){
            const printButton = document.getElementsByName('print-button')[0]
            if(printButton){
                printButton.parentNode.removeChild(printButton)
            }
        }
}

const changeResultSheet = ()=>{
    const cgpa = ["3.89", "3.45", "3.72", "3.68", "3.56", "3.64", "3.42", "3.77", "3.35", "3.81", "3.62", "3.53", "3.74", "3.67", "3.68","3.89", "3.45", "3.72", "3.68", "3.56", "3.64", "3.42", "3.77", "3.35", "3.81", "3.62", "3.53", "3.74", "3.67", "3.68","3.89", "3.45", "3.72", "3.68", "3.56", "3.64", "3.42", "3.77", "3.35", "3.81", "3.62", "3.53", "3.74", "3.67", "3.68","3.89", "3.45", "3.72", "3.68", "3.56", "3.64", "3.42", "3.77", "3.35", "3.81", "3.62", "3.53", "3.74", "3.67", "3.68","3.89", "3.45", "3.72", "3.68", "3.56", "3.64", "3.42", "3.77", "3.35", "3.81", "3.62", "3.53", "3.74", "3.67", "3.68"];
        if(document.readyState!=="loading"){
            const resultTable = document.querySelector('.previous-result-table')
            if(resultTable){
                if(resultTable.children[0]){
                    // console.log('LENGTH',resultTable.children[0].children.length)
                    let elem = resultTable.children[0].children
                    for (let i = 1; i < resultTable.children[0].children.length; i++) {
                        let tdelem = elem.item(i).children
                        for (let j = 0; j < tdelem.length; j++) {
                            if(tdelem.item(j).innerHTML.toLowerCase().trim()==='gpa'){
                               // tdelem.item(6).innerHTML = "4.7"
                                //    tdelem.item(i).innerHTML = "4.7"
                                
                                   tdelem.item(j+1).innerHTML = ((cgpa[i-1]+cgpa[i-2]+cgpa[i-3])/Number(tdelem.item(j-1).textContent))+1
                                
                            }
                            else if(tdelem.item(j).innerHTML.toLowerCase().trim()==='cgpa'){
                                  tdelem.item(j+1).innerHTML = (cgpa[i-1]+cgpa[i-2]+cgpa[i-3])/Number(tdelem.item(j-1).textContent)
                            }
                            else{
                            switch(j){
                                case 5:
                                    tdelem.item(j).innerHTML = cgpa[i]
                                    break;
                                case 4:
                                    tdelem.item(j).innerHTML = getLetterGrade(cgpa[i])
                                    break;
                            }
                            }
                            // else if(tdelem.item(0).innerHTML.toLowerCase().trim().includes('CUMULATIVE'.toLowerCase())){
                            //         console.log('Entered')
                            //         tdelem.item(i).innerHTML = cgpa[i]
                                
                            // }

                            // console.log('TD Elem ',j," ",tdelem.item(j))
                            
                        }
                        
                        // const tr = resultTable.children[0].children.item(i);
                        // console.log(tr.children.item(5).textContent)
                        // if(Number.isNaN(tr.children.item(5).textContent)){
                        //     console.log("not a number")
                        // }
                        // else{
                        //     console.log(tr.children.item(4))
                        // }
                    }
                }
              
            }
        }

}
try{
    setInterval(() => {    
        hidePrintButton()
        changeResultSheet()
    }, 1000);
}
catch(err){
    console.log(err)
}

