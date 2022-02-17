export async function get() {
  const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' }
  const humanDate = new Date().toLocaleDateString(undefined, options)
  return {
    body: { humanDate },
  }
}
