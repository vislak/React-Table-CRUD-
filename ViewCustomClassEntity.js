import React , {useState,useEffect} from 'react'

const ViewCustomClassEntity = ({onClose,detail})=>
{
    console.log(detail);
    const [inputField , setInputField] = useState({
       ...detail
    
    })

    return (<>
    
         <div>
             <div onClick={onClose}>X</div>

            <div>
    <div className='custom-Add-header'> Custom Class Details</div>
    <div className='custom-form'>
    <div className='custom-form-field' >

        <label>Class Name</label>
        <input 
        type="text" 
        name="class_name" 
        //onChange={inputsHandler} 
        placeholder=" " 
        value={inputField.class_name} disabled/>

    </div>
      <div className='custom-form-field'>
      <label>Assembly Path</label>
        <input 
        type="text" 
        name="assembly_path" 
        //onChange={inputsHandler} 
        placeholder="" 
        value={inputField.assembly_path} disabled/>

    </div>
      <div className='custom-form-field'>
    <label>Call Type</label>
        <input 
        type="text" 
        name="call_type" 
        //onChange={inputsHandler} 
        placeholder=" " 
        value={inputField.call_type} disabled/>
</div>
      <div className='custom-form-field'>
            <label>Exec Sequence</label>
        <input 
        type="text" 
        name="exec_sequence" 
        //onChange={inputsHandler} 
        placeholder="" 
        value={inputField.exec_sequence} disabled/>

</div>
      <div className='custom-form-field'>
<label>Module Name</label>
       <input 
        type="text" 
        name="module_name" 
        //onChange={inputsHandler} 
        placeholder="" 
        value={inputField.module_name} disabled/>

</div>
      <div className='custom-form-field'>
<label>Sub Module Name</label>
        
        <input 
        type="text" 
        name="sub_module_name" 
        //onChange={inputsHandler} 
        placeholder=" " 
        value={inputField.sub_module_name} disabled/>

      
</div>
      <div className='custom-form-field'>
<label>Control Id</label>
         <input 
        type="text" 
        name="control_id" 
        //onChange={inputsHandler} 
        placeholder=" " 
        value={inputField.control_id} disabled/>

        
</div>
      <div className='custom-form-field'>
      <label>Validation Type</label>
        <input 
        type="text" 
        name="validation_type" 
        //onChange={inputsHandler} 
        placeholder="" 
        value={inputField.validation_type} disabled/>

      </div>

      <div className='custom-form-field'>
      <label>Execution Type</label>
        <input 
        type="text" 
        name="execution_type" 
        //onChange={inputsHandler} 
        placeholder=" " 
        value={inputField.execution_type} disabled/>

       
      </div>

      <div className='custom-form-field'>
      <label>Business Groups</label>
        <input 
        type="text" 
        name="business_groups" 
        //onChange={inputsHandler} 
        placeholder="" 
        value={inputField.business_groups} disabled/>

      </div>  

     

        <div className='custom-btn-group'>
        <div className='' onClick={onClose}>Edit</div>
        <div className='' onClick={onClose}>Close</div>
        </div>
    </div>
    </div>


         </div>
        
    </>);
}

export default ViewCustomClassEntity