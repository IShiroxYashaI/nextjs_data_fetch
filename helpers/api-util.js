export async function getAllEvents() {
    const response = await fetch(
        'https://next-data-fetch-80ffa-default-rtdb.europe-west1.firebasedatabase.app/events.json'
        );
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  