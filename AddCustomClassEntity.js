import React, {useState} from 'react';

function AddCustomClassEntity({addCustomClass}) {

const [inputField , setInputField] = useState({
    class_name: '',
    assembly_path: '',
    call_type: '',
    exec_sequence:'',
    module_name:'',
    sub_module_name:'',
    control_id:'',
    validation_type:'',
    execution_type:'',
    business_groups:'',

})

const inputsHandler = (e) =>{
    const { name, value } = e.target;
   setInputField((prevState) => ({
     ...prevState,
     [name]: value,
   }));
}

const submitButton = () =>{
    
    console.log(inputField);
    addCustomClass(inputField);
}

const cancelButton = ()=>{
    addCustomClass(null);
}

return (
    <>
    <div className='custom-Add-header'>Add Custom Class Details</div>
    <div className='custom-form'>
    <div className='custom-form-field' >

        <label>Class Name</label>
        <input 
        type="text" 
        name="class_name" 
        onChange={inputsHandler} 
        placeholder="Class Name" 
        value={inputField.class_name}/>

    </div>
      <div className='custom-form-field'>
      <label>Assembly Path</label>
        <input 
        type="text" 
        name="assembly_path" 
        onChange={inputsHandler} 
        placeholder="Assembly Path" 
        value={inputField.assembly_path}/>

    </div>
      <div className='custom-form-field'>
    <label>Call Type</label>
        <input 
        type="text" 
        name="call_type" 
        onChange={inputsHandler} 
        placeholder="Call Type" 
        value={inputField.call_type}/>
</div>
      <div className='custom-form-field'>
            <label>Exec Sequence</label>
        <input 
        type="text" 
        name="exec_sequence" 
        onChange={inputsHandler} 
        placeholder="Exec Sequence" 
        value={inputField.exec_sequence}/>

</div>
      <div className='custom-form-field'>
<label>Module Name</label>
       <input 
        type="text" 
        name="module_name" 
        onChange={inputsHandler} 
        placeholder="Module Name" 
        value={inputField.module_name}/>

</div>
      <div className='custom-form-field'>
<label>Sub Module Name</label>
        
        <input 
        type="text" 
        name="sub_module_name" 
        onChange={inputsHandler} 
        placeholder="Sub Module Name" 
        value={inputField.sub_module_name}/>

      
</div>
      <div className='custom-form-field'>
<label>Control Id</label>
         <input 
        type="text" 
        name="control_id" 
        onChange={inputsHandler} 
        placeholder="Control Id" 
        value={inputField.control_id}/>

        
</div>
      <div className='custom-form-field'>
      <label>Validation Type</label>
        <input 
        type="text" 
        name="validation_type" 
        onChange={inputsHandler} 
        placeholder="Validation Type" 
        value={inputField.validation_type}/>

      </div>

      <div className='custom-form-field'>
      <label>Execution Type</label>
        <input 
        type="text" 
        name="execution_type" 
        onChange={inputsHandler} 
        placeholder="Execution Type" 
        value={inputField.execution_type}/>

       
      </div>

      <div className='custom-form-field'>
      <label>Business Groups</label>
        <input 
        type="text" 
        name="business_groups" 
        onChange={inputsHandler} 
        placeholder="Business Groups" 
        value={inputField.business_groups}/>

      </div>  

     

        <div className='custom-btn-group'>
        <div className='' onClick={submitButton}>Submit</div>
        <div className='' onClick={cancelButton}>Cancel</div>
        </div>
    </div>
    </>
)
}

export default AddCustomClassEntity;
