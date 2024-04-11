import Swal from 'sweetalert2';
import { SweetAlertResult } from 'sweetalert2';

export async function showSuccessAlert(
  message: string,
): Promise<SweetAlertResult> {
  return await Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonText: 'OK',
  });
}

export async function showErrorAlert(error: any): Promise<SweetAlertResult> {
  let errorMessage = 'An error occurred';

  if(error.response.data.error){
    return await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.error,
      confirmButtonText: 'OK',
    });
  }

  if (error.response && error.response.data) {
    const errorData = error.response.data;
    errorMessage = '';
    for (const field in errorData) {
      if (Object.prototype.hasOwnProperty.call(errorData, field)) {
        const errors = errorData[field];
        const errorMessages = errors.join('\n');
        errorMessage += `${field}: ${errorMessages}\n`;
      }
    }
  }

  return await Swal.fire({
    icon: 'error',
    title: 'Error',
    text: errorMessage,
    confirmButtonText: 'OK',
  });
}
