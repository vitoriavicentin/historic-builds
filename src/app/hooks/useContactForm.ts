import { useState, useEffect } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface UseContactFormReturn {
  formData: FormData;
  status: 'idle' | 'loading' | 'success' | 'error';
  errorMessage: string;
  isFormValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isFieldFilled: (fieldName: keyof FormData) => boolean;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const isFieldFilled = (fieldName: keyof FormData) => formData[fieldName].trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'An error occurred while sending the message.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Network or client error:', error);
      setErrorMessage('Connection error. Please try again later.');
      setStatus('error');
    }
  };

  return {
    formData,
    status,
    errorMessage,
    isFormValid,
    handleChange,
    handleSubmit,
    isFieldFilled,
  };
};
