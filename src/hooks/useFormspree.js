import { useState } from 'react';

export function useFormspree(formId) {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errors: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });
    
    try {
      const form = e.target;
      const data = new FormData(form);
      
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: null });
        form.reset();
      } else {
        const errorData = await response.json();
        setState({ submitting: false, succeeded: false, errors: errorData.errors });
      }
    } catch (error) {
      setState({ submitting: false, succeeded: false, errors: [error.message] });
    }
  };

  return [state, handleSubmit];
}