export function printFormData(formData) {
    for (var pair of formData.entries()) {
        console.log('key: ' + pair[0] + ' value: ' + pair[1]);
    }
}