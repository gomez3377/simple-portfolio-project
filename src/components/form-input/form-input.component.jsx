

const FormInput = ({label, inputOptions, inputType}) => {
    
  return (
    <>
      <label htmlFor="">{label}</label>
      {inputType === 'text-area'
      ? <textarea/>
       :<input {...inputOptions} />}
    </>
  );
};

export default FormInput;
