import React , {useState,useEffect} from 'react'
import './CustomClassTable.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';  
import ViewCustomClassEntity from './ViewCustomClassEntity';
import AddCustomClassEntity from './AddCustomClassEntity';

const CustomClassTable = (props)=>{ 

    const [data, setData] = useState([]);


     const fetchCustomClassDetials = () => {

    //     fetch(`${INVENTORY_API_URL}`)

    //         .then(res => res.json())

    //         .then(json => setData(json));

     }


    useEffect(() => {

        //fetchInventory();
         
    var customClassDetail = [{
        "custom_class_id": 2,
        "custom_class_detail_id": 2,
        "class_name": "com.ivp.cashMaster.EASCustomClassValidation",
        "assembly_path": "EASCustomClassValidation",
        "call_type": "POST",
        "exec_sequence": 1,
        "module_name": "Expense",
        "sub_module_name": "",
        "control_id": "ChangeStatus",
        "validation_type": "No Validation",
        "execution_type": "POST",
        "business_groups": ""
      }];
      setData(customClassDetail);

    }, []);



    const [inEditMode, setInEditMode] = useState({

        status: false,

        rowKey: null

    });

    const [inViewMode,setInViewMode] = useState({
       status:false,
       rowKey:null 
    });


    const [inDeleteMode,setInDeleteMode]= useState({
        status:false,
        rowKey:null 
     });

     const [inAddMode,setInAddMode]= useState({
        status:false,
        rowKey:null 
     });

     



     const onView = (customClassId)=>
     {
        setInViewMode({status:true,rowKey:customClassId});


     }

     const onUpdate = (customClassId)=>
     {

        setInEditMode({status:true,rowKey:customClassId});
     }

     const onRemove = (customClassId)=>
     {


     }
   

    const onNewEntry = ()=>{

        setInAddMode({status:true,rowKey:null});

        
     }

     const addCustomClass= (entryObj)=>
     {

        try
        {
            console.log("--->"+entryObj);
            console.log(entryObj);
            setData(data => [...data,entryObj] );
            setInAddMode({status:false,rowKey:null});
            fetchCustomClassDetials();

        }
        catch(err)
        {

        }

     }

     const closeViewDetails = ()=>
     {
         console.log("closing view");
        setInViewMode({status:false,rowKey:null});
     }

     if(inAddMode.status)
     {
         return <AddCustomClassEntity addCustomClass={addCustomClass}/>
     }

    return ! inViewMode.status ? ( <> 

    <div className="customclasstable-name"><span>Custom Class Configuration </span></div>
     <div className='customclass-new-entry' onClick={() => onNewEntry()} >Add New Entry</div>
    
    <div className="customclassfield-tablecontainer">
        
    <div className="customclassfield-table">
        <div className="customclassfield-tablehead">

            <div className="customclass-table-attribute"><span>Class Name</span></div>
            <div className="customclass-table-field"><span>Assembly Path</span></div>
            <div className="customclass-table-leg"><span>Call Type</span></div>
         
            <div className="customclass-table-view"><span>View Details</span></div>
            <div className="customclass-table-update"><span>Update</span></div>
            <div className="customclass-table-remove" ><span>Remove</span></div>

        </div>
        <div className="customclassfield-tablebody">

           {

                data.map((item) => (

                            <div key={item.custom_class_id}>

                                    <div className="customclass-table-attribute"><span > {item.class_name}</span></div>
                                    <div className="customclass-table-field"><span>{item.assembly_path}</span></div>
                                    <div className="customclass-table-leg"><span>{item.call_type}</span></div>
                            
                                    <div className="customclass-table-view " onClick={() => onView({id: item.custom_class_id})}><span><i className={"fas fa-cog"}></i></span></div>
                                    <div className="customclass-table-update" onClick={() => onUpdate({id: item.custom_class_id})}><span><i className={"fas fa-cog"}></i></span></div>
                                    <div className="customclass-table-remove" onClick={() => onRemove({id: item.custom_class_id})}><span><i className={"fas fa-trash-alt"}></i></span></div>
                                

                            </div>

                        ))

            }

            {/* <div>
                <div className="customclass-table-attribute"><span>Management Company</span></div>
                <div className="customclass-table-field"><span>Legal Entity</span></div>
                <div className="customclass-table-leg"><span>Fund</span></div>
           
                <div className="customclass-table-view"><span><i className={"fas fa-cog"}></i></span></div>
                <div className="customclass-table-update"><span><i className={"fas fa-cog"}></i></span></div>
                <div className="customclass-table-remove" ><span><i className={"fas fa-trash-alt"}></i></span></div>

            </div> */}

           
        </div>
    </div>
     </div>

 </>
 ): (<ViewCustomClassEntity detail = {data[data.length-1] }  onClose = { closeViewDetails  } />)


}

export default CustomClassTable
