import { useState } from 'react';

export function useFormspree(endpoint, onSuccess) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', phone: '' });
        if (typeof onSuccess === 'function') onSuccess(formData);
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return { formData, handleChange, handleSubmit, status, errorMsg };
}