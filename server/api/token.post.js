export const DB = []
export default defineEventHandler(async (event) => {
  const { token } = await readBody(event)
  
  // Save the token to db
  DB.push(token)

  return 'ok'
})
