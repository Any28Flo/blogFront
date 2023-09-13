export const formatDate = (date:Date ) => {

	return date.toLocaleDateString('es-ES',{
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	});
}
