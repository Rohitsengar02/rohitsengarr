import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Add validation
    if (!data.name || !data.email || !data.message) {
      throw new Error('All fields are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }

    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error; // Re-throw to handle in the component
  }
}