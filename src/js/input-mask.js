// Input mask for phone number fields
import IMask from 'imask';

export function initPhoneMasks() {
  // Find all telephone input fields
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  
  // Apply mask to each phone input
  phoneInputs.forEach(input => {
    IMask(input, {
      mask: '+38 (000) 000-00-00',
      lazy: false, // Make the mask appear immediately
      placeholderChar: '_'
    });
  });

  console.log('Phone input masks initialized');
}