const users = []

const addUser = ({ id, userId, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    }
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.username === username
  })
  const index = users.findIndex((user) => user.username === username)

  // Validate username
  if (index > -1) {
    const existingUser = uesrs[index]
    const originRoom = uesrs[index].room
    existingUser.room = room
    return { user: { ...existingUser }, originRoom }
  }

  // Store user
  const user = { id, username, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase()
  return users.filter((user) => user.room === room)
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
}
