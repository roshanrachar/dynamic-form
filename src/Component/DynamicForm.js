import React, { useState } from 'react';
import InputField from './InputField';

const DynamicForm = () => {
  const [formData, setFormData] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  const handleAddField = (type) => {
    setFormData([...formData, { id: formData.length + 1, type, value: '', options: [], label: '' }]);
  };

  const handleRemoveField = (id) => {
    setFormData(formData.filter((field) => field.id !== id));
  };

  const handleInputChange = (id, value, label) => {
    setFormData(
      formData.map((field) =>
        field.id === id ? { ...field, value, label: label || '' } : field
      )
    );
  };

  const handleAddOption = (id, option) => {
    setFormData(
      formData.map((field) =>
        field.id === id ? { ...field, options: [...field.options, option] } : field
      )
    );
  };

  const handleDisplayJsonData = () => {
    const jsonDataFormatted = formData.map(({ label, value }) => ({ label: label || '', value }));
    setJsonData(jsonDataFormatted);
  };

  return (
    <div >
      <div className="btn-background" style={{display:'flex',gap:'10px'}}>
      <button onClick={() => handleAddField('text')} className='cool-button blue'>Add Text Field</button>
      <button onClick={() => handleAddField('textarea') } className='cool-button blue'>Add Textarea</button>
      <button onClick={() => handleAddField('select')} className='cool-button blue'>Add Select</button>
      <button onClick={() => handleAddField('radio')} className='cool-button blue'>Add Radio</button>
      </div>
      <form onSubmit={(e) => e.preventDefault()} style={{display:'flex',gap:'5px',flexDirection:'column'}}>
        {formData.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            type={field.type}
            value={field.value}
            options={field.options}
            label={field.label}
            onInputChange={handleInputChange}
            onRemoveField={handleRemoveField}
            onAddOption={handleAddOption}
          />
        ))}
      </form>

      <div style={{display:'flex',justifyContent:"center",marginTop:"30px"}}>
        <button onClick={handleDisplayJsonData} className='cool-button purple' style={{height:'60px'}}>Display JSON Data</button>
      </div>

      {jsonData.length > 0 && (
        <div>
          <h3>JSON Data:</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
