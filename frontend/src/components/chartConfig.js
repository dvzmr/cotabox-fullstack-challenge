function randomHexColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16)
    return `#${'0'.repeat(6 - color.length)}${color.toUpperCase()}`
}

export function createData(response) {
    return {
        labels: response?.map(p => `${p.firstName} ${p.lastName}`),
        datasets: [
            {
                backgroundColor: response?.map(() => randomHexColor()),
                data: response?.map(p => p.participation)
            }
        ]
    }
}

export const settings = {
    responsive: true,
    maintainAspectRatio: false
}
