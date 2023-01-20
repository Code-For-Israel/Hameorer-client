export function printFormData(formData) {
    for (let pair of formData.entries()) {
        console.log('key: ' + pair[0] + ' value: ' + pair[1]);
    }
}