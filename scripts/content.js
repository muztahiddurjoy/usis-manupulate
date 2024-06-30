let hidePrintSuccess = false;
let manupulateSheetSuccess = false;

const hidePrintButton = () =>{
    if(hidePrintSuccess){
        return
    }
    else{
        if(document.readyState!=="loading"){
            const printButton = document.getElementsByName('print-button')[0]
            if(printButton){
                printButton.parentNode.removeChild(printButton)
                hidePrintSuccess = true
            }
            else{
                setTimeout(()=>{
                    hidePrintButton()
                },500)
                
            }
        }
        else{
            setTimeout(()=>{
                hidePrintButton()
            },500)
        }
    }
}

const changeResultSheet = ()=>{
    setInterval(() => {
        if(document.readyState!=="loading"){
            const resultTable = document.querySelector('.previous-result-table')
            if(resultTable.children[0]){
                for (let i = 0; i < resultTable.children[0].children.length; i++) {
                    const element = resultTable.children[0].children.item(i);
                    console.log(element)
                }
            }
        }
    }, 2000);
}

hidePrintButton()
changeResultSheet()
