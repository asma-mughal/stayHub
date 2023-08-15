import React, {useState} from 'react'

const MainForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center font-poppins">
  <div class="container max-w-screen-lg mx-auto">
    <div>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Property Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        {fields.map(field => (
            <div className={`md:col-span-${field.colSpan}`} key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder || ''}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  id={field.name}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder || ''}
                />
              )}
            </div>
          ))}
          <div className={`md:col-span-5 text-right`}>
            <div className="inline-flex items-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
        </div>
      </div>
    </div>

  
  </div>
</div>
  )
}

export default MainForm
