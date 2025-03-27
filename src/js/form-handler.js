import IMask from 'imask';

// Функція для ініціалізації обробників форм
export function initFormHandlers() {
  // Знаходимо всі форми на сторінці
  const contactForm = document.querySelector('.contacts-form');
  const consultationForm = document.querySelector('.consultation-form');

  // Ініціалізуємо форму контактів, якщо вона існує
  if (contactForm) {
    initForm(contactForm, 'contact');
  }

  // Ініціалізуємо форму консультації, якщо вона існує
  if (consultationForm) {
    initForm(consultationForm, 'consultation');
  }

  console.log('Form handlers initialized');
}

// Функція для ініціалізації конкретної форми
function initForm(form, formType) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Перевіряємо валідність форми
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Збираємо дані форми
    const formData = new FormData(form);
    const formDataObj = {};
    
    // Додаємо тип форми до даних
    formData.append('formType', formType);
    
    // Конвертуємо FormData в об'єкт
    for (let [key, value] of formData.entries()) {
      formDataObj[key] = value;
    }

    // Додаємо email отримувача
    formDataObj.recipient = 'maksim.guk@gmail.com';
    
    try {
      // Показуємо індикатор завантаження
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Відправляємо...';
      
      // Додаємо параметри для автоматичного підтвердження та інші налаштування
      formDataObj._captcha = false; // Вимикаємо капчу
      formDataObj._autoresponse = "Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом."; // Автовідповідь
      formDataObj._template = "table"; // Використовуємо шаблон таблиці для кращого відображення
      formDataObj._subject = `Нове повідомлення: ${formType}`; // Встановлюємо тему листа
      
      // Відправляємо дані на сервер
      const response = await fetch('https://formsubmit.co/bcf45db3be53c06d24bc765c9cf47365', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObj)
      });
      
      if (response.ok) {
        fetch('https://formsubmit.co/confirm/bcf45db3be53c06d24bc765c9cf47365');
        // Показуємо повідомлення про успіх
        showNotification(form, 'Дякуємо! Ваше повідомлення відправлено.', 'success');
        form.reset();
      } else {
        // Показуємо повідомлення про помилку
        showNotification(form, 'Виникла помилка при відправці. Спробуйте пізніше.', 'error');
      }
      
      // Відновлюємо кнопку
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      
    } catch (error) {
      console.error('Error sending form:', error);
      showNotification(form, 'Виникла помилка при відправці. Спробуйте пізніше.', 'error');
      
      // Відновлюємо кнопку
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

// Функція для показу повідомлення користувачу
function showNotification(form, message, type) {
  // Перевіряємо, чи вже є повідомлення
  let notification = form.querySelector('.form-notification');
  
  if (!notification) {
    // Створюємо новий елемент повідомлення
    notification = document.createElement('div');
    notification.className = 'form-notification';
    form.appendChild(notification);
  }
  
  // Встановлюємо клас і текст повідомлення
  notification.className = `form-notification ${type}`;
  notification.textContent = message;
  
  // Показуємо повідомлення
  notification.style.display = 'block';
  
  // Автоматично приховуємо повідомлення через 5 секунд
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
}