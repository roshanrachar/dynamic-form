import React, { useState } from 'react';

const InputField = ({ id, type, value, options, label, onInputChange, onRemoveField, onAddOption }) => {
  const [newOption, setNewOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(value);
  const [editedLabel, setEditedLabel] = useState(label);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
    onInputChange(id, option, editedLabel);
  };

  const handleOptionChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleAddOptionClick = () => {
    if (newOption.trim() !== '') {
      onAddOption(id, newOption.trim());
      setNewOption('');
    }
  };

  const handleLabelChange = (e) => {
    const newLabel = e.target.value;
    setEditedLabel(newLabel);
    onInputChange(id, value, newLabel);
  };

  return (
    <div style={{display:'flex',flexDirection:'row',gap:"10px"}}>
      <label>
        Label:
        <input
          type="text"
          value={editedLabel}
          onChange={(e) => handleLabelChange(e)}
          className='style-input'
        />
      </label>
      {type === 'select' ? (
        <div style={{display:"flex",gap:'10px'}}>
          <select onChange={(e) => onInputChange(id, e.target.value, editedLabel)} className='cool-select'>
            <option value="" className='cool-select'>Select an option</option>
            {options.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Option"
            value={newOption}
            onChange={handleOptionChange}
            className='style-input'
          />
          <button onClick={handleAddOptionClick} className='cool-button blue'>Add Option</button>
        </div>
      ) : type === 'radio' ? (
        <div>
          {options.map((opt, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`${id}_${index}`}
                value={opt}
                checked={selectedOption === opt}
                onChange={() => handleRadioChange(opt)}
                className='style-input'
              />
              <label htmlFor={`${id}_${index}`}>{opt}</label>
            </div>
          ))}
          <input
            type="text"
            placeholder="Option"
            value={newOption}
            onChange={handleOptionChange}
            className='style-input'
          />
          <button onClick={handleAddOptionClick} className='cool-button blue'>Add Option</button>
        </div>
        ):type==="textarea" ?
        (<textarea type={type}
            value={value}
            onChange={(e) => onInputChange(id, e.target.value, editedLabel)} className='style-input'/>)
            
        :(
        <div>
          <input
            type={type}
            value={value}
            onChange={(e) => onInputChange(id, e.target.value, editedLabel)}
            className='style-input'
          />
        </div>
      )}

      <button onClick={() => onRemoveField(id)} className='cool-button red'>Remove</button>
    </div>
  );
};

export default InputField;
