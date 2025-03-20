export function getDateCoverted(dateString) {
	const publishDay = new Date(dateString)

	const opt = {
		day: "numeric",
		month: "short",
		year: "numeric",
	}

	return publishDay.toLocaleDateString("en-GB", opt)
}
